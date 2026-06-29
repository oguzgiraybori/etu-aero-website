<div align="center">

<img src="assets/etu-emblem.png" alt="ETU Aero" width="120" />

# ETU AERO · ZİFİR

### Göklerin Yeni Gölgesi

**TEKNOFEST 2027 — Savaşan İHA** kategorisine hazırlanan ETU Aero takımının resmî web sitesi.

</div>

---

## 🚀 Hakkında

ETU Aero, savaşan insansız hava araçları üzerine çalışan, yeni kurulmuş bir üniversite takımıdır. İlk İHA'mız **Zifir**, otonom hava muharebesinde gökyüzünün en sessiz, en hızlı gölgesi olmak için tasarlanıyor.

Bu site; sürükle-döndür özellikli **3B tanıtım sahnesi**, sponsorluk paketleri, takım tanıtımı, yarışma yol haritası ve galeri bölümlerini içeren, tamamen statik (sunucu gerektirmeyen) bir web sitesidir.

---

## 🖼️ Ekran Görüntüleri

### Ana Sayfa — 3B Tanıtım Sahnesi
> Karanlık bir stand üzerinde, örtüyle gizlenmiş Zifir prototipi. Fareyle sürükleyip döndürebilirsiniz.

![Ana sayfa](screenshots/01-anasayfa.png)

### İHA Zifir — Teknik Künye
![Zifir bölümü](screenshots/02-zifir.png)

### Takım
![Takım sayfası](screenshots/03-takim.png)

### Sponsorluk
![Sponsorluk sayfası](screenshots/04-sponsorluk.png)

---

## 🎨 Tasarım Sistemi

Tüm site, takım logosuyla **bütünleşik** bir tasarım sistemi üzerine kuruludur:

- **Renkler:** Logodan örneklenen derin lacivert, elektrik mavisi ve kırmızı; turuncu "ateş" vurguları. Başlık renk geçişleri **mavi → turuncu → kırmızı**.
- **Tipografi:** Logodaki "AERO" yazısının akışkan/dalgalanan karakterinden esinlenen, harf harf dalgalanan başlık imzası (Saira Condensed).
- **Hareket:** Apple tarzı, aşağı kaydırdıkça beliren bölümler ve paralaks; yüksek enerjili, savunma-teknoloji estetiği.

---

## 📂 Dosya Yapısı

```
├── index.html              → ana sayfaya yönlendirir
├── ETU Aero.dc.html        → Ana sayfa (3B sahne + tüm bölümler)
├── Takim.dc.html           → Takım sayfası
├── Sponsorluk.dc.html      → Sponsorluk detay sayfası
├── support.js              → çalışma zamanı (gerekli)
├── assets/                 → logo ve amblem görselleri
└── screenshots/            → README görselleri
```

> **Not:** `.dc.html` dosyaları `support.js` ve `assets/` klasörüne ihtiyaç duyar — hepsini birlikte yükleyin.

---

## 🌐 Yayına Alma (GitHub Pages)

1. Bu depoyu (repository) oluşturun ve tüm dosyaları yükleyin.
2. **Settings → Pages** bölümüne gidin.
3. **Branch** olarak `main` seçip **Save** deyin.
4. Birkaç dakika içinde siteniz `https://<kullanıcı-adı>.github.io/<depo-adı>/` adresinde yayında olur. `index.html` sayesinde doğrudan ana sayfa açılır.

---

## ✏️ Güncellenecek İçerikler

Şu an yer tutucu (placeholder) olan ve sizin doldurmanız gereken alanlar:

- [ ] Takım üyelerinin fotoğrafları, isimleri ve rolleri
- [ ] Sosyal medya bağlantıları (Instagram, LinkedIn, X, YouTube)
- [ ] Mevcut sponsor logoları
- [ ] İletişim e-postası ve adres bilgisi
- [ ] Haber/duyuru ve galeri görselleri

---

<div align="center">

**ZİFİR · GÖKLERİN YENİ GÖLGESİ**

© 2026 ETU AERO

</div>
