<template>
    <div>
        <div class="flex flex-col mb-4">
          <h1 class="text-xl font-bold">
            Kategori   
          </h1>
          <p class="text-slate-400 mt-1 font-semibold text-sm text-left">
            Periksa kategorimu disini, mengaktifkan ataupun menonaktifkan
          </p>
        </div>
        <VCard class="px-3 py-4">
            <div v-if="categories.length > 0">
              <div class="flex flex-row gap-2 mt-2 justify-between">
                <div class="flex flex-row">
                  <div class="relative ml-4">
                      <div class="absolute inset-y-0 flex items-center ps-3 pointer-events-none">
                        <img src="~/assets/img/icons/search.svg"/>
                      </div>
                      <input 
                        type="search" 
                        id="default-search" 
                        class="block w-full lg:w-[350px] focus:outline-slate-200 border border-slate-200 h-[45px] p-2 ps-10 text-sm font-medium text-gray-900 rounded-lg bg-gray-50" placeholder="Cari Karyawan" 
                        required>
                  </div>
                </div>
                <div class="flex justify-end gap-3 mr-6">
                  <select id="posisi" class="font-normal focus:outline-none border border-[#95999D] focus:border focus:border-[#B7C0D8] hover:bg-[#E3E8FF] text-sm rounded-lg block w-full lg:w-auto h-[45px] p-2">
                    <option value="">Posisi</option>
                    <option value="backend">Back-End Developer</option>
                    <option value="backend">DevOps</option>
                    <option value="backend">Front-End Developer</option>
                    <option value="backend">Quality Assurance</option>
                    <option value="backend">UI/UX Designer</option>
                  </select>
                  <BlueButton class="save-btn" @click="showAddModal = true" :showIcon="true">
                      <template v-slot:message>Buat Kategori</template>
                  </BlueButton>
                  </div> 
              </div>
              <div class="overflow-auto rounded-lg shadow mt-8">
                <table class="w-full">
                  <thead class="bg-gray-50 border-b-2 border-gray-100">
                    <tr class="text-left text-[#0C1662] font-bold md:text-center">
                      <th class="w-20 p-3 text-sm tracking-wide hidden md:table-cell">No.</th>
                      <th class="w-20 p-3 text-sm tracking-wide hidden md:table-cell">Kategori</th>
                      <th class="w-24 p-3 text-sm tracking-wide hidden md:table-cell">Posisi</th>
                      <th class="w-24 p-3 text-sm tracking-wide hidden md:table-cell">Status</th>
                      <th class="w-32 p-3 text-sm tracking-wide hidden md:table-cell">Aksi</th>
                      <th class="w-32 p-3 text-sm tracking-wide hidden md:table-cell">Riwayat</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-100">
                    <tr class="text-left md:text-center bg-white block md:table-row" v-for="category in categories" :key="category.id">
                    <td class="p-3 font-medium text-sm text-gray-700 whitespace-nowrap block md:table-cell" data-title="id">{{ category.id }}</td>
                    <td class="p-3 font-medium text-sm text-gray-700 whitespace-nowrap block md:table-cell" data-title="kategori">{{ category.kategori }}</td>
                    <td class="p-3 font-medium text-sm text-gray-700 whitespace-nowrap block md:table-cell" data-title="posisi">{{ category.posisi }}</td>
                    <td class="p-3 font-medium text-sm text-gray-700 whitespace-nowrap block md:table-cell" data-title="status">
                      <t-tag 
                          v-show="category.status === 'Aktif'"
                          variant="success"
                      >
                          {{category.status}}
                      </t-tag>
                      <t-tag 
                          v-show="category.status === 'Nonaktif'"
                          variant="danger"
                      >
                          {{category.status}}
                      </t-tag>
                    </td>
                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap block md:table-cell" data-title="total">
                        <button @click="showEditModal = true" class="bg-black rounded-md p-2">
                            <img src="~/assets/img/icons/edit.svg" />
                        </button>
                        <button 
                            class="bg-red-700 rounded-md p-2"
                            v-if="category.status === 'Aktif'"
                            @click="changeStatus(category, 'Nonaktif')"
                        >
                            <img src="~/assets/img/icons/cancel.svg" />
                        </button>
                        <button 
                            class="bg-green-700 rounded-md p-2"
                            v-if="category.status === 'Nonaktif'"
                            @click="changeStatus(category, 'Aktif')"
                        >
                            <img src="~/assets/img/icons/checklist.svg" />
                        </button>
                    </td>
                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap block md:table-cell" data-title="total">
                      <button class="bg-black font-semibold px-6 py-2 text-white w-auto rounded-md">
                        <nuxt-link :to="`/admin/kategori/${_kategoriId}`">
                          Detail
                        </nuxt-link>
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
                          class="hover:cursor-not-allowed  border border-slate-200 block w-full lg:w-[350px] h-[45px] p-2 ps-10 text-sm font-medium text-gray-900 rounded-lg bg-gray-50" placeholder="Cari Karyawan..." 
                          :disabled="true">
                    </div>
                  </div>
                  <div class="flex justify-end gap-3 mr-6">
                    <select id="posisi"
                     class="font-normal hover:cursor-not-allowed focus:outline-slate-300 hover:bg-[#E3E8FF] text-sm rounded-lg block w-full lg:w-auto h-[45px] p-2" 
                     :disabled="true">
                      <option value="">Posisi</option>
                      <option value="backend">Back-End Developer</option>
                      <option value="backend">DevOps</option>
                      <option value="backend">Front-End Developer</option>
                      <option value="backend">Quality Assurance</option>
                      <option value="backend">UI/UX Designer</option>
                    </select>
                    <BlueButton class="save-btn" @click="showAddModal = true" :showIcon="true">
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
</template>
  
<script>
import { category } from '@/models/category'
import VCard from '@/components/UI/VCard.vue';
import BlueButton from '@/components/UI/BlueButton.vue';
import ModalMessage from '../../../components/UI/ModalMessage.vue';

export default {
    auth: false,
    layout: 'default-admin',
    components: { VCard, BlueButton, ModalMessage },
    data() {
        return {
            categories: category,
            showAddModal: false,
            showEditModal: false
        }
    },
    methods: {
        changeStatus(category, newStatus) {
            category.status = newStatus;
        },
        tambahKategori() {
            this.showAddModal = true;
        },
        editKategori() {
            this.showEditModal = true;
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
    .responsive-table td:nth-of-type(2):before { content: "Kategori"; }
    .responsive-table td:nth-of-type(3):before { content: "Posisi"; }
    .responsive-table td:nth-of-type(4):before { content: "Status"; }
    .responsive-table td:nth-of-type(5):before { content: "Aksi"; }
    .responsive-table td:nth-of-type(6):before { content: "Riwayat"; }
  }
  
  @media (min-width:  1800px) {
    .responsive-table {
      width:  100%;
    }
  }
</style>