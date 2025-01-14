<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## BY : Archie Vian Nizam Efendi
## Project Description
Platform LEADS ini di develop untuk memenuhi challenge backend nestJS PT.Digdaya Olah Teknologi (DOT Indonesia). LEADS adalah platform inovatif yang hadir untuk menjembatani penyelenggara event akademik dengan audiens yang terdiri dari pelajar, mahasiswa, dan masyarakat umum di Indonesia. Dengan semakin berkembangnya dunia akademik, akses informasi mengenai berbagai event akademik seperti seminar, dan workshop menjadi sangat penting. LEADS menyediakan solusi untuk mempermudah pencarian informasi yang lengkap, terkini, dan terpercaya terkait event akademik. Platform ini bertujuan untuk meningkatkan partisipasi pelajar dalam kegiatan akademik yang dapat memperkaya pengalaman dan prestasi pelajar.

Backend platform LEADS dibangun dengan menggunakan framework NestJS dengan membangun aplikasi secara terstruktur, skalabel, dan mudah untuk dipelihara. Dalam pengembangannya, LEADS mengimplementasikan 19 fungsi CRUD yang mencakup berbagai fitur penting, antara lain:

1. GET/user/all-user: Menampilkan seluruh data pengguna.
2. GET/eventorganizer/all-eventorganizer: Menampilkan daftar semua penyelenggara event.
3. GET/academicevents/all: Menampilkan semua event akademik yang tersedia.
4. GET/user/profile-id: Menampilkan profil pengguna berdasarkan ID.
5. GET/academicevents/academicevents-id: Menampilkan detail event akademik berdasarkan ID.
6. GET/academicevents/jenjang: Menampilkan event akademik berdasarkan jenjang pendidikan.
7. GET/academicevents/held: Menampilkan event yang sedang berlangsung atau yang telah diselenggarakan.
8. GET/academicevents/applicants-id: Menampilkan peserta event berdasarkan ID event.
9. GET/academicevents/by-jenjang-id: Menampilkan event berdasarkan ID jenjang pendidikan.
10. GET/academicevents/by-organizer: Menampilkan event yang diselenggarakan oleh penyelenggara tertentu.
11. GET/eventorganizer/profile-id: Menampilkan profil penyelenggara event berdasarkan ID.
12. POST/user/sign-in: Fitur untuk proses login pengguna.
13. POST/eventorganizer/sign-up: Fitur untuk registrasi penyelenggara event.
14. POST/academicevents/create: Fitur untuk membuat event akademik baru.
15. POST/user/sign-up: Fitur untuk registrasi pengguna.
16. POST/eventorganizer/sign-in: Fitur untuk login penyelenggara event.
17. POST/academicevents/join: Fitur untuk mengikuti event akademik.
18. PUT/academicevents/update: Fitur untuk memperbarui informasi event akademik.
19. DELETE/academicevents/delete: Fitur untuk menghapus event akademik.

Frontend dari platform LEADS dibangun dengan menggunakan Vue.js dan framework Quasar, yang memungkinkan pembuatan antarmuka pengguna yang responsif, interaktif, user-friendly, dan cross-platform. Dengan kombinasi teknologi ini, pengguna dapat dengan mudah mengakses informasi event, melakukan pencarian, serta berinteraksi langsung dengan penyelenggara event melalui platform.

Untuk pengelolaan data, LEADS menggunakan MySQL Workbench sebagai sistem manajemen basis data (DBMS) untuk menyimpan data yang terkait dengan pengguna, event, dan penyelenggara dikelola dengan efisien, aman, dan dapat diakses dengan performa yang optimal. Selain itu, platform ini berjalan pada mesin virtual berbasis Ubuntu yang memudahkan proses deployment dan pengelolaan aplikasi di lingkungan produksi, sehingga meningkatkan skalabilitas dan ketersediaan sistem.

Dengan hadirnya LEADS, diharapkan pelajar, mahasiswa, dan masyarakat umum dapat lebih mudah mengakses informasi terkait event akademik, mengikuti berbagai kegiatan yang mendukung pengembangan diri, serta meningkatkan peluang mereka untuk meraih prestasi di bidang akademik.

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Entity Relationship Diagram (ERD)
<img src="https://raw.githubusercontent.com/archieVian8/challengebackenddot/master/docs/ERD.png" alt="image that relational diagram of the database">

Terdapat 3 entitas utama dalam sistem LEADS, yaitu user, event organizer, academic 
events. 
1. Entitas user memiliki atribut yaitu idUser sebagai Primary Key (PK), name, email, 
password, phoneNumber, education, gender, about, dan birthdate.  
  ○ Atribut name merupakan atribut komposit yang memiliki turunan yang dapat diuraikan seperti firstName dan lastName.  
  ○ Atribut education merupakan atribut komposit yang memiliki turunan yang 
  dapat seperti elementarySchool,  juniorHighSchool, seniorHighSchool, dan university.  
2. Entitas event organizer memiliki atribut yaitu idOrganizer sebagai Primary Key 
(PK), email, password, organizerName, organizerInstitution, organizerAddress, 
dan phoneNumber.  
3. Entitas academic events memiliki atribut yaitu idAcademicEvents sebagai Primary 
Key (PK),  eventsName, eventsLoc, eventsCategory, eventsDate, registrationDate, eventsTheme, dan registrationFee. 

RELATIONSHIP 

● Entitas user berelasi many-to-many dengan Entitas Academic Events karena satu user dapat 
mengikuti banyak acara akademik pada platform LEADS, dan banyak acara akademik 
dapat diikuti oleh banyak user sehingga menghasilkan tabel userJoinAcademicEvents.

● Entitas event organizer berelasi one-to-many dengan Entitas Academic Events karena satu 
event organizer dapat membuat banyak acara akademik pada platform LEADS, dan banyak 
acara akademik dapat dibuat oleh satu event organizer.  

## Physical Data Model (PDM) 
<img src="https://raw.githubusercontent.com/archieVian8/challengebackenddot/master/docs/PhysicalModel.png" alt="image that relational diagram of the database">

## Pattern project yang digunakan pada backend nestJS. 
1. Arsitektur Modular (Modular Architecture)
Project ini menggunakan arsitektur modular yang membagi aplikasi ke dalam beberapa modul, seperti UserModule, EventOrganizerModule, dan AcademiceventsModule. Setiap modul bertanggung jawab atas fungsionalitas spesifik dalam aplikasi.

      Alasan Penggunaan:
- Skalabilitas: Dengan membagi aplikasi ke dalam modul-modul kecil, aplikasi dapat berkembang secara terstruktur. Fitur baru dapat ditambahkan ke dalam modul baru tanpa mempengaruhi bagian lain dari aplikasi.
- Pemeliharaan Kode: Pembagian aplikasi ke dalam modul-modul terpisah memudahkan pemeliharaan kode. Setiap modul dapat dikembangkan, diuji, dan diperbaiki secara independen. Contohnya jika terdapat perubahan dalam fungsionalitas UserModule tidak akan mempengaruhi EventOrganizerModule.
- Kemudahan dalam Pengujian: Pengujian menjadi lebih sederhana karena setiap modul dapat diuji secara terpisah. Logika dalam UserService dapat diuji tanpa melibatkan EventOrganizerService.
- Reusabilitas Kode: Modul-modul yang terpisah dapat digunakan kembali dalam aplikasi lain atau dalam bagian lain dari aplikasi yang sama. Contohnya, Modul JwtModule yang dapat digunakan oleh berbagai modul yang memerlukan autentikasi.

2. Polarisasi Controller-Service (Controller-Service Pattern)
Project ini mengikuti pola controller-service di mana controller bertanggung jawab untuk menangani permintaan HTTP dan memberikan respons, sementara service menangani logika bisnis dan interaksi dengan database.

      Alasan Penggunaan:
- Pemisahan Tanggung Jawab: Controller hanya menangani validasi data dan pengelolaan alur permintaan dan respons. Semua logika bisnis dan interaksi dengan database dipindahkan ke dalam service yang memastikan bahwa setiap bagian dari aplikasi hanya melakukan tugas yang sesuai dengan tanggung jawabnya.
- Pengujian yang Lebih Mudah: Testing menjadi lebih mudah dikarenakan logika bisnis dipisahkan dari controller. Service dapat diuji secara independen dengan menggunakan data mock, tanpa memerlukan alur permintaan HTTP.
- Abstraksi Logika Bisnis: Dengan memindahkan logika bisnis ke dalam service, aplikasi menjadi lebih mudah untuk dikelola dan diperluas. Jika terdapat perubahan dalam logika bisnis, hanya service yang perlu dimodifikasi tanpa mengubah controller.

3. Autentikasi dengan JWT dan Passport (JWT Authentication with Passport)
Autentikasi menggunakan JSON Web Tokens (JWT) yang dikombinasikan dengan Passport untuk memastikan bahwa hanya pengguna yang terautentikasi yang dapat mengakses sumber daya yang dilindungi.

      Alasan Penggunaan:
- Keamanan: JWT menyediakan mekanisme yang aman untuk memverifikasi identitas pengguna. Token yang diberikan berisi informasi yang dapat diverifikasi untuk memastikan bahwa pengguna yang mengirim permintaan memiliki hak akses yang sah.
- Autentikasi Stateless: JWT membuat aplikasi dapat beroperasi tanpa menyimpan status sesi di server. Semua informasi terkait pengguna terdapat dalam token yang membuat aplikasi lebih scalable dan efisien.
- Pemanfaatan Passport untuk Middleware: Passport menyediakan solusi autentikasi yang telah teruji dan memungkinkan middleware JwtAuthGuard untuk memverifikasi token pada setiap permintaan yang memerlukan otentikasi untuk memastikan konsistensi di seluruh aplikasi.

4. Prisma ORM untuk interaksi dengan Database (Prisma ORM for Database Interaction)
Prisma digunakan untuk berinteraksi dengan database MySQL. Prisma menyediakan antarmuka yang lebih aman dan efisien untuk melakukan operasi CRUD (Create, Read, Update, Delete) tanpa menulis query SQL secara manual.

      Alasan Penggunaan:
- Abstraksi Database: Prisma menyediakan antarmuka yang lebih mudah untuk mengakses dan mengelola data di database. Penggunaan Prisma ORM dapat mengurangi kebutuhan untuk menulis query SQL secara manual dan memungkinkan pengembang berfokus pada logika aplikasi.
- Keamanan: Prisma secara otomatis menangani pencegahan terhadap serangan SQL injection dan masalah keamanan lainnya yang terkait dengan query manual.
- Migrasi Database yang Mudah: Prisma menyediakan sistem migrasi yang memudahkan jika terdapat perubahan pada struktur database sehingga manajemen skema database lebih terkontrol.

5. Konfigurasi Global dengan ConfigModule (Global Configuration with ConfigModule)
ConfigModule digunakan untuk mengelola konfigurasi aplikasi termasuk pengaturan rahasia seperti JWT_SECRET dan URL database. ConfigModule.forRoot() memungkinkan konfigurasi ini diakses secara global di seluruh aplikasi.

      Alasan Penggunaan:
- Pengelolaan Konfigurasi Terpusat: Konfigurasi aplikasi seperti rahasia JWT dan koneksi database disimpan dalam file .env dan diakses melalui ConfigService. Penggunaan ConfigModule mempermudah manajemen pengaturan aplikasi dalam satu tempat.
- Keamanan dan Pemisahan Lingkungan: Menyimpan konfigurasi sensitif dalam file .env memastikan informasi seperti kunci rahasia dan kredensial tidak dilakukan secara hardcoded dalam kode. Penggunaan ConfigModule juga memudahkan aplikasi untuk beradaptasi dengan berbagai lingkungan seperti development, staging, dan production tanpa mengubah kode aplikasi.
- Fleksibilitas dalam Pengelolaan Pengaturan: Dengan menggunakan ConfigModule, pengaturan dapat dikelola dengan lebih fleksibel. Jika pengaturan perlu diubah, hanya file .env yang perlu diperbarui tanpa memerlukan perubahan kode.

6. Penggunaan Guards untuk Otorisasi (Use of Guards for Authorization)
Guards digunakan untuk mengelola logika otorisasi untuk memastikan bahwa hanya pengguna yang sah yang dapat mengakses rute tertentu. JwtAuthGuard digunakan untuk memverifikasi token JWT pada setiap permintaan yang memerlukan akses terproteksi.

    Alasan Penggunaan:
- Keamanan: Guards memastikan bahwa hanya pengguna yang memiliki token valid yang dapat mengakses sumber daya yang dilindungi. Jika token tidak ada atau tidak valid, akses akan ditolak.
- Konsistensi: Dengan menggunakan guards, logika otorisasi dapat diterapkan secara konsisten di seluruh aplikasi. Guard akan memastikan bahwa setiap rute yang membutuhkan autentikasi akan selalu diperiksa sebelum diakses.
- Kemudahan Ekstensi: Guards mudah untuk dikembangkan lebih lanjut. Jika aplikasi membutuhkan pengaturan hak akses lebih lanjut, guard dapat diperluas untuk menangani kondisi-kondisi tersebut, seperti otorisasi berbasis peran.

7. Penanganan Error dengan HTTP Exceptions (Error Handling with HTTP Exceptions)
HttpException digunakan untuk menangani error dalam aplikasi dan mengirimkan respons dengan kode status HTTP yang sesuai, seperti HttpStatus.BAD_REQUEST untuk kesalahan validasi dan HttpStatus.UNAUTHORIZED untuk masalah autentikasi.

    Alasan Penggunaan:
- Konsistensi dalam Penanganan Error: Penggunaan HttpException memudahkan dalam setiap error yang terjadi ditangani dengan cara yang seragam, sehingga pengguna menerima respons yang konsisten dan sesuai dengan jenis kesalahan yang terjadi.
- Manajemen Error yang Terpusat: Dengan mengelola error menggunakan HttpException, seluruh aplikasi dapat menangani kesalahan dengan cara yang sama sehingga dapat mempermudah pengelolaan dan pengembangan aplikasi.
- Pengiriman Informasi Error yang Jelas: Dengan HttpException, aplikasi dapat mengirimkan pesan error yang lebih informatif kepada pengguna, memberi pemahaman yang jelas tentang kesalahan yang terjadi dan bagaimana cara mengatasinya.

### Kesimpulan
Proyek backend NestJS ini menggunakan pola desain yang terstruktur dan modular untuk memastikan aplikasi dapat berkembang, dipelihara, dan diuji dengan efisien. Arsitektur modular dan pola controller-service memastikan pemisahan tanggung jawab yang jelas antara logika bisnis dan pengelolaan request-response. Penggunaan JWT dan Passport untuk autentikasi serta Prisma untuk interaksi dengan database meningkatkan keamanan dan efisiensi aplikasi. Guard dan exception handling memastikan bahwa aplikasi dapat menangani otorisasi dan kesalahan dengan cara yang konsisten dan aman. Penggunaan ConfigModule memudahkan dalam pengelolaan pengaturan aplikasi yang fleksibel dan aman. Dengan pola desain ini, aplikasi menjadi lebih mudah untuk dikembangkan, diuji, dan diperluas di masa depan.

## About Me

- Linkedin - [Archie Vian](https://www.linkedin.com/in/archie-vian/)
- CV - [Archie Vian](https://drive.google.com/drive/folders/1Mr0snfE0rSm5VDuZ-NaCpxHv-SsITrK-)

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).


