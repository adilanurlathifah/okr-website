<template>
    <div>
        <ModalMessage v-show="showModal" @close-modal="showModal = false">
          <div class="flex flex-col">
            <h1 class="font-bold text-xl ml-6 text-left">Edit Nilai</h1>
            <div class="flex flex-col justify-center mt-3 px-6">
              <label class="font-semibold text-left text-base my-2">PIC</label>
              <div class="flex flex-row">
                <select id="pic" class="w-[450px] border border-slate-300 px-3 focus:outline-slate-300 block h-[45px] text-[15px] font-medium text-gray-900 rounded-lg" >
                  <option value="">Pilih PIC</option>
                  <option value="">Rendy Bustary</option>
                  <option value="">Chintya Dwi Hadiani</option>
                  <option value="">Doddy Ferdiansyah</option>
                </select>
              </div>
            </div>
            <div class="flex flex-col justify-center mt-3 px-6">
              <label class="font-semibold text-left text-base my-2">Nama Karyawan</label>
                  <select id="karyawan" class="w-[450px] border border-slate-300 px-3 focus:outline-slate-300 block h-[45px] text-[15px] font-medium text-gray-900 rounded-lg">
                    <option value="">Tahun</option>
                    <option value="">Pilih PIC</option>
                    <option value="">Alfarozy</option>
                    <option value="">Rahman</option>
                  </select>
            </div>
            <div class="flex flex-col justify-center mt-3 px-6">
              <label class="font-semibold text-left text-base my-2">Kategori Penilaian</label>
              <select id="kategori" class="w-[450px] border border-slate-300 px-3 focus:outline-slate-300 block h-[45px] text-[15px] font-medium text-gray-900 rounded-lg" >
                  <option value="">Pilih Kategori</option>
                  <option value="kehadiran">Kehadiran</option>
                  <option value="performa">Performa</option>
                  <option value="kualitas">Kualitas</option>
                  <option value="produktivitas">Produktivitas</option>
                </select>
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
          </div>
          <div class="flex flex-row justify-end gap-2 pt-10 pb-3 pr-6">
            <BlueButton 
              :button-color="false" 
              @click="editNilai" 
              :showIcon="false" 
              icon-color="#ffffff"
              class="text-white"
            >
                <template v-slot:message>Simpan Nilai</template>
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
import BlueButton from '@/components/UI/BlueButton.vue';
import ModalMessage from '@/components/UI/ModalMessage.vue';

export default {
    auth: false,
    layout: 'default-admin',
    components: { BlueButton, ModalMessage },
    data() {
        return {
            showModal: false
        }
    },
    methods: {
        editNilai() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        }
    }
}
</script>