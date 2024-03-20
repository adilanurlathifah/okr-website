<template>
    <div>
        <div class="m-3">
          <h1 class="text-xl font-bold">
            Karyawan   
          </h1>
          <h5 class="text-slate-400 mt-1">
            Lihat Karyawan Anda disini
          </h5>
        </div>
        <VCard>
            <div v-if="data.length > 0">
              <div class="flex flex-row gap-2 pt-8 justify-between">
                <div class="flex flex-row">
                  <div class="relative ml-4">
                      <div class="absolute inset-y-0 flex items-center ps-3 pointer-events-none">
                        <img src="~/assets/img/icons/search.svg"/>
                      </div>
                      <input 
                        type="search" 
                        id="default-search" 
                        class="block w-full lg:w-[350px] focus:outline-slate-200 border border-slate-200 h-[45px] p-2 ps-10 text-[15px] font-medium text-gray-900 rounded-lg bg-gray-50" 
                        placeholder="Cari Karyawan" 
                        required>
                  </div>
                </div>
                <div class="flex justify-end gap-3 mr-6">
                  <div>
                    <select id="posisi" class="font-normal focus:outline-none  border border-[#95999D] hover:bg-[#E3E8FF] focus border focus:border-[#B7C0D8] text-[15px] rounded-lg block w-full lg:w-auto h-[45px] p-2">
                      <option value="">Posisi</option>
                      <option value="backend">Back-End Developer</option>
                      <option value="backend">DevOps</option>
                      <option value="backend">Front-End Developer</option>
                      <option value="backend">Quality Assurance</option>
                      <option value="backend">UI/UX Designer</option>
                    </select>
                  </div>
                  <div>
                    <select id="divisi" class="font-semibold focus:outline-none  border border-[#95999D] hover:bg-[#E3E8FF] focus border focus:border-[#B7C0D8] text-[15px] rounded-lg block w-full lg:w-auto h-[45px] p-2">
                      <option value="">Divisi</option>
                      <option value="developer">Developer</option>
                      <option value="kreatif">Kreatif</option>
                      <option value="finance">Finance</option>
                    </select>
                  </div>
                  <BlueButton @click="showAddModal = true" :showIcon="true">
                      <template v-slot:message>Tambah Karyawan</template>
                  </BlueButton>
                  </div> 
              </div>
              <div class="container px-5 py-6 mb-10">
                <div class="flex flex-row">
                  <table class="table w-full h-auto responsive-table">
                    <thead>
                      <tr class="mb-2 text-center text-[#0C1662]">
                        <th class="py-3">No</th>
                        <th>Nama</th>
                        <th>Posisi</th>
                        <th>Divisi</th>
                        <th>Status</th>
                        <th>Aksi</th>
                        <th>Riwayat</th>
                      </tr>
                    </thead>
                    <tbody class="text-center">
                      <tr class="hover:bg-slate-50" v-for="dataIT in data" :key="dataIT.id">
                        <td class="py-3">{{dataIT.id}}</td>
                        <td>{{dataIT.nama}}</td>
                        <td>{{dataIT.pekerjaan}}</td>
                        <td>{{dataIT.divisi}}</td>
                        <td>
                          <t-tag 
                              v-show="dataIT.status === 'Aktif'"
                              variant="success"
                          >
                              {{dataIT.status}}
                          </t-tag>
                          <t-tag 
                              v-show="dataIT.status === 'Nonaktif'"
                              variant="danger"
                          >
                              {{dataIT.status}}
                          </t-tag>
                        </td>
                        <td>
                          <button  @click="showEditModal = true" class="bg-black rounded-md p-2">
                              <img src="~/assets/img/icons/edit.svg" />
                          </button>
                          <button 
                              class="bg-red-700 rounded-md p-2"
                              v-if="dataIT.status === 'Aktif'"
                              @click="changeStatus(dataIT, 'Nonaktif')"
                          >
                              <img src="~/assets/img/icons/cancel.svg" />
                          </button>
                          <button 
                              class="bg-green-700 rounded-md p-2"
                              v-if="dataIT.status === 'Nonaktif'"
                              @click="changeStatus(dataIT, 'Aktif')"
                          >
                              <img src="~/assets/img/icons/checklist.svg" />
                          </button>
                        </td>
                        <td>
                          <button class="bg-black font-semibold px-6 py-2 text-white w-auto rounded-md">
                              Detail
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
        </VCard>
      </div>
</template>
  
<script>
import { IT } from '@/models/IT'
import VCard from '@/components/UI/VCard.vue';
import BlueButton from '@/components/UI/BlueButton.vue';
import ModalMessage from '../../../components/UI/ModalMessage.vue';

export default {
    auth: false,
    layout: 'default-admin',
    components: { VCard, BlueButton, ModalMessage },
    data() {
        return {
            data: IT,
            showAddModal: false,
            showEditModal: false
        }
    },
    methods: {
        changeStatus(dataIT, newStatus) {
          dataIT.status = newStatus;
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