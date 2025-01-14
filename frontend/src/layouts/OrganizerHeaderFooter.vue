<template>
    <q-layout>
      <q-header class="header column justify-center">
        <div class="main-container row items-center justify-between">
          <img src="/images/logo-black.png" alt="Logo">
          <div class="row items-center gap-md">
            <a href="/organizer/event" class="jakarta-sb">Events</a>
          </div>
          <div class="row items-center">
            <div class="row items-center">
              <q-btn round unelevated>
                <q-avatar size="42px">
                  <img src="/icons/compe-icon.png" size="42px">
                </q-avatar>
              </q-btn>
              <p class="jakarta-b q-mx-lg">{{ name }}</p>
            </div>
            <q-btn @click="logout()" flat round color="grey-10" icon="logout" />
          </div>
        </div>
      </q-header>
      <q-page-container>
        <RouterView></RouterView>
      </q-page-container>
      <q-footer class="footer">
        <div class="divider" />
        <div class="row items-center justify-between q-mt-lg">
          <img src="/images/logo-white.png" alt="Logo">
          <div>
            <q-icon name="img:/icons/dribble.png" size="24px" />
            <q-icon name="img:/icons/instagram.png" size="24px" class="q-mx-lg" />
            <q-icon name="img:/icons/linkedin.png" size="24px" />
          </div>
        </div>
        <p class="jakarta-b text-center text-white q-mt-lg">© 2025 LEADS. All Rights Reserved.</p>
      </q-footer>
    </q-layout>
  </template>
  
  <script>
  import { Notify } from 'quasar';
  import { api } from 'src/boot/axios';
  import { getIsLoggedInOrganizer, getOrganizerId, getAccessTokenOrganizer  } from 'src/utils/localStorage';
  import { ref } from 'vue';
  
  export default {
  
    data() {
      return {
        name: ref(null)
      }
    },
  
    methods: {
      async getOrganizerById() {
        try {
          const token = getAccessTokenOrganizer(); 
          const organizerId = getOrganizerId();
          const response = await api.get('eventorganizer/profile-id', {
            headers: {
            Authorization: `Bearer ${token}` 
          },
          params: {
            organizerId: organizerId
          }
          });

            this.name = response.data.organizerName; 
        } catch (err) {
          console.error(err);
          Notify.create({
            color: 'red',
            message: 'Gagal mengambil data pengguna. Silahkan refresh halaman.',
            position: 'top',
            timeout: 2500
          });
        }
      },
  
      logout() {
        localStorage.removeItem('OrganizerId');
        localStorage.removeItem('IsLoggedIn_Organizer');
        localStorage.removeItem('OrganizerAccessToken');
        this.$router.push('/');
      }
    },
  
    mounted() {
      this.isLogin = getIsLoggedInOrganizer();
      if (this.isLogin) {
        this.getOrganizerById();
      }
    }
  }
  </script>
  
  <style scoped>
  .header {
    width: 100%;
    height: 100px;
    max-height: 100px;
    background-color: white;
    color: black;
  }
  
  .footer {
    padding: 80px 156px;
    background-color: #000;
    color: white;
  }
  
  .divider {
    width: 100%;
    height: 1px;
    background-color: #D2D5DA;
  }
  </style>
  