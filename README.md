# Alacakaranlık — Konsept 01: Koyu Komuta Merkezi

Teknofest **Savaşan İHA** takımı Alacakaranlık ve İHA'sı **Zifir** için tanıtım + sponsor web sitesi.
Bu klasör, 5 konsept arasından **01 — Koyu Komuta Merkezi** yönünün tam sayfa uygulamasıdır.

## Önizleme

| Hero | Hakkımızda |
|---|---|
| ![Hero](screenshots/01-hero.png) |

## Konsept

- **Hava:** Taktik HUD / komuta merkezi estetiği; yüksek teknoloji, fütüristik.
- **Renk:** Koyu lacivert zemin (#070b16), kırmızı vurgu (#d2232a), cyan teknoloji aksanı (#38e0ff).
- **Tipografi:** Chakra Petch (başlık) + IBM Plex Mono (telemetri/etiket) + Manrope (gövde).
- **Animasyon:** Yüksek — HUD tarama çizgisi, nişangah pulse, hareketli grid, blink. `prefers-reduced-motion` ile kapatılır.

## Bölümler

Tek sayfa, sticky nav ve smooth-scroll anchor'larla:
`Hero` (+ telemetri şeridi) · `Hakkımızda` · `Takım` (8 kart) · `Sponsorlar` (logo gridi + Gümüş/Altın/Platin paketleri) · `İletişim` (form) · Footer.

## İçerik / placeholder

Gerçek veriyle değiştirilecek alanlar `Alacakaranlik.dc.html` içindeki `renderVals()` bloğunda:
- `members[]` — üye ad + rol (şu an "Ad Soyad" placeholder).
- `sponsors[]` — 10 boş sponsor slotu.
- Görseller: `[ İHA / DRONE GÖRSELİ ]`, `[ FOTO ]` placeholder kutuları.
- Logo dosyaları (`assets/etu-*.png`) hâlâ eski "ETU AERO" markasını taşıyor; yeni amblem ve wordmark ile değiştirilmeli.

## Çalıştırma

`Alacakaranlik.dc.html` bu tasarım ortamının Design Component formatıdır (inline-style). `index.html` bu sayfaya yönlendirir. Üretime taşırken kök dizindeki **`handoff.md`** dosyasındaki teknik notları izleyin (stack, responsive breakpoint'ler, form backend, SEO).

---
© 2026 Alacakaranlık · TOBB ETÜ · Savaşan İHA
