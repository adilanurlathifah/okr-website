<template>
    <div>
        <ModalMessage v-show="showAddModal" @close-modal="showAddModal = false">
          <div class="flex flex-col">
            <h1 class="font-bold text-xl ml-6 text-left">Tambah Kategori</h1>
            <div class="flex flex-row justify-center mt-4 pt-4">
              <div class="relative">
                  <div class="absolute inset-y-0 flex items-center ps-3 pointer-events-none">
                    <img src="~/assets/img/icons/round-edit.svg"/>
                  </div>
                  <input 
                    type="input" 
                    class="w-[450px] text-base focus:outline-slate-200 block h-[45px] p-2 ps-10 text-sm font-medium text-gray-900 rounded-lg border border-slate-300" 
                    placeholder="Tulis Kategori Disini" 
                    required
                  >
              </div>
            </div>
            <div class="flex flex-col justify-center mt-3 px-6">
              <label class="font-semibold text-left text-base my-2">Pilih Posisi</label>
              <select id="posisi" class="focus:outline-slate-200 w-[450px] border border-slate-300 px-3 block h-[45px] text-[15px] font-medium text-gray-900 rounded-lg" >
                <option value="">Posisi</option>
                <option value="backend">Back-End Developer</option>
                <option value="devops">DevOps</option>
                <option value="frontend">Front-End Developer</option>
                <option value="qa">Quality Assurance</option>
                <option value="uiux">UI/UX Designer</option>
              </select>
            </div>
          </div>
          <div class="flex flex-row justify-end gap-2 pt-10 pb-3 pr-6">
            <BlueButton 
              :button-color="false" 
              @click="tambahKategori" 
              :showIcon="true" 
              icon-color="#ffffff"
              class="text-white"
            >
                <template v-slot:message>Buat Kategori</template>
            </BlueButton>
            <button 
              type="button" 
              class="flex flex-row font-semibold text-sm md:text-[15px] text-black text-center border border-black rounded-md w-auto h-[45px] px-6 py-3 shadow-sm gap-2 whitespace-nowrap"
              @click="showAddModal = false">
                  Batal
            </button>
          </div>
        </ModalMessage>
        <ModalMessage v-show="showEditModal" @close-modal="showEditModal = false">
          <div class="flex flex-col">
            <h1 class="font-bold text-xl ml-6 text-left">Edit Kategori</h1>
            <div class="flex flex-col justify-center mt-4 px-6">
              <label class="font-semibold text-left text-base my-2">Kategori</label>
              <select id="kategori" class="w-[450px] border border-slate-300 px-3 focus:outline-slate-300 block h-[45px] text-[15px] font-medium text-gray-900 rounded-lg" >
                <option value="">Pilih Kategori</option>
                <option value="kehadiran">Kehadiran</option>
                <option value="performa">Performa</option>
                <option value="kualitas">Kualitas</option>
                <option value="produktivitas">Produktivitas</option>
              </select>
            </div>
            <div class="flex flex-col justify-center mt-3 px-6">
              <label class="font-semibold text-left text-base my-2">Posisi</label>
              <select id="posisi" class="focus:outline-slate-200 w-[450px] border border-slate-300 px-3 block h-[45px] text-[15px] font-medium text-gray-900 rounded-lg" >
                <option value="">Pilih Posisi</option>
                <option value="backend">Back-End Developer</option>
                <option value="devops">DevOps</option>
                <option value="frontend">Front-End Developer</option>
                <option value="qa">Quality Assurance</option>
                <option value="uiux">UI/UX Designer</option>
              </select>
            </div>
          </div>
          <div class="flex flex-row justify-end gap-2 pt-10 pb-3 pr-6">
            <BlueButton 
              :button-color="false" 
              @click="editKategori" 
              :showIcon="false" 
              icon-color="#ffffff"
              class="text-white"
            >
                <template v-slot:message>Simpan</template>
            </BlueButton>
            <button 
              type="button" 
              class="flex flex-row font-semibold text-sm md:text-[15px] text-black text-center border border-black rounded-md w-auto h-[45px] px-6 py-3 shadow-sm gap-2 whitespace-nowrap"
              @click="showEditModal = false">
                  Batal
            </button>
          </div>
        </ModalMessage>
    </div>
</template>

<script>
    export default {
        
    }
</script>