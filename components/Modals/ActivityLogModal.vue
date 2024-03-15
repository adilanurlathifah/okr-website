<template>
    <ModalMessage @close-modal="showModal = false">
       <div class="flex flex-col">
         <h1 class="font-bold text-2xl ml-6 mb-4 text-left">Aktivitas Terakhir</h1>
            <div class="flex flex-row gap-2 text-left px-6 py-2" v-for="history in actHistory" :key="history.id">
                <div class="flex-1">
                  <p class="text-sm md:text-base font-semibold">{{ history.role }}</p>
                </div>
                <div class="flex-1">
                  <p class="text-xs md:text-base">{{ history.activity }}</p>
                  <p class="text-xs">{{ history.time }}</p>
                </div>
            </div>
          </div>
     </ModalMessage>
</template>

<script>
import BlueButton from '@/components/UI/BlueButton.vue';
import ModalMessage from '@/components/UI/ModalMessage.vue';
import { lastActivity } from '@/models/last-activity'

export default {
 auth: false,
 layout: 'default-admin',
 components: { BlueButton, ModalMessage },
 data() {
     return {
         showModal: false,
         actHistory: lastActivity,
     }
 },
 methods: {
     tambahDivisi() {
         this.showModal = true;
     },
     closeModal() {
         this.showModal = false;
     }
 }
}
</script>