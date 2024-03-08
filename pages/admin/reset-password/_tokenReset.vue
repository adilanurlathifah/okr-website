<template>
    <div class="flex justify-center">
        <div class="mt-[8rem] p-6 rounded-xl bg-white w-[417px] h-auto shadow-md">
            <h1 class="text-center font-bold text-xl capitalize mb-4">Reset password</h1>
            <form @submit.prevent="resetPassword">
                <div class="mt-2">
                    <div class="text-base text-left">
                        <label class="font-semibold">Password Baru</label>
                        <input 
                            type="password" 
                            v-model="resetpass.password"
                            class="p-2 mt-2 rounded-lg w-full h-[45px] border border-gray-300 focus:ring-slate-700" 
                            placeholder="Masukkan Password" 
                        >
                        <small
                            v-if="submitted & !passFilled"
                            id="passwordHelp"
                            class="text-red-600 text-xs">
                            Password harus diisi
                        </small>
                        <small
                            v-if="(scorePassword <= 25) & passFilled"
                            id="passwordHelp2"
                            class="text-red-600 text-xs"
                            >Password terlalu lemah</small
                        >
                    </div>
                    <div class="mt-4 text-base text-left">
                        <label class="font-semibold">Konfirmasi Baru</label>
                        <input 
                            type="password" 
                            v-model="resetpass.c_password"
                            class="p-2 mt-2 rounded-lg w-full h-[45px] border border-gray-300 focus:ring-slate-700" 
                            placeholder="Masukkan Password" 
                        >
                        <small
                            v-if="confPassFilled & notSamePasswords"
                            id="confirmPasswordHelp"
                            class="text-red-600 text-xs"
                        > Password harus sama
                        </small>
                        <small
                            v-if="submitted & !confPassFilled"
                            id="confirmPasswordHelp"
                            class="text-red-600 text-xs"
                        > Konfirmasi password harus diisi
                        </small>
                    </div>
                </div>
                <button 
                    type="submit"
                    class="bg-[#191F2F] mt-6 px-4 py-2 w-full h-auto rounded-md text-white">
                    Reset Password
                </button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'default-navbar',
    data() {
        return {
            resetpass: {
                password: '',
                c_password: '',
            },
            access_token: '',
            submitted: false,
            // resetSuccess: false
        }
    },
    computed: {
        passFilled() {
            return this.resetpass.password !== ''
        },
        confPassFilled() {
            return this.resetpass.c_password !== ''
        },
        scorePassword() {
            let score = 0;
            const password = this.resetpass.password;
            if (password === '') return score;
            const letters = {};
            for (let i = 0; i < password.length; i++) {
                letters[password[i]] = (letters[password[i]] || 0) + 1;
                score += 5.0 / letters[password[i]];
            }
            const variations = {
                digits: /\d/.test(password),
                lower: /[a-z]/.test(password),
                upper: /[A-Z]/.test(password),
                special: /\W/.test(password)
            };
            let variationsCount = 0;
            for (const check in variations) {
                variationsCount += variations[check] === true ? 1 : 0;
            }
            score += (variationsCount - 1) * 10;
            return score;
        },
        strengthLevel() {
            const pass = this.scorePassword
            if (pass === 0) {
                return 0
            }
            if (pass < 25) {
                return 1
            }
            if (pass < 50) {
                return 2
            }
            if (pass < 75) {
                return 3
            }
            if (pass >= 75) {
                return 4
            }
            return 0
        },
        notSamePasswords() {
            if (this.passFilled && this.confPassFilled) {
                return this.password !== this.c_password
            } else {
                return false
            }
        },
        passwordValidation() {
            const errors = []
            for (const condition of this.rules) {
                if (!condition.regex.test(this.password)) {
                errors.push(condition.message)
                }
            }
            if (errors.length === 0) {
                return { valid: true, errors }
            } else {
                return { valid: false, errors }
            }
        }
    },
    methods: {
        isValid() {
            let status = true

            if (!this.passFilled) {
                status = false
            }
            if (this.scorePassword <= 25) {
                status = false
            }
            if (!this.confPassFilled) {
                status = false
            }
            if (this.notSamePasswords) {
                status = false
            }
            return status;
        },
        // async getAccess(){
        //     // const token = this.$route.params.tokenReset
        //     // if(token && token !== '') {
        //     try {
        //         const response = await this.$axios.get('api/auth/admin/new-password');
        //         if (response.data.success) {
        //             this.access_token = response.data.token;
        //         } else {
        //             console.log(response.data.message);
        //         }
        //     } catch (error) {
        //         alert('Data tidak valid')
        //     }
        // },
        // async resetPassword() {
        //     this.submitted = true;
        //     if (this.isValid()) {
        //         const accessGranted = await this.getAccess();
        //         if (!accessGranted) {
        //             alert('Unable to get access token.');
        //             return;
        //         }
        //         const token = this.$route.params.tokenReset;
        //         if (token && token !== '') {
        //             try {
        //                 const data = {
        //                     ...this.resetpass,
        //                     reset_pass_token: token,
        //                     token: this.access_token  
        //                 };
        //                 const response = await this.$axios.post(
        //                     'api/auth/admin/new-password',
        //                     data
        //                 );
        //                 if (response.data.success) {
        //                     alert('Reset Password Berhasil');
        //                     this.$router.push('/login'); 
        //                 } else {
        //                     console.error(response.data.message);
        //                     alert('Gagal Mengirim Data');
        //                 }
        //             } catch (error) {
        //                 console.error(error);
        //                 alert('Data Tidak Valid');
        //             }
        //         } else {
        //             alert('Token Reset tidak ditemukan.');
        //         }
        //     }
        // }
        async resetPassword() {
            this.submitted = true
            if (this.isValid()) {
                try {
                    const token = this.$route.params.tokenReset
                    if (token && token !== '') {
                        try {
                            const getToken = await this.$axios.get('api/auth/admin/new-password')
                            const data = {
                                ...this.resetpass,
                                reset_pass_token: token
                            }
                            const postData = {
                                ...data,
                                token: getToken.data.data.token
                            } 
                            const response = await this.$axios.post(
                                'api/auth/admin/new-password', 
                                postData
                            )
                            if (response.data.success) {
                                // this.resetSuccess = true

                                alert('Reset Password Berhasil')
                                this.$router.push('/login')
                            } else {
                                console.log(response.data.message)
                            }
                        } catch (error) {
                            console.error(error);
                            // alert('Gagal Mengirim Data');
                        }
                    } else {
                        alert('Silahkan refresh halaman ini')
                    }
                } catch (error) {
                    console.error(error);
                    alert(error.message);
                }
            } 
        } 
    }
}
</script>

