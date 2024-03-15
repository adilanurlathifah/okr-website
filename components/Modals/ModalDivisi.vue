<template>
       <ModalMessage v-show="showModal" @close-modal="showModal = false">
          <div class="flex flex-col">
            <h1 class="font-bold text-xl ml-6 text-left">Tambah Divisi</h1>
            <div class="flex flex-col justify-center mt-3 px-6">
                <div class="flex flex-row justify-center mt-6 pt-6">
                    <div class="relative">
                        <div class="absolute inset-y-0 flex items-center ps-3 pointer-events-none">
                            <img src="~/assets/img/icons/round-edit.svg"/>
                        </div>
                        <input 
                            type="input" 
                            class="w-[450px] focus:outline-slate-300 block h-[45px] p-2 ps-10 text-[15px] font-medium text-gray-900 rounded-lg border border-slate-300" 
                            placeholder="Tulis Kategori Disini" 
                            required
                        >
                    </div>
                </div>
            </div>
          </div>
          <div class="flex flex-row justify-end gap-2 pt-10 pb-3 pr-6">
            <BlueButton 
              :button-color="false" 
              @click="tambahDivisi" 
              :showIcon="true" 
              icon-color="#ffffff"
              class="text-white"
            >
                <template v-slot:message>Buat Divisi</template>
            </BlueButton>
            <button 
              type="button" 
              class="flex flex-row font-semibold text-base md:text-[15px] text-black text-center border border-black rounded-md w-auto h-[45px] px-6 py-3 shadow-sm gap-2 whitespace-nowrap"
              @click="showModal = false">
                  Batal
            </button>
          </div>
        </ModalMessage>
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
        tambahDivisi() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        }
    }
}
</script>