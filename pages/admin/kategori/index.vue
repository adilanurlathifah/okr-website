<template>
    <div>
        <div class="m-3">
          <h1 class="text-2xl font-bold">
            Kategori   
          </h1>
          <h5 class="text-slate-400 mt-1">
            Periksa kategorimu disini, mengaktifkan ataupun menonaktifkan
          </h5>
        </div>
        <VCard>
            <div v-if="categories.length > 0">
              <div class="flex flex-row pt-8 gap-2  justify-between">
                <div class="flex flex-row">
                  <div class="relative ml-4">

                      <div class="absolute inset-y-0 flex items-center ps-3 pointer-events-none">
                        <img src="~/assets/img/icons/search.svg"/>
                      </div>
                      <input 
                        type="search" 
                        id="default-search" 
                        class="block w-full lg:w-[350px] focus:outline-slate-200 border border-slate-200 h-[45px] p-2 ps-10 text-[15px] font-medium text-gray-900 rounded-lg bg-gray-50" placeholder="Cari Karyawan" 
                        required>
                  </div>
                </div>
                <div class="flex justify-end gap-3 mr-6">
                  <select id="posisi" class="font-normal focus:outline-none  border border-[#95999D] hover:bg-[#E3E8FF] focus border focus:border-[#B7C0D8] text-[15px] rounded-lg block w-full lg:w-auto h-[45px] p-2">
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
              <div class="container px-5 py-6 mb-10">
                <div class="flex flex-row">
                  <table class="table w-full h-auto responsive-table">
                    <thead>
                      <tr class="mb-2 text-center text-[#0C1662]">
                        <th class="py-3">No</th>
                        <th>Kategori</th>
                        <th>Posisi</th>
                        <th>Status</th>
                        <th>Aksi</th>
                        <th>Riwayat</th>
                      </tr>
                    </thead>
                    <tbody class="text-center">
                      <tr class="hover:bg-slate-50" v-for="category in categories" :key="category.id">
                        <td class="py-3">{{category.id}}</td>
                        <td>{{category.kategori}}</td>
                        <td>{{category.posisi}}</td>
                        <td>
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
                        <td>
                          <button  @click="showEditModal = true" class="bg-black rounded-md p-2">
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
                        <td>
                          <button class="bg-black font-semibold px-6 py-2 text-white w-auto rounded-md">
                            <!-- <nuxt-link :to="`/admin/kategori/${kategoriId}`"> -->
                                Detail
                            <!-- </nuxt-link> -->
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
                          class="hover:cursor-not-allowed  border border-slate-200 block w-full lg:w-[350px] h-[45px] p-2 ps-10 text-[15px] font-medium text-gray-900 rounded-lg bg-gray-50" placeholder="Cari Karyawan..." 
                          :disabled="true">
                    </div>
                  </div>
                  <div class="flex justify-end gap-3 mr-6">
                    <select id="posisi"
                     class="font-normal hover:cursor-not-allowed focus:outline-slate-300 hover:bg-slate-100 text-[15px] rounded-lg block w-full lg:w-auto h-[45px] p-2" 
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
        <ModalMessage v-show="showAddModal" @close-modal="showAddModal = false">
          <div class="flex flex-col">
            <h1 class="font-bold text-xl ml-6 text-left">Tambah Kategori</h1>
            <div class="flex flex-row justify-center mt-4 pt-4">
              <div class="relative">
                  <div class="absolute inset-y-0 flex items-center ps-3 pointer-events-none">
                    <img src="~/assets/img/icons/round-edit.svg"/>
                  </div>
                  <input 
                    type="input" 
                    class="w-[450px] text-base focus:outline-slate-200 block h-[45px] p-2 ps-10 text-sm font-medium text-gray-900 rounded-lg border border-slate-300" 
                    placeholder="Tulis Kategori Disini" 
                    required
                  >
              </div>
            </div>
            <div class="flex flex-col justify-center mt-3 px-6">
              <label class="font-semibold text-left text-base my-2">Pilih Posisi</label>
              <select id="posisi" class="focus:outline-slate-200 w-[450px] border border-slate-300 px-3 block h-[45px] text-[15px] font-medium text-gray-900 rounded-lg" >
                <option value="">Posisi</option>
                <option value="backend">Back-End Developer</option>
                <option value="devops">DevOps</option>
                <option value="frontend">Front-End Developer</option>
                <option value="qa">Quality Assurance</option>
                <option value="uiux">UI/UX Designer</option>
              </select>
            </div>
          </div>
          <div class="flex flex-row justify-end gap-2 pt-10 pb-3 pr-6">
            <BlueButton 
              :button-color="false" 
              @click="tambahKategori" 
              :showIcon="true" 
              icon-color="#ffffff"
              class="text-white"
            >
                <template v-slot:message>Buat Kategori</template>
            </BlueButton>
            <button 
              type="button" 
              class="flex flex-row font-semibold text-sm md:text-[15px] text-black text-center border border-black rounded-md w-auto h-[45px] px-6 py-3 shadow-sm gap-2 whitespace-nowrap"
              @click="showAddModal = false">
                  Batal
            </button>
          </div>
        </ModalMessage>
        <ModalMessage v-show="showEditModal" @close-modal="showEditModal = false">
          <div class="flex flex-col">
            <h1 class="font-bold text-xl ml-6 text-left">Edit Kategori</h1>
            <div class="flex flex-col justify-center mt-4 px-6">
              <label class="font-semibold text-left text-base my-2">Kategori</label>
              <select id="kategori" class="w-[450px] border border-slate-300 px-3 focus:outline-slate-300 block h-[45px] text-[15px] font-medium text-gray-900 rounded-lg" >
                <option value="">Pilih Kategori</option>
                <option value="kehadiran">Kehadiran</option>
                <option value="performa">Performa</option>
                <option value="kualitas">Kualitas</option>
                <option value="produktivitas">Produktivitas</option>
              </select>
            </div>
            <div class="flex flex-col justify-center mt-3 px-6">
              <label class="font-semibold text-left text-base my-2">Posisi</label>
              <select id="posisi" class="focus:outline-slate-200 w-[450px] border border-slate-300 px-3 block h-[45px] text-[15px] font-medium text-gray-900 rounded-lg" >
                <option value="">Pilih Posisi</option>
                <option value="backend">Back-End Developer</option>
                <option value="devops">DevOps</option>
                <option value="frontend">Front-End Developer</option>
                <option value="qa">Quality Assurance</option>
                <option value="uiux">UI/UX Designer</option>
              </select>
            </div>
          </div>
          <div class="flex flex-row justify-end gap-2 pt-10 pb-3 pr-6">
            <BlueButton 
              :button-color="false" 
              @click="editKategori" 
              :showIcon="false" 
              icon-color="#ffffff"
              class="text-white"
            >
                <template v-slot:message>Simpan</template>
            </BlueButton>
            <button 
              type="button" 
              class="flex flex-row font-semibold text-sm md:text-[15px] text-black text-center border border-black rounded-md w-auto h-[45px] px-6 py-3 shadow-sm gap-2 whitespace-nowrap"
              @click="showEditModal = false">
                  Batal
            </button>
          </div>
        </ModalMessage>
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