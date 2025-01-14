<template>
    <q-layout view="hHh lpR fF2">
      <q-page>
        <img src="/images/home-banner.jpg" alt="Banner" class="home-banner">
        <div class="main-container">
          <div class="row items-center">
            <q-btn unelevated round color="grey-5" icon="chevron_left" size="sm" @click="goBack" />
            <p class="jakarta-b text-3xl q-ml-lg">Data Peserta Events</p>
          </div>
          <p class="text-lg q-mt-xl">Total Peserta: <span class="jakarta-b">{{ rows.length }}</span></p>
          <div class="q-pa-md">
            <q-table
              class="jakarta-r q-mt-xl"
              style="height: 400px"
              flat
              bordered
              :rows="rows"
              :columns="columns"
              row-key="index"
              virtual-scroll
              v-model:pagination="pagination"
              :rows-per-page-options="[0]"
            />
          </div>
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
    name: 'EventApplicants',
  
    data() {
      return {
        rows: ref([]),
        pagination: ref({
          rowsPerPage: 0,
        }),
      };
    },
  
    setup() {
      const columns = [
        { name: 'index', label: 'No', field: 'index' },
        { name: 'fullName', align: 'center', label: 'Nama', field: 'fullName' },
        { name: 'email', align: 'center', label: 'Email', field: 'email' },
        { name: 'phoneNumber', align: 'center', label: 'No. Telepon', field: 'phoneNumber' },
      ];
  
      return { columns };
    },
  
    methods: {
      async fetchApplicantsData() {
        try {
          const organizerId = getOrganizerId();
          const eventId = this.$route.query.eventId;
  
          const response = await api.get(`/academicevents/applicants-id/${eventId}`, {
            params: { idOrganizer: organizerId },
          });
  
          if (response.data.message) {
            Notify.create({
              color: 'red',
              message: response.data.message,
              position: 'top',
              timeout: 2500,
            });
            this.$router.push('/organizer/event');
          } else {
            this.rows = response.data.map((applicant, index) => ({
              index: index + 1,
              fullName: applicant.fullName,
              email: applicant.email,
              phoneNumber: applicant.phoneNumber,
            }));
          }
        } catch (error) {
          console.error(error);
          Notify.create({
            color: 'red',
            message: 'Gagal mengambil data peserta. Silakan coba lagi.',
            position: 'top',
            timeout: 2500,
          });
        }
      },
  
      goBack() {
        this.$router.go(-1);
      },
    },
  
    async mounted() {
      await this.fetchApplicantsData();
    },
  };
  </script>
  
  <style scoped>
  .home-banner {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .main-container {
    padding: 16px;
  }
  </style>
  