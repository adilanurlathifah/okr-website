<template>
    <div>
      <div class="flex flex-col mb-4">
          <h1 class="text-xl font-bold">
            Objective Key Results   
          </h1>
          <p class="text-slate-400 mt-1 font-semibold text-sm text-left">
            Periksa kategorimu disini, mengaktifkan ataupun menonaktifkan
          </p>
        </div>
        <VCard class="p-3">
            <div v-if="dataOKR.length > 0">
              <div class="flex flex-col md:flex-row gap-2 mt-2 md:px-2 px-4 justify-between items-center">
                    <div class="flex justify-center w-full md:w-auto">
                        <div class="relative w-full">
                            <div class="absolute inset-y-0 flex items-center ps-3 pointer-events-none">
                                <img src="~/assets/img/icons/search.svg"/>
                            </div>
                            <input 
                                type="search" 
                                id="default-search" 
                                class="block w-full lg:w-[250px] border border-slate-200 focus:outline-slate-200 h-[45px] p-2 ps-10 text-sm font-medium text-gray-900 rounded-lg bg-gray-50" 
                                placeholder="Cari OKR" 
                                required>
                        </div>
                    </div>
                    <div class="flex flex-col md:flex-row justify-end gap-3 w-full md:w-auto">
                      <div class="flex flex-row w-auto">
                        <div class="flex flex-row gap-1 w-full md:w-auto">
                            <select id="tahun" class="font-semibold focus:outline-none border border-[#95999D] focus:border focus:border-[#B7C0D8] hover:bg-[#E3E8FF] text-sm rounded-lg w-auto h-[45px] pr-2 p-2">
                                <option value="">Tahun</option>
                                <option value="2024">2024</option>
                                <option value="2024">2023</option>
                                <option value="2024">2022</option>
                                <option value="2024">2021</option>
                            </select>
                            <img src="~/assets/img/icons/calendar.svg" class="hidden md:block object-contain w-[20px] h-full mr-3" alt=""/>
                        </div>
                        <select id="posisi" class="font-normal focus:outline-none border border-[#95999D] focus:border focus:border-[#B7C0D8] hover:bg-[#E3E8FF] text-sm rounded-lg w-auto h-[45px] p-2">
                            <option value="">Posisi</option>
                            <option value="backend">Back-End Developer</option>
                            <option value="backend">DevOps</option>
                            <option value="backend">Front-End Developer</option>
                            <option value="backend">Quality Assurance</option>
                            <option value="backend">UI/UX Designer</option>
                        </select>
                      </div>
                      <div class="flex flex-row gap-4">
                        <select id="status" class="font-semibold focus:outline-none border border-[#95999D] focus:border focus:border-[#B7C0D8] hover:bg-[#E3E8FF] text-sm rounded-lg block w-full h-[45px] p-2">
                          <option value="">Semua Status</option>
                          <option value="aktif">Aktif</option>
                          <option value="nonaktif">Tidak Aktif</option>
                        </select>
                        <BlueButton @click="showModal = true" :showIcon="true">
                            <template v-slot:message>Tambah Data OKR</template>
                        </BlueButton>
                      </div>
                        <OKRModal :show="showModal" @close="showModal = false" />
                    </div> 
                </div>
                <div class="overflow-auto rounded-lg shadow mt-8">
                  <table class="w-full">
                    <thead class="bg-gray-50 border-b-2 border-gray-100">
                      <tr class="text-left text-[#0C1662] font-bold md:text-center">
                        <th class="w-20 p-3 text-sm tracking-wide hidden md:table-cell">No.</th>
                        <th class="w-20 p-3 text-sm tracking-wide hidden md:table-cell">Total OKR</th>
                        <th class="w-24 p-3 text-sm tracking-wide hidden md:table-cell">Kategori</th>
                        <th class="w-24 p-3 text-sm tracking-wide hidden md:table-cell">Periode</th>
                        <th class="w-32 p-3 text-sm tracking-wide hidden md:table-cell">Status</th>
                        <th class="w-32 p-3 text-sm tracking-wide hidden md:table-cell">Aksi</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100">
                      <tr class="text-left md:text-center bg-white block md:table-row" v-for="data in dataOKR" :key="data.id">
                        <td class="p-3 font-medium text-sm text-gray-700 whitespace-nowrap block md:table-cell" data-title="id">{{ data.id }}</td>
                        <td class="p-3 font-medium text-sm text-gray-700 whitespace-nowrap block md:table-cell" data-title="total">{{ data.total }}%</td>
                        <td class="p-3 font-medium text-sm text-gray-700 whitespace-nowrap block md:table-cell" data-title="kategori">{{ data.kategori }}</td>
                        <td class="p-3 font-medium text-sm text-gray-700 whitespace-nowrap block md:table-cell" data-title="periode">{{ data.periode }}</td>
                        <td class="p-3 font-medium text-sm text-gray-700 whitespace-nowrap block md:table-cell" data-title="status">
                          <t-tag 
                              v-show="data.status === 'Aktif'"
                              variant="success"
                          >
                              {{data.status}}
                          </t-tag>
                          <t-tag 
                              v-show="data.status === 'Nonaktif'"
                              variant="danger"
                          >
                              {{data.status}}
                          </t-tag>
                        </td>
                        <td class="p-3 text-sm text-gray-700 whitespace-nowrap block md:table-cell" data-title="total">
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
                  class="block w-full lg:w-[350px] border border-slate-200 focus:outline-slate-300 h-[45px] p-2 ps-10 text-sm font-medium text-gray-900 border border-gray-300 rounded-lg bg-gray-50 cursor-not-allowed" 
                  placeholder="Cari OKR"  
                  disabled>
                  </div>
              </div>
              <div class="flex flex-col md:flex-row justify-end gap-3">
                <div class="flex flex-col md:flex-row gap-1">
                    <select 
                      id="tahun" 
                      class="font-semibold focus:outline-none hover:bg-[#E3E8FF] text-sm rounded-lg block w-full lg:w-auto h-[45px] p-2 cursor-not-allowed" 
                      :disabled="true">
                        <option value="">Tahun</option>
                        <option value="2024">2024</option>
                        <option value="2024">2023</option>
                        <option value="2024">2022</option>
                        <option value="2024">2021</option>
                    </select>
                    <img src="~/assets/img/icons/calendar.svg" class="object-contain w-[20px] h-full" alt=""/>
                  </div>
                  <select 
                    id="posisi" 
                    class="font-normal focus:outline-none text-sm rounded-lg block w-full lg:w-auto h-[45px] p-2 cursor-not-allowed" 
                    :disabled="true">
                      <option value="">Posisi</option>
                      <option value="backend">Back-End Developer</option>
                      <option value="backend">DevOps</option>
                      <option value="backend">Front-End Developer</option>
                      <option value="backend">Quality Assurance</option>
                      <option value="backend">UI/UX Designer</option>
                  </select>
                  <select
                    id="status" 
                    class="font-semibold focus:outline-none hover:bg-[#E3E8FF] text-sm rounded-lg block w-full lg:w-auto h-[45px] p-2 cursor-not-allowed"
                    :disabled="true">
                      <option value="">Semua Status</option>
                      <option value="aktif">Aktif</option>
                      <option value="nonaktif">Tidak Aktif</option>
                  </select>
                  <BlueButton class="save-btn" @click="showModal = true" :showIcon="true">
                      <template v-slot:message>Tambah Data OKR</template>
                  </BlueButton>
              </div> 
            </div>
              <div class="flex flex-col items-center justify-center my-8">
                  <img src="~/assets/img/no-data/nodata-okr.svg" alt="Not Found" class="mb-4 w-[139px] h-[139px] object-contain">
                  <p class="text-center text-sm">
                    Tambahkan Objective Key Results baru yang ingin kamu gunakan untuk penilaian kinerjamu!<br/>Cek daftar OKR di sini, aktifkan atau nonaktifkan sesuai kebutuhanmu.
                  </p>
              </div>
            </div>
        </VCard>
    </div>
</template>
  
<script>
import { OKR } from '@/models/okr'
import VCard from '@/components/UI/VCard.vue';
import BlueButton from '@/components/UI/BlueButton.vue';
import OKRModal from '@/components/Modals/OKRModal.vue'

export default {
    auth: false,
    layout: 'default-admin',
    components: { VCard, BlueButton, OKRModal},
    data() {
        return {
            dataOKR: OKR,
            showModal: false
        }
    },
    methods: {
        tambahOKR() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        }
    }
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
    .responsive-table td:nth-of-type(3):before { content: "Kategori"; }
    .responsive-table td:nth-of-type(4):before { content: "Periode"; }
    .responsive-table td:nth-of-type(5):before { content: "Status"; }
    .responsive-table td:nth-of-type(6):before { content: "Aksi"; }
  }
  
  @media (min-width:  1800px) {
    .responsive-table {
      width:  100%;
    }
  }
</style>