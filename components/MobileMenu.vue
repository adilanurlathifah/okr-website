<template>
   <div>
    <div class="relative">
      <div v-if="showMobileMenu" @click="closeMobileMenu" class="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"></div>
        <div v-if="showMobileMenu" class="fixed w-60 h-full z-50 bg-black px-2 py-6">
          <ul class="list-none">
          <li class="relative">
              <nuxt-link to="/admin/" class="flex h-12 items-center px-3 py-4 transition duration-300 ease-linear hover:bg-[#484D59]">
                  <svg 
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                      <path d="M14.0833 9.75V3.25H22.75V9.75H14.0833ZM3.25 14.0833V3.25H11.9167V14.0833H3.25ZM14.0833 22.75V11.9167H22.75V22.75H14.0833ZM3.25 22.75V16.25H11.9167V22.75H3.25Z" fill="white"/>
                  </svg>
                  <p :class="{ hidden: !isSidebarActive }" class="ml-2 text-base text-white font-medium">Dashboard</p>
              </nuxt-link>
            </li>
            <li class="relative">
                <div to="/" class="flex h-12 items-center px-3 py-4 transition duration-300 ease-linear hover:bg-[#484D59]">
                    <button @click="dropdownOKR" class="flex items-center">
                      <img src="~/assets/img/icons/statistik.svg" />
                        <p :class="{ hidden: !isSidebarActive }" class="ml-2 text-base text-white font-medium">Data OKR</p>
                    </button>
                </div>
            </li>
            <ul :class="{ 'hidden': !dropdownDataOKR }" id="dropdownDataOKR">
                <li v-for="data in dataOKR" :key="data" class="flex h-12 space-y-2 items-center px-4 py-4 transition duration-300 ease-linear hover:bg-[#484D59]">
                    <nuxt-link :to="`/admin/${data}`" :class="{ hidden: !isSidebarActive }" class="capitalize text-base flex items-center w-full text-white pl-8">
                      {{ data }}
                    </nuxt-link>
                </li>
            </ul>
            <li class="relative">
                <div to="/" class="flex h-12 items-center px-3 py-4 transition duration-300 ease-linear hover:bg-[#484D59]">
                    <button @click="dropdownDivisi" class="flex items-center">
                      <img src="~/assets/img/icons/team.svg" />
                        <p :class="{ hidden: !isSidebarActive }" class="ml-2 text-base text-white font-medium">Data Divisi</p>
                    </button>
                </div>
            </li>
            <ul :class="{ 'hidden': !dropdownDataDivisi }" id="dropdown">
                <li v-for="data in dataDivisi" :key="data" class="flex h-12 space-y-2 items-center px-4 py-4 transition duration-300 ease-linear hover:bg-[#484D59]">
                    <nuxt-link :to="`/admin/${data}`" :class="{ hidden: !isSidebarActive }" class="capitalize text-base flex items-center w-full text-white pl-8">
                      {{ data }}
                    </nuxt-link>
                </li>
            </ul>
            <li class="relative">
                <div to="/" class="flex h-12 items-center px-3 py-4 transition duration-300 ease-linear hover:bg-[#484D59]">
                    <button @click="dropdownPengguna" class="flex items-center">
                      <img src="~/assets/img/icons/people.svg" />
                        <p :class="{ hidden: !isSidebarActive }" class="ml-2 text-base text-white font-medium">Kelola Pengguna</p>
                    </button>
                </div>
            </li>
            <ul :class="{ 'hidden': !dropdownDataPengguna }" id="dropdown">
                <li v-for="data in dataPengguna" :key="data" class="flex h-12 space-y-2 items-center px-4 py-4 transition duration-300 ease-linear hover:bg-[#484D59]">
                    <nuxt-link :to="`/admin/${data}`" :class="{ hidden: !isSidebarActive }" class="capitalize text-base flex items-center w-full text-white pl-8">
                      {{ data }}
                    </nuxt-link>
                </li>
            </ul>
        </ul>
        <hr class="border-1 my-5 border-slate-300" />
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropdownDataOKR: false,
      dropdownDataDivisi: false,
      dropdownDataPengguna: false,
      isSidebarActive: true,
      dataOKR: ['kategori', 'OKR', 'penilaian'],
      dataDivisi: ['divisi', 'posisi'],
      dataPengguna: ['karyawan', 'PIC'],
      isSidebarActive: true,
      showMobileMenu: true,
    };
  },
  methods: {
    closeMobileMenu() {
      this.$emit('closeMobileMenu');
    },
    dropdownOKR() {
        this.dropdownDataOKR = !this.dropdownDataOKR; 
    },
    dropdownDivisi() {
        this.dropdownDataDivisi = !this.dropdownDataDivisi; 
    },
    dropdownPengguna() {
      this.dropdownDataPengguna = !this.dropdownDataPengguna; 
    },
    // dropdownOpen() {
    //     this.dropdown = !this.dropdown; 
    // },
  },
};
</script>
