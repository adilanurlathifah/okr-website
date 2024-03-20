<template>
    <div>
        <div class="flex flex-col mb-4">
          <h1 class="text-xl font-bold">
            Posisi   
          </h1>
          <p class="text-slate-400 mt-1 font-semibold text-sm text-left">
            Anda bisa menambah posisi baru disini 
          </p>
        </div>
        <VCard class="px-3 py-4">
            <div v-if="displayedPositions.length > 0">
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
                          <select id="divisi" class="font-semibold focus:outline-none border border-[#95999D] focus:border focus:border-[#B7C0D8] hover:bg-[#E3E8FF] text-sm rounded-lg block w-full lg:w-auto h-[45px] p-2">
                            <option value="">Divisi</option>
                            <option value="developer">Developer</option>
                            <option value="kreatif">Kreatif</option>
                            <option value="finance">Finance</option>
                         </select>
                        </div>
                        <div class="flex flex-col md:flex-row gap-1 w-full md:w-auto">
                          <select id="status" class="font-semibold focus:outline-none border border-[#95999D] focus:border focus:border-[#B7C0D8] hover:bg-[#E3E8FF] text-sm rounded-lg block w-full lg:w-auto h-[45px] p-2">
                              <option value="">Semua Status</option>
                              <option value="aktif">Aktif</option>
                              <option value="nonaktif">Tidak Aktif</option>
                          </select>
                        </div>
                        <BlueButton class="save-btn" @click="showModal = true" :showIcon="true">
                            <template v-slot:message>Tambah Posisi</template>
                        </BlueButton>
                    </div> 
                </div>
                <div class="overflow-auto rounded-lg shadow mt-8">
                  <table class="w-full">
                    <thead class="bg-gray-50 border-b-2 border-gray-100">
                      <tr class="text-left text-[#0C1662] font-bold md:text-center">
                        <th class="w-20 p-3 text-sm tracking-wide hidden md:table-cell">No.</th>
                        <th class="w-20 p-3 text-sm tracking-wide hidden md:table-cell">Posisi</th>
                        <th class="w-24 p-3 text-sm tracking-wide hidden md:table-cell">Divisi</th>
                        <th class="w-24 p-3 text-sm tracking-wide hidden md:table-cell">Status</th>
                        <th class="w-24 p-3 text-sm tracking-wide hidden md:table-cell">Aksi</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100">
                      <tr class="text-left md:text-center bg-white block md:table-row" v-for="(data, index) in displayedPositions" :key="data.id">
                        <td class="p-3 font-medium text-sm text-gray-700 whitespace-nowrap block md:table-cell" data-title="id">{{ index + 1 }}</td>
                        <td class="p-3 font-medium text-sm text-gray-700 whitespace-nowrap block md:table-cell" data-title="total">{{ data.name }}</td>
                        <td class="p-3 font-medium text-sm text-gray-700 whitespace-nowrap block md:table-cell" data-title="total">{{ data.division.name }}</td>
                        <td class="p-3 font-medium text-sm text-gray-700 whitespace-nowrap block md:table-cell" data-title="status">
                          <t-tag 
                              v-show="data.status === 'actived'"
                              variant="success"
                          >
                              {{data.status}}
                          </t-tag>
                          <t-tag 
                              v-show="data.status === 'inactived'"
                              variant="danger"
                          >
                              {{data.status}}
                          </t-tag>
                        </td>
                        <td class="p-3 text-sm text-gray-700 whitespace-nowrap block md:table-cell" data-title="total">
                          <button class="bg-black rounded-md p-2">
                              <img src="~/assets/img/icons/edit.svg" />
                          </button>
                          <button 
                              class="bg-red-700 rounded-md p-2"
                              v-if="data.status === 'actived'"
                              @click="changeStatus(data, 'inactived')"
                          >
                              <img src="~/assets/img/icons/cancel.svg" />
                          </button>
                          <button 
                              class="bg-green-700 rounded-md p-2"
                              v-if="data.status === 'inactived'"
                              @click="changeStatus(data, 'actived')"
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
                      class="block w-full lg:w-[350px] cursor-not-allowed lg:w-auto border border-slate-200 focus:outline-slate-300 h-[45px] p-2 ps-10 text-sm font-medium text-gray-900 border border-gray-300 rounded-lg bg-gray-50" 
                      placeholder="Cari Karyawan" 
                      :disabled="true">
                  </div>
                </div>
                <div class="flex flex-col md:flex-row justify-end gap-3">
                    <div class="flex flex-col md:flex-row gap-1">
                        <select id="divisi" class="cursor-not-allowed font-semibold hover:bg-[#E3E8FF] focus:outline-none hover:bg-slate-100 text-sm rounded-lg block w-full lg:w-auto h-[45px] p-2"  :disabled="true">
                          <option value="">Semua Divisi</option>
                          <option value="developer">Developer</option>
                          <option value="kreatif">Kreatif</option>
                          <option value="finance">Finance</option>
                      </select>
                    </div>
                    <div class="flex flex-col md:flex-row gap-1">
                        <select id="status" class="cursor-not-allowed font-semibold hover:bg-[#E3E8FF] focus:outline-none hover:bg-slate-100 text-sm rounded-lg block w-full lg:w-auto h-[45px] p-2"  :disabled="true">
                          <option value="">Semua Status</option>
                          <option value="aktif">Aktif</option>
                          <option value="nonaktif">Tidak Aktif</option>
                      </select>
                    </div>
                    <BlueButton class="save-btn" @click="showModal = true" :showIcon="true">
                        <template v-slot:message>Tambah Posisi</template>
                    </BlueButton>
                </div> 
            </div>
              <div class="flex flex-col items-center justify-center my-8">
                  <img src="~/assets/img/no-data/nodata-posisi.svg" alt="Not Found" class="mb-4 w-[139px] h-[139px] object-contain">
                  <p class="text-center text-sm">
                    Tambahkan Posisi baru yang ingin kamu gunakan untuk penilaian kinerjamu!<br/>Cek daftar Posisi di sini, aktifkan atau nonaktifkan sesuai kebutuhanmu.
                  </p>
              </div>
            </div>
        </VCard>
    </div>
</template>
  
<script>
import VCard from '@/components/UI/VCard.vue';
import BlueButton from '@/components/UI/BlueButton.vue';

export default {
    middleware: 'auth',
    layout: 'default-admin',
    components: { VCard, BlueButton },
    data() {
        return {
            showModal: false,
            positions: [],
        }
    },
    mounted() {
      this.fetchPositions();
    },
    computed: {
      displayedPositions() {
        return this.positions;
      }
    },
    methods: {
      changeStatus(data, newStatus) {
          data.status = newStatus;
      },
      async fetchPositions() {
        try {
            const response = await this.$axios.$get('/api/admin/positions?division_id&search')
            this.positions = response.data.divisions.data;
        } catch (error) {
            console.error('Failed to fetch divisions:', error);
        }
      },
    }
}
</script>
  