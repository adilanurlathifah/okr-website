<template>
  <div class="min-h-screen flex items-center justify-center py-3 px-4 sm:px-6 lg:px-8">
     <div class="max-w-md w-full space-y-8">
       <div class="flex flex-col justify-center text-center">
         <h2 class="mt-3 text-3xl font-bold text-gray-900">
           Selamat Datang
         </h2>
         <p class="mt-2 text-sm"> Silakan masuk untuk mengakses Objective Key Results. <br/>Mari kita jelajahi bersama dan kejar kesuksesan bersama-sama!</p>
       </div>
       <form @submit.prevent="userLogin" class="flex flex-col bg-white rounded-lg w-auto px-8 py-3 shadow-md h-auto mt-2 space-y-3">
         <input type="hidden" name="remember" value="true">
         <div>
           <div class="flex flex-col">
             <label for="email" class="text-black text-base font-semibold">Email</label>
             <input v-model="login.email" id="email" name="email" type="email" autocomplete="current-email" required class="appearance-none rounded-md mt-2 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:z-10 sm:text-sm" placeholder="Email">
           </div>
           <div class="flex flex-col mt-4">
             <label for="password" class="text-black text-base font-semibold">Password</label>
             <input v-model="login.password" id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-md mt-2 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:z-10 sm:text-sm" placeholder="Password">
             <nuxt-link to="/admin/forgot-password">
                <small class="text-black text-[13px] mt-2">Lupa Password?</small>
             </nuxt-link>
           </div>
         </div>
         <div class="flex justify-center">
           <button type="submit" class="relative w-[150px] mt-2 mb-3 py-2 px-4 border border-transparent text-sm font-semibold rounded-md text-white bg-[#191F2F] focus:outline-none focus:ring-2">
             Masuk
           </button>
         </div>
       </form>
     </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    }
  },
  methods: {
    async userLogin() {
      try {
          const token = await this.$axios.$get('/api/auth/admin/login')
          const res = await this.$auth.loginWith('localUser', {
            data: {
              ...this.login,
              token: token.data.token,
            }
        })
        if (res.success) {
          this.$router.push('/admin')
          // this.$toast.success('Logged In!')
        }   
      } catch (error) {
          console.error(error);
          alert(error.message);
      }
    }
  }
}
</script>