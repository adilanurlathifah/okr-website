<template>
    <ModalMessage v-show="showModal" @close-modal="showModal = false">
        <form class="px-4 md:px-6" @submit.prevent="divisiName">
          <div class="flex flex-col">
            <h1 class="font-bold text-xl text-left">Edit Divisi</h1>
            <div class="flex flex-col text-left justify-center">
                <div class="relative w-full py-3">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <img src="~/assets/img/icons/round-edit.svg"/>
                    </div>
                    <input 
                        :class="{
                            'is-valid': divisiFilled(),
                            'is-invalid': (submitted && !divisiFilled()) || (submitted && !isValidLength()),
                            'border-red-600': (submitted && !divisiFilled()) || (submitted && !isValidLength())
                        }"
                        v-model="name"
                        type="input"
                        class="block w-full md:w-[350px] focus:outline-slate-300 h-[45px] p-2 ps-10 text-sm font-medium text-gray-900 rounded-lg border border-slate-300" 
                        placeholder="Tambah Divisi Disini" 
                    >
                </div>
                <small
                    v-if="submitted & !divisiFilled()"
                    class="text-xs text-red-700"
                > Nama divisi harus diisi
                </small>
                <small
                    v-if="submitted & !isValidLength()"
                    class="text-xs text-red-700"
                > Karakter tidak boleh lebih dari 100
                </small>
            </div>
          </div>
          <div class="flex flex-row justify-end items-center gap-2 mt-3 md:pr-1">
            <BlueButton 
              :button-color="false" 
              @click="updateDivision" 
              :showIcon="true" 
              icon-color="#ffffff"
              class="text-white"
            >
                <template v-slot:message>Simpan Divisi</template>
            </BlueButton>
            <button 
                type="button" 
                class="flex flex-row font-semibold text-base md:text-[15px] text-black text-center border border-black rounded-md w-auto h-[45px] px-6 py-2 shadow-sm gap-2 whitespace-nowrap"
                @click="$emit('close-modal')">
                    Batal
            </button>
          </div>
        </form>
    </ModalMessage>
</template>

<script>
import BlueButton from '@/components/UI/BlueButton.vue';
import ModalMessage from '@/components/UI/ModalMessage.vue';

export default {
    components: { BlueButton, ModalMessage },
    data() {
        return {
            showModal: false,
            submitted: false,
        }
    },
    props: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            default: ''
        }
    },
    methods: {
        closeModal() {
            this.$emit('close-modal');
        },
        divisiFilled(){
            return this.name !== ''
        },
        isValidLength() {
            return this.name.length <= 100;
        },
        isValid() {
            let status = true;
            if (!this.divisiFilled() || !this.isValidLength()) {
                status = false;
            } 
            return status
        },
        divisiName() {
            this.$emit("divisi", { 
                id: this.id, 
                name: this.name
            });
        },
        updateDivision() {
            this.submitted = true;
            if (this.isValid()) {
                return this.divisiName()
            } else {
                console.log('the data not send')
            }
        }
    }
}
</script>

<style>
.modal {
    display: block;
    width: 100%;
}

@media (min-width: 768px) {
    .modal {
        width: 400px;
    }
}
</style>