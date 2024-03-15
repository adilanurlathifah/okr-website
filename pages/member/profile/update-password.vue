<template>
    <div class="min-h-screen flex items-center justify-center py-3 px-4 sm:px-6 lg:px-8">
       <div class="max-w-md w-full space-y-8">
         <form class="flex flex-col bg-white rounded-lg w-auto px-8 py-3 shadow-md h-auto mt-2 space-y-3">
           <h1 class="text-lg text-left font-semibold py-2">Edit Password</h1>
           <input type="hidden" name="remember" value="true">
           <div>
             <div class="flex flex-col mt-4">
               <label for="password" class="text-black text-sm font-semibold">Password Lama</label>
               <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none text-xs rounded-md mt-2 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:z-10" placeholder="Masukkan Password Lama">
             </div>
            <div class="flex flex-col mt-4">
                <label for="password" class="text-black text-sm font-semibold">Password Baru</label>
                <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none text-xs rounded-md mt-2 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:z-10" placeholder="Masukkan Password Baru">
            </div>
            <div class="flex flex-col mt-4">
                <label for="password" class="text-black text-sm font-semibold">Konfirmasi Password</label>
                <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none text-xs rounded-md mt-2 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:z-10" placeholder="Masukkan Password Baru">
            </div>
           </div>
           <div class="flex flex-col pt-4">
                <div class="flex flex-row justify-end gap-2">
                    <BlueButton 
                        :button-color="false" 
                        :showIcon="false" 
                        icon-color="#ffffff"
                        class="text-white"
                    >
                        <template v-slot:message>Simpan</template>
                    </BlueButton>
                    <button 
                        type="button" 
                        class="flex flex-row font-semibold text-xs text-black text-center border border-black rounded-md w-auto h-[45px] px-6 py-3 shadow-sm gap-2 whitespace-nowrap"
                    >
                        Batal
                    </button>
                </div>
           </div>
         </form>
       </div>
    </div>
</template>
  
<script>
import BlueButton from '~/components/UI/BlueButton.vue'

export default {
    components: { BlueButton },
    data() {
      return {
      }
    },
    methods: {
      
    }
  }
</script>