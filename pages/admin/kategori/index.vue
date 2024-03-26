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
      <VCard class="vld-parent px-3 py-4">
         <div class="w-full p-10" v-if="isLoading">
            <p class="text-sm text-center font-semibold">Loading..</p>
         </div>
         <div v-else>
          <div v-if="displayedCategories.length > 0">
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
                        placeholder="Cari Kategori">
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
                    <BlueButton class="save-btn" @click="openAddCategoriesModal" :showIcon="true">
                      <template v-slot:message>Buat Kategori</template>
                    </BlueButton>
                    <AddCategory
                      v-show="showAddCategoriesModal"
                      @kategori="handleKategori"
                      @close-modal="closeAddCategoriesModal"
                    />
                </div> 
              </div>
              <div class="overflow-auto rounded-lg shadow mt-8">
                <table class="w-full">
                  <thead class="bg-gray-50 border-b-2 border-gray-100">
                    <tr class="text-left text-[#0C1662] font-bold md:text-center">
                      <th class="w-20 p-3 text-sm tracking-wide hidden md:table-cell">No.</th>
                      <th class="w-20 p-3 text-sm tracking-wide hidden md:table-cell">Kategori</th>
                      <th class="w-20 p-3 text-sm tracking-wide hidden md:table-cell">Posisi</th>
                      <th class="w-24 p-3 text-sm tracking-wide hidden md:table-cell">Status</th>
                      <th class="w-24 p-3 text-sm tracking-wide hidden md:table-cell">Aksi</th>
                      <th class="w-20 p-3 text-sm tracking-wide hidden md:table-cell">Riwayat</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-100">
                    <tr 
                      v-if="filteredCategories.length === 0"
                      class="text-left md:text-center bg-white block md:table-row"
                    >
                      <td colspan="4" class="p-3 font-medium text-sm text-gray-700 whitespace-nowrap block md:table-cell">
                        Kategori tidak ditemukan
                      </td>
                    </tr>
                    <tr 
                      v-else
                      class="text-left md:text-center bg-white block md:table-row" 
                      v-for="(data, index) in filteredCategories" 
                      :key="data.id"
                    >
                      <td class="p-3 font-medium text-sm text-gray-700 whitespace-nowrap block md:table-cell" data-title="id">{{ (currentPage - 1) * perPage + index + 1 }}</td>
                      <td class="p-3 font-medium text-sm text-gray-700 whitespace-nowrap block md:table-cell" data-title="total">{{ data.name }}</td>
                      <td class="p-3 font-medium text-sm text-gray-700 whitespace-nowrap block md:table-cell" data-title="total">{{ data.position?.name }}</td>
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
                        <button class="bg-black rounded-md p-2" @click="editCategory(data.id)">
                          <img src="~/assets/img/icons/edit.svg" />
                        </button>
                        <EditCategory
                          v-if="selectedCategory.id" 
                          v-show="showEditCategoriesModal" 
                          :name="selectedCategory.name"
                          :id="selectedCategory.id" 
                          :selectedPosition="selectedPosition.id"
                          @kategori="updateCategory"
                          @close-modal="closeEditCategoriesModal"
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
                      <td class="p-3 text-sm text-gray-700 whitespace-nowrap block md:table-cell" data-title="total">
                        <button class="bg-black font-semibold px-6 py-2 text-white w-auto rounded-md">
                          <nuxt-link to="">
                            Detail
                          </nuxt-link>
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
                    class="block w-full lg:w-[350px] cursor-not-allowed border border-slate-200 focus:outline-slate-300 h-[45px] p-2 ps-10 text-sm font-medium text-gray-900 rounded-lg bg-gray-50" 
                    placeholder="Cari Kategori" 
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
                  <BlueButton class="save-btn" @click="showAddKategoriModal = true" :showIcon="true">
                      <template v-slot:message>Buat Kategori</template>
                  </BlueButton>
                  
              </div> 
          </div>
            <div class="flex flex-col items-center justify-center my-8">
                <img src="~/assets/img/no-data/nodata-category.svg" alt="Not Found" class="mb-4 w-[139px] h-[139px] object-contain">
                <p class="text-center text-sm">
                  Tambahkan Kategori baru yang ingin kamu gunakan untuk penilaian kinerjamu!<br/>Cek daftar Kategori di sini, aktifkan atau nonaktifkan sesuai kebutuhanmu.
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
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import AddCategory from '../../../components/Modals/Kategori/ModalAddCategory.vue';
import EditCategory from '../../../components/Modals/Kategori/ModalEditCategory.vue';

export default {
  middleware: 'auth',
  layout: 'default-admin',
  components: { VCard, BlueButton, Loading, AddCategory, EditCategory },
  data() {
    return {
        name: "",
        input: "",
        categories: [],
        items: [],
        showAddCategoriesModal: false,
        showEditCategoriesModal: false,
        selectedCategory: {},
        selectedPosition: {},
        isSuccess: false,
        currentPage: 1,
        perPage: 10,
        totalItems: 0,
        search: "",
        status: "actived",
        selectedStatus: "",
        isLoading: true
    }
  },
  mounted() {
    this.fetchCategories()
  },
  computed: {
    displayedCategories() {
      return this.categories;
    },
    filteredCategories() {
      let filtered = this.categories;

      if (this.search) {
        const searchTerm = this.search.toLowerCase();
        filtered = filtered.filter(categories => 
        categories.name.toLowerCase().includes(searchTerm)
        );
      }

      if (this.selectedStatus) {
        filtered = filtered.filter(categories => 
        categories.status === this.selectedStatus
        );
      }
      return filtered;
    }
  },
  methods: {
    openAddCategoriesModal() {
        this.showAddCategoriesModal = true;
    },
    closeAddCategoriesModal() {
        this.showAddCategoriesModal = false;
    },
    openEditCategoriesModal() {
        this.showEditCategoriesModal = true;
    },
    closeEditCategoriesModal() {
        this.showEditCategoriesModal = false;
    },
    handlePageChange(newPage) {
      this.currentPage = newPage;
      this.fetchCategories(newPage);
    },
    async fetchCategories(page) {
      this.isLoading = true;
      try {
        const response = await this.$axios.$get(`/api/admin/categories?&page=${page}&limit=${this.perPage}&search=${this.search}&status=${this.selectedStatus}`);
          this.categories = response.data.categories.data;
          this.totalItems = response.data.categories.total;
          this.currentPage = response.data.categories.current_page;
          this.perPage = response.data.categories.per_page; 
          this.isLoading = false;
      } catch (error) {
        console.log('Failed to fetch categories:', error);
      }
    },
    async handleKategori({name, positionId}) {
        try {
          const tokenResponse = await this.$axios.$get('/api/admin/categories/create');
          const token = tokenResponse.data.token;
          const res = await this.$axios.post('/api/admin/categories/create', {
            name: name,
            position_id: positionId,
            token: token
          });
          if (res.data.success) {
            this.categories.push({ 
              name: name
            });
            this.showAddPosisiModal = false;
            this.$toast.success('Kategori berhasil ditambahkan', {
              position: 'top-right'
            });
            this.$router.push('/admin/posisi');
          } else {
            this.$toast.error('Kategori gagal ditambahkan', {
              position: 'top-right'
            });
          }
        } catch (error) {
          this.$toast.error('Terjadi kesalahan saat menambah Kategori. Silakan coba lagi.', {
            position: 'top-right'
          });
      }
    },
    async editCategory(id) {
      try {
            const category = this.categories.find(div => div.id === id);
            if (!category) {
                throw new Error(`Positions with ID: ${id} not found.`);
            }
            this.selectedCategory = category;
            this.selectedPosition = { 
              id: category.position.id, 
              name: category.position.name 
            };
            this.showEditCategoriesModal = true;
      } catch (error) {
          this.$toast.error('Kategori dengan ID: ' + id + ' tidak ditemukan.', {
            position: 'top-right'
          });
      }
    },
    // async editCategory(id) {
    //   alert(`Tes ID Kategori: ${id}`)
    // },
    async updateCategory({ id, name, positionId }) {
      try {
          const tokenResponse = await this.$axios.$get('/api/admin/categories/update');
          const token = tokenResponse.data.token;

          const res = await this.$axios.post('/api/admin/categories/update', {
            id: id,
            name: name, 
            position_id: positionId, 
            token: token,
          });

          // console.log(res);
          if (res.data.success) {
              const index = this.categories.findIndex(div => div.id === id);
              if (index !== -1) {
                  this.categories[index].name = name;
                  this.categories[index].position_id = positionId;
              }
              this.showEditCategoriesModal = false;
              this.$toast.success('Kategori berhasil diperbarui', {
                position: 'top-right'
              });
          } else {
            this.$toast.error('Kategori gagal diperbaharui', {
              position: 'top-right'
            });
          }
      } catch (error) {
            this.$toast.error('Terjadi kesalahan saat memperbarui Kategori. Silakan coba lagi.', {
            position: 'top-right'
          });
      }
    },
    async changeStatus(data, newStatus) {
      try {
        const categoryId = data.id;
        const tokenResponse = await this.$axios.$get('/api/admin/categories/update-status');
        const token = tokenResponse.data.token;

        const res = await this.$axios.post('/api/admin/categories/update-status', {
          id: categoryId,
          status: newStatus,
          token: token,
        });

        if (res.data.success) {
          data.status = newStatus;
          if (newStatus === 'actived') {
              this.$toast.info('Kategori diaktifkan', {
                position: 'top-right'
              });
          } else if (newStatus === 'inactived') {
              this.$toast.info('Kategori dinonaktifkan', {
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