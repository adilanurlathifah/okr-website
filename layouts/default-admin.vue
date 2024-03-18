<template>
    <div class="min-h-screen flex bg-slate-100">
      <MobileMenu v-show="showMobileMenu" @closeMobileMenu="showMobileMenu = false" />
      <Navbar @toggle-mobile-menu="toggleMobileMenu" @showMobileMenu="showMobileMenu = true"/>
      <Sidebar class="mt-16"/>
      <main class="flex-1 mt-20 p-3 md:p-4 lg:p-6 w-full">
        <nuxt/>
      </main>
    </div>
</template>
  
<script>
import Navbar from '~/components/Navbar.vue';
import Sidebar from '~/components/Sidebar.vue';
import MobileMenu from "~/components/MobileMenu"; 
  
export default {
    components: { Navbar, Sidebar, MobileMenu },
    data() {
      return {
        showMobileMenu: false,
      };
    },
    watch: {
      '$route' () {
        this.showMobileMenu = false;
      },
    },
    methods: {
      toggleMobileMenu() {
        this.showMobileMenu = !this.showMobileMenu;
      },
      closeMobileMenu() {
        this.showMobileMenu = false;
      },
    },
}
</script>