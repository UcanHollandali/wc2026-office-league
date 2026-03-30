create extension if not exists pgcrypto;

create table if not exists public.predictions (
  entry_id text primary key,
  full_name text not null check (char_length(trim(full_name)) between 1 and 80),
  locked_at timestamptz not null default timezone('utc', now()),
  group_scores jsonb not null default '{}'::jsonb,
  knockout_winners jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.official_results (
  slug text primary key,
  group_scores jsonb not null default '{}'::jsonb,
  knockout_winners jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.admin_accounts (
  email text primary key check (email = lower(trim(email))),
  created_at timestamptz not null default timezone('utc', now())
);

insert into public.official_results (slug)
values ('default')
on conflict (slug) do nothing;

alter table public.predictions enable row level security;
alter table public.official_results enable row level security;
alter table public.admin_accounts enable row level security;

drop policy if exists "public read predictions" on public.predictions;
drop policy if exists "public insert predictions" on public.predictions;
drop policy if exists "admin delete predictions" on public.predictions;
drop policy if exists "public read official results" on public.official_results;
drop policy if exists "admin manage official results" on public.official_results;
drop policy if exists "admin read own account" on public.admin_accounts;

create policy "admin read own account"
on public.admin_accounts
for select
using (email = lower(coalesce(auth.jwt() ->> 'email', '')));

create policy "public read predictions"
on public.predictions
for select
using (true);

create policy "public insert predictions"
on public.predictions
for insert
with check (true);

create policy "admin delete predictions"
on public.predictions
for delete
using (
  exists (
    select 1
    from public.admin_accounts admin_account
    where admin_account.email = lower(coalesce(auth.jwt() ->> 'email', ''))
  )
);

create policy "public read official results"
on public.official_results
for select
using (true);

create policy "admin manage official results"
on public.official_results
for all
using (
  exists (
    select 1
    from public.admin_accounts admin_account
    where admin_account.email = lower(coalesce(auth.jwt() ->> 'email', ''))
  )
)
with check (
  exists (
    select 1
    from public.admin_accounts admin_account
    where admin_account.email = lower(coalesce(auth.jwt() ->> 'email', ''))
  )
);

-- Example:
-- insert into public.admin_accounts (email)
-- values ('you@example.com')
-- on conflict (email) do nothing;
