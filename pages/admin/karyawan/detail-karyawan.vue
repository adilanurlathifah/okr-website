<template>
    <div>
        <div class="flex justify-center">
            <div class="mt-[8rem] p-6 bg-white flex flex-row justify-center rounded-lg w-4/5 h-[155px]">
                <img class="mt-[1rem] w-[83px] h-[83px]" src="~/assets/img/profile.png" alt="profile-pic"/>
                <div class="flex flex-row p-6 ml-8 justify-between gap-[40px]">
                    <ul>
                        <li class="font-bold">Nama</li>
                        <li>John Doe</li>
                    </ul>
                    <ul>
                        <li class="font-bold">Tim Departement</li>
                        <li>IT</li>
                    </ul>
                    <ul>
                        <li class="font-bold">Posisi</li>
                        <li>Front End Developer</li>
                    </ul>
                    <ul>
                        <li class="font-bold">Email</li>
                        <li>johnappleseed@cyberarmy.id</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="flex flex-row justify-center">
            <div class="mt-6 p-8 bg-white rounded-lg w-4/5 h-auto mb-4">
               <div class="flex flex-row justify-between">
                    <h1 class="font-bold text-xl p-6">Detail Overview Key Result</h1>
                    <t-dropdown text="2023" class="mt-3 text-[15px] font-semibold">
                        <div class="py-1 rounded-md shadow-xs">
                            <ul>
                                <li v-for="option in options" :key="option" class="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
                                    <nuxt-link :to="`/`" class="capitalize">{{ option }}</nuxt-link>
                                </li>
                            </ul>
                        </div>
                    </t-dropdown>
               </div>
                <div class="flex flex-row  justify-center w-full mt-2">
                    <div class="w-1/4 flex flex-row">
                        <div class="flex flex-col gap-2">
                            <p class="ml-6 pt-2 mb-2 text-white text-center bg-[#191F2F] rounded-[28px] w-[160px] h-[40px]">Total <span class="text-xl font-semibold">34%</span></p>
                            <div class="flex flex-row">
                                <div class="grid grid-rows-4 gap-y-2 mx-6">
                                    <div class="bg-indigo-100 w-[104px] h-[109px] rounded-lg px-3 py-6 text-center">
                                        <p class="font-bold text-2xl">79</p>
                                        <p class="text-sm">Kehadiran</p>
                                    </div>
                                    <div class="bg-indigo-100 w-[104px] h-[109px] rounded-lg px-3 py-6 text-center">
                                        <p class="font-bold text-2xl">68</p>
                                        <p class="text-sm">Performa</p>
                                    </div>
                                    <div class="bg-indigo-100 w-[104px] h-[109px] rounded-lg px-3 py-6 text-center">
                                        <p class="font-bold text-2xl">77</p>
                                        <p class="text-sm">Kualitas</p>
                                    </div>
                                    <div class="bg-indigo-100 w-[104px] h-[109px] rounded-lg px-3 py-6 text-center">
                                        <p class="font-bold text-2xl">96</p>
                                        <p class="text-[13px]">Produktivitas</p>
                                    </div>
                                </div>
                                <div class="grid grid-rows-12 mr-4 mb-3 gap-[5px]">
                                    <div v-for="(item, index) in gridData" :key="index" class="mt-[4px] bg-indigo-100 w-[48px] h-[40px] rounded-lg px-3 py-2 text-center">
                                        <p class="font-bold">{{ item.label }}</p>
                                    </div>
                                    <div v-for="(item, index) in gridData" :key="index" class="mt-[4px] bg-indigo-100 w-[48px] h-[40px] rounded-lg px-3 py-2 text-center">
                                        <p class="font-bold">{{ item.label }}</p>
                                    </div>
                                    <div v-for="(item, index) in gridData" :key="index" class="mt-[4px] bg-indigo-100 w-[48px] h-[40px] rounded-lg px-3 py-2 text-center">
                                        <p class="font-bold">{{ item.label }}</p>
                                    </div>
                                    <div v-for="(item, index) in gridData" :key="index" class="mt-[4px] bg-indigo-100 w-[48px] h-[40px] rounded-lg px-3 py-2 text-center">
                                        <p class="font-bold">{{ item.label }}</p>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div class="w-full mt-2"> 
                        <t-table
                            :headers="['Jan', 'Feb', 'Mar', 'April', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec']"
                            :data="[
                               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            ]"
                            >
                        </t-table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { IT } from '~/models/IT.js'
    export default {
        data() {
            return {
                teams: IT,
                options: [ 2023, 2024, 2025],
                gridData: [
                    { label: 'KR'},
                    { label: 'R'},
                    { label: 'T'}
                ],
                // columns: [
                //     { label: 'jan', field: 'jan', type: 'number'},
                //     { label: 'feb', field: 'feb', type: 'number'},
                //     { label: 'mar', field: 'mar', type: 'number'},
                //     { label: 'mei', field: 'mei', type: 'number'},
                //     { label: 'jun', field: 'jun', type: 'number'},
                //     { label: 'jul', field: 'jul', type: 'number'},
                //     { label: 'aug', field: 'aug', type: 'number'},
                //     { label: 'sep', field: 'sep', type: 'number'},
                //     { label: 'okt', field: 'okt', type: 'number'},
                //     { label: 'nov', field: 'nov', type: 'number'},
                //     { label: 'des', field: 'des', type: 'number'},
                // ],
                // rows:[
                //     { jan: 0, feb: 0, mar: 0, mei: 0, jun: 0, jul: 0, aug: 0, sep: 0, okt: 0, nov: 0, des: 0},
                //     { jan: 0, feb: 0, mar: 0, mei: 0, jun: 0, jul: 0, aug: 0, sep: 0, okt: 0, nov: 0, des: 0},
                //     { jan: 0, feb: 0, mar: 0, mei: 0, jun: 0, jul: 0, aug: 0, sep: 0, okt: 0, nov: 0, des: 0},
                //     { jan: 0, feb: 0, mar: 0, mei: 0, jun: 0, jul: 0, aug: 0, sep: 0, okt: 0, nov: 0, des: 0},
                //     { jan: 0, feb: 0, mar: 0, mei: 0, jun: 0, jul: 0, aug: 0, sep: 0, okt: 0, nov: 0, des: 0},
                //     { jan: 0, feb: 0, mar: 0, mei: 0, jun: 0, jul: 0, aug: 0, sep: 0, okt: 0, nov: 0, des: 0},
                //     { jan: 0, feb: 0, mar: 0, mei: 0, jun: 0, jul: 0, aug: 0, sep: 0, okt: 0, nov: 0, des: 0},
                //     { jan: 0, feb: 0, mar: 0, mei: 0, jun: 0, jul: 0, aug: 0, sep: 0, okt: 0, nov: 0, des: 0},
                //     { jan: 0, feb: 0, mar: 0, mei: 0, jun: 0, jul: 0, aug: 0, sep: 0, okt: 0, nov: 0, des: 0},
                //     { jan: 0, feb: 0, mar: 0, mei: 0, jun: 0, jul: 0, aug: 0, sep: 0, okt: 0, nov: 0, des: 0},
                //     { jan: 0, feb: 0, mar: 0, mei: 0, jun: 0, jul: 0, aug: 0, sep: 0, okt: 0, nov: 0, des: 0},
                //     { jan: 0, feb: 0, mar: 0, mei: 0, jun: 0, jul: 0, aug: 0, sep: 0, okt: 0, nov: 0, des: 0}
                // ],
            }
        }
    }
</script>

<style>
</style>