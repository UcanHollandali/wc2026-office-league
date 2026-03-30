# 2026 Dunya Kupasi Tahmin Ligi

Tek sayfa, mobil uyumlu, Supabase destekli tahmin ligi. Katilimcilar uyeliksiz tahmin girer, organizer resmi mac skorlarini admin panelinden kaydeder, leaderboard herkeste ortak guncellenir.

## Aktif Surumler

### 1. Turkce Ofis Ligi

- Public:
  `https://ucanhollandali.github.io/wc2026-office-league/`
- Admin:
  `https://ucanhollandali.github.io/wc2026-office-league/?admin=1`
- Official results slug:
  `default`

### 2. Subsea 7 Edition

- Public:
  `https://ucanhollandali.github.io/wc2026-office-league/subsea7.html`
- Admin:
  `https://ucanhollandali.github.io/wc2026-office-league/subsea7.html?admin=1`
- Official results slug:
  `subsea7`
- Prediction entry prefix:
  `subsea7--`

Bu sayede iki surum ayni repoda calisir ama verileri birbirine karismaz.

## Kurulum

1. Supabase dashboard icinde `supabase-setup.sql` dosyasini SQL Editor'de calistirin.
2. Supabase Auth > Users icinde kendi admin e-postanizla bir admin kullanicisi olusturun.
3. Ayni e-postayi `admin_accounts` tablosuna ekleyin:

```sql
insert into public.admin_accounts (email)
values ('you@example.com')
on conflict (email) do nothing;
```
4. Repo'yu GitHub Pages ile `main` branch / root klasorden yayinlayin.

## Supabase Ek Adimlari

Varsayilan Turkce surum `default` slug ile gelir.

Ek edition aciyorsaniz `official_results` tablosuna yeni bir slug ekleyin:

```sql
insert into public.official_results (slug)
values ('subsea7')
on conflict (slug) do nothing;
```

Yeni bir admin eklemek istediginde de ayni mantikla sadece `admin_accounts` tablosuna yeni e-posta eklersin.

## Dosya Yapisi

- `index.html`
  Turkce ana surum
- `subsea7.html`
  Ingilizce Subsea 7 giris sayfasi
- `subsea7-edition.js`
  Subsea 7 edition ayarlari, metinleri ve ayri veri anahtarlari
- `best-third-table.js`
  Resmi en iyi 3. yerlesim tablosu
- `app.js`
  Ortak uygulama mantigi, puanlama, bracket, admin ve leaderboard akisi
- `styles.css`
  Ortak tasarim

## Yeni Bir Sirket Surumu Acmak

Yeni bir company edition eklemek icin genel akiş:

1. Yeni bir `companyname.html` dosyasi olustur.
2. Yeni bir `companyname-edition.js` dosyasi olustur.
3. Su alanlari ayir:
   - `storageKey`
   - `adminSessionKey`
   - `officialResultsSlug`
   - `entryIdPrefix`
   - Ingilizce veya ilgili dilde `copy`
4. Supabase'te yeni slug icin `official_results` kaydi ekle.
5. Yeni linki paylas.

## Notlar

- `Temizle` veya `Reset` butonu sadece o cihazdaki local taslagi sifirlar.
- Ortak leaderboard kayitlari Supabase uzerinden gelir.
- Duplicate kayitlari admin paneli acikken leaderboard'dan silebilirsiniz.
- Admin paneli public sayfada sadece `?admin=1` query parametresi ile acilir.
