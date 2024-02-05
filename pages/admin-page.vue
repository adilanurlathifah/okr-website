<template>
    <div class="flex h-screen bg-gray-100">
      <Navbar />
      <Sidebar />
      <div class="flex-1 z-10 ml-72 mt-24">
        <h1 class="text-2xl font-bold">
          Selamat Datang 
        </h1>
        <h5 class="text-slate-400 mt-1">
          Silahkan cek capaian target Objective Key Results tim disini 
        </h5>
        <div id="dashboard-container" class="bg-white h-4/5 rounded-3xl shadow-lg w-auto mt-8 mr-10">
          <div class="flex flex-row justify-between">
            <h1 class="text-2xl font-bold text-[#0C1662] px-8 py-6">
              List Tim 
            </h1>
            <div>
              <button class="flex flex-row font-semibold text-black bg-[#E3E8FF] rounded-md px-3 py-2 m-6 shadow-sm gap-1">
                <svg class="mt-[2px]" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1564_1817)">
                  <path d="M8.81252 15C8.81252 15.2984 8.93763 15.5845 9.16033 15.7955C9.38303 16.0065 9.68508 16.125 10 16.125C10.315 16.125 10.617 16.0065 10.8397 15.7955C11.0624 15.5845 11.1875 15.2984 11.1875 15V10.125H16.3334C16.6483 10.125 16.9503 10.0065 17.173 9.7955C17.3957 9.58452 17.5209 9.29837 17.5209 9C17.5209 8.70163 17.3957 8.41548 17.173 8.2045C16.9503 7.99353 16.6483 7.875 16.3334 7.875H11.1875V3C11.1875 2.70163 11.0624 2.41548 10.8397 2.2045C10.617 1.99353 10.315 1.875 10 1.875C9.68508 1.875 9.38303 1.99353 9.16033 2.2045C8.93763 2.41548 8.81252 2.70163 8.81252 3V7.875H3.66669C3.35174 7.875 3.0497 7.99353 2.827 8.2045C2.6043 8.41548 2.47919 8.70163 2.47919 9C2.47919 9.29837 2.6043 9.58452 2.827 9.7955C3.0497 10.0065 3.35174 10.125 3.66669 10.125H8.81252V15Z" fill="#191F2F"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_1564_1817">
                    <rect width="19" height="18" fill="white" transform="translate(0.5)"/>
                    </clipPath>
                  </defs>
                </svg>
                Tambah
            </button>
            </div>
          </div>
          <div class="container p-5">
            <div class="flex flex-row">
            <table class="table w-full h-full">
              <thead>
                <tr class="border-b-2 text-[#0C1662]">
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
              <tbody class=" text-center">
                <tr class="border-b-2" v-for="team in teams" :key="team.id">
                  <td class="px-3 py-3">{{team.id}}</td>
                  <td>{{team.nama}}</td>
                  <td>{{team.divisi}}</td>
                  <td>{{team.pekerjaan}}</td>
                  <td>{{team.performa}}%</td>
                  <td>{{team.kehadiran}}%</td>
                  <td>{{team.kualitas}}%</td>
                  <td>{{team.produktivitas}}%</td>
                  <td>
                    <button class="bg-black rounded-md p-2">
                      <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.9424 1.7605L19.5674 4.3855L17.5663 6.3875L14.9413 3.7625L16.9424 1.7605ZM7.32788 14H9.95288L16.329 7.62387L13.704 4.99887L7.32788 11.375V14Z" fill="white"/>
                        <path d="M16.9529 16.625H7.46613C7.44338 16.625 7.41976 16.6337 7.39701 16.6337C7.36813 16.6337 7.33926 16.6259 7.30951 16.625H4.70288V4.375H10.694L12.444 2.625H4.70288C3.73776 2.625 2.95288 3.409 2.95288 4.375V16.625C2.95288 17.591 3.73776 18.375 4.70288 18.375H16.9529C17.417 18.375 17.8621 18.1906 18.1903 17.8624C18.5185 17.5342 18.7029 17.0891 18.7029 16.625V9.0405L16.9529 10.7905V16.625Z" fill="white"/>
                      </svg>
                    </button>
                    <button class="bg-[#FFE3E3] rounded-md p-2">
                      <svg width="22" height="21" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.82788 21.5C7.27788 21.5 6.80721 21.3043 6.41588 20.913C6.02455 20.5217 5.82855 20.0507 5.82788 19.5V6.5H4.82788V4.5H9.82788V3.5H15.8279V4.5H20.8279V6.5H19.8279V19.5C19.8279 20.05 19.6322 20.521 19.2409 20.913C18.8495 21.305 18.3785 21.5007 17.8279 21.5H7.82788ZM9.82788 17.5H11.8279V8.5H9.82788V17.5ZM13.8279 17.5H15.8279V8.5H13.8279V17.5Z" fill="#CA3131"/>
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
    
<script>
import Navbar from '~/components/Navbar.vue'
import Sidebar from '~/components/Sidebar.vue';
import { TEAMS } from '@/utils/list-team'

export default {
      name: 'AdminPage',
      middleware: 'auth',
      components: { Navbar, Sidebar },
      data() {
        return {
          teams: TEAMS
        }
      },
      methods: {
        logout() {
          this.$router.push('/login');
        }
      }
    }
</script>
  
<style>
</style>