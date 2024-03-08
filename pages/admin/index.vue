<template>
  <div>
      <div class="flex flex-col p-3 sm:px-7">
          <h1 class="text-2xl font-bold">
            Selamat Datang   
          </h1>
          <h5 class="text-slate-400 mt-1">
            Silahkan cek capaian target Objective Key Results tim disini   
          </h5>
      </div>
      <div id="dashboard-container" class="bg-white h-auto rounded-3xl shadow-lg w-auto mt-8 mx-[10px] md:mx-18">
          <h1 class="text-2xl font-semibold text-[#0C1662] px-5 py-6">
            Semua Tim   
          </h1>
          <div class="flex flex-row gap-2 justify-between">
              <div class="flex flex-row">
                <div class="relative ml-4">
                    <div class="absolute inset-y-0 flex items-center ps-3 pointer-events-none">
                      <!-- <img src="~/assets/img/search.svg"/> -->
                    </div>
                    <input type="search" id="default-search" class="block w-full lg:w-[250px] h-[45px] p-2 ps-10 text-[15px] font-medium text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Cari Karyawan..." required>
                </div>
              </div>
              <div class="flex justify-end gap-3 mr-6">
                <select id="posisi" class="shadow-sm bg-gray-50 border font-normal border-gray-300 text-[15px] rounded-lg block w-full lg:w-[200px] h-[45px] p-2">
                  <option value="">Semua Tim</option>
                  <option value="finance">Finance</option>
                  <option value="kreatif">Kreatif</option>
                  <option value="IT">IT</option>
                </select>
                <div class="flex flex-row items-center gap-2">
                  <img src="~/assets/img/filter.svg" class="w-8 h-10" />
                  <button class="text-[#191F2F] mb-2 text-[15px] hidden lg:block font-semibold">02/01/24</button>
                </div>   
              </div> 
          </div>
          <div class="container px-5 py-6 mb-10">
            <div class="flex flex-row">
              <table class="table w-full h-auto responsive-table">
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
                        <nuxt-link to="/admin/karyawan/detail-karyawan">
                          <svg width="21" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.9424 1.7605L19.5674 4.3855L17.5663 6.3875L14.9413 3.7625L16.9424 1.7605ZM7.32788 14H9.95288L16.329 7.62387L13.704 4.99887L7.32788 11.375V14Z" fill="white"/>
                            <path d="M16.9529 16.625H7.46613C7.44338 16.625 7.41976 16.6337 7.39701 16.6337C7.36813 16.6337 7.33926 16.6259 7.30951 16.625H4.70288V4.375H10.694L12.444 2.625H4.70288C3.73776 2.625 2.95288 3.409 2.95288 4.375V16.625C2.95288 17.591 3.73776 18.375 4.70288 18.375H16.9529C17.417 18.375 17.8621 18.1906 18.1903 17.8624C18.5185 17.5342 18.7029 17.0891 18.7029 16.625V9.0405L16.9529 10.7905V16.625Z" fill="white"/>
                          </svg>
                        </nuxt-link>
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
              <div class="mt-4">
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
  </div>
</template>


<script>
import { IT } from '@/models/IT'

export default {
      name: 'AdminPage',
      middleware: 'auth',
      layout: 'default-sidebar',
      data() {
        return {
          teams: IT,
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
    justify-content: center;
  }

  .responsive-table th {
    font-weight: 800;
  }

  .responsive-table thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  .responsive-table tr { border:  1px solid #ccc;}

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
  .responsive-table td:nth-of-type(2):before { content: "Nama"; }
  .responsive-table td:nth-of-type(3):before { content: "Divisi"; }
  .responsive-table td:nth-of-type(4):before { content: "Pekerjaan"; }
  .responsive-table td:nth-of-type(5):before { content: "Performa"; }
  .responsive-table td:nth-of-type(6):before { content: "Kehadiran"; }
  .responsive-table td:nth-of-type(7):before { content: "Kualitas"; }
  .responsive-table td:nth-of-type(8):before { content: "Produktivitas"; }
  .responsive-table td:nth-of-type(9):before { content: "Action"; }
}

@media (min-width:  1800px) {
  .responsive-table {
    width:  100%;
  }
}
</style>
