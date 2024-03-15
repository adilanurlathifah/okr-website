<template>
    <div>
        <div class="m-3">
          <h1 class="text-2xl font-bold">
            Penilaian   
          </h1>
          <h5 class="text-slate-400 mt-1">
            Berikan nilai dan hasil pencapaian anggota tim anda 
          </h5>
        </div>
        <VCard>
            <div v-if="dataPenilaian.length > 0">
              <div class="flex flex-col md:flex-row gap-2 mt-2 md:px-2 px-4 justify-between">
                <div class="flex flex-col md:flex-row">
                <div class="relative ml-4">
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
                          <option value="">Pilih Periode</option>
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
                    <BlueButton @click="showModal = true" :showIcon="true">
                        <template v-slot:message>Tambah Nilai</template>
                    </BlueButton>
                    <OKRModal :show="showModal" @close="showModal = false" />
                </div> 
            </div>
              <div class="container px-5 py-6 mb-10">
                <div class="flex flex-row">
                  <table class="table table-fixed w-full h-auto responsive-table">
                    <thead>
                      <tr class="mb-2 text-center text-[#0C1662]">
                        <th class="py-3">No</th>
                        <th>Nama Karyawan</th>
                        <th>Posisi</th>
                        <th>Periode</th>
                        <th>Total</th>
                        <th>Aksi</th>
                      </tr>
                    </thead>
                    <tbody class="text-center">
                      <tr class="hover:bg-slate-50" v-for="data in dataPenilaian" :key="data.id">
                        <td class="py-3">{{data.id}}</td>
                        <td>{{data.karyawan}}</td>
                        <td>{{data.posisi}}</td>
                        <td>{{data.periode}}</td>
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
                  class="block w-full lg:w-[350px] border border-slate-200 focus:outline-slate-300 h-[45px] p-2 ps-10 text-[15px] font-medium text-gray-900 border border-gray-300 rounded-lg bg-gray-50 cursor-not-allowed" 
                  placeholder="Cari Anggota Tim"  
                  disabled>
                  </div>
              </div>
              <div class="flex justify-end gap-3 mr-6">
                  <div class="flex flex-row gap-1">
                    <select 
                      id="posisi" 
                      class="font-normal focus:outline-none text-[15px] rounded-lg block w-full lg:w-auto h-[45px] p-2 cursor-not-allowed" 
                      :disabled="true">
                        <option value="">Posisi</option>
                        <option value="backend">Back-End Developer</option>
                        <option value="backend">DevOps</option>
                        <option value="backend">Front-End Developer</option>
                        <option value="backend">Quality Assurance</option>
                        <option value="backend">UI/UX Designer</option>
                    </select>
                      <select 
                        id="tahun" 
                        class="font-semibold focus:outline-none text-[15px] rounded-lg block w-full lg:w-auto h-[45px] p-2 cursor-not-allowed" 
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
                    id="status" 
                    class="font-semibold focus:outline-none text-[15px] rounded-lg block w-full lg:w-auto h-[45px] p-2 cursor-not-allowed"
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
                  <img src="~/assets/img/no-data/nodata-penilaian.svg" alt="Not Found" class="mb-4 w-[139px] h-[139px] object-contain">
                  <p class="text-center text-sm">
                    Tambahkan Penilaian baru yang ingin kamu gunakan untuk penilaian kinerjamu!<br/>Cek daftar Penilaian di sini, aktifkan atau nonaktifkan sesuai kebutuhanmu.
                  </p>
              </div>
            </div>
        </VCard>
    </div>
</template>
  
<script>
import { nilai } from '@/models/penilaian'
import VCard from '@/components/UI/VCard.vue';
import BlueButton from '@/components/UI/BlueButton.vue';
import OKRModal from '@/components/Modals/OKRModal.vue'

export default {
    auth: false,
    layout: 'default-admin',
    components: { VCard, BlueButton, OKRModal },
    data() {
        return {
            dataPenilaian: nilai,
            showModal: false
        }
    },
    methods: {
        changeStatus(category, newStatus) {
            category.status = newStatus;
        },
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
    .responsive-table td:nth-of-type(2):before { content: "PIC"; }
    .responsive-table td:nth-of-type(3):before { content: "Karyawan"; }
    .responsive-table td:nth-of-type(4):before { content: "Posisi"; }
    .responsive-table td:nth-of-type(5):before { content: "Periode"; }
    .responsive-table td:nth-of-type(6):before { content: "Total"; }
    .responsive-table td:nth-of-type(7):before { content: "Aksi"; }
  }
  
  @media (min-width:  1800px) {
    .responsive-table {
      width:  100%;
    }
  }
</style>