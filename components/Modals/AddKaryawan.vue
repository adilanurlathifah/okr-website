<template>
    <div>
        <ModalMessage>
          <div class="flex flex-col">
            <h1 class="font-bold text-lg ml-6 text-left">Tambah Karyawan</h1>
            <div class="flex flex-col justify-center mt-3 px-6">
                <label class="font-semibold text-left text-sm my-2">Nama</label>
                <input 
                  type="text" 
                  class="w-full md:w-[450px] focus:outline-slate-200 block h-[45px] p-2 text-xs font-medium text-gray-900 rounded-lg border border-slate-300" 
                  placeholder="Masukan Nama" 
                  required
                >
            </div>
            <div class="flex flex-col justify-center mt-3 px-6">
                <label class="font-semibold text-left text-sm my-2">Email</label>
                <input 
                  type="email" 
                  class="w-full md:w-[450px] focus:outline-slate-200 block h-[45px] p-2 text-xs font-medium text-gray-900 rounded-lg border border-slate-300" 
                  placeholder="Masukan Email" 
                  required
                >
            </div>
            <div class="flex flex-col justify-center mt-3 px-6">
                <label class="font-semibold text-left text-sm my-2">Telepon</label>
                <input 
                  type="number" 
                  class="w-full md:w-[450px] focus:outline-slate-200 block h-[45px] p-2 text-xs font-medium text-gray-900 rounded-lg border border-slate-300" 
                  placeholder="Masukan No.Telepon" 
                  required
                >
            </div>
            <div class="flex flex-col justify-center mt-3 px-6">
                <label class="font-semibold text-left text-sm my-2">Pilih Divisi</label>
                <select id="divisi" class="w-full md:w-[450px] border border-slate-300 px-3 focus:outline-slate-200 block h-[45px] text-xs font-medium text-gray-900 rounded-lg">
                    <option value="">Divisi</option>
                    <option value="developer">Developer</option>
                    <option value="kreatif">Kreatif</option>
                    <option value="finance">Finance</option>
                </select>
            </div>
            <div class="flex flex-col justify-center mt-3 px-6">
                <label class="font-semibold text-left text-sm my-2">Pilih Posisi</label>
                <select 
                    id="posisi" 
                    class="w-full md:w-[450px] border border-slate-300 px-3 focus:outline-slate-200 block h-[45px] text-xs font-medium text-gray-900 rounded-lg" >
                    <option value="">Posisi</option>
                    <option value="backend">Back-End Developer</option>
                    <option value="backend">DevOps</option>
                    <option value="backend">Front-End Developer</option>
                    <option value="backend">Quality Assurance</option>
                    <option value="backend">UI/UX Designer</option>
                </select>
            </div>
          </div>
          <div class="flex flex-row justify-end gap-2 pt-10 pb-3 pr-6">
            <BlueButton 
              :button-color="false" 
              :showIcon="false" 
              icon-color="#ffffff"
              class="text-white"
            >
                <template v-slot:message>Tambah</template>
            </BlueButton>
            <button 
              type="button" 
              class="flex flex-row font-semibold text-sm md:text-xs text-black text-center border border-black rounded-md w-auto h-[45px] px-6 py-3 shadow-sm gap-2 whitespace-nowrap"
              @click="close">
                  Batal
            </button>
          </div>
        </ModalMessage>
    </div>
</template>

<script>
import ModalMessage from '~/components/UI/ModalMessage.vue'
import BlueButton from '~/components/UI/BlueButton.vue'

export default {
    components: { ModalMessage, BlueButton },
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        close() {
            this.$emit('close');
        }
    }
}
</script>