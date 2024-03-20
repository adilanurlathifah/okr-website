<template>
    <div>
      <div class="flex flex-col mb-4">
          <h1 class="text-xl font-bold">
            Detail Kategori   
          </h1>
          <p class="text-slate-400 mt-1 font-semibold text-sm text-left">
            Periksa hasil pencapaian secara rinci disini
          </p>
        </div>
        <div class="flex flex-col p-2">
            <VCard class="flex flex-col md:flex-row text-base sm:text-left text-center md:justify-between px-10 py-2 whitespace-nowrap">
                <div class="flex flex-row gap-3 px-3 py-2 mb-2">
                    <p class="font-bold text-[#0C1662] capitalize">posisi</p>
                    <p class="text-slate-500 font-semibold capitalize">front-end developer</p>
                </div>
                <div class="flex flex-row gap-3 px-3 py-2 mb-2">
                    <p class="font-bold text-[#0C1662] capitalize">kategori</p>
                    <p class="text-slate-500 font-semibold capitalize">kehadiran</p>
                </div>
                <div class="flex flex-row gap-3 px-3 py-2 mb-2">
                    <p class="font-bold text-[#0C1662] capitalize">divisi</p>
                    <p class="text-slate-500 font-semibold capitalize">developer</p>
                </div>
            </VCard>
            <VCard class="mt-3">
                <div v-if="categories.length > 0">
                  <div class="flex flex-col md:flex-row gap-2 mt-2 md:px-2 px-4 justify-between items-center">
                    <div class="flex justify-center w-full md:w-auto">
                        <div class="relative w-full">
                            <div class="absolute inset-y-0 flex items-center ps-3 pointer-events-none">
                                <img src="~/assets/img/icons/search.svg"/>
                            </div>
                            <input 
                                type="search" 
                                id="default-search" 
                                class="block w-full md:w-[350px] border border-slate-200 focus:outline-slate-200 h-[45px] p-2 ps-10 text-sm font-medium text-gray-900 rounded-lg bg-gray-50" 
                                placeholder="Cari OKR" 
                                required>
                        </div>
                    </div>
                    <div class="flex flex-col md:flex-row justify-end gap-3 w-full md:w-auto">
                        <div class="flex flex-col md:flex-row gap-1 w-full md:w-auto">
                            <select id="tahun" class="font-semibold focus:outline-none border border-[#95999D] focus:border focus:border-[#B7C0D8] hover:bg-[#E3E8FF] text-sm rounded-lg block w-full md:w-auto h-[45px] pr-2 p-2">
                                <option value="">Tahun</option>
                                <option value="2024">2024</option>
                                <option value="2024">2023</option>
                                <option value="2024">2022</option>
                                <option value="2024">2021</option>
                            </select>
                        </div>
                        <BlueButton 
                          modalMode="'Tambah'"
                          @click="showModal = true" 
                          :showIcon="true"
                        >
                            <template v-slot:message>Tambah Data OKR</template>
                        </BlueButton>
                        <OKRModal 
                        :show="showModal" 
                  :mode="modalMode" 
                  @close="showModal = false"
                        />
                    </div> 
                </div>
                <div class="container px-5 py-6 mb-10">
                    <div class="flex flex-row">
                    <table class="table w-full h-auto responsive-table">
                        <thead>
                        <tr class="mb-2 text-center text-[#0C1662]">
                            <th class="py-3">No</th>
                            <th>Total OKR</th>
                            <th>Periode</th>
                            <th>Aksi</th>
                        </tr>
                        </thead>
                        <tbody class="text-center">
                        <tr class="hover:bg-slate-50" v-for="category in categories" :key="category.id">
                            <td class="py-3">{{category.id}}</td>
                            <td>{{category.total}}%</td>
                            <td>{{category.periode}}</td>
                            <td>
                              <button class="bg-black rounded-md p-2">
                                  <img src="~/assets/img/icons/edit.svg" />
                              </button>
                              <button class="bg-[#FFE3E3] rounded-md p-2">
                                  <img src="~/assets/img/icons/delete.svg" />
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
                <div v-else class="flex flex-col p-3">
                  <div class="flex flex-row gap-2 mt-2 justify-between">
                      <div class="flex flex-row">
                          <div class="relative ml-4">
                              <div class="absolute inset-y-0 flex items-center ps-3 pointer-events-none">
                              <img src="~/assets/img/icons/search.svg"/>
                              </div>
                              <input 
                                  type="search" 
                                  id="default-search" 
                                  class="hover:cursor-not-allowed border border-slate-200  block w-full lg:w-[350px] h-[45px] p-2 ps-10 text-sm font-medium text-gray-900 border border-gray-300 rounded-lg bg-gray-50" 
                                  placeholder="Cari" 
                                  :disabled="true">
                          </div>
                      </div>
                      <div class="flex justify-end gap-3 mr-6">
                          <select id="tahun" class="font-normal hover:cursor-not-allowed hover:bg-[#E3E8FF] text-sm rounded-lg block w-full lg:w-auto h-[45px] p-2" :disabled="true">
                              <option value="">Tahun</option>
                              <option value="2024">2024</option>
                              <option value="2024">2023</option>
                              <option value="2024">2022</option>
                              <option value="2024">2021</option>
                          </select>
                          <BlueButton @click="showModal = true" :showIcon="true">
                              <template v-slot:message>Buat Kategori</template>
                          </BlueButton>
                      </div> 
                  </div>
                  <div class="flex flex-col items-center justify-center my-8">
                      <img src="~/assets/img/no-data/nodata-category.svg" alt="Not Found" class="mb-4 w-[139px] h-[139px] object-contain">
                      <p class="text-center text-sm">
                          Tambahkan kategori baru yang ingin kamu gunakan untuk penilaian kinerjamu!<br/>Cek daftar kategorimu di sini, aktifkan atau nonaktifkan sesuai kebutuhanmu.
                      </p>
                  </div>
                </div>
            </VCard>
        </div>
    </div>
</template>
  
<script>
import { DETAILCATEGORY } from '@/models/detail-category'
import VCard from '@/components/UI/VCard.vue';
import BlueButton from '@/components/UI/BlueButton.vue';
import OKRModal from '@/components/Modals/OKRModal.vue'

export default {
    auth: false,
    layout: 'default-admin',
    components: { VCard, BlueButton, OKRModal },
    data() {
        return {
            categories: DETAILCATEGORY,
            showModal: false
        }
    },
}
</script>
  
<style>
  #posisi {
    font-weight: 600;
  }
  
  @media (max-width:  1150px) {
    .responsive-table,
    .responsive-table thead,
    .responsive-table tbody,
    .responsive-table th,
    .responsive-table td,
    .responsive-table tr,
    .responsivePagination {
      display: block;
      padding: 2px;
    }
  
    .responsivePagination {
      display: flex;
      justify-content: flex-end;
    }
  
    .responsive-table th {
      font-weight: 800;
    }
  
    .responsive-table thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }
  
    .responsive-table tr { 
        border: 1px solid #e4e3e3;
    }
  
    .responsive-table td {
      border: none;
      border-bottom:  1px solid #eee;
      position: relative;
      padding-left:  50%;
    }
  
    .responsive-table td:before {
      position: absolute;
      top:  6px;
      left:  6px;
      width:  45%;
      padding-right:  10px;
      font-weight: 600;
      color: #191F2F;
      white-space: nowrap;
    }
  
    .responsive-table td:nth-of-type(1):before { content: "No"; }
    .responsive-table td:nth-of-type(2):before { content: "Total OKR"; }
    .responsive-table td:nth-of-type(3):before { content: "Periode"; }
    .responsive-table td:nth-of-type(4):before { content: "Aksi"; }
  }
  
  @media (min-width:  1800px) {
    .responsive-table {
      width:  100%;
    }
  }
</style>