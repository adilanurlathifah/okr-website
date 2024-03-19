<template>
    <div>
        <div class="m-3">
          <h1 class="text-2xl font-bold">
            Divisi   
          </h1>
          <h5 class="text-slate-400 mt-1">
            Anda bisa menambah ataupun mengaktifkan kategori divisi disini
          </h5>
        </div>
        <VCard>
            <div v-if="dataDivisi.length > 0">
              <div class="flex flex-col md:flex-row gap-2 pt-8 md:px-2 px-4 justify-between items-center">
                <div class="flex justify-center w-full md:w-auto">
                  <div class="relative w-full">
                      <div class="absolute inset-y-0 flex items-center ps-3 pointer-events-none">
                          <img src="~/assets/img/icons/search.svg"/>
                      </div>
                      <input 
                          type="search" 
                          id="default-search" 
                          class="block w-full md:w-[350px] border border-slate-200 focus:outline-slate-200 h-[45px] p-2 ps-10 text-[15px] font-medium text-gray-900 rounded-lg bg-gray-50" 
                          placeholder="Cari OKR" 
                          required>
                  </div>
                  </div>
                  <div class="flex flex-col md:flex-row justify-end gap-3 w-full md:w-auto">
                      <div class="flex flex-col md:flex-row gap-1 w-full md:w-auto">
                        <select id="status" class="font-semibold focus:outline-none hover:bg-slate-100 text-[15px] rounded-lg block w-full lg:w-auto h-[45px] p-2">
                            <option value="">Semua Status</option>
                            <option value="aktif">Aktif</option>
                            <option value="nonaktif">Tidak Aktif</option>
                        </select>
                      </div>
                      <BlueButton class="save-btn" @click="showModal = true" :showIcon="true">
                          <template v-slot:message>Tambah Divisi</template>
                      </BlueButton>
                  </div> 
                </div>
              <div class="container px-5 py-6 mb-10">
                <div class="flex flex-row">
                  <table class="table w-full h-auto responsive-table">
                    <thead>
                      <tr class="mb-2 text-center text-[#0C1662]">
                        <th class="py-3">No</th>
                        <th>Divisi</th>
                        <th>Status</th>
                        <th>Aksi</th>
                      </tr>
                    </thead>
                    <tbody class="text-center">
                      <tr class="hover:bg-slate-50" v-for="data in dataDivisi" :key="data.id">
                        <td class="py-3">{{data.id}}</td>
                        <td>{{data.divisi}}</td>
                        <td>
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
                        <td>
                          <button class="bg-black rounded-md p-2">
                              <img src="~/assets/img/icons/edit.svg" />
                          </button>
                          <button 
                              class="bg-red-700 rounded-md p-2"
                              v-if="data.status === 'Aktif'"
                              @click="changeStatus(data, 'Nonaktif')"
                          >
                              <img src="~/assets/img/icons/cancel.svg" />
                          </button>
                          <button 
                              class="bg-green-700 rounded-md p-2"
                              v-if="data.status === 'Nonaktif'"
                              @click="changeStatus(data, 'Aktif')"
                          >
                              <img src="~/assets/img/icons/checklist.svg" />
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
          <div class="flex flex-col md:flex-row gap-2 mt-2 md:px-2 px-4 justify-between">
              <div class="flex flex-col md:flex-row">
                <div class="relative ml-4">
                    <div class="absolute inset-y-0 flex items-center ps-3 pointer-events-none">
                        <img src="~/assets/img/icons/search.svg"/>
                    </div>
                    <input 
                      type="search" 
                      id="default-search" 
                      class="block w-full lg:w-[350px] cursor-not-allowed border border-slate-200 focus:outline-slate-300 h-[45px] p-2 ps-10 text-[15px] font-medium text-gray-900 border border-gray-300 rounded-lg bg-gray-50" 
                      placeholder="Cari Divisi" 
                      :disabled="true">
                  </div>
                </div>
                <div class="flex flex-col md:flex-row justify-end gap-3">
                      <div class="flex flex-col md:flex-row gap-1">
                        <select id="status" class="font-semibold cursor-not-allowed focus:outline-none hover:bg-slate-100 text-[15px] rounded-lg block w-full lg:w-auto h-[45px] p-2" :disabled="true">
                          <option value="">Semua Status</option>
                          <option value="aktif">Aktif</option>
                          <option value="nonaktif">Tidak Aktif</option>
                      </select>
                    </div>
                    <BlueButton class="save-btn" @click="showModal = true" :showIcon="true">
                        <template v-slot:message>Tambah Divisi</template>
                    </BlueButton>
                </div> 
            </div>
              <div class="flex flex-col items-center justify-center my-8">
                  <img src="~/assets/img/no-data/nodata-divisi.svg" alt="Not Found" class="mb-4 w-[139px] h-[139px] object-contain">
                  <p class="text-center text-sm">
                    Tambahkan Divisi baru yang ingin kamu gunakan untuk penilaian kinerjamu!<br/>Cek daftar Divisi di sini, aktifkan atau nonaktifkan sesuai kebutuhanmu.
                  </p>
              </div>
            </div>
        </VCard>
        <ModalMessage v-show="showModal" @close-modal="showModal = false">
          <div class="flex flex-col">
            <h1 class="font-bold text-xl ml-6 text-left">Tambah OKR</h1>
            <div class="flex flex-col justify-center mt-3 px-6">
              <label class="font-semibold text-left text-base my-2">Kategori</label>
              <div class="flex flex-row">
                <select id="kategori" class="w-[450px] border border-slate-300 px-3 focus:outline-slate-300 block h-[45px] text-[15px] font-medium text-gray-900 rounded-lg" >
                  <option value="">Pilih Kategori</option>
                  <option value="kehadiran">Kehadiran</option>
                  <option value="performa">Performa</option>
                  <option value="kualitas">Kualitas</option>
                  <option value="produktivitas">Produktivitas</option>
                </select>
              </div>
            </div>
            <div class="flex flex-col justify-center mt-3 px-6">
                <label class="font-semibold text-left text-base my-2">Total</label>
                <input 
                  type="input" 
                  class="w-[450px] focus:outline-slate-300 block h-[45px] p-2 text-[15px] font-medium text-gray-900 rounded-lg border border-slate-300" 
                  placeholder="Masukan Total OKR" 
                  required
                >
            </div>
            <div class="flex flex-col justify-center mt-3 px-6">
              <label class="font-semibold text-left text-base my-2">Kategori</label>
              <div class="flex flex-row gap-3">
                  <select id="periode" class="w-[450px] border border-slate-300 px-3 focus:outline-slate-300 block h-[45px] text-[15px] font-medium text-gray-900 rounded-lg">
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
                  <select id="tahun" class="w-[450px] border border-slate-300 px-3 focus:outline-slate-300 block h-[45px] text-[15px] font-medium text-gray-900 rounded-lg">
                    <option value="">Tahun</option>
                    <option value="2024">2024</option>
                    <option value="2024">2023</option>
                    <option value="2024">2022</option>
                  </select>
                </div>
            </div>
          </div>
          <div class="flex flex-row justify-end gap-2 pt-10 pb-3 pr-6">
            <BlueButton 
              :button-color="false" 
              @click="tambahOKR" 
              :showIcon="false" 
              icon-color="#ffffff"
              class="text-white"
            >
                <template v-slot:message>Tambah Data OKR</template>
            </BlueButton>
            <button 
              type="button" 
              class="flex flex-row font-semibold text-base md:text-[15px] text-black text-center border border-black rounded-md w-auto h-[45px] px-6 py-3 shadow-sm gap-2 whitespace-nowrap"
              @click="showModal = false">
                  Batal
            </button>
          </div>
        </ModalMessage>
    </div>
</template>
  
<script>
import { divisi } from '@/models/divisi'
import VCard from '@/components/UI/VCard.vue';
import BlueButton from '@/components/UI/BlueButton.vue';
import ModalMessage from '@/components/UI/ModalMessage.vue';

export default {
    auth: false,
    layout: 'default-admin',
    components: { VCard, BlueButton, ModalMessage },
    data() {
        return {
            dataDivisi: divisi,
            showModal: false
        }
    },
    methods: {
        changeStatus(data, newStatus) {
            data.status = newStatus;
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
    .responsive-table td:nth-of-type(2):before { content: "Posisi"; }
    .responsive-table td:nth-of-type(3):before { content: "Divisi"; }
    .responsive-table td:nth-of-type(4):before { content: "Status"; }
    .responsive-table td:nth-of-type(5):before { content: "Aksi"; }
  }
  
  @media (min-width:  1800px) {
    .responsive-table {
      width:  100%;
    }
  }
</style>