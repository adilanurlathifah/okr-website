<template>
    <ModalMessage v-show="showModal" @close-modal="showModal = false">
        <form @submit.prevent="posisiName">
            <div class="flex flex-col">
                <h1 class="font-bold text-xl ml-6 text-left">Edit Posisi</h1>
                <div class="flex flex-col justify-center p-6">
                    <label class="font-semibold text-left text-base my-2">Posisi</label>
                    <input 
                        :class="{
                            'is-valid': posisiFilled(),
                            'is-invalid': (submitted && !posisiFilled()) || (submitted && !isValidLength()),
                            'border-red-600': (submitted && !posisiFilled()) || (submitted && !isValidLength())
                        }"
                        v-model="name"
                        type="input"
                        class="block w-full md:w-[350px] px-3 focus:outline-slate-300 h-[45px] text-sm font-medium text-gray-900 rounded-lg border border-slate-300" 
                        placeholder="Tambah Posisi Disini" 
                    >
                    <small
                        v-if="submitted & !posisiFilled()"
                        class="text-xs text-red-700"
                    > Nama posisi harus diisi
                    </small>
                    <small
                        v-if="submitted & !isValidLength()"
                        class="text-xs text-red-700"
                    > Karakter tidak boleh lebih dari 100
                    </small>
                    <div class="flex flex-col justify-center mt-3">
                        <label class="font-semibold text-left text-base my-2">
                            Pilih Divisi
                        </label>
                        <select 
                            v-model="localSelectedDivision" 
                            id="divisi" 
                            class="block w-full md:w-[350px] border border-slate-300 focus:outline-slate-300 h-[45px] text-sm font-medium text-gray-900 rounded-lg">
                            <option value="">Pilih Divisi</option>
                            <option v-for="division in divisions" :key="division.id" :value="division.id">{{ division.name }}</option>
                        </select>
                    </div>
                </div>
                    <div class="flex flex-row justify-end gap-2 pt-3 pb-3 pr-6">
                        <BlueButton 
                            :button-color="false" 
                            @click="updatePosition" 
                            :showIcon="false" 
                            icon-color="#ffffff"
                            class="text-white"
                        >
                            <template v-slot:message>Simpan</template>
                        </BlueButton>
                        <button 
                            type="button" 
                            class="flex flex-row font-semibold text-base md:text-[15px] text-black text-center border border-black rounded-md w-auto h-[45px] px-6 py-2 shadow-sm gap-2 whitespace-nowrap"
                            @click="$emit('close-modal')">
                                Batal
                        </button>
                    </div>
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
            localSelectedDivision: this.selectedDivision,
            showModal: false,
            submitted: false,
            divisions: [], 
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
        },
        selectedDivision: {
            type: String,
            required: true
        }
    },
    created() {
        this.fetchDivisions();
    },
    watch: {
        selectedDivision(newVal) {
            this.localSelectedDivision = newVal; 
        }
    },
    methods: {
        closeModal(){
            this.$emit('close-modal');
        },
        posisiFilled(){
            return this.name !== ''
        },
        isValidLength() {
            return this.name.length <= 100;
        },
        isValid() {
            let status = true;
            if (!this.posisiFilled() || !this.isValidLength()) {
                status = false;
            } 
            return status
        },
        updateSelectedDivision(newValue) {
            this.$emit('update:selectedDivision', newValue);
        },
        posisiName() {
            this.$emit("posisi", {
                id: this.id,
                name: this.name, 
                divisionId: this.localSelectedDivision
            });
        },
        updatePosition() {
            this.submitted = true;
            if (this.isValid()) {
                return this.posisiName()
            } else {
                    this.$toast.error('Posisi gagal ditambahkan', {
                    position: 'top-right'
                });
            }
        },
        async fetchDivisions() {
            try {
                const response = await this.$axios.$get('/api/admin/divisions?limit&search&status=actived');
                this.divisions = response.data.divisions.data;
            } catch (error) {
                console.error('Failed to fetch divisions:', error);
            }
        },
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