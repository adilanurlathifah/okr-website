<template>
    <ModalMessage v-show="showModal" @close-modal="showModal = false">
        <div class="flex flex-col" @submit.prevent="categoryName">
        <h1 class="font-bold text-xl ml-6 text-left">Tambah Kategori</h1>
        <div class="flex flex-col justify-center p-6">
            <label class="font-semibold text-left text-base my-2">Kategori</label>
            <input 
                :class="{
                    'is-valid': categoryFilled(),
                    'is-invalid': (submitted && !categoryFilled()) || (submitted && !isValidLength()),
                    'border-red-600': (submitted && !categoryFilled()) || (submitted && !isValidLength())
                }"
                v-model="name"
                type="input"
                class="block w-full md:w-[350px] px-3 focus:outline-slate-300 h-[45px] text-sm font-medium text-gray-900 rounded-lg border border-slate-300" 
                placeholder="Tambah Kategori Disini" 
            >
            <small
                v-if="submitted & !categoryFilled()"
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
                    Pilih Posisi
                </label>
                <select 
                    v-if="positions.length" 
                    v-model="selectedPositionId" 
                    id="divisi" 
                    class="block w-full md:w-[350px] border border-slate-300 focus:outline-slate-300 h-[45px] text-sm font-medium text-gray-900 rounded-lg">
                    <option value="">Pilih Posisi</option>
                    <option v-for="position in positions" :key="position.id" :value="position.id">{{ position.name }}</option>
                </select>
            </div>
        </div>
            <div class="flex flex-row justify-end gap-2 pt-3 pb-3 pr-6">
                <BlueButton 
                    :button-color="false" 
                    @click="sendPosisi" 
                    :showIcon="true" 
                    icon-color="#ffffff"
                    class="text-white"
                >
                    <template v-slot:message>Tambah Kategori</template>
                </BlueButton>
                <button 
                    type="button" 
                    class="flex flex-row font-semibold text-base md:text-[15px] text-black text-center border border-black rounded-md w-auto h-[45px] px-6 py-2 shadow-sm gap-2 whitespace-nowrap"
                    @click="$emit('close-modal')">
                        Batal
                </button>
            </div>
        </div>
    </ModalMessage>
</template>

<script>
import BlueButton from '@/components/UI/BlueButton.vue';
import ModalMessage from '@/components/UI/ModalMessage.vue';

export default {
    components: { BlueButton, ModalMessage },
    data() {
        return {
            name: "",
            selectedPositionId: "",
            showModal: false,
            submitted: false,
            positions: [], 
        }
    },
    created() {
        this.fetchPositions();
    },
    methods: {
        categoryFilled(){
            return this.name !== ''
        },
        isValidLength() {
            return this.name.length <= 100;
        },
        isValid() {
            let status = true;
            if (!this.categoryFilled() || !this.isValidLength()) {
                status = false;
            } 
            return status
        },
        categoryName() {
            this.$emit("kategori", this.name);
        },
        sendPosisi() {
            this.submitted = true;
            if (this.isValid()) {
                this.$emit("kategori", {name: this.name, positionId: this.selectedPositionId});
            } else {
                    this.$toast.error('Posisi gagal ditambahkan', {
                    position: 'top-right'
                });
            }
        },
        async fetchPositions() {
            try {
                const response = await this.$axios.$get(`/api/admin/positions?division_id&page&search&status`);
                this.positions = response.data.divisions.data;
            } catch (error) {
                console.error('Failed to fetch positions:', error);
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