<template>
    <q-layout view="hHh lpR fF2">
      <q-page class="row justify-between">
        <div class="col-6 column jusutify-center items-center">
          <q-form @submit="submit()" class="form-container">
            <img src="/images/logo-black.png" alt="Logo">
            <div class="q-mt-lg">
              <p>Email</p>
              <q-input outlined v-model="email" :rules="[(val) => !!val || 'Email wajib diisi']" />
            </div>
            <div class="q-mt-xs">
              <p>Kata Sandi</p>
              <q-input class="q-mt-sm" outlined v-model="password" :type="isPwd ? 'password' : 'text'" :rules="[ 
                (val) => !!val,
                (val) =>
                  val.length >= 6 ||
                  'Password minimal terdiri dari 6 karakter',
              ]">
                <template v-slot:append>
                  <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
                </template>
              </q-input>
            </div>
            <q-btn type="submit" class="q-mt-xl" unelevated color="primary" label="Masuk" no-caps />
            <p class="jakarta-r q-mt-xl text-center">Belum punya akun? <a href="/organizer/register"
                class="jakarta-b">Daftar</a></p>
          </q-form>
        </div>
        <div class="col-5 auth-image"></div>
      </q-page>
    </q-layout>
  </template>
  
  <script>
    import { ref } from 'vue';
    import { api } from 'src/boot/axios';
    import { Notify } from 'quasar';
    import { setIsLoggedInOrganizer, setOrganizerId, setAccessTokenOrganizer } from 'src/utils/localStorage';

    export default {
    name: 'OrganizerLogin',

    data() {
        return {
        email: null,
        password: null,
        isPwd: true,
        };
    },

    methods: {
        resetDefault() {
        this.email = null;
        this.password = null;
        this.isPwd = true;
        },

        async submit() {
        try {
            const response = await api.post('/eventorganizer/sign-in', {
            email: this.email,
            password: this.password,
            });

            const { OrganizerAccessToken, idOrganizer } = response.data;

            setAccessTokenOrganizer(OrganizerAccessToken);
            setOrganizerId(idOrganizer);
            setIsLoggedInOrganizer(true);

            Notify.create({
            color: 'green',
            message: 'Berhasil login',
            position: 'top',
            timeout: 2500,
            });

            this.$router.push('/organizer/event'); 
        } catch (error) {
            console.error(error);
            this.resetDefault();

            Notify.create({
            color: 'red',
            message: error.response?.data?.message || 'Terjadi kesalahan saat login',
            position: 'top',
            timeout: 2500,
            });
        }
        }
    },
    };
</script>

  
  <style scoped>
  .auth-image {
    height: 100vh;
    background-image: url("/images/admin-auth.jpg");
    background-repeat: round;
    object-fit: cover;
  }
  
  .form-container {
    margin: auto;
  }
  
  .q-input {
    width: 360px;
  }
  
  .q-btn {
    width: 100%;
    height: 42px;
  }
  </style>
  