# ETU AERO — Konsept 03: Enerjik Diyagonal

Teknofest **Savaşan İHA** takımı ETU AERO için tanıtım + sponsor web sitesi.
Bu klasör, 5 konsept arasından **03 — Enerjik Diyagonal** yönünün tam sayfa uygulamasıdır.

## Önizleme

| Hero | Hakkımızda |
|---|---|
| ![Hero](screenshots/01-view.png) |


## Konsept

- **Hava:** Genç, dinamik, hızlı; logodaki hız çizgilerinden ilham alan diyagonal formlar.
- **Renk:** Lacivert zemin (#14224f), güçlü kırmızı (#d2232a) blok ve şeritler.
- **Tipografi:** Saira Condensed (iri, uppercase başlık) + Manrope (gövde).
- **Animasyon:** Orta-Yüksek — diyagonal hız çizgileri, hover kayması.

## Bölümler

Tek sayfa, sticky nav ve smooth-scroll anchor'larla:
`Hero` (+ kırmızı istatistik şeridi) · `Hakkımızda` · `Takım` (8 kart) · `Sponsorlar` (logo gridi + Gümüş/Altın/Platin paketleri) · `İletişim` (form) · Footer.

## İçerik / placeholder

Gerçek veriyle değiştirilecek alanlar `index.dc.html` içindeki `renderVals()` bloğunda:
- `members[]` — üye ad + rol (şu an "Ad Soyad" placeholder).
- `sponsors[]` — 10 boş sponsor slotu.
- İletişim: `info@etuaero.com`, `@etuaero` — gerçek bilgilerle güncelleyin.
- Görseller: `[ FOTO ]` placeholder kutuları.

## Çalıştırma

`index.dc.html` bu tasarım ortamının Design Component formatıdır (inline-style). Üretime taşırken kök dizindeki **`handoff.md`** dosyasındaki teknik notları izleyin (stack, responsive breakpoint'ler, form backend, SEO).

---
© 2026 ETU AERO · Eskişehir Teknik Üniversitesi · Savaşan İHA
