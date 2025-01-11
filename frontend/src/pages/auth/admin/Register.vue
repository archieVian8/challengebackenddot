<template>
    <q-layout view="hHh lpR fF2">
      <q-page class="row justify-between">
        <div class="col-6 column jusutify-center items-center">
          <q-form @submit="submit()" class="form-container">
            <img src="/images/logo-black.png" alt="Logo">
            <div class="q-mt-lg">
              <p>Email</p>
              <q-input outlined v-model="email"
                :rules="[(val) => !!val, (val) => isValidEmail(val) || 'email tidak valid']" />
            </div>
            <div class="q-mt-xs">
              <p>Password</p>
              <q-input class="q-mt-sm" outlined v-model="password" :type="isPwd ? 'password' : 'text'" :rules="[
                (val) => !!val,
                (val) =>
                  val.length > 5 ||
                  'Password minimal terdiri dari 8 karakter',
              ]">
                <template v-slot:append>
                  <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
                </template>
              </q-input>
            </div>
            <div class="q-mt-xs">
              <p>Konfirmasi Kata Sandi</p>
              <q-input class="q-mt-sm" outlined v-model="passwordConfirmation" :type="isPwdConfirm ? 'password' : 'text'"
                :rules="[
                  (val) => !!val,
                  (val) => val === password || 'Konfirmasi tidak sama '
                ]">
                <template v-slot:append>
                  <q-icon :name="passwordConfirmation ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                    @click="isPwdConfirm = !isPwdConfirm" />
                </template>
              </q-input>
            </div>
            <div class="q-mt-xs">
              <p>Nama Organizer</p>
              <q-input outlined v-model="organizerName" :rules="[(val) => !!val || 'SD wajib diisi']" />
            </div>
            <div class="q-mt-xs">
              <p>Institusi Organizer</p>
              <q-input outlined v-model="organizerInstitution" :rules="[(val) => !!val || 'SMP wajib diisi']" />
            </div>
            <div class="q-mt-xs">
              <p>Alamat Organizer</p>
              <q-input outlined v-model="organizerAddress" :rules="[(val) => !!val || 'SMA wajib diisi']" />
            </div>
            <div class="q-mt-xs">
              <p>Nomor Telepon</p>
              <q-input outlined v-model="phoneNumber" :rules="[(val) => !!val || 'Nomor Telepon wajib diisi']" />
            </div>
            <q-btn type="submit" class="q-mt-xl" unelevated color="primary" label="Daftar" no-caps />
            <p class="jakarta-r q-mt-xl text-center">Sudah punya akun? <a href="/organizer/login"
                class="jakarta-b">Masuk</a></p>
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
  
  const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  export default {
    name: 'OrganizerRegister',
  
    data() {
      return {
        email: ref(null),
        password: ref(null),
        passwordConfirmation: ref(null),
        isPwd: ref(true),
        isPwdConfirm: ref(true),
        organizerName: ref(null),
        organizerInstitution: ref(null),
        organizerAddress: ref(null),
        phoneNumber: ref(null)
      };
    },
  

    methods: {
      async submit() {
        try {
          const response = await api.post('http://192.168.1.30:3000/eventorganizer/sign-up', {
            email: this.email,
            password: this.password,
            organizerName: this.organizerName,
            organizerInstitution: this.organizerInstitution,
            organizerAddress: this.organizerAddress,
            phoneNumber: this.phoneNumber
          });

          Notify.create({
            color: 'green',
            message: response.data.message,
            position: 'top',
            timeout: 2500
            });

            this.$router.push('/user/login');

        } catch (error) {
            Notify.create({
            color: 'red',
            message: error.response ? error.response.data.message : 'Error during registration',
            position: 'top',
            timeout: 2500
            });
        }
      },
  
      isValidEmail(email) {
        return EMAIL_REGEX.test(email);
      }
    }
  }
  </script>
  
  <style scoped>
  .auth-image {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    background-image: url("/images/admin-auth.jpg");
    background-repeat: round;
    object-fit: cover;
  }
  
  .form-container {
    padding: 64px 0;
    margin: auto;
  }
  
  .q-input {
    width: 360px;
  }
  
  .q-btn {
    width: 100%;
    height: 42px;
  }</style>
  