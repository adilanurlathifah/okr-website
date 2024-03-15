<template>
    <div>
        <ModalMessage v-show="showModal" @close-modal="showModal = false">
          <div class="flex flex-col">
            <h1 class="font-bold text-xl ml-6 text-left">Tambah Nilai</h1>
            <div class="flex flex-col justify-center mt-3 px-6">
                <label class="font-semibold text-left text-base my-2">Posisi</label>
                <select id="posisi" class="w-[450px] border border-slate-300 px-3 focus:outline-slate-300 block h-[45px] text-[15px] font-medium text-gray-900 rounded-lg" >
                    <option value="">Pilih Posisi</option>
                    <option value="backend">Back-End Developer</option>
                    <option value="devops">DevOps</option>
                    <option value="frontend">Front-End Developer</option>
                    <option value="qa">Quality Assurance</option>
                    <option value="uiux">UI/UX Designer</option>
                </select>
            </div>
            <div class="flex flex-col justify-center mt-3 px-6">
              <label class="font-semibold text-left text-base my-2">Nama Karyawan</label>
                  <select id="divisi" class="w-[450px] border border-slate-300 px-3 focus:outline-slate-300 block h-[45px] text-[15px] font-medium text-gray-900 rounded-lg">
                    <option value="">Pilih Divisi</option>
                    <option value="">Developer</option>
                    <option value="">Kreatif</option>
                    <option value="">Finance</option>
                  </select>
            </div>
          </div>
          <div class="flex flex-row justify-end gap-2 pt-10 pb-3 pr-6">
            <BlueButton 
              :button-color="false" 
              @click="addNilai" 
              :showIcon="false" 
              icon-color="#ffffff"
              class="text-white"
            >
                <template v-slot:message>Tambah Nilai</template>
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
        addNilai() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        }
    }
}
</script>