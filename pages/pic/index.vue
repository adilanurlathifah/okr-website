<template>
    <div>
        <div class="flex flex-col py-6 md:py-2 md:flex-row justify-between">
          <div class="flex flex-col mb-10">
            <h1 class="text-2xl font-bold">
              Selamat Datang <!-- {{ $auth.user.name }} -->    
            </h1>
            <h5 class="text-slate-400 mt-1">
              Silahkan cek capaian target Objective Key Results tim disini 
            </h5>
          </div>
        </div>
        <div class="flex flex-col">
          <h4 class="font-bold text-xl py-2">Departement</h4>
          <div class="flex flex-col lg:flex-row gap-10">
            <div class="container bg-[#191F2F] px-2 py-2 flex justify-center rounded-xl w-auto h-auto">
              <div class="flex flex-row p-3">
                <div class="flex flex-col text-center items-center mt-1 px-1">
                  <h2 class="text-2xl text-white font-semibold">79</h2>
                  <p class="text-white text-sm font-normal">Total</p>
                </div>
                <div class="flex flex-col text-left ml-3 pl-4 pr-12 py-2 bg-[#484D59] rounded-md md:w-auto h-auto">
                  <h2 class="text-xl text-white font-semibold">Developer</h2>
                  <p class="text-white text-sm font-normal">4 karyawan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <VCard class="mt-8">
           <h1 class="font-bold text-xl p-4">Developer</h1>
            <div class="bg-[#F6F8FF] gap-2 text-sm flex flex-row items-center px-3 mx-4 rounded-md w-auto md:w-[460px] h-[45px]">
                <p class="font-bold">PIC</p>
                <p>Rendy Bustary</p>
                <p>Rendy@gmail.com</p>
            </div>
            <div v-if="teams.length > 0">
                <div class="flex flex-col md:flex-row gap-2 mt-2 md:px-2 px-4 justify-between">
                  <div class="flex flex-col md:flex-row">
                  <div class="relative">
                      <div class="absolute inset-y-0 flex items-center ps-3 pointer-events-none">
                          <img src="~/assets/img/icons/search.svg"/>
                      </div>
                      <input 
                        type="search" 
                        id="default-search" 
                        class="block w-full lg:w-[350px] border border-slate-200 focus:outline-slate-300 h-[45px] p-2 ps-10 text-[15px] font-medium text-gray-900 border border-gray-300 rounded-lg bg-gray-50" 
                        placeholder="Cari Anggota Tim" 
                        required>
                    </div>
                  </div>
                  <div class="flex flex-col md:flex-row justify-end gap-3">
                      <div class="flex flex-col md:flex-row gap-1">
                        <select id="posisi" class="font-normal focus:outline-none hover:bg-slate-100 text-[15px] rounded-lg block w-full lg:w-auto h-[45px] p-2">
                            <option value="">Posisi</option>
                            <option value="backend">Back-End Developer</option>
                            <option value="backend">DevOps</option>
                            <option value="backend">Front-End Developer</option>
                            <option value="backend">Quality Assurance</option>
                            <option value="backend">UI/UX Designer</option>
                        </select>
                        <select id="periode" class="font-semibold focus:outline-none hover:bg-slate-100 text-[15px] rounded-lg block w-full lg:w-auto h-[45px] p-2 mr-2">
                            <option value="">Periode</option>
                            <option value="januari">Januari</option>
                            <option value="februari">Februari</option>
                            <option value="maret">Maret</option>
                            <option value="april">April</option>
                            <option value="mei">Mei</option>
                            <option value="juni">Juni</option>
                            <option value="juli">Juli</option>
                            <option value="agustus">Agustus</option>
                            <option value="september">September</option>
                            <option value="oktober">Oktober</option>
                            <option value="november">November</option>
                            <option value="desember">Desember</option>
                        </select>
                        <img src="~/assets/img/icons/calendar.svg" class="hidden md:block object-contain w-[20px] h-full" alt=""/>
                  </div>
                  <BlueButton 
                        :button-color="false" 
                        @click="tambahNilai" 
                        :showIcon="false" 
                        icon-color="#ffffff"
                        class="text-white"
                        >
                            <template v-slot:message>Tambah Nilai</template>
                    </BlueButton>
                </div>
              </div>
                <div class="container px-5 py-6 mb-10">
                  <div class="flex flex-row">
                    <table class="table w-full h-auto responsive-table">
                      <thead>
                        <tr class="mb-2 text-center text-[#0C1662]">
                          <th class="py-3">No</th>
                          <th>Nama Karyawan</th>
                          <th>Divisi</th>
                          <th>Posisi</th>
                          <th>Total Hasil Kinerja</th>
                          <th>Aksi</th>
                        </tr>
                      </thead>
                      <tbody class="text-center">
                        <tr class="hover:bg-slate-50" v-for="data in teams" :key="data.id">
                          <td class="py-3">{{data.id}}</td>
                          <td>{{data.nama}}</td>
                          <td>{{data.divisi}}</td>
                          <td>{{data.pekerjaan}}</td>
                          <td>{{data.total}}%</td>
                          <td>
                            <button class="bg-black rounded-md p-2">
                                <img src="~/assets/img/icons/edit.svg" />
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    </div>
                    <div class="mt-8 mr-2 flex justify-end">
                      <t-pagination
                        class="responsivePagination"
                        :value="1"
                        :perPage="5"
                        :limit="2"
                        :totalItems="5"
                      />
                    </div>
                  </div>
              </div>
        </VCard>
        <VCard class="flex flex-col p-4 mt-4">
            <div class="p-3">
                <div class="flex flex-row justify-between items-center">
                    <h4 class="font-left font-semibold text-lg">Aktivitas Terakhir</h4>
                    <div class="flex flex-row items-center">
                        <select id="periode" class="font-semibold focus:outline-none hover:bg-slate-100 text-xs rounded-lg block w-full lg:w-auto h-[45px] py-2 px-2 mr-2">
                            <option value="">Periode</option>
                            <option value="januari">Januari</option>
                            <option value="februari">Februari</option>
                            <option value="maret">Maret</option>
                            <option value="april">April</option>
                            <option value="mei">Mei</option>
                            <option value="juni">Juni</option>
                            <option value="juli">Juli</option>
                            <option value="agustus">Agustus</option>
                            <option value="september">September</option>
                            <option value="oktober">Oktober</option>
                            <option value="november">November</option>
                            <option value="desember">Desember</option>
                        </select>
                        <img src="~/assets/img/icons/calendar.svg" class="hidden md:block object-contain w-[12px] h-full" alt=""/>
                    </div>
                </div>
                <table class="table w-full h-auto table-fixed my-3 md:px-2">
                    <thead>
                        <tr class="mb-2 text-center text-xs text-[#0C1662]">
                            <th>No</th>
                            <th>Nama Pengguna</th>
                            <th class="activity-column">Keterangan</th>
                            <th>Waktu</th>
                            <th>Riwayat</th>
                        </tr>
                    </thead>
                    <tbody class="text-center text-xs">
                        <tr class="hover:bg-slate-50" v-for="data in actHistory" :key="data.id">
                            <td class="py-3">{{data.id}}</td>
                            <td>{{data.nama}}</td>
                            <td class="activity-column">{{data.activity}}</td>
                            <td>{{data.time}}</td>
                            <td>
                                <button class="bg-black font-semibold px-3 text-sm md:px-6 py-2 text-white w-auto rounded-md">
                                    Detail
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </VCard>
    </div>
</template>
  
<script>
  import { IT } from '@/models/IT'
  import { total } from '@/models/total-progress'
  import { lastActivity } from '@/models/last-activity'
  import VCard from '@/components/UI/VCard.vue';
  import BlueButton from '@/components/UI/BlueButton.vue';
  import ModalMessage from '@/components/UI/ModalMessage.vue';
  import InfoDashboard from '@/components/UI/InfoDashboard.vue';
  
  export default {
    auth: false,
    layout: 'default-admin',
    components: { VCard, BlueButton, ModalMessage, InfoDashboard },
    data() {
        return {
            teams: IT,
            totalProgress: total,
            actHistory: lastActivity,
            showAddModal: false,
            isOpen: false
        }
    },
    methods: {
        toggleDropdown() {
          this.isOpen = !this.isOpen;
        },
        tambahNilai() {
            this.showAddModal = true;
        },
        closeModal() {
            this.showAddModal = false;
            this.showEditModal = false;
        }
    }
  }
</script>
  
<style>
  #posisi {
    font-weight: 600;
  }
</style>