<template>
  <q-layout>
    <q-header class="header column justify-center">
      <div class="main-container row items-center justify-between">
        <img @click="this.$router.push('/')" src="/images/logo-black.png" alt="Logo" class="cursor-pointer">
        <!-- Logged In -->
        <div class="row items-center gap-md">
          <a href="/home" class="jakarta-sb q-mr-xl">Home</a>
        </div>
        <div v-if="isLogin" class="row items-center" style="cursor: pointer;">
          <div class="row items-center">
            <q-btn round unelevated @click="navigatAchievement()">
              <q-avatar size="42px">
                <img src="/icons/avatar.png" size="42px">
              </q-avatar>
            </q-btn>
            <p class="jakarta-b q-mx-lg">{{ name }}</p>
          </div>
          <q-btn @click="logout()" flat round color="grey-10" icon="logout" />
        </div>
        <!-- Not Logged In -->
        <div v-else>
          <q-btn @click="navigateLogin()" unelevated color="primary" label="Sign In" no-caps class="q-mr-lg" />
          <q-btn @click="navigateRegister()" outline color="grey-10" label="Sign Up" no-caps />
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
import { getIsLoggedIn, getUserId, getAccessToken } from 'src/utils/localStorage';
import { ref } from 'vue';

export default {
  data() {
    return {
      isLogin: ref(null),
      name: ref(null)
    };
  },

  methods: {
    navigateLogin() {
      this.$router.push('/login-as');
    },

    navigateRegister() {
      this.$router.push('/register-as');
    },

    async getUserById() {
      try {
        const token = getAccessToken(); 
        const userId = getUserId();

        const response = await api.get('user/profile-id', {
          headers: {
            Authorization: `Bearer ${token}` 
          },
          params: {
            userId: userId
          }
        });

        this.name = response.data.firstName; 
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
      localStorage.removeItem('UserId');
      localStorage.removeItem('IsLoggedIn');
      localStorage.removeItem('AccessToken');
      this.$router.push('/');
    }
  },

  mounted() {
    this.isLogin = getIsLoggedIn();
    if (this.isLogin) {
      this.getUserById();
    }
  }
};
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
