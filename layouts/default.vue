<template>
    <div>
      <MobileMenu v-show="showMobileMenu" @closeMobileMenu="showMobileMenu = false" />
      <Navbar @showMobileMenu="showMobileMenu = true"/>
       <nuxt/>
    </div>
</template>
  
<script>
import Navbar from '~/components/Navbar.vue';
import MobileMenu from "~/components/MobileMenu"; 
  
export default {
    components: { Navbar, MobileMenu },
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
      closeMobileMenu() {
        this.showMobileMenu = false;
      },
    },
}
</script>