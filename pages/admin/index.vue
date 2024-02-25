<template>
    <div class="flex h-auto bg-gray-100">
      <div class="px-10 pt-28 overflow-hidden md:ml-[300px]">
          <div class="flex flex-col">
            <h1 class="text-2xl font-bold">
              Selamat Datang {{ $store.state.user ? `${$store.state.user.username}` : 'Guest' }}
            </h1>
            <h5 class="text-slate-400 mt-1">
              Silahkan cek capaian target Objective Key Results tim disini 
            </h5>
          </div>
          <div id="dashboard-container" class="bg-white h-4/5 rounded-3xl shadow-lg w-auto mt-8 mr-10">
            <div class="flex flex-row items-center justify-between">
              <div class="flex flex-col">
              <h1 class="text-2xl font-bold text-[#0C1662] px-5 py-6">
                Semua Tim 
              </h1>                     
              <form>   
                  <div class="relative ml-4">
                      <div class="absolute inset-y-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-5 h-6" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.8833 15.375L9.42083 10.9125C9.06667 11.1958 8.65937 11.4201 8.19896 11.5854C7.73854 11.7507 7.24861 11.8333 6.72917 11.8333C5.44236 11.8333 4.35342 11.3876 3.46233 10.496C2.57125 9.60444 2.12547 8.5155 2.125 7.22917C2.125 5.94236 2.57078 4.85342 3.46233 3.96233C4.35389 3.07125 5.44283 2.62547 6.72917 2.625C8.01597 2.625 9.10515 3.07078 9.99671 3.96233C10.8883 4.85389 11.3338 5.94283 11.3333 7.22917C11.3333 7.74861 11.2507 8.23854 11.0854 8.69896C10.9201 9.15937 10.6958 9.56667 10.4125 9.92083L14.875 14.3833L13.8833 15.375ZM6.72917 10.4167C7.61458 10.4167 8.36731 10.1069 8.98733 9.48733C9.60736 8.86778 9.91714 8.11506 9.91667 7.22917C9.91667 6.34375 9.60689 5.59126 8.98733 4.97171C8.36778 4.35215 7.61506 4.04214 6.72917 4.04167C5.84375 4.04167 5.09126 4.35168 4.47171 4.97171C3.85215 5.59174 3.54214 6.34422 3.54167 7.22917C3.54167 8.11458 3.85168 8.86731 4.47171 9.48733C5.09174 10.1074 5.84422 10.4171 6.72917 10.4167Z" fill="#95999D"/>
                        </svg>
                      </div>
                      <input type="search" id="default-search" class="block w-[359px] h-[45px] p-2 ps-10 text-base font-medium text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Cari Karyawan..." required>
                  </div>
              </form>
              </div>
              <div class="flex flex-row mr-10">
                <!-- <div class="mt-20">
                  <select id="posisi" class="shadow-sm bg-gray-50 border border-gray-300 text-base rounded-lg block w-[200px] h-[45px] p-2">
                  <option value="">Semua Tim</option>
                  <option value="finance">Finance</option>
                  <option value="kreatif">Kreatif</option>
                  <option value="IT">IT</option>
                  </select>
                </div> -->
                <div class="items-center mx-4">
                  <img class="mt-[90px]" src="~/assets/img/filter.svg" />
                </div>
                <button class="mt-20 text-[#191F2F] font-semibold">02 January 2024</button>
              </div>
            </div>
          <div class="container px-5 py-6 mb-10">
            <div class="flex flex-row">
              <table class="table w-full h-auto font-display">
                <thead>
                  <tr class="border-b-2 text-left text-[#0C1662]">
                    <th>No</th>
                    <th>Nama</th>
                    <th>Divisi</th>
                    <th>Pekerjaan</th>
                    <th>Performa</th>
                    <th>Kehadiran</th>
                    <th>Kualitas</th>
                    <th>Produktivitas</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody class="text-center">
                  <tr class="border-b-2 text-left px-3 hover:bg-slate-50" v-for="team in teams" :key="team.id">
                    <td class="text-left py-3">{{team.id}}</td>
                    <td class="text-left">{{team.nama}}</td>
                    <td class="px-2">{{team.divisi}}</td>
                    <td>{{team.pekerjaan}}</td>
                    <td>{{team.performa}}%</td>
                    <td>{{team.kehadiran}}%</td>
                    <td>{{team.kualitas}}%</td>
                    <td>{{team.produktivitas}}%</td>
                    <td>
                      <button class="bg-black rounded-md p-2">
                        <svg width="21" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.9424 1.7605L19.5674 4.3855L17.5663 6.3875L14.9413 3.7625L16.9424 1.7605ZM7.32788 14H9.95288L16.329 7.62387L13.704 4.99887L7.32788 11.375V14Z" fill="white"/>
                          <path d="M16.9529 16.625H7.46613C7.44338 16.625 7.41976 16.6337 7.39701 16.6337C7.36813 16.6337 7.33926 16.6259 7.30951 16.625H4.70288V4.375H10.694L12.444 2.625H4.70288C3.73776 2.625 2.95288 3.409 2.95288 4.375V16.625C2.95288 17.591 3.73776 18.375 4.70288 18.375H16.9529C17.417 18.375 17.8621 18.1906 18.1903 17.8624C18.5185 17.5342 18.7029 17.0891 18.7029 16.625V9.0405L16.9529 10.7905V16.625Z" fill="white"/>
                        </svg>
                      </button>
                      <button @click="deleteKaryawan(team.nama)" class="bg-[#FFE3E3] rounded-md p-2">
                        <svg width="22" height="21" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.82788 21.5C7.27788 21.5 6.80721 21.3043 6.41588 20.913C6.02455 20.5217 5.82855 20.0507 5.82788 19.5V6.5H4.82788V4.5H9.82788V3.5H15.8279V4.5H20.8279V6.5H19.8279V19.5C19.8279 20.05 19.6322 20.521 19.2409 20.913C18.8495 21.305 18.3785 21.5007 17.8279 21.5H7.82788ZM9.82788 17.5H11.8279V8.5H9.82788V17.5ZM13.8279 17.5H15.8279V8.5H13.8279V17.5Z" fill="#CA3131"/>
                        </svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              </div>
              <div class="ml-[48rem] mt-4">
                <t-pagination
                  :value="1"
                  :perPage="5"
                  :limit="4"
                  :totalItems="10"
                />
              </div>
            </div>
          </div>
          <!-- <ConfirmDialog v-if="isConfirmDialog">
            <template v-slot:title>Konfirmasi</template>
            <template v-slot:message>Yakin data akan dihapus?</template>
            <template v-slot:buttons>
              <button class="flex flex-row font-semibold text-black bg-[#E3E8FF] rounded-md px-3 py-2 shadow-sm gap-1" @click="deletingKaryawan">Ya</button>
              <button class="flex flex-row font-semibold text-black bg-white border border-black rounded-md px-3 py-2 shadow-sm gap-1" @click="cancelDelete()">Batal</button>
            </template>
          </ConfirmDialog> -->
          </div>
    </div>
</template>
    
<script>
import auth from '~/middleware/auth'
import { IT } from '@/models/IT'
import ConfirmDialog from '~/components/UI/ConfirmDialog.vue'
import BlueButton from '~/components/UI/BlueButton.vue'

export default {
      name: 'AdminPage',
      // middleware: 'auth',
      layout: 'default-sidebar',
      // components: { ConfirmDialog, BlueButton },
      data() {
        return {
          teams: IT,
          auth: auth,
          // deleteNama: '',
          // isConfirmDialog: false
        }
      },
      computed: {
        // sortedTeams() {
        //   return this.teams.sort((a, b) => a.id - b.id);
        // },
      },
      methods: {
        logout() {
          this.$router.push('/login');
        },
        // deleteKaryawan(deleteNama) {
        //   this.isConfirmDialog = true
        //   this.deleteNama = deleteNama
        // },
        // deletingKaryawan() {
        //   this.teams = this.teams.filter(team => team.nama !== this.deleteNama);
        //   this.isConfirmDialog = false;
        // },
        // cancelDelete() {
        //   this.isConfirmDialog = false
        //   this.deleteNama = ''
        // }
      },
}
</script>

<style>
#posisi {
  font-weight: 600;
}
</style>