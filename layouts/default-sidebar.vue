<template>
    <div class="flex">
        <Navbar/>
        <Sidebar class="hidden md:flex md:mr-2"/> 
        <div class="flex-grow pt-[100px] px-3">
            <nuxt/>
        </div>
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