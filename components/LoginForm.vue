<template>
    <div class="min-h-screen flex items-center justify-center py-3 px-4 sm:px-6 lg:px-8">
       <div class="max-w-md w-full space-y-8">
         <div class="flex flex-col justify-center text-center">
           <h2 class="mt-6 text-2xl font-bold text-gray-900">
             Selamat Datang
           </h2>
           <p class="mt-2 text-sm"> Silakan masuk untuk mengakses Objective Key Results. <br/>Mari kita jelajahi bersama dan kejar kesuksesan bersama-sama!</p>
         </div>
         <VCard class="p-6">
          <form @submit.prevent="userLogin" class="vld-parent">
            <!-- <input type="hidden" name="remember" value="true"> -->
            <div>
              <div class="flex flex-col">
                <label 
                  for="email" 
                  class="text-black text-sm font-semibold"
                >
                  Email
                </label>
                <input 
                    :class="{
                        'is-valid': emailFilled() && validEmail,
                        'is-invalid': (submitted && !emailFilled() || !validEmail && emailFilled())
                    }"
                    v-model="login.email" 
                    type="email" 
                    class="appearance-none text-sm rounded-md mt-2 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:z-10" 
                    placeholder="Masukkan Email"
                  >
                  <small
                      v-if="submitted && !emailFilled()"
                      class="text-xs text-red-700"
                  >
                      Email harus diisi
                  </small>
                  <small 
                    v-if="submitted && !validEmail"
                    class="text-xs text-red-700"
                    >
                      Gunakan email yang valid
                  </small>
              </div>
              <div class="flex flex-col mt-4">
                <label 
                  for="password" 
                  class="text-black text-sm font-semibold"
                >
                  Password
                </label>
                <input 
                  :class="{
                      'is-valid': passwordFilled() && validPassword,
                      'is-invalid': (submitted && !passwordFilled() || !validPassword && passwordFilled())
                  }"
                  v-model="login.password" 
                  type="password" 
                  class="appearance-none text-sm rounded-md mt-2 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:z-10" 
                  placeholder="Masukkan Password"
                >
                <small 
                    v-if="submitted && !passwordFilled()"
                    class="text-xs text-red-700"
                >
                    Password harus diisi
                </small>
                <!-- <small 
                    v-if="submitted && !validPassword"
                    class="text-xs text-red-700"
                >
                    Password harus minimal 8 karakter, termasuk huruf besar, huruf kecil, angka, dan karakter khusus.
                </small> -->
                <nuxt-link to="/admin/forgot-password">
                    <small class="text-black text-[13px] mt-2">Lupa Password?</small>
                </nuxt-link>
              </div>
            </div>
            <div class="flex justify-center">
              <button type="submit" class="relative w-[150px] mt-4 mb-3 py-2 px-4 border border-transparent text-sm font-semibold rounded-md text-white bg-[#191F2F] focus:outline-none focus:ring-2">
                Masuk
              </button>
            </div>
            <loading 
                :active.sync="isLoading"
                :can-cancel="false"
                :is-full-page="false">
            </loading>
          </form>
        </VCard>
       </div>
    </div>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import VCard from './UI/VCard.vue';
export default {
    components: { Loading, VCard },
    data() {
        return {
            isLoading: false,
            submitted: false,
            login: {
                email: "",
                password: "",
            },
        };
    },
    computed: {
        validEmail() {
          const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(this.login.email);
        },
        validPassword() {
          const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
          return re.test(this.login.password);
        },
    },
    methods: {
      sendLogin() {
        if (this.isValid()) {
          return this.userLogin()
        } else {
          console.log('the data not send')
        }
      },
      userLogin() {
        this.$emit("login", this.login);
      },
      emailFilled() {
        return this.login.email !== '';
      },
      passwordFilled() {
        return this.login.password !== '';
      },
      isValid() {
        let status = true;
        if (!this.emailFilled() || !this.validEmail) {
          status = false;
        }
        if (!this.passwordFilled() || !this.validPassword) {
          status = false;
        }
        return status;
      },
  }
}
</script>

<style>
.vld-parent {
    position: relative;
}
</style>