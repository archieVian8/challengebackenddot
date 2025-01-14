<template>
  <q-layout view="hHh lpR fF2">
    <q-page>
      <img src="/images/home-banner.jpg" alt="Banner" class="home-banner">
      <div class="main-container">
        <div class="card-container">
          <img src="/images/add-event.png" alt="Add Competition" @click="navigateAddEvent()" class="add-btn q-mt-xl q-pt-xl">
          <div v-if="academicData.length > 0" v-for="academic in academicData" :key="academic.idAcademicEvents" class="card q-mt-xl">
            <img src="/images/card-thumbnail.png" :alt="academic.eventsName + ' Thumbnail'">
            <div class="text-gap">
              <p class="jakarta-b text-lg">{{ academic.eventsName }}</p>
              <p class="jakarta-r">Kategori: <span class="jakarta-b">{{ academic.eventsTheme }}</span></p>
              <p class="jakarta-r">Jenjang: <span class="jakarta-b">{{ academic.eventsJenjang }}</span></p>
              <p class="jakarta-r">Lokasi: <span class="jakarta-b">{{ academic.eventsHeld }}</span></p>
              <p class="jakarta-r">Kapasitas Tersisa: <span class="jakarta-b">{{ academic.capacityTersisa }}</span></p>
            </div>
            <q-btn color="primary" @click="navigateToApplicants(academic.idAcademicEvents)" icon-right="chevron_right" label="Peserta" no-caps />
            <q-btn color="primary" @click="navigateToUpdate(academic.idAcademicEvents)" icon-right="chevron_right" label="Update" no-caps />
            <q-btn color="negative" @click="deleteEvent(academic.idAcademicEvents)" icon="delete" label="Delete" no-caps />
          </div>
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
  name: 'OrganizerEvents',

  data() {
    return {
      academicData: [],
    };
  },

  methods: {
    async getAcademicData() {
      try {
        const organizerId = getOrganizerId();
        const response = await api.get(`/academicevents/by-organizer/${organizerId}`);
        this.academicData = response.data;
        console.log('Academic Data:', this.academicData);
      } catch (error) {
        console.error(error);
        Notify.create({
          color: 'red',
          message: 'Gagal mengambil data acara akademik, silakan refresh halaman',
          position: 'top',
          timeout: 2500,
        });
      }
    },

    async deleteEvent(id) {
      try {
        const organizerId = getOrganizerId();
        const response = await api.delete(`/academicevents/delete/${id}?idOrganizer=${organizerId}`);
        
        this.getAcademicData();
        Notify.create({
          color: 'green',
          message: 'Event deleted successfully.',
          position: 'top',
          timeout: 2500,
        });
      } catch (error) {
        console.error('Error:', error.response?.data || error.message);
        Notify.create({
          color: 'red',
          message: 'Failed to delete the event.',
          position: 'top',
          timeout: 2500,
        });
      }
    },

    navigateAddEvent() {
      this.$router.push('/organizer/event/create');
    },

    navigateToApplicants(id) {
      this.$router.push(`/organizer/event/applicants?eventId=${id}`);
    },

    navigateToUpdate(id) {
      this.$router.push(`/organizer/event/update?eventId=${id}`);
    },
  },

  async mounted() {
    await this.getAcademicData();
  },
};
</script>

<style scoped>
.add-btn {
  width: 264px;
  height: 320px;
  cursor: pointer;
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
