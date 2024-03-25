<template>
  <div>
      <div class="flex flex-col mb-4">
        <h1 class="text-xl font-bold">
          Divisi   
        </h1>
        <p class="text-slate-400 mt-1 font-semibold text-sm text-left">
          Anda bisa menambah ataupun mengaktifkan kategori divisi disini
        </p>
      </div>
      <VCard class="vld-parent px-3 py-4">
         <div class="w-full p-10" v-if="isLoading">
            <p class="text-sm text-center font-semibold">Loading..</p>
         </div>
         <div v-else>
          <div v-if="displayedDivisions.length > 0">
            <div class="flex flex-col md:flex-row gap-2 mt-2 md:px-2 px-4 justify-between items-center">
              <div class="flex justify-center w-full md:w-auto">
                  <div class="relative w-full">
                    <div class="absolute inset-y-0 flex items-center ps-3 pointer-events-none">
                        <img src="~/assets/img/icons/search.svg"/>
                    </div>
                    <input 
                        type="text" 
                        v-model="search"
                        id="default-search" 
                        class="block w-full md:w-[350px] border border-slate-200 focus:outline-slate-200 h-[45px] p-2 ps-10 text-sm font-medium text-gray-900 rounded-lg bg-gray-50" 
                        placeholder="Cari Divisi">
                  </div>
                </div>
                <div class="flex flex-col md:flex-row justify-end gap-3 w-full md:w-auto">
                    <div class="flex flex-col md:flex-row gap-1 w-full md:w-auto">
                      <select 
                          v-model="selectedStatus"
                          id="status" 
                          class="font-semibold focus:outline-none border border-[#95999D] focus:border-[#B7C0D8] hover:bg-[#E3E8FF] hover:border-none text-sm rounded-lg block w-full lg:w-auto h-[45px] p-2"
                      >
                          <option value="">Semua Status</option>
                          <option value="actived">Aktif</option>
                          <option value="inactived">Tidak Aktif</option>
                      </select>
                    </div>
                    <BlueButton class="save-btn" @click="openAddDivisiModal" :showIcon="true">
                      <template v-slot:message>Tambah Divisi</template>
                    </BlueButton>
                    <AddDivisi 
                      v-show="showAddDivisiModal" 
                      @divisi="handleDivisi" 
                      @close-modal="closeAddDivisiModal"
                    />
                </div> 
              </div>
              <div class="overflow-auto rounded-lg shadow mt-8">
                <table class="w-full">
                  <thead class="bg-gray-50 border-b-2 border-gray-100">
                    <tr class="text-left text-[#0C1662] font-bold md:text-center">
                      <th class="w-20 p-3 text-sm tracking-wide hidden md:table-cell">No.</th>
                      <th class="w-20 p-3 text-sm tracking-wide hidden md:table-cell">Divisi</th>
                      <th class="w-24 p-3 text-sm tracking-wide hidden md:table-cell">Status</th>
                      <th class="w-24 p-3 text-sm tracking-wide hidden md:table-cell">Aksi</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-100">
                    <tr 
                      v-if="filteredDivision.length === 0"
                      class="text-left md:text-center bg-white block md:table-row"
                    >
                      <td colspan="4" class="p-3 font-medium text-sm text-gray-700 whitespace-nowrap block md:table-cell">
                        Divisi tidak ditemukan
                      </td>
                    </tr>
                    <tr 
                      v-else
                      class="text-left md:text-center bg-white block md:table-row" 
                      v-for="(data, index) in filteredDivision" 
                      :key="data.id"
                    >
                      <td class="p-3 font-medium text-sm text-gray-700 whitespace-nowrap block md:table-cell" data-title="id">{{ (currentPage - 1) * perPage + index + 1 }}</td>
                      <td class="p-3 font-medium text-sm text-gray-700 whitespace-nowrap block md:table-cell" data-title="total">{{ data.name }}</td>
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
                        <button class="bg-black rounded-md p-2" @click="editDivision(data.id)">
                          <img src="~/assets/img/icons/edit.svg" />
                        </button>
                        <EditDivisi 
                            v-if="selectedDivision.id" 
                            v-show="showEditDivisiModal" 
                            :name="selectedDivision.name"
                            :id="selectedDivision.id" 
                            @divisi="updateDivision" 
                            @close-modal="closeEditDivisiModal"
                        />
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
            <div 
              class="mt-8 mr-2 flex justify-end"
              >
              <t-pagination
                class="responsivePagination"
                :value="currentPage"
                :per-page="perPage"
                :total-items="totalItems"
                @change="handlePageChange"
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
                    class="block w-full lg:w-[350px] cursor-not-allowed border border-slate-200 focus:outline-slate-300 h-[45px] p-2 ps-10 text-sm font-medium text-gray-900 border border-gray-300 rounded-lg bg-gray-50" 
                    placeholder="Cari Divisi" 
                    :disabled="true">
                </div>
              </div>
              <div class="flex flex-col md:flex-row justify-end gap-3">
                    <div class="flex flex-col md:flex-row gap-1">
                      <select id="status" class="font-semibold cursor-not-allowed focus:outline-none hover:bg-slate-100 text-sm rounded-lg block w-full lg:w-auto h-[45px] p-2" :disabled="true">
                        <option value="">Semua Status</option>
                        <option value="actived">Aktif</option>
                        <option value="inactived">Tidak Aktif</option>
                    </select>
                  </div>
                  <BlueButton class="save-btn" @click="showAddDivisiModal = true" :showIcon="true">
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
         </div>
      </VCard>
  </div>
</template>

<script>
import VCard from '@/components/UI/VCard.vue';
import BlueButton from '@/components/UI/BlueButton.vue';
import AddDivisi from '@/components/Modals/Divisi/ModalAddDivisi.vue';
import EditDivisi from '../../../components/Modals/Divisi/ModalEditDivisi.vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  middleware: 'auth',
  layout: 'default-admin',
  components: { VCard, BlueButton, AddDivisi, EditDivisi, Loading },
  data() {
    return {
        name: "",
        input: "",
        divisions: [],
        items: [],
        showAddDivisiModal: false,
        showEditDivisiModal: false,
        selectedDivision: {},
        isSuccess: false,
        currentPage: 1,
        perPage: 10,
        totalItems: 0,
        search: "",
        status: "actived",
        selectedStatus: "",
        isLoading: false
    }
  },
  mounted() {
    this.fetchDivisions()
  },
  computed: {
    displayedDivisions() {
      return this.divisions;
    },
    filteredDivision() {
      let filtered = this.divisions;

      if (this.search) {
        const searchTerm = this.search.toLowerCase();
        filtered = filtered.filter(division => 
          division.name.toLowerCase().includes(searchTerm)
        );
      }

      if (this.selectedStatus) {
        filtered = filtered.filter(division => 
          division.status === this.selectedStatus
        );
      }
      return filtered;
    }
  },
  methods: {
    openAddDivisiModal() {
        this.showAddDivisiModal = true;
    },
    closeAddDivisiModal() {
        this.showAddDivisiModal = false;
    },
    openEditDivisiModal() {
        this.showEditDivisiModal = true;
    },
    closeEditDivisiModal() {
        this.showEditDivisiModal = false;
    },
    handlePageChange(newPage) {
      this.currentPage = newPage;
      this.fetchDivisions(newPage);
    },
    async fetchDivisions(page) {
      this.isLoading = true;
      try {
        const response = await this.$axios.$get(`/api/admin/divisions?page=${page}&limit=${this.perPage}&search=${this.search}&status=${this.status}`);
          this.divisions = response.data.divisions.data.reverse();
          this.totalItems = response.data.divisions.total;
          this.currentPage = response.data.divisions.current_page;
          this.perPage = response.data.divisions.per_page; 
          this.isLoading = false;
      } catch (error) {
        console.error('Failed to fetch divisions:', error);
      }
    },
    async handleDivisi(name) {
      try {
        const tokenResponse = await this.$axios.$get('/api/admin/divisions/create');
        const token = tokenResponse.data.token;
        const res = await this.$axios.post('api/admin/divisions/create', {
            name: name,
            token: token,
        });
        if (res.data.success) {
          this.divisions.push({ 
            name: name
          });
          this.showAddDivisiModal = false;
          this.$toast.success('Divisi berhasil ditambahkan', {
            position: 'top-right'
          });
        } else {
          this.$toast.error('Divisi gagal ditambahkan', {
            position: 'top-right'
          });
        }
      } catch (error) {
        this.$toast.error('Terjadi kesalahan saat menambah divisi. Silakan coba lagi.', {
          position: 'top-right'
        });
      }
    },
    async editDivision(id) {
      try {
        const division = this.divisions.find(div => div.id === id);
        if (!division) {
            throw new Error(`Division with ID: ${id} not found.`);
        }
        this.selectedDivision = division;
        this.showEditDivisiModal = true;
      } catch (error) {
        this.$toast.error('Divisi dengan ID: ' + id + ' tidak ditemukan.', {
          position: 'top-right'
        });
      }
    },
    async updateDivision({ id, name }) {
      try {
        const tokenResponse = await this.$axios.$get('/api/admin/divisions/update');
        const token = tokenResponse.data.token;

        const res = await this.$axios.post('/api/admin/divisions/update', {
            id: id,
            name: name,
            token: token,
        });

        if (res.data.success) {
            const index = this.divisions.findIndex(div => div.id === id);
            if (index !== -1) {
                this.divisions[index].name = name;
            }
            this.showEditDivisiModal = false;
            this.$toast.success('Divisi berhasil diperbarui', {
              position: 'top-right'
            });
        } else {
          this.$toast.error('Divisi gagal diperbaharui', {
            position: 'top-right'
          });
        }
      } catch (error) {
          this.$toast.error('Terjadi kesalahan saat memperbarui divisi. Silakan coba lagi.', {
          position: 'top-right'
        });
      }
  },
  async changeStatus(data, newStatus) {
    try {
      const divisionId = data.id;
      const tokenResponse = await this.$axios.$get('/api/admin/divisions/update-status');
      const token = tokenResponse.data.token;

      const res = await this.$axios.post('/api/admin/divisions/update-status', {
        id: divisionId,
        status: newStatus,
        token: token,
      });

      if (res.data.success) {
        data.status = newStatus;
        if (newStatus === 'actived') {
            this.$toast.info('Divisi diaktifkan', {
              position: 'top-right'
            });
        } else if (newStatus === 'inactived') {
            this.$toast.info('Divisi dinonaktifkan', {
              position: 'top-right'
            });
        }
      } else {
        this.$toast.error('Terjadi kesalahan saat memperbarui status. Silakan coba lagi.', {
          position: 'top-right'
        });
      }
    } catch (error) {
      if (error.response) {
        this.$toast.error(error.response.data.message, {
          position: 'top-right'
        });
      } else 
        this.$toast.error('Terjadi kesalahan saat memperbarui status. Silakan coba lagi.', {
          position: 'top-right'
        });
      }
    }
  },
}
</script>