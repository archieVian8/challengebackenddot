<template>
    <q-layout view="hHh lpR fF2">
      <q-page>
        <img src="/images/home-banner.jpg" alt="Banner" class="home-banner">
        <div class="main-container row justify-between">
          <div class="filter-container col-2">
            <!-- Filter Section -->
            <div class="row justify-between items-center">
              <p class="jakarta-b text-lg">Filter</p>
              <q-icon name="img:/icons/filter.svg" size="24px" />
            </div>
            <!-- Kategori -->
            <div class="column">
              <p class="jakarta-b">Kategori</p>
              <q-checkbox @click="getAcademicData" size="md" v-model="event" label="Event" />
            </div>
            <!-- Jenjang -->
            <div class="column">
              <p class="jakarta-b">Jenjang</p>
              <q-checkbox @click="getDataByJenjang('SekolahDasar', elementary)" size="md" v-model="elementary" label="SD" />
              <q-checkbox @click="getDataByJenjang('SekolahMenengahPertama', junior)" size="md" v-model="junior" label="SMP" />
              <q-checkbox @click="getDataByJenjang('SekolahMenengahAtas', senior)" size="md" v-model="senior" label="SMA" />
              <q-checkbox @click="getDataByJenjang('Universitas', university)" size="md" v-model="university" label="Universitas" />
              <q-checkbox @click="getDataByJenjang('Umum', public)" size="md" v-model="public" label="Umum" />
            </div>
            <!-- Tempat Pelaksanaan -->
            <div class="column">
              <p class="jakarta-b">Tempat Pelaksanaan</p>
              <q-checkbox @click="getDataByHeld('luring', offline)" size="md" v-model="offline" label="Offline" />
              <q-checkbox @click="getDataByHeld('daring', online)" size="md" v-model="online" label="Online" />
            </div>
          </div>
  
          <!-- Cards Section -->
          <div class="col-9 card-container">
            <div v-if="(!compe || event) && academicData.length > 0" v-for="academic in academicData"
              :key="academic.idAcademicEvents" class="card q-mt-xl">
              <img src="/images/card-thumbnail.png" :alt="academic.eventsName + ' Thumbnail'">
              <div class="text-gap">
                <p class="jakarta-b text-lg">{{ academic.eventsName }}</p>
                <p class="jakarta-r">Kategori: <span class="jakarta-b">{{ academic.eventsTheme }}</span></p>
                <p class="jakarta-r">Jenjang: <span class="jakarta-b">{{ academic.eventsJenjang }}</span></p>
                <p class="jakarta-r">Lokasi: <span class="jakarta-b">{{ academic.eventsHeld }}</span></p>
                <p class="jakarta-r">Kapasitas Tersisa: <span class="jakarta-b">{{ academic.capacityTersisa }}</span></p>
              </div>
              <q-btn @click="navigateEventDetail(academic.idAcademicEvents)" color="primary" icon-right="chevron_right" label="Detail" no-caps />
            </div>
          </div>
        </div>
      </q-page>
    </q-layout>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { Notify } from 'quasar';
  import axios from 'axios';
  
  const API_BASE_URL = 'http://192.168.1.30:3000';
  
  export default {
    name: 'UserHome',
    data() {
      return {
        academicData: [],
      };
    },
    setup() {
      return {
        compe: ref(false),
        event: ref(false),
        elementary: ref(false),
        junior: ref(false),
        senior: ref(false),
        university: ref(false),
        public: ref(false),
        offline: ref(false),
        online: ref(false),
        city: ref(false),
        province: ref(false),
        national: ref(false),
      };
    },
    methods: {
      async getAcademicData() {
        try {
          const response = await axios.get(`${API_BASE_URL}/academicevents/all`);
          this.academicData = response.data;
        } catch (error) {
          console.error(error);
          Notify.create({
            color: 'red',
            message: 'Failed to fetch academic event data. Please refresh.',
            position: 'top',
            timeout: 2500,
          });
        }
      },
      async getDataByJenjang(jenjang) {
        try {
          const response = await axios.get(`${API_BASE_URL}/academicevents/jenjang?eventsJenjang=${encodeURIComponent(jenjang)}`);
          this.academicData = response.data;
        } catch (error) {
          console.error(error);
          Notify.create({
            color: 'red',
            message: `Failed to fetch events for ${jenjang}.`,
            position: 'top',
            timeout: 2500,
          });
        }
      },
      async getDataByHeld(held) {
        try {
          const response = await axios.get(`${API_BASE_URL}/academicevents/held?eventsHeld=${encodeURIComponent(held)}`);
          this.academicData = response.data;
        } catch (error) {
          console.error(error);
          Notify.create({
            color: 'red',
            message: `Failed to fetch events for ${held}.`,
            position: 'top',
            timeout: 2500,
          });
        }
      },
      navigateEventDetail(id) {
        this.$router.push(`/event?eventId=${id}`);
      },
    },
    async mounted() {
      await this.getAcademicData();
    },
  };
  </script>
  
  <style scoped>
    .filter-container {
    height: fit-content;
    display: flex;
    padding: 24px;
    flex-direction: column;
    gap: 24px;
    border-radius: 15px;
    background: #FAFAFA;
    }

    .q-input {
    height: fit-content;
    }

    .card {
    height: fit-content;
    width: 264px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 12px;
    border-radius: 15px;
    background: #FAFAFA;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.04),
        0px 20px 25px -5px rgba(0, 0, 0, 0.1);
    }

    .text-gap {
    display: flex;
    flex-direction: column;
    gap: 4px;
    }

    .card-container {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    }
</style>

  