<template>
  <div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
     <div class="max-w-md w-full space-y-8">
       <div>
         <h2 class="mt-6 text-center text-3xl font-bold text-gray-900">
           Login
         </h2>
       </div>
       <form @submit.prevent="userLogin" class="mt-8 space-y-6">
         <input type="hidden" name="remember" value="true">
         <div class="shadow-sm">
           <div>
             <label for="email" class="sr-only">Email</label>
             <input  v-model="login.email" id="email" name="name" type="name" required class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 mt-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email">
           </div>
           <div>
             <label for="password" class="sr-only">Password</label>
             <input v-model="login.password" id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-md mt-2 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
           </div>
         </div>
         <div>
           <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-semibold rounded-md text-white bg-[#191F2F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
             Sign in
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
        email: '',
        password: ''
      },
    }
  },
  methods: {
    async userLogin() {
      try {
        const response = await this.$auth.loginWith('local', {
          data: this.login
        })
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>