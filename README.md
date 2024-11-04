# React Quiz App Interview

<img align="center" src="https://github.com/user-attachments/assets/5f33c453-9813-476a-9b10-f1ea7c70de96" height="500" width="1200" alt="Responsive Photo 1"/>

<hr> 

Vaka Çalışması 2 | Quiz Uygulaması | Sade ve Basit Nextjs.

<p align="center"> 

<br> 

## :link: Demo
  - <a target="_blank" href="https://react-quiz-app-interview-x.netlify.app/"> Netflify </a> sitenin bir demosunu kendiniz görmek ve incelemek için.

<br> 
  
:wrench: Özellikler
  ------------------------------
  
- Bileşen Tasarımları: Component tasarımlarında DaisyUI paketi kullanılmıştır.
- Geliştirme Süreci: Proje, Yarn kullanılarak oluşturulmuştur. Branch'ler ve commit geçmişi ile yönetilmiş, her commit değişiklik açıklamaları içermektedir.
- React-hot-toast Bildirimleri: Yanıt verirken yönlendirici bildirimler sunmak için react-hot-toast paketi entegre edilmiştir.
- Animasyonlar: Soru kartları arasındaki geçişlerde, framer-motion paketi ile animasyonlar eklenmiştir.
- Veri Çekme: API’den veri çekmek için Axios kullanılmıştır.
- Duyarlı (Responsive) Tasarım: Tüm bileşenler responsive tasarım ilkelerine uygun olarak geliştirilmiştir.
- Dizin Yapısı: Proje kök dizininde basit ve anlaşılır bir dosyalama yapısı tercih edilmiştir.
- TCSS Kütüphanesi: Stil yönetimi için TailwindCSS kullanılmıştır.
- SEO ve Meta Bilgileri: Projenin meta bilgileri ve SEO ayarları yapılmıştır.
- Favicon: Projeye favicon eklenmiştir.
- API ile Soru Oluşturma: API’de bulunan title endpoint’i soruları oluşturur. 100 endpoint arasından her seferinde farklı 10 adet title seçilerek, her denemede yeni sorular oluşturulur.
- API ile Cevap Oluşturma: API’de bulunan body endpoint’i cevapları oluşturur. 100 endpoint arasından her seferinde farklı 10 adet body seçilerek, her denemede yeni sorular oluşturulur. Her sorunun (title) doğru cevabı (body), kendi endpoint’inde bulunan veridir.
- Soru Süresi: Her soru ekranda 30 saniye kalır ve her soru için özel çalışan bir zamanlayıcı eklenmiştir.
- İlk 10 Saniye Kısıtlaması: Her sorunun ilk 10 saniyesinde işaretleme yapılamaz.
- Boş Sorular: 30 saniye boyunca işaretlenmeyen soru, boş olarak kabul edilip sonuç tablosunda boş olarak kabul edilir.
- Geçmişe Dönüş Engeli: Geçmiş sorulara dönmek engellenmiştir.
- Soru Sayacı: Sınav esnasında kaçıncı soruda olduğunu gösteren bir soru sayacı eklenmiştir.
- Sonuç Ekranı: Sonuç ekranı mobil ekranlarda daraltılarak uyumlu hale getirilmiştir.
- UI/UX Tasarımı: Kullanıcı arayüzü ve kullanıcı deneyimi tasarıma dikkat edilerek geliştirilmiştir.

  <br> 

 
  ## :book: Nasıl kullanılır
Bu uygulamayı klonlamak ve çalıştırmak için bilgisayarınızda [Git](https://git-scm.com/downloads) ve [ReactJS](https://reactjs.org/docs/getting-started.html) yüklü olmalıdır. Komut satırınızdan:

```
# Bu depoyu klonlayın
$ git clone https://github.com/MehmetBozkir/react-quiz-app-interview.git

# Depoya gidin
$ cd react-quiz-app-interview

# Bağımlılıkları yükleyin
$ yarn install

# Uygulamayı çalıştırın
$ yarn next dev
```
