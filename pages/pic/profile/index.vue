<template>
    <div>
        <VCard class="flex flex-col p-4">
            <div class="flex flex-row justify-between p-3">
                <h4 class="font-left font-semibold text-lg">Profil PIC</h4>
                <div>
                    <button class="flex flex-row bg-transparent gap-1 text-xs font-normal">
                        <img src="~/assets/img/icons/edit-profile.svg" alt="" class="w-4" /> 
                        Edit Profil
                    </button>
                </div>
            </div>
            <div class="flex flex-col md:flex-row flex-wrap justify center md:justify-start px-3 py-2 gap-4 lg:gap-[80px] lg:ml-3 items-center">
                <img src="~/assets/img/profile.png" alt="" class="object-contain w-[100px]"/>
                <div>
                    <div class="flex flex-col text-center md:text-left mb-4"> 
                        <p class="text-xs font-normal">Nama Anggota Tim</p>
                        <p class="text-xs mt-2 font-semibold">John Doe</p>
                    </div>
                    <div class="flex flex-col text-center md:text-left mb-4"> 
                        <p class="text-xs font-normal">PIC</p>
                        <p class="text-xs mt-2 font-semibold">Developer</p>
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
        </VCard>
        <VCard class="flex flex-col p-4 mt-4">
            <div class="p-3">
                <div class="flex flex-row justify-between items-center">
                    <h4 class="font-left font-semibold text-lg">Aktivitas Terakhir</h4>
                    <div class="flex flex-row items-center">
                        <select id="periode" class="font-semibold focus:outline-none hover:bg-slate-100 text-xs rounded-lg block w-full lg:w-auto h-[45px] py-2 px-2 mr-2">
                            <option value="">Periode</option>
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
                        <img src="~/assets/img/icons/calendar.svg" class="hidden md:block object-contain w-[12px] h-full" alt=""/>
                    </div>
                </div>
                <table class="table w-full h-auto table-fixed my-3 md:px-2">
                    <thead>
                        <tr class="mb-2 text-center text-xs text-[#0C1662]">
                            <th>No</th>
                            <th>Nama Pengguna</th>
                            <th class="activity-column">Keterangan</th>
                            <th>Waktu</th>
                            <th>Riwayat</th>
                        </tr>
                    </thead>
                    <tbody class="text-center text-xs">
                        <tr class="hover:bg-slate-50" v-for="data in actHistory" :key="data.id">
                            <td class="py-3">{{data.id}}</td>
                            <td>{{data.nama}}</td>
                            <td class="activity-column">{{data.activity}}</td>
                            <td>{{data.time}}</td>
                            <td>
                                <button class="bg-black font-semibold px-3 text-sm md:px-6 py-2 text-white w-auto rounded-md">
                                    Detail
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </VCard>
    </div>
</template>

<script>
import VCard from '@/components/UI/VCard.vue';
import { IT } from '@/models/IT'
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