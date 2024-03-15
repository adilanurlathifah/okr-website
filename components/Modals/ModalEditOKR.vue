<template>
    <div>
        <ModalMessage v-show="showModal" @close-modal="showModal = false">
          <div class="flex flex-col">
            <h1 class="font-bold text-xl ml-6 text-left">Edit OKR</h1>
            <div class="flex flex-col justify-center mt-3 px-6">
              <label class="font-semibold text-left text-base my-2">Kategori</label>
              <div class="flex flex-row">
                <select id="kategori" class="w-[450px] border border-slate-300 px-3 focus:outline-slate-300 block h-[45px] text-[15px] font-medium text-gray-900 rounded-lg" >
                  <option value="">Pilih Kategori</option>
                  <option value="kehadiran">Kehadiran</option>
                  <option value="performa">Performa</option>
                  <option value="kualitas">Kualitas</option>
                  <option value="produktivitas">Produktivitas</option>
                </select>
              </div>
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
            <div class="flex flex-col justify-center mt-3 px-6">
              <label class="font-semibold text-left text-base my-2">Kategori</label>
              <div class="flex flex-row gap-3">
                  <select id="periode" class="w-[450px] border border-slate-300 px-3 focus:outline-slate-300 block h-[45px] text-[15px] font-medium text-gray-900 rounded-lg">
                      <option value="">Pilih Periode</option>
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
                  <select id="tahun" class="w-[450px] border border-slate-300 px-3 focus:outline-slate-300 block h-[45px] text-[15px] font-medium text-gray-900 rounded-lg">
                    <option value="">Tahun</option>
                    <option value="2024">2024</option>
                    <option value="2024">2023</option>
                    <option value="2024">2022</option>
                  </select>
                </div>
            </div>
          </div>
          <div class="flex flex-row justify-end gap-2 pt-10 pb-3 pr-6">
            <BlueButton 
              :button-color="false" 
              @click="editOKR" 
              :showIcon="false" 
              icon-color="#ffffff"
              class="text-white"
            >
                <template v-slot:message>Simpan</template>
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
        editOKR() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        }
    }
}
</script>