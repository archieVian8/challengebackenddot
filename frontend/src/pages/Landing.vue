<template>
    <q-layout view="hHh lpR fF2">
      <q-page>
        <div class="hero row justify-end">
          <div class="col-6 headline-container">
            <p class="jakarta-b text-3xl">TEMUKAN PELUANG TERBAIK UNTUK MENGEMBANGKAN KEMAMPUANMU DENGAN MUDAH DI
              <span>LEADS</span>
            </p>
            <p class="text-lg q-my-lg">Temukan Event Akademik yang Tepat dengan Mudah dan Menyenangkan!</p>
            <q-btn @click="this.$router.push('/home')" class="q-px-lg q-py-sm" unelevated color="primary" label="Mulai Sekarang" no-caps />
          </div>
        </div>
        <div class="main-container">
          <div class="flex row items-center no-wrap">
            <img src="/images/goal.png" alt="Goal">
            <div class="q-ml-lg">
              <p class="jakarta-b text-3xl">Tujuan Kami</p>
              <ol class="jakarta-sb q-pl-md q-mt-lg">
                <li>LEADS bertujuan untuk membantu para pelajar, mahasiswa dan masyarakat umum dalam mengembangkan
                  keterampilan dan mencapai kesuksesan akademik maupun non-akademik.
                </li>
                <li class="q-mt-sm">
                  LEADS bertujuan untuk mempermudah para pelajar, mahasiswa, dan masyarakat umum dalam mencari informasi
                  yang menunjang dalam karir akademiknya seperti event akademik
                </li>
              </ol>
            </div>
          </div>
          <div class="column justify-center items-center q-mt-xl q-py-md">
            <div class="feature-container text-center">
              <div>
                <p class="jakarta-b text-3xl">Fitur Unggulan</p>
                <p class="jakarta-b text-xl text-grey">Nikmati berbagai keuntungan saat menggunakan<br /> layanan kami</p>
              </div>
              <div class="row justify-between items-center q-mt-xl q-pt-lg">
                <div class="feature-item">
                  <q-icon name="img:/icons/feature-1.png" size="64px" />
                  <p class="jakarta-sb text-lg">Mencari dan Mengikuti Event Akademik</p>
                  <p class="jakarta-sb text-grey">
                    Tenemukanlah kegiatan yang sesuai dengan kategori, jenjang, tingkat, waktu
                    dan lokasi penyelenggaraancdengan cepat dan mudah.
                  </p>
                </div>
                <div class="feature-item q-ml-lg">
                  <q-icon name="img:/icons/feature-2.png" size="64px" />
                  <p class="jakarta-sb text-lg">Koneksi</p>
                  <p class="jakarta-sb text-grey">
                    Memberikan kesempatan untuk berinteraksi dengan sesama peserta dan panitia
                    penyelenggara kegiatan untuk membangun relasi dan mendapatkan informasi tambahan tentang kegiatan.
                  </p>
                </div>
              </div>
              <div class="row justify-between items-center q-mt-xl q-pt-lg">
                <div class="feature-item">
                  <q-icon name="img:/icons/feature-3.png" size="64px" />
                  <p class="jakarta-sb text-lg">Reminder</p>
                  <p class="jakarta-sb text-grey">
                    Membantu kalian agar tidak melewatkan kesempatan untuk mengikuti kegiatan yang diinginkan.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="column items-center q-mt-xl">
            <p class="jakarta-b q-mb-lg text-lg">Tunggu apalagi ayo mulai perjuanganmu dengan LEADS</p>
            <q-btn @click="this.$router.push('/home')" class="q-px-lg q-py-sm" unelevated color="primary" label="Mulai Sekarang" no-caps />
          </div>
        </div>
      </q-page>
    </q-layout>
  </template>
  
  <script>
  
  export default {
    name: 'Landing',
  }
  </script>
  
  <style scoped>
  .hero {
    width: 100%;
    height: 100vh;
    background-image: url('/images/hero-bg.jpg');
    background-repeat: round;
    object-fit: cover;
  }
  
  .headline-container {
    margin-top: auto;
    margin-bottom: auto;
    color: #fff;
  }
  
  .feature-container {
    padding: 24px;
    flex-direction: column;
    align-items: center;
    gap: 80px;
    border-radius: 5px;
    background: #FAFAFA;
    box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.05), 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
  
  .feature-item {
    display: flex;
    width: 384px;
    padding: 32px 24px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    border-radius: 15px;
    background: #F5F5F5;
  }
  </style>
  