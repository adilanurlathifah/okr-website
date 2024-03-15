<template>
    <div>
      <aside class="hidden md:flex flex-col bg-black px-1 py-3 h-full transition duration-300 ease-in"
        :class="{
              'hidden': !isSidebarActive, 
              'flex': isSidebarActive,
              'max-w-[230px]': isSidebarActive,
              'max-w-[65px]': !isSidebarActive,
            }" >
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
                  <p :class="{ hidden: !isSidebarActive }" class="ml-2 text-white font-medium">Dashboard</p>
              </nuxt-link>
          </li>
          <li class="relative">
              <div to="/" class="flex h-12 items-center px-3 py-4 transition duration-300 ease-linear hover:bg-[#484D59]">
                  <button @click="dropdownOKR" class="flex items-center">
                     <img src="~/assets/img/icons/statistik.svg" />
                      <p :class="{ hidden: !isSidebarActive }" class="ml-2 text-white font-medium">Data OKR</p>
                      <!-- <svg :class="{ 'rotate-180' : dropdownDataOKR }" class="ml-[60px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 10L12 15L17 10H7Z" fill="white"/>
                      </svg> -->
                  </button>
              </div>
          </li>
          <ul :class="{ 'hidden': !dropdownDataOKR }" id="dropdownDataOKR">
              <li v-for="data in dataOKR" :key="data" class="flex h-12 space-y-2 items-center px-4 py-4 transition duration-300 ease-linear hover:bg-[#484D59]">
                  <nuxt-link :to="`/admin/${data}`" :class="{ hidden: !isSidebarActive }" class="capitalize flex items-center w-full text-white pl-8">
                    {{ data }}
                  </nuxt-link>
              </li>
          </ul>
          <li class="relative">
              <div to="/" class="flex h-12 items-center px-3 py-4 transition duration-300 ease-linear hover:bg-[#484D59]">
                  <button @click="dropdownDivisi" class="flex items-center">
                     <img src="~/assets/img/icons/team.svg" />
                      <p :class="{ hidden: !isSidebarActive }" class="ml-2 text-white font-medium">Data Divisi</p>
                  </button>
              </div>
          </li>
          <ul :class="{ 'hidden': !dropdownDataDivisi }" id="dropdown">
              <li v-for="data in dataDivisi" :key="data" class="flex h-12 space-y-2 items-center px-4 py-4 transition duration-300 ease-linear hover:bg-[#484D59]">
                  <nuxt-link :to="`/admin/${data}`" :class="{ hidden: !isSidebarActive }" class="capitalize flex items-center w-full text-white pl-8">
                    {{ data }}
                  </nuxt-link>
              </li>
          </ul>
          <li class="relative">
              <div to="/" class="flex h-12 items-center px-3 py-4 transition duration-300 ease-linear hover:bg-[#484D59]">
                  <button @click="dropdownPengguna" class="flex items-center">
                     <img src="~/assets/img/icons/people.svg" />
                      <p :class="{ hidden: !isSidebarActive }" class="ml-2 text-white font-medium">Kelola Pengguna</p>
                  </button>
              </div>
          </li>
          <ul :class="{ 'hidden': !dropdownDataPengguna }" id="dropdown">
              <li v-for="data in dataPengguna" :key="data" class="flex h-12 space-y-2 items-center px-4 py-4 transition duration-300 ease-linear hover:bg-[#484D59]">
                  <nuxt-link :to="`/admin/${data}`" :class="{ hidden: !isSidebarActive }" class="capitalize flex items-center w-full text-white pl-8">
                    {{ data }}
                  </nuxt-link>
              </li>
          </ul>
      </ul>
      <hr class="border-1 my-5 border-slate-300" />
        <div class="flex justify-center items-center">
          <button @click="toggleSidebar" type="button" class="w-fit h-fit mx-24 my-6 px-3 py-2 border border-white rounded-md"
              :class="{ 'rotate-180': !isSidebarActive }">
              <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.3 0L11.5 2L4.9 8L11.5 14L9.3 16L0.5 8L9.3 0Z" fill="white"/>
              </svg>
          </button>
        </div>
      </aside>
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
            dataPengguna: ['karyawan', 'PIC']
        };
    },
    methods: {
        toggleSidebar() {
        this.isSidebarActive = !this.isSidebarActive;
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
    },
};
</script>
