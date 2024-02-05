<template>
    <div>
        <Navbar/>
        <div class="flex flex-col justify-center mt-32 px-10">
            <h1 class="font-bold text-2xl justify-center">This User Page</h1>
        </div>
    </div>
</template>
  
<script>
import Navbar from '~/components/Navbar.vue'
export default {
    name: 'UserPage',
    middleware: 'auth',
    components: { Navbar },
    methods: {
      logout() {
        this.$router.push('/login');
      }
    }
  }
</script>