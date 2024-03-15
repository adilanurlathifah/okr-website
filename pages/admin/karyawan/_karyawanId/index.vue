<template>
    <div>
        <VCard class="flex flex-col p-4">
            <div class="flex flex-row justify-between p-3">
                <h4 class="font-left font-semibold text-lg">Profil Member</h4>
            </div>
            <div class="flex flex-col md:flex-row flex-wrap justify center md:justify-start px-3 py-2 gap-4 lg:gap-[80px] lg:ml-3 items-center">
                <img src="~/assets/img/profile.png" alt="" class="object-contain w-[100px]"/>
                <div>
                    <div class="flex flex-col text-center md:text-left mb-4"> 
                        <p class="text-xs font-normal">Nama Anggota Tim</p>
                        <p class="text-xs mt-2 font-semibold">John Doe</p>
                    </div>
                    <div class="flex flex-col text-center md:text-left mb-4"> 
                        <p class="text-xs font-normal">Posisi</p>
                        <p class="text-xs mt-2 font-semibold">Front-End Developer</p>
                    </div>
                </div>
                <div>
                    <div class="flex flex-col text-center md:text-left mb-4"> 
                        <p class="text-xs font-normal">Telepon</p>
                        <p class="text-xs mt-2 font-semibold">081992929</p>
                    </div>
                    <div class="flex flex-col text-center md:text-left mb-4"> 
                        <p class="text-xs font-normal">Email</p>
                        <p class="text-xs mt-2 font-semibold">johnapple@cyberarmy.id</p>
                    </div>
                </div>
                <div>
                    <div class="flex flex-col text-center md:text-left mb-4">
                        <p class="text-xs font-normal">Divisi</p>
                        <p class="text-xs mt-2 font-semibold">Developer</p>
                    </div>
                    <div class="flex flex-col text-center md:text-left mb-4"> 
                        <p class="text-xs font-normal">Status</p>
                        <t-tag v-if="data.length > 0 && data[0].status === 'Aktif'" variant="success">
                            {{ data[0].status }}
                        </t-tag>
                        <t-tag v-else-if="data.length > 0 && data[0].status === 'Nonaktif'" variant="danger">
                            {{ data[0].status }}
                        </t-tag>
                    </div>
                </div>
            </div>
        </VCard>
        <VCard class="mt-4">
            <div class="flex flex-col md:flex-row justify-evenly p-4 gap-8">
                <div class="container flex mx-auto md:mx-2 bg-indigo-200 w-auto rounded-lg p-3">
                    <img src="~/assets/img/icons/statistik-dark.svg" alt="" class="w-[18px] object-container items-center" />
                </div>
                <div class="flex flex-col text-center">
                    <h4 class="font-semibold text-2xl">80</h4>
                    <p class="text-[10px] font-normal">Total Kehadiran</p>
                </div>
                <div class="flex flex-col text-center">
                    <h4 class="font-semibold text-2xl">80</h4>
                    <p class="text-[10px] font-normal">Total Kualitas</p>
                </div>
                <div class="flex flex-col text-center">
                    <h4 class="font-semibold text-2xl">80</h4>
                    <p class="text-[10px] font-normal">Total Performa</p>
                </div>
                <div class="flex flex-col text-center">
                    <h4 class="font-semibold text-2xl">80</h4>
                    <p class="text-[10px] font-normal">Total Produktivitas</p>
                </div>
            </div>
        </VCard>
    </div>
</template>

<script>
import { IT } from '@/models/IT'
import VCard from '@/components/UI/VCard.vue';
import { lastActivity } from '@/models/last-activity'
    export default {
        layout: 'default-admin',
        components: { VCard },
        data() {
            return {
                data: IT,
                actHistory: lastActivity,
            }
        }
    }
</script>

<style>
.activity-column {
    width: 40%;
}
</style>