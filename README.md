# ETU AERO — Konsept 05: Modern Cam (Glass)

Teknofest **Savaşan İHA** takımı ETU AERO için tanıtım + sponsor web sitesi.
Bu klasör, 5 konsept arasından **05 — Modern Cam (Glass)** yönünün tam sayfa uygulamasıdır.

## Önizleme

| Hero | Hakkımızda |
|---|---|
| ![Hero](screenshots/01-view.png) | ![Hakkımızda](screenshots/02-view.png) |

| Sponsorlar | İletişim |
|---|---|
| ![Sponsorlar](screenshots/03-view.png) | ![İletişim](screenshots/04-view.png) |

## Konsept

- **Hava:** Modern startup / SaaS hissi; yumuşak gradient ve buzlu cam (glassmorphism) kartlar. Fütüristik + minimal.
- **Renk:** Lacivert gradient zemin (#0c1430 → #2a4796), kırmızı/turuncu vurgu gradyanı, yarı saydam beyaz cam yüzeyler.
- **Tipografi:** Sora (başlık) + Manrope (gövde).
- **Animasyon:** Orta — süzülen gradient blob'lar, cam kart hover.

## Bölümler

Tek sayfa, sticky nav ve smooth-scroll anchor'larla:
`Hero` (ortalanmış + geniş görsel) · İstatistik cam kartları · `Hakkımızda` · `Takım` (8 kart) · `Sponsorlar` (logo gridi + Gümüş/Altın/Platin paketleri) · `İletişim` (cam panel + form) · Footer.

## İçerik / placeholder

Gerçek veriyle değiştirilecek alanlar `index.dc.html` içindeki `renderVals()` bloğunda:
- `members[]` — üye ad + rol (şu an "Ad Soyad" placeholder).
- `sponsors[]` — 10 boş sponsor slotu.
- İletişim: `info@etuaero.com`, `@etuaero` — gerçek bilgilerle güncelleyin.
- Görseller: `[ İHA / TAKIM FOTOĞRAFI ]`, `[ FOTO ]` placeholder kutuları.

## Çalıştırma

`index.dc.html` bu tasarım ortamının Design Component formatıdır (inline-style). Üretime taşırken kök dizindeki **`handoff.md`** dosyasındaki teknik notları izleyin (stack, responsive breakpoint'ler, form backend, SEO). Not: `backdrop-filter` (cam efekti) için modern tarayıcı gerekir.

---
© 2026 ETU AERO · Eskişehir Teknik Üniversitesi · Savaşan İHA
