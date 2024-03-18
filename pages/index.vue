<template>
  <div class="p-5 h-screen bg-gray-100">
     <h1 class="text-xl mb-2">Your orders</h1>
     <div class="overflow-auto rounded-lg shadow">
       <table class="w-full">
         <thead class="bg-gray-50 border-b-2 border-gray-100">
         <tr>
           <th class="w-20 p-3 text-sm font-semibold tracking-wide text-left hidden md:table-cell">No.</th>
           <th class="w-20 p-3 text-sm font-semibold tracking-wide text-left hidden md:table-cell">Nama</th>
           <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left hidden md:table-cell">Status</th>
           <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left hidden md:table-cell">Email</th>
           <th class="w-32 p-3 text-sm font-semibold tracking-wide text-left hidden md:table-cell">Divisi</th>
         </tr>
         </thead>
         <tbody class="divide-y divide-gray-100">
         <tr class="bg-white block md:table-row" v-for="item in PIC" :key="item.id">
           <td class="p-3 text-sm text-gray-700 whitespace-nowrap block md:table-cell" data-title="No.">
             <a href="#" class="font-bold text-blue-500 hover:underline">{{ item.id }}</a>
           </td>
           <td class="p-3 text-sm text-gray-700 whitespace-nowrap block md:table-cell" data-title="Details">
             {{ item.nama }}
           </td>
           <td class="p-3 text-sm text-gray-700 whitespace-nowrap block md:table-cell" data-title="Status">
             <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">{{ item.status }}</span>
           </td>
           <td class="p-3 text-sm text-gray-700 whitespace-nowrap block md:table-cell" data-title="Date">{{ item.email }}</td>
           <td class="p-3 text-sm text-gray-700 whitespace-nowrap block md:table-cell" data-title="Total">{{ item.divisi }}</td>
         </tr>
         </tbody>
       </table>
     </div>
  </div>
</template>
 
<script>
 import VCard from '../components/UI/VCard.vue';
 import { PIC } from '../models/PIC.js';
 
 export default {
  name: 'IndexPage',
  layout: 'default-admin',
  middleware: 'auth',
  components: { VCard },
  data() {
     return {
       PIC: PIC
     };
  }
 }
</script>
 