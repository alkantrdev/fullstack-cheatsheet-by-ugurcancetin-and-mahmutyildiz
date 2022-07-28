# Blog Sitesi Yapma - Nodejs, Expressjs, MongoDB

## References

[GitHub](https://github.com/ugurcancetin/Blog-Application-With-CKEditor-NodeJS)

## Playlist

[Link](https://www.youtube.com/playlist?list=PLqrGn5CSpZ-djmfUIWax1s5fi-M1E0uzN)

- 01 - 6:26 - 1. Hazır Ön Yüz Seçme
- 02 - 7:39 - 2. Proje Çatısı Oluşturma
- 03 - 7:16 - 3. Proje Çatısına Ön Yüzümüzü Ekleme
- 04 - 10:17 - 4. Proje Route'larını Ekleme
- 05 - 15:33 - 5. Proje için CSS ve JS Ayarları
- 06 - 19:20 - 6. Blogları Render Yapma
- 07 - 13:50 - 7. Header ve Footer Parçalarını Ayırma
- 08 - 9:09 - 8. Oturum Açma Formu Ekleme
- 09 - 10:46 - 9. Kayıt Olma Formu Ekleme
- 10 - 7:43 - 10. Kullanıcı Modeli Ekleme
- 11 - 8:10 - 11. Blog ve Site Menüsü Modelini Ekleme
- 12 - 10:58 - 12. Oturum Açma işlemi için Session Özelliği Ekleme
- 13 - 12:32 - 13. Blog Adminine Özgü İşlemler
- 14 - 7:25 - 14. Blog Adminine Özgü İşlemler Part 2
- 15 - 9:47 - 15. Kayıt Olma İşlemi Ekleme
- 16 - 10:00 - 16. Giriş Yapma İşlemi Ekleme
- 17 - 5:14 - 17. Giriş Yapma İşlemi için Middleware Ekleme
- 18 - 9:57 - 18. CKEditör için Route Oluşturma
- 19 - 11:31 - 19. Blog Ekleme Formu Oluşturma
- 20 - 8:36 - 20. CKEditör ile jQuery Etkileşimi
- 21 - 8:18 - 21. CKEditör'den Gelen Input Yakalama
- 22 - 13:40 - 22. MongoDB'ye Blog Ekleme İşlemi
- 23 - 6:20 - 23. MongoDB'den Blog JSON Döndürme
- 24 - 6:53 - 24. Bütün Blogları Anasayfa Üzerinde Görüntüleme
- 25 - 15:52 - 25. Blog Detay Sayfası Düzenleme
- 26 - 8:55 - 26. Route'lara Middleware Ekleme

## Externals

- https://startbootstrap.com/theme/clean-blog
- https://startbootstrap.com/theme/resume

## Code and Commands

npm install --save ejs@2.5.7  
npm install --save express@4.16.2  
npm install --save mongoose@5.0.6  

npm install --save body-parser@1.18.2     [form datasi almak icin]  
npm install --save passport-local-mongoose@4.5.0  
npm install --save passport@0.4.0  
npm install --save passport-local@1.0.0  
npm install --save express-session@1.15.6  

<script src="https://cdn.ckeditor.com/4.8.0/standard/ckeditor.js"></script>  

// Mongo  

-> mongo  
show dbs;  
use BlogApp;  
show collections;  
db.users.find();  


