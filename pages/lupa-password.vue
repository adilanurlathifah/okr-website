<template>
    <div class="flex justify-center">
        <div class="mt-[12rem] p-6 rounded-xl bg-white w-[417px] h-auto shadow-md">
            <h1 class="text-center font-bold text-xl capitalize mb-4">lupa password</h1>
            <form @submit="submit($event)">
                <div class="mt-2">
                    <div class="text-base text-left">
                        <label class="font-semibold">Email</label>
                        <input type="email" class="p-2 mt-2 rounded-lg w-full h-[45px] border border-gray-300 focus:ring-slate-700" placeholder="ex. John Doe.." required>
                    </div>
                </div>
                <button class="bg-[#191F2F] mt-6 px-4 py-2 w-full h-auto rounded-md text-white">
                    Reset Password
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import ButtonForm from '~/components/UI/ButtonForm.vue';
export default {
    layout: 'default-navbar',
    components: { ButtonForm },
}
</script>