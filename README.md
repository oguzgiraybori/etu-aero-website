# ETU AERO — Konsept 04: Teknik Blueprint

Teknofest **Savaşan İHA** takımı ETU AERO için tanıtım + sponsor web sitesi.
Bu klasör, 5 konsept arasından **04 — Teknik Blueprint** yönünün tam sayfa uygulamasıdır.

## Önizleme

| Hero | Hakkımızda |
|---|---|
| ![Hero](screenshots/01-view.png) |



## Konsept

- **Hava:** Mühendislik şeması / teknik çizim; hassasiyet ve teknik yetkinlik vurgusu.
- **Renk:** Koyu lacivert blueprint zemini (#0c1b3a), açık teknik mavi aksan (#6fa8ff), kırmızı odak (#d2232a).
- **Tipografi:** Oxanium (başlık) + IBM Plex Mono (kod/etiket) + Manrope (gövde).
- **Animasyon:** Orta — dönen blueprint SVG halkası, dashed ölçü çizgileri; sabit grid arka plan.

## Bölümler

Tek sayfa, sticky nav ve smooth-scroll anchor'larla:
`Hero` (İHA şeması) · Spec şeridi · `Hakkımızda` (SYS-01/02/03) · `Takım` (8 kart) · `Sponsorlar` (logo gridi + TIER-A/B/C paketleri) · `İletişim` (form) · Footer.

## İçerik / placeholder

Gerçek veriyle değiştirilecek alanlar `index.dc.html` içindeki `renderVals()` bloğunda:
- `members[]` — üye ad + rol (şu an "Ad Soyad" placeholder).
- `sponsors[]` — 10 boş sponsor slotu.
- İletişim: `info@etuaero.com`, `@etuaero` — gerçek bilgilerle güncelleyin.
- Görseller: `[ İHA ŞEMASI ]`, `[FOTO]` placeholder kutuları.

## Çalıştırma

`index.dc.html` bu tasarım ortamının Design Component formatıdır (inline-style). Üretime taşırken kök dizindeki **`handoff.md`** dosyasındaki teknik notları izleyin (stack, responsive breakpoint'ler, form backend, SEO).

---
© 2026 ETU AERO · Eskişehir Teknik Üniversitesi · Savaşan İHA
