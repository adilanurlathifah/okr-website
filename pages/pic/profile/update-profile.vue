<template>
    <div>
        <VCard class="flex flex-col p-6">
            <h4 class="text-left font-semibold text-lg px-4">Edit Profil PIC</h4>
            <div class="flex flex-col md:flex-row justify-center md:justify-evenly items-center px-3 py-2 gap-10 lg:gap-[80px] lg:ml-3">
                <div class="flex flex-col justify-start mb-12">
                    <img src="~/assets/img/profile.png" alt="" class="lg:ml-2 object-contain w-[130px]"/>
                    <button class="flex flex-row items-center mt-3 bg-indigo-50 rounded-xl py-1 px-3 text-[10px] w-auto">
                        <img src="~/assets/img/icons/edit-profile.svg" class="object-contain w-4"/>
                        Ubah Foto Profil
                    </button>
                </div>
                <form class="flex flex-col text-sm gap-y-4">
                    <div>
                        <label class="font-semibold text-left text-sm my-2">Nama</label>
                        <input 
                            type="text" 
                            class="w-full lg:w-[400px] focus:outline-slate-200 block h-[45px] p-2 text-xs font-medium text-gray-900 rounded-lg border border-slate-300" 
                            placeholder="Masukan Nama Lengkap" 
                            required
                        >
                    </div>
                    <div>
                        <label class="font-semibold text-left text-sm my-2">Email</label>
                        <input 
                            type="email" 
                            class="w-full cursor-not-allowed lg:w-[400px] block h-[45px] p-2 text-xs font-medium text-gray-900 rounded-lg border border-slate-300" 
                            placeholder="johndoe@cyberarmy.id" 
                            :disabled="true"
                        >
                    </div>
                    <div>
                        <label class="font-semibold text-left text-sm my-2">Telepon</label>
                        <input 
                            type="number" 
                            class="w-full lg:w-[400px] focus:outline-slate-200 block h-[45px] p-2 text-xs font-medium text-gray-900 rounded-lg border border-slate-300" 
                            placeholder="Masukan No Telepon" 
                            required
                        >
                    </div>
                    <div class="flex flex-row gap-y-4 gap-x-3 my-2">
                        <button class="flex justify-between bg-white-50 hover:bg-slate-50 w-full focus:outline-slate-200 lg:w-[400px] block h-[45px] p-2 font-medium text-gray-900 rounded-lg border border-slate-300 flex items-center">
                            <span class="text-xs text-left">Edit Password</span>
                            <img src="~/assets/img/icons/chevron-left.svg" alt=""/>
                        </button>
                    </div>
                    <div class="flex flex-row justify-end gap-2">
                        <BlueButton 
                            :button-color="false" 
                            @click="" 
                            :showIcon="false" 
                            icon-color="#ffffff"
                            class="text-white"
                        >
                            <template v-slot:message>Simpan</template>
                        </BlueButton>
                        <!-- <button 
                            type="button" 
                            class="flex flex-row font-semibold text-xs text-black text-center border border-black rounded-md w-auto h-[45px] px-6 py-3 shadow-sm gap-2 whitespace-nowrap"
                            @click="">
                            Batal
                        </button> -->
                    </div>
                </form>
            </div>
        </VCard>
    </div>
</template>

<script>
import VCard from '@/components/UI/VCard.vue';
import BlueButton from '~/components/UI/BlueButton.vue'
    export default {
        layout: 'default-admin',
        components: { VCard, BlueButton },
        data() {
            return {
            }
        }
    }
</script>

<style>
.activity-column {
    width: 40%;
}
</style>