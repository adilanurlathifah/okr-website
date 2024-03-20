<template>
    <div>
        <div class="flex flex-col mb-4">
          <h1 class="text-xl font-bold">
            PIC   
          </h1>
          <p class="text-slate-400 mt-1 font-semibold text-sm text-left">
            Lihat PIC Anda disini
          </p>
        </div>
        <VCard  class="px-3 py-4">
            <div v-if="data.length > 0">
              <div class="flex flex-row gap-2 mt-2 justify-between">
                <div class="flex flex-row">
                  <div class="relative ml-4">
                      <div class="absolute inset-y-0 flex items-center ps-3 pointer-events-none">
                        <img src="~/assets/img/icons/search.svg"/>
                      </div>
                      <input 
                        type="search" 
                        id="default-search" 
                        class="block w-full lg:w-[350px] focus:outline-slate-200 border border-slate-200 h-[45px] p-2 ps-10 text-sm font-medium text-gray-900 rounded-lg bg-gray-50" 
                        placeholder="Cari PIC" 
                        required>
                  </div>
                </div>
                <div class="flex justify-end gap-3 mr-6">
                  <div>
                    <select id="divisi" class="font-semibold focus:outline-none border border-[#95999D] focus:border focus:border-[#B7C0D8] hover:bg-[#E3E8FF] text-sm rounded-lg block w-full lg:w-auto h-[45px] p-2">
                      <option value="">Divisi</option>
                      <option value="developer">Developer</option>
                      <option value="kreatif">Kreatif</option>
                      <option value="finance">Finance</option>
                    </select>
                  </div>
                  <BlueButton @click="showAddModal = true" :showIcon="true">
                      <template v-slot:message>Tambah PIC</template>
                  </BlueButton>
                  </div> 
              </div>
              <div class="overflow-auto rounded-lg shadow mt-8">
                  <table class="w-full">
                    <thead class="bg-gray-50 border-b-2 border-gray-100">
                      <tr class="text-left text-[#0C1662] font-bold md:text-center">
                        <th class="w-20 p-3 text-sm tracking-wide hidden md:table-cell">No.</th>
                        <th class="w-20 p-3 text-sm tracking-wide hidden md:table-cell">Nama</th>
                        <th class="w-24 p-3 text-sm tracking-wide hidden md:table-cell">Divisi</th>
                        <th class="w-24 p-3 text-sm tracking-wide hidden md:table-cell">Email</th>
                        <th class="w-24 p-3 text-sm tracking-wide hidden md:table-cell">Status</th>
                        <th class="w-24 p-3 text-sm tracking-wide hidden md:table-cell">Aksi</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100">
                      <tr class="text-left md:text-center bg-white block md:table-row" v-for="data in data" :key="data.id">
                        <td class="p-3 font-medium text-sm text-gray-700 whitespace-nowrap block md:table-cell" data-title="id">{{ data.id }}</td>
                        <td class="p-3 font-medium text-sm text-gray-700 whitespace-nowrap block md:table-cell" data-title="total">{{ data.nama }}</td>
                        <td class="p-3 font-medium text-sm text-gray-700 whitespace-nowrap block md:table-cell" data-title="total">{{ data.divisi }}</td>
                        <td class="p-3 font-medium text-sm text-gray-700 whitespace-nowrap block md:table-cell" data-title="total">{{ data.email }}</td>
                        <td class="p-3 font-medium text-sm text-gray-700 whitespace-nowrap block md:table-cell" data-title="status">
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
                        <td class="p-3 text-sm text-gray-700 whitespace-nowrap block md:table-cell" data-title="total">
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
        </VCard>
    </div>
</template>
  
<script>
import { PIC } from '@/models/PIC'
import VCard from '@/components/UI/VCard.vue';
import BlueButton from '@/components/UI/BlueButton.vue';
import ModalMessage from '../../../components/UI/ModalMessage.vue';

export default {
    auth: false,
    layout: 'default-admin',
    components: { VCard, BlueButton, ModalMessage },
    data() {
        return {
            data: PIC,
            showAddModal: false,
            showEditModal: false
        }
    },
    methods: {
        changeStatus(dataPIC, newStatus) {
          dataPIC.status = newStatus;
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