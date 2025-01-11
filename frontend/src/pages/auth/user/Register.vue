<template>
    <q-layout view="hHh lpR fF2">
      <q-page class="row justify-between">
        <div class="col-6 column jusutify-center items-center">
          <q-form @submit="submit()" class="form-container">
            <img src="/images/logo-black.png" alt="Logo">
            <div class="q-mt-lg">
              <p>Nama Depan</p>
              <q-input outlined v-model="firstName" :rules="[(val) => !!val || 'Nama Depan wajib diisi']" />
            </div>
            <div class="q-mt-xs">
              <p>Nama Belakang</p>
              <q-input outlined v-model="lastName" :rules="[(val) => !!val || 'Nama Belakang wajib diisi']" />
            </div>
            <div class="q-mt-xs">
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
              <p>Nomor Telepon</p>
              <q-input outlined v-model="phoneNumber" :rules="[(val) => !!val || 'Nomor Telepon wajib diisi']" />
            </div>
            <div class="q-mt-xs">
              <p>SD</p>
              <q-input outlined v-model="elementarySchool" :rules="[(val) => !!val || 'SD wajib diisi']" />
            </div>
            <div class="q-mt-xs">
              <p>SMP</p>
              <q-input outlined v-model="juniorHighSchool" :rules="[(val) => !!val || 'SMP wajib diisi']" />
            </div>
            <div class="q-mt-xs">
              <p>SMA</p>
              <q-input outlined v-model="seniorHighSchool" :rules="[(val) => !!val || 'SMA wajib diisi']" />
            </div>
            <div class="q-mt-xs">
              <p>Universitas</p>
              <q-input outlined v-model="university" :rules="[(val) => !!val || 'Universitas wajib diisi']" />
            </div>
            <div class="q-mt-xs">
              <p>Jenis Kelamin</p>
              <q-select outlined v-model="gender" :options="genderOptions" />
            </div>
            <div class="q-mt-xs">
              <p>Tentang</p>
              <q-input outlined v-model="about" :rules="[(val) => !!val || 'Tentang wajib diisi']" />
            </div>
            <div class="q-mt-lg">
              <p>Tanggal Lahir</p>
              <q-input outlined v-model="birthdate" type="date" :rules="[(val) => !!val || 'Tanggal lahir wajib diisi']" />
            </div>
            <q-btn type="submit" class="q-mt-xl" unelevated color="primary" label="Daftar" no-caps />
            <p class="jakarta-r q-mt-xl text-center">Sudah punya akun? <a href="/user/login" class="jakarta-b">Masuk</a></p>
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
    name: 'UserRegister',

    data() {
        return {
        firstName: ref(null),
        lastName: ref(null),
        email: ref(null),
        password: ref(null),
        passwordConfirmation: ref(null),
        isPwd: ref(true),
        isPwdConfirm: ref(true),
        phoneNumber: ref(null),
        elementarySchool: ref(null),
        juniorHighSchool: ref(null),
        seniorHighSchool: ref(null),
        university: ref(null),
        gender: ref(null),
        about: ref(null),
        birthdate: ref(null),
        };
    },

    setup() {
        return {
        genderOptions: ['MALE', 'FEMALE']
        }
    },

    methods: {
        async submit() {
        try {
            const response = await api.post('http://192.168.1.30:3000/user/sign-up', {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
            phoneNumber: this.phoneNumber,
            elementarySchool: this.elementarySchool,
            juniorHighSchool: this.juniorHighSchool,
            seniorHighSchool: this.seniorHighSchool,
            university: this.university,
            gender: this.gender,
            about: this.about,
            birthdate: this.birthdate
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
    background-image: url("/images/user-auth.jpg");
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
  }
  </style>
  