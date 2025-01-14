<template>
  <q-layout view="hHh lpR fF2">
    <q-page>
      <img src="/images/home-banner.jpg" alt="Banner" class="home-banner">
      <div class="main-container">
        <div class="row items-center">
          <img src="/images/blue-rectangle.jpg" alt="Rectangle">
          <p class="jakarta-b text-3xl q-ml-md">Tambah Event Akademik</p>
        </div>
        <q-form @submit="submit" class="row justify-between q-mt-lg">
          <div class="col-6">
            <div>
              <p class="jakarta-sb q-mb-xs">Nama Event</p>
              <q-input outlined v-model="name" :rules="[(val) => !!val || 'Nama Event wajib diisi']" />
            </div>
            <div class="q-mt-xs">
              <p class="jakarta-sb q-mb-xs">Lokasi Event</p>
              <q-input outlined v-model="location" :rules="[(val) => !!val || 'Lokasi Event wajib diisi']" />
            </div>
            <div class="row justify-between q-mt-xs">
              <div class="half-input">
                <p class="jakarta-sb q-mb-xs">Jenjang</p>
                <q-select outlined v-model="jenjang" :options="jenjagOptions"
                  :rules="[(val) => !!val || 'Jenjang wajib diisi']" />
              </div>
              <div class="half-input">
                <p class="jakarta-sb q-mb-xs">Tempat</p>
                <q-select outlined v-model="place" :options="placeOptions"
                  :rules="[(val) => !!val || 'Tempat wajib diisi']" />
              </div>
            </div>
            <div class="row justify-between q-mt-xs">
              <div class="half-input">
                <p class="jakarta-sb q-mb-xs">Kategori Event</p>
                <q-input outlined v-model="category" :rules="[(val) => !!val || 'Kategori Event wajib diisi']" />
              </div>
              <div class="half-input">
                <p class="jakarta-sb q-mb-xs">Tanggal Event</p>
                <q-input outlined v-model="eventDate" type="date"
                  :rules="[(val) => !!val || 'Tanggal Event wajib diisi']" />
              </div>
            </div>
            <div class="row justify-between q-mt-xs">
              <div class="half-input">
                <p class="jakarta-sb q-mb-xs">Tanggal Registrasi</p>
                <q-input outlined v-model="registdate" type="date"
                  :rules="[(val) => !!val || 'Tanggal Registrasi wajib diisi']" />
              </div>
              <div class="half-input">
                <p class="jakarta-sb q-mb-xs">Tema Event</p>
                <q-input outlined v-model="theme" :rules="[(val) => !!val || 'Tema Event wajib diisi']" />
              </div>
            </div>
            <div class="row justify-between q-mt-xs">
              <div class="half-input">
                <p class="jakarta-sb q-mb-xs">Harga Tiket</p>
                <q-input outlined v-model="fee" :rules="[(val) => !!val || 'Harga Tiket wajib diisi']" prefix="Rp" />
              </div>
              <div class="half-input">
                <p class="jakarta-sb q-mb-xs">Kapasitas</p>
                <q-input outlined v-model="capacity" :rules="[(val) => !!val || 'Kapasitas wajib diisi']" />
              </div>
            </div>
            <div class="row items-center justify-between q-mt-lg">
              <q-btn @click="this.$router.push('/organizer/event')" class="btn" outline color="grey-10" label="Kembali"
                no-caps />
              <q-btn type="submit" class="btn" unelevated color="primary" label="Tambah Event" no-caps />
            </div>
          </div>
          <div class="col-5">
            <div class="q-mb-lg">
              <p class="jakarta-sb q-mb-xs">Deskripsi</p>
              <q-input outlined v-model="desc" type="textarea" :rules="[(val) => !!val || 'Deskripsi wajib diisi']" />
            </div>
          </div>
        </q-form>
      </div>
    </q-page>
  </q-layout>
</template>

<script>
import { ref } from 'vue';
import { api } from 'src/boot/axios';
import { Notify } from 'quasar';
import { getOrganizerId } from 'src/utils/localStorage';

export default {
  name: 'AddEvent',

  data() {
    return {
      name: ref(null),
      location: ref(null),
      jenjang: ref(null),
      place: ref(null),
      category: ref(null),
      eventDate: ref(null),
      registdate: ref(null),
      theme: ref(null),
      fee: ref(null),
      capacity: ref(null),
      desc: ref(null),
    };
  },

  setup() {
    return {
      jenjagOptions: [
        'Sekolah Dasar', 'Sekolah Menengah Pertama', 'Sekolah Menengah Atas', 'Universitas', 'Umum'
      ],
      placeOptions: [
        'luring', 'daring'
      ]
    };
  },

  methods: {
    async submit() {
      const validJenjangOptions = [
        'Sekolah Dasar', 'Sekolah Menengah Pertama', 'Sekolah Menengah Atas', 'Universitas', 'Umum'
      ];

      if (!validJenjangOptions.includes(this.jenjang)) {
        Notify.create({
          color: 'red',
          message: 'Jenjang yang dipilih tidak valid!',
          position: 'top',
          timeout: 2500
        });
        return;
      }

      const jenjangMapping = {
        'Sekolah Dasar': 'SekolahDasar',
        'Sekolah Menengah Pertama': 'SekolahMenengahPertama',
        'Sekolah Menengah Atas': 'SekolahMenengahAtas',
        'Universitas': 'Universitas',
        'Umum': 'Umum'
      };

      const mappedJenjang = jenjangMapping[this.jenjang];

      try {
        const id = getOrganizerId();
        const response = await api.post('/academicevents/create', {
          idOrganizer: id,
          eventsName: this.name,
          eventsLoc: this.location,
          eventsJenjang: mappedJenjang, 
          eventsHeld: this.place,
          eventCategory: this.category,
          eventsDate: new Date(this.eventDate).toISOString(),
          registrationDate: new Date(this.registdate).toISOString(),
          eventsTheme: this.theme,
          registrationFee: parseFloat(this.fee),
          capacityTotal: parseInt(this.capacity, 10),
          deskripsiEvent: this.desc
        });

        Notify.create({
          color: 'green',
          message: 'Berhasil menambahkan event akademik',
          position: 'top',
          timeout: 2500
        });
        this.$router.push('/organizer/event');
      } catch (error) {
        Notify.create({
          color: 'red',
          message: error.response?.data?.message || 'Terjadi kesalahan',
          position: 'top',
          timeout: 2500
        });
      }
    }
  }
};
</script>

<style scoped>
.full-input {
  width: 100%;
}

.half-input {
  width: 45%;
}

.btn {
  width: 220px;
  height: 42px;
}
</style>
