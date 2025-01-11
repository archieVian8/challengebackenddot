<template>
    <q-layout view="hHh lpR fF2">
      <q-page class="login-as-container">
        <p class="jakarta-b text-4xl text-white">Pilih Untuk Daftar Sebagai</p>
        <div class="row items-center q-mt-xl">
          <div class="role-container q-mr-xl" @click="navigateUserRegister">
            <q-icon name="img:/icons/user-icon.png" size="120px" />
            <p class="jakarta-sb text-lg">Peserta</p>
          </div>
          <div class="role-container q-ml-xl" @click="navigateAdminRegister()">
            <q-icon name="img:/icons/admin-icon.png" size="120px" />
            <p class="jakarta-sb text-lg">Penyelenggara</p>
          </div>
        </div>
      </q-page>
    </q-layout>
  </template>
  
  <script>
  export default {
    name: 'RegisterAs',
    methods: {
      navigateUserRegister() {
        this.$router.push('/user/register');
      },
  
      navigateAdminRegister() {
        this.$router.push('/organizer/register');
      }
    }
  }
  </script>
  
  <style scoped>
  .login-as-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('/images/login-as-bg.jpg');
    background-repeat: round;
    object-fit: cover;
  }
  
  .role-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 82px 100px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(2px);
    cursor: pointer;
  }
  </style>
  