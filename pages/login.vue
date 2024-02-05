<template>
  <div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
     <div class="max-w-md w-full space-y-8">
       <div>
         <h2 class="mt-6 text-center text-3xl font-bold text-gray-900">
           Login
         </h2>
       </div>
       <form @submit.prevent="login" class="mt-8 space-y-6">
         <input type="hidden" name="remember" value="true">
         <div class="shadow-sm">
           <div>
             <label for="username" class="sr-only">Username</label>
             <input v-model="credentials.username" id="username" name="name" type="name" required class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 mt-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username">
           </div>
           <div>
             <label for="password" class="sr-only">Password</label>
             <input v-model="credentials.password" id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-md mt-2 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
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
import { users } from '~/static/users'

export default {
data() {
  return {
    credentials: {
        username: '',
        password: ''
    }
  }
},
methods: {
  login() {
    const user = users.find(user => 
        user.username === this.credentials.username &&
        user.password === this.credentials.password
    );

    if (user) {
        this.$store.commit('setUser', user);
        this.$router.push({ path: user.role === 'admin' ? '/admin-page' : '/user-page' });
    } else {
        alert('Username atau Password salah!');
    }
  }
}
}
</script>
  