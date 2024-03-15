<template>
    <div>
        <VCard class="flex flex-col p-6">
            <h4 class="text-left font-semibold text-lg px-4 py-4">Detail Aktivitas Terakhir</h4>
            <div class="flex flex-col md:flex-row justify-start items-center px-3 py-2 gap-4 lg:gap-[80px] lg:ml-3">
                <div class="flex flex-col text-center lg:text-left gap-2 whitespace-normal p-2 font-semibold">
                    <div class="flex-grow">
                        <p class="text-sm">Jenis Anggota Tim</p>
                    </div>
                    <div class="flex-grow">
                        <p class="text-sm">Tanggal</p>
                    </div>
                    <div class="flex-grow-1">
                        <p class="text-sm">Deskripsi</p>
                    </div>
                </div>
                <div class="flex flex-col gap-2 text-center lg:text-left whitespace-nowrap p-2" v-if="actHistory.length > 0">
                    <div class="flex-grow">
                        <p class="text-sm">{{ actHistory[0].role }}</p>
                    </div>
                    <div class="flex-grow">
                        <p class="text-sm">{{ actHistory[0].time }}</p>
                    </div>
                    <div class="flex-grow-1">
                        <p class="text-sm">{{ actHistory[0].activity }}</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col">
                <div class="flex flex-col mx-6"> 
                    <h4 class="text-left font-semibold text-lg px-4 py-4">Data Awal</h4>
                    <div class="container bg-black ml-4 rounded-lg h-auto w-auto overflow-auto max-w-full">
                        <pre class="text-xs text-white">
                            <code>
                            {
                                "division_id" : "6b610a15-fdac-4677-8132-b92f26595c53",
                                "position_id: "7b610a15-fdac-4677-8132-b92f2659c53",
                                "name": "Koji v2",
                                "avatar": "null",
                                "address": "null",
                                "birth_date": "null",
                                "email": "koji@gmail.com",
                                "email_verified_at": "null",
                                "division":{
                                    "name": "Teknologi_Informasi"
                                },
                                "position": {
                                    "division_id": "6b610a15-fdac-4677-8132-b92f26595c53",
                                    "name": "Backend Developer"
                                }
                            }
                            </code>
                        </pre>
                    </div>
                </div>
                <div class="flex flex-col mx-6"> 
                    <h4 class="text-left font-semibold text-lg px-4 py-4">Data Akhir</h4>
                    <div class="container bg-black ml-4 rounded-lg h-auto w-auto overflow-auto max-w-full">
                        <pre class="text-xs text-white">
                            <code>
                            {
                                "division_id" : "6b610a15-fdac-4677-8132-b92f26595c53",
                                "position_id: "7b610a15-fdac-4677-8132-b92f2659c53",
                                "name": "Koji v2",
                                "avatar": "null",
                                "address": "null",
                                "birth_date": "null",
                                "email": "koji@gmail.com",
                                "email_verified_at": "null",
                                "division":{
                                    "name": "Teknologi_Informasi"
                                },
                                "position": {
                                    "division_id": "6b610a15-fdac-4677-8132-b92f26595c53",
                                    "name": "Backend Developer"
                                }
                            }
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        </VCard>
    </div>
</template>

<script>
import VCard from '@/components/UI/VCard.vue';
import BlueButton from '~/components/UI/BlueButton.vue'
import { lastActivity } from '@/models/last-activity'
    export default {
        layout: 'default-admin',
        components: { VCard, BlueButton, lastActivity },
        data() {
            return {
                actHistory: lastActivity
            }
        }
    }
</script>

<style>
.activity-column {
    width: 40%;
}
.container {
    max-width: 100%; 
    overflow: auto; 
    white-space: pre-wrap;
}
</style>
