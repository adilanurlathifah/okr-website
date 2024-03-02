<template>
    <div>
        <Navbar />
        <div class="flex flex-col justify-center mt-32 px-10">
            <h1>Selamat datang {{ greetingMessage }}</h1>
            <h1 class="font-bold text-2xl justify-center">This User Page</h1>
        </div>
    </div>
</template>
  
<script>
import Navbar from '~/components/Navbar.vue';
export default {
    name: 'UserPage',
    // layout: 'default-sidebar',
    components: { Navbar },
    computed: {
      greetingMessage() {
        if (this.$store.state.user && this.$store.state.user.username) {
          return `${this.$store.state.user.username}`
        }
        // return `Selamat Datang`;
      }
    },
  }
</script>