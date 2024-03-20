<template>
  <div>
      <div class="flex flex-col md:justify-between md:flex-row">
        <div class="flex flex-col mb-4">
          <h1 class="text-xl font-bold text-left">
            Selamat Datang {{ $auth.user.name }}
          </h1>
          <p class="text-slate-400 mt-1 font-semibold text-sm text-left">
            Silahkan cek capaian target Objective Key Results tim disini
          </p>
        </div>
        <div>
          <div class="ml-auto lg:ml-0">
            <button
              @click="buttonClicked"
              type="button"
              class="w-auto text-sm font-semibold items-center gap-1 bg-[#191F2F] whitespace-nowrap flex flex-row text-white rounded-md px-6 py-2"
            >
              Undang Anggota
              <img class="ml-1 mt-[0.5px]" src="~/assets/img/icons/plus.svg" />
            </button>
          </div>
        </div>
      </div>
      <div class="flex flex-col py-3">
        <h4 class="font-bold text-xl py-2">Departement</h4>
        <div class="flex flex-col lg:flex-row gap-10">
          <div class="container bg-[#191F2F] px-2 py-2 flex justify-center rounded-xl w-full h-auto">
            <div class="flex flex-row p-3">
              <div class="flex flex-col text-center items-center mt-1 px-1">
                <h2 class="text-2xl text-white font-semibold">79</h2>
                <p class="text-white text-sm font-normal">Total</p>
              </div>
              <div class="flex flex-col text-left ml-3 pl-4 pr-16 py-2 bg-[#484D59] rounded-md md:w-auto h-auto">
                <h2 class="text-lg text-white font-semibold">Developer</h2>
                <p class="text-white text-sm font-normal">4 karyawan</p>
              </div>
            </div>
          </div>
          <div class="container bg-[#191F2F] px-2 py-2 flex justify-center rounded-xl w-full h-auto">
            <div class="flex flex-row p-3">
              <div class="flex flex-col text-center items-center mt-1 px-1">
                <h2 class="text-2xl text-white font-semibold">79</h2>
                <p class="text-white text-sm font-normal">Total</p>
              </div>
              <div class="flex flex-col text-left ml-3 pl-4 pr-16 py-2 bg-[#484D59] rounded-md md:w-auto h-auto">
                <h2 class="text-lg text-white font-semibold">Creative</h2>
                <p class="text-white text-sm font-normal">4 karyawan</p>
              </div>
            </div>
          </div>
          <div class="container bg-[#191F2F] px-2 py-2 flex justify-center rounded-xl w-full h-auto">
            <div class="flex flex-row p-3">
              <div class="flex flex-col text-center items-center mt-1 px-1">
                <h2 class="text-2xl text-white font-semibold">79</h2>
                <p class="text-white text-sm font-normal">Total</p>
              </div>
              <div class="flex flex-col text-left ml-3 pl-4 pr-16 py-2 bg-[#484D59] rounded-md md:w-auto h-auto">
                <h2 class="text-lg text-white font-semibold">Finance</h2>
                <p class="text-white text-sm font-normal">4 karyawan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <InfoDashboard />
      </div>
      <div class="flex flex-col lg:flex-row my-8 gap-3">
        <VCard class="flex flex-col p-3">
          <div class="flex flex-row items-center justify-between gap-3 p-3">
            <h5 class="font-bold text-lg">Total Progress Semua Divisi</h5>
            <img src="~/assets/img/icons/settings.svg" class="object-contain w-4 h-3"/>
          </div>
          <div class="overflow-auto">
            <table class="w-full table-fixed border border-slate-300 md:border-none">
              <thead>
                <tr class="text-[#0C1662] font-bold text-left">
                  <th class="w-2/3 p-3 text-sm tracking-wide hidden md:table-cell">PIC</th>
                  <th class="w-1/3 p-3 text-sm tracking-wide hidden md:table-cell">Divisi</th>
                  <th class="w-1/3 p-3 text-sm tracking-wide hidden md:table-cell">Total</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-300 md:divide-none">
                <tr class="bg-white text-left block md:table-row" v-for="data in totalProgress" :key="data.id">
                  <td class="p-3 font-medium text-sm text-gray-700 whitespace-nowrap block md:table-cell" data-title="pic">{{ data.pic }}</td>
                  <td class="p-3 font-medium text-sm text-gray-700 whitespace-nowrap block md:table-cell" data-title="divisi">{{ data.divisi }}</td>
                  <td class="p-3 font-medium text-sm text-gray-700 whitespace-nowrap block md:table-cell" data-title="total">{{ data.total }} %</td>
                </tr>
              </tbody>
            </table>
          </div>
        </VCard>
        <VCard class="flex flex-col py-2 px-2 md:pb-1">
          <div class="flex flex-row justify-between p-3 gap-3">
              <h5 class="font-bold text-lg">Aktivitas Terakhir</h5>
              <p class="text-semibold text-sm">Lihat Semua</p>
          </div>
          <div class="container w-auto bg-indigo-50 rounded-md px-3 mx-auto py-2 overflow-y-auto" style="max-height: 11rem;">
            <div class="flex flex-row gap-2 whitespace-nowrap p-2" v-for="history in actHistory" :key="history.id">
                <div class="flex-grow">
                  <p class="text-sm font-semibold">{{ history.role }}</p>
                </div>
                <div class="flex-grow-1">
                  <p class="text-sm">{{ history.activity }}</p>
                </div>
            </div>
          </div>
        </VCard>
      </div>
      <VCard class="p-3">
         <h1 class="font-bold text-lg p-4">Developer</h1>
         <div id="pic-bar" class="bg-[#F6F8FF] gap-2 text-sm flex flex-row items-center px-3 mx-4 rounded-md w-auto lg:w-[350px] h-[45px]">
            <p class="font-semibold text-sm">{{ picData[0].role }}</p>
            <p class="text-sm">{{ picData[0].nama }}</p>
            <p class="text-sm">{{ picData[0].email }}</p>
          </div>
          <div v-if="teams.length > 0">
              <div class="flex flex-col md:flex-row gap-2 mt-2 md:px-4 px-4 justify-between">
                <div class="flex flex-col md:flex-row">
                <div class="relative">
                    <div class="absolute inset-y-0 flex items-center ps-3 pointer-events-none">
                        <img src="~/assets/img/icons/search.svg"/>
                    </div>
                    <input 
                      type="search" 
                      id="default-search" 
                      class="block w-full lg:w-[350px] border border-slate-200 focus:outline-slate-300 h-[45px] p-2 ps-10 text-sm font-medium text-gray-900 border border-gray-300 rounded-lg bg-gray-50" 
                      placeholder="Cari Anggota Tim" 
                      required>
                  </div>
                </div>
                <div class="flex flex-col md:flex-row justify-end gap-3">
                  <div class="flex flex-row gap-1">
                    <select id="posisi" class="font-normal focus:outline-none border border-[#95999D] focus:border focus:border-[#B7C0D8] hover:bg-[#E3E8FF] text-sm rounded-lg block w-full lg:w-auto h-[45px] p-2">
                        <option value="">Posisi</option>
                        <option value="backend">Back-End Developer</option>
                        <option value="backend">DevOps</option>
                        <option value="backend">Front-End Developer</option>
                        <option value="backend">Quality Assurance</option>
                        <option value="backend">UI/UX Designer</option>
                    </select>
                    <select id="periode" class="font-semibold focus:outline-none border border-[#95999D] focus:border focus:border-[#B7C0D8] hover:bg-[#E3E8FF] text-sm rounded-lg block w-full lg:w-auto h-[45px] p-2 mr-2">
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
                <t-dropdown variant="dark" text="Tambah">
                  <div class="py-1 rounded-md shadow-xs">
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                      role="menuitem"
                    >
                     Admin
                    </a>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                      role="menuitem"
                    >
                      Karyawan
                    </a>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                      role="menuitem"
                    >
                      PIC
                    </a>
                  </div>
                </t-dropdown>
              </div>
            </div>
            <div class="overflow-auto rounded-lg shadow mt-8">
              <table class="w-full">
                <thead class="bg-gray-50 border-b-2 border-gray-100">
                  <tr class="text-left text-[#0C1662] font-bold md:text-center">
                    <th class="w-20 p-3 text-sm tracking-wide hidden md:table-cell">No.</th>
                    <th class="w-20 p-3 text-sm tracking-wide hidden md:table-cell">Nama Karyawan</th>
                    <th class="w-24 p-3 text-sm tracking-wide hidden md:table-cell">Divisi</th>
                    <th class="w-24 p-3 text-sm tracking-wide hidden md:table-cell">Posisi</th>
                    <th class="w-32 p-3 text-sm tracking-wide hidden md:table-cell">Total</th>
                    <th class="w-32 p-3 text-sm tracking-wide hidden md:table-cell">Aksi</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-100">
                <tr class="text-left md:text-center bg-white block md:table-row" v-for="data in teams" :key="data.id">
                  <td class="p-3 font-medium text-sm text-gray-700 whitespace-nowrap block md:table-cell" data-title="no">{{ data.id }}</td>
                  <td class="p-3 font-medium text-sm text-gray-700 whitespace-nowrap block md:table-cell" data-title="nama">{{ data.nama }}</td>
                  <td class="p-3 font-medium text-sm text-gray-700 whitespace-nowrap block md:table-cell" data-title="divisi">{{ data.divisi }}</td>
                  <td class="p-3 font-medium text-sm text-gray-700 whitespace-nowrap block md:table-cell" data-title="pekerjaan">{{ data.pekerjaan }}</td>
                  <td class="p-3 font-medium text-sm text-gray-700 whitespace-nowrap block md:table-cell" data-title="total">{{ data.total }} %</td>
                  <td class="p-3 font-medium text-sm whitespace-nowrap block md:table-cell" data-title="total">
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
      </VCard>
  </div>
</template>

<script>
import { IT } from '@/models/IT'
import { PIC } from '@/models/PIC'
import { total } from '@/models/total-progress'
import { lastActivity } from '@/models/last-activity'
import VCard from '@/components/UI/VCard.vue';
import BlueButton from '@/components/UI/BlueButton.vue';
import ModalMessage from '@/components/UI/ModalMessage.vue';
import InfoDashboard from '@/components/UI/InfoDashboard.vue';

export default {
  // auth: false,
  middleware: 'auth',
  layout: 'default-admin',
  components: { VCard, BlueButton, ModalMessage, InfoDashboard },
  data() {
      return {
          teams: IT,
          picData: PIC,
          totalProgress: total,
          actHistory: lastActivity,
          showAddModal: false,
          showEditModal: false,
          isOpen: false
      }
  },
  methods: {
      toggleDropdown() {
        this.isOpen = !this.isOpen;
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
</style>