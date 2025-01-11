<template>
    <q-layout view="hHh lpR fF2">
      <q-page class="row justify-between">
        <div class="col-6 column justify-center items-center">
          <q-form @submit="submit()" class="form-container">
            <img src="/images/logo-black.png" alt="Logo">
            <div class="q-mt-lg">
              <p>Email</p>
              <q-input outlined v-model="email" :rules="[(val) => !!val || 'Email wajib diisi']" />
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
            <q-btn type="submit" class="q-mt-xl" unelevated color="primary" label="Masuk" no-caps />
            <p class="jakarta-r q-mt-xl text-center">Belum punya akun? <a href="/user/register" class="jakarta-b">Daftar</a>
            </p>
          </q-form>
        </div>
        <div class="col-5 auth-image"></div>
      </q-page>
    </q-layout>
</template>

