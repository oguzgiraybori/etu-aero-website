# ETU Aero — Zifir · Deploy (Yayına Alma) Rehberi

Bu rehber, siteyi hiç teknik bilgin olmasa bile adım adım internete alman için hazırlandı. Site **tamamen statik** dosyalardan oluşur (sunucu, veritabanı, kurulum gerektirmez) — bu yüzden en kolay ve ücretsiz yollarla yayınlanabilir.

---

## 0. Önce: Nelerden Oluşuyor?

Yüklemen gereken dosya ve klasörler:

```
index.html            → açılışta ana sayfaya yönlendirir
ETU Aero.dc.html      → Ana sayfa
Takim.dc.html         → Takım sayfası
Sponsorluk.dc.html    → Sponsorluk sayfası
support.js            → çalışma zamanı motoru (ZORUNLU)
assets/               → logo ve amblem görselleri (ZORUNLU)
```

İsteğe bağlı (yüklemesen de site çalışır):

```
README.md             → proje tanıtımı (GitHub'da görünür)
docs/                 → bu rehber
screenshots/          → README görselleri
```

> ⚠️ **En kritik kural:** `support.js` ve `assets/` klasörünü diğer dosyalarla **aynı yere** koy. Bunlar olmadan sayfalar açılmaz.

> ⚠️ Dosya adlarını **değiştirme** (özellikle `ETU Aero.dc.html` içindeki boşluk dahil). Sayfalar birbirine bu adlarla bağlı.

---

## Yöntem A — GitHub Pages (Önerilen, Ücretsiz)

En kalıcı ve profesyonel yol. Adresin `https://kullanici-adin.github.io/depo-adi/` şeklinde olur.

### Adım 1 — GitHub hesabı
[github.com](https://github.com) üzerinden ücretsiz bir hesap aç (zaten varsa geç).

### Adım 2 — Yeni depo (repository) oluştur
1. Sağ üstteki **+** → **New repository**.
2. **Repository name:** örn. `etu-aero` (küçük harf, boşluksuz).
3. **Public** seçili kalsın (Pages ücretsiz sürümde public gerektirir).
4. **Create repository**.

### Adım 3 — Dosyaları yükle
1. Açılan sayfada **uploading an existing file** bağlantısına tıkla.
2. İndirdiğin proje klasöründeki **tüm dosya ve klasörleri** sürükleyip bırak
   (`index.html`, üç `.dc.html`, `support.js`, `assets/`, istersen `README.md` + `docs/`).
3. Aşağıdaki **Commit changes** butonuna bas.

> 💡 `assets/` klasörünü sürüklerken içindeki dosyalarla birlikte taşındığından emin ol.

### Adım 4 — Pages'i aç
1. Depoda üstten **Settings** sekmesi.
2. Sol menüden **Pages**.
3. **Build and deployment → Source:** `Deploy from a branch`.
4. **Branch:** `main` seç, klasör `/ (root)` kalsın → **Save**.

> "Branch" = deponun ana sürümü. `main`'i seçmek "şu anki dosyaları yayınla" demek.

### Adım 5 — Bekle ve aç
1–3 dakika sonra Pages sayfasının üstünde yeşil bir kutuda siten adresi belirir:
`https://kullanici-adin.github.io/etu-aero/`
Tıkla — `index.html` sayesinde doğrudan ana sayfa açılır. 🎉

### Güncelleme yapmak
Bir dosyayı değiştirdiğinde: depoda o dosyayı aç → kalem (✏️) ikonu → düzenle → **Commit**, ya da yeni sürümü tekrar **Add file → Upload files** ile yükle. Pages 1–2 dakikada kendini yeniler.

---

## Yöntem B — Netlify (Sürükle-Bırak, En Hızlı)

Hesap açmadan bile denenebilen en pratik yol.

1. [app.netlify.com/drop](https://app.netlify.com/drop) adresine git.
2. Proje **klasörünün tamamını** tarayıcıdaki alana sürükle-bırak.
3. Birkaç saniyede sana `https://rastgele-isim.netlify.app` adresi verir. Bitti.
4. (İsteğe bağlı) Ücretsiz hesap açıp site adını ve alan adını özelleştirebilirsin.

> Avantaj: Kurulum yok. Dezavantaj: Sürükle-bırak sürümünde güncelleme için klasörü yeniden bırakman gerekir.

---

## Yöntem C — Vercel

1. [vercel.com](https://vercel.com) hesabı aç, GitHub ile giriş yap.
2. GitHub'a yüklediğin depoyu **Import** et.
3. Ayarlara dokunmadan **Deploy** de (statik site otomatik algılanır).
4. `https://proje-adi.vercel.app` adresin hazır.

---

## Kendi Alan Adını Bağlamak (örn. etuaero.com)

Üç yöntem de özel alan adını destekler:
- **GitHub Pages:** Settings → Pages → **Custom domain** kutusuna alan adını yaz, alan sağlayıcında bir **CNAME** kaydı ekle.
- **Netlify / Vercel:** Panelde **Domains** bölümünden alan adını ekle, yönlendirmeyi gösterdiği gibi ayarla.

Detay için ilgili servisin "custom domain" dokümanını izle.

---

## Yükledikten Sonra Kontrol Listesi

- [ ] Ana sayfa açılıyor ve 3B İHA sahnesi dönüyor mu?
- [ ] Üst menüden Sponsorluk ve Takım sayfalarına geçiş çalışıyor mu?
- [ ] Sponsorluk/Takım sayfasından "Hakkımızda", "Zifir" gibi linkler tek tıkta ana sayfada ilgili bölüme gidiyor mu?
- [ ] Takımda bir kişiye tıklayınca detay paneli açılıyor mu?
- [ ] Telefonda açıp menünün (≡) ve kaydırmanın düzgün olduğunu kontrol et.

---

## Sık Karşılaşılan Sorunlar

**Sayfa bomboş / stiller bozuk açılıyor.**
`support.js` veya `assets/` klasörü eksik ya da yanlış yerde. Tüm dosyaların aynı klasör düzeninde olduğundan emin ol.

**Menüdeki bir sayfa "404 / bulunamadı" veriyor.**
Dosya adları değişmiş olabilir. `ETU Aero.dc.html` (arada boşlukla), `Takim.dc.html`, `Sponsorluk.dc.html` adları **birebir** korunmalı.

**Logolar/görseller çıkmıyor.**
`assets/` klasörü yüklenmemiş ya da içindeki dosyalar eksik yüklenmiş. Klasörü içeriğiyle birlikte tekrar yükle.

**Değişiklik yaptım ama sitede görünmüyor.**
Tarayıcı eski sürümü önbellekten gösteriyor olabilir: `Ctrl+F5` (Mac: `Cmd+Shift+R`) ile sayfayı zorla yenile. GitHub Pages'te yayının güncellenmesi 1–2 dakika sürebilir.

---

## Özet

| Yöntem | Zorluk | Güncelleme | Adres |
|---|---|---|---|
| GitHub Pages | Kolay | Depodan commit | `kullanici.github.io/depo` |
| Netlify Drop | En kolay | Klasörü yeniden bırak | `isim.netlify.app` |
| Vercel | Kolay | GitHub'a push | `proje.vercel.app` |

Yeni bir takım için **GitHub Pages** hem ücretsiz hem kalıcı hem de kod değişikliklerini takip ettiği için önerilir.

---

*ETU Aero · Zifir — Göklerin Yeni Gölgesi*
