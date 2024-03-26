<template>
    <div>
        <VCard class="flex flex-col p-4">
            <div class="flex flex-row justify-between p-3">
                <h4 class="font-left font-semibold text-lg">Profil Admin</h4>
                <div>
                    <nuxt-link to="/admin/profile/update-profile">
                        <button class="flex flex-row bg-transparent gap-1 text-xs font-normal">
                            <img src="~/assets/img/icons/edit-profile.svg" alt="" class="w-4" /> 
                            Edit Profil
                        </button>
                    </nuxt-link>
                </div>
            </div>
            <div class="flex flex-col md:flex-row justify center md:justify-start px-3 py-2 gap-10 lg:gap-[80px] lg:ml-3 items-center">
                <img src="~/assets/img/profile.png" alt="" class="object-contain w-[100px]"/>
                <div class="flex flex-col text-center md:text-left">
                    <p class="text-sm font-normal">Nama Anggota Tim</p>
                    <p class="text-sm font-semibold">John Doe</p>
                </div>
                <div class="flex flex-col text-center md:text-left">
                    <p class="text-sm font-normal">Email</p>
                    <p class="text-sm font-semibold">johnapple@cyberarmy.id</p>
                </div>
            </div>
        </VCard>
        <VCard class="flex flex-col p-4 mt-4">
            <div class="p-3">
                <div class="flex flex-row justify-between items-center">
                    <h4 class="font-left font-semibold text-lg">Aktivitas Terakhir</h4>
                    <div class="flex flex-row items-center">
                        <select id="periode" class="font-semibold focus:outline-none border border-[#95999D] focus:border focus:border-[#B7C0D8] hover:bg-[#E3E8FF] text-xs rounded-lg block w-full lg:w-auto h-[45px] py-2 px-2 mr-2">
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
export default {
    layout: 'default-admin',
    components: { VCard },
    methods: {
        async showProfile() {
            const getProfile = await this.$axios.$get('/api/admin/profile');
            
        }
    }
}
</script>

<style>
.activity-column {
    width: 40%;
}
</style>