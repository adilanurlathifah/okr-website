<template>
    <div class="min-h-screen flex items-center justify-center py-3 px-4 sm:px-6 lg:px-8">
     <div class="max-w-md w-full space-y-8">
       <div class="flex flex-col justify-center text-center">
         <h2 class="mt-3 text-3xl font-bold text-gray-900">
            Lupa Password
         </h2>
         <p class="mt-2 text-sm">Silahkan masukkan alamat email anda untuk mereset kata sandi.</p>
       </div>
       <VCard class="px-12 py-8 h-[250px] w-auto">
        <form @submit.prevent="postEmail" class="vld-parent pt-6">
            <div class="mt-2">
                <div class="text-base text-left">
                    <label class="font-semibold">Email</label>
                    <input 
                        :class="{
                            'is-valid': emailFilled() && validEmail,
                            'is-invalid': (submitted && !emailFilled() || !validEmail && emailFilled())
                        }"
                        type="email" 
                        v-model="email"
                        class="p-2 mt-2 text-sm rounded-lg w-full h-[45px] border border-gray-300 focus:ring-slate-700" 
                        placeholder="Masukkan Email" 
                    >
                    <small
                        v-if="submitted & !emailFilled()"
                        class="text-xs text-red-700"
                    > Email harus diisi
                    </small>
                    <small 
                        v-if="!validEmail & emailFilled()"
                        class="text-xs text-red-700">Gunakan email yang valid</small>
                </div>
            </div>
            <button 
                type="submit"
                class="bg-[#191F2F] text-sm mt-6 px-4 py-2 w-full h-auto rounded-md text-white">
                Reset Password
            </button>
            <loading 
                :active.sync="isLoading"
                :can-cancel="false"
                :is-full-page="false">
            </loading>
       </form>
       </VCard>
       <div v-if="showSuccessModal" class="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div class="flex items-center justify-center text-center">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <div class="inline-block align-bottom bg-white rounded-lg text-center overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div class="bg-white px-4">
                        <div class="sm:flex sm:items-start">
                            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <div class="mt-2 flex flex-col justify-center items-center">
                                    <img 
                                        src="~/assets/img/icons/lock.svg"
                                        alt="lock-img"
                                        class="my-4"
                                        width="85px"/>
                                    <p class="text-sm text-gray-500">
                                        Buka email kamu dan segera lakukan reset password!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-50 py-6 px-6 flex flex-row-reverse justify-center">
                        <button type="button" class="w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#191F2F] text-base font-medium text-white hover:bg-slate-700 mt-0 w-full sm:text-sm" 
                        @click="showSuccessModal = false">
                            OK
                        </button>
                    </div>
                </div>
            </div>
        </div>
     </div>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import VCard from '@/components/UI/VCard.vue'

export default {
    layout: 'default',
    components: { Loading, VCard },
    data() {
        return {
            email: '',
            isLoading: false,
            showSuccessModal: false,
            submitted: false
        }
    },
    computed: {
        validEmail() {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return re.test(this.email)
        }
    },
    methods: {
        emailFilled(){
            return this.email !== ''
        },
        isValid() {
            let status = true
            if (!this.emailFilled()) {
                status = false
            } 
            if (!this.validEmail) {
                status = false
            }
            return status
        },
        async postEmail(e) {
            this.submitted = true
            if (this.isValid()) {
                try {
                    const token = await this.$axios.$get('api/auth/admin/forgot-password')
                    const response = await this.$axios.post('api/auth/admin/forgot-password', {
                        email: this.email,
                        token: token.data.token
                    })
                    if (response.data.success) {
                        this.isLoading = true
                        setTimeout(() => {
                            this.isLoading = false;
                            this.showSuccessModal = true;
                        }, 2000)
                    }
                } catch (error) {
                    console.error(error);
                    alert(error.message);
                }
            } e.preventDefault()
        },
        closeModal() {
            this.showSuccessModal = false;
        }
    }
}
</script>