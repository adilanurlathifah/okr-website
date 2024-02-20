<template>
    <div>
        <navbar />
        <nuxt />
        <Sidebar/>
    </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Sidebar from '~/components/Sidebar.vue'
export default {
    components: {Navbar, Sidebar}
}
</script>

<style scoped>
html, body {
  font-family: Montserrat, 'Helvetica Neue', Arial, sans-serif;
}
</style>