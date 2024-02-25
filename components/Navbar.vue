<template>
    <div class="relative">
        <header class="w-full pt-4 px-8 fixed top-0 left-0 right-0 z-50 h-20 bg-white shadow-sm">
            <div class="flex items-center justify-between">
                <img 
                    src="~/assets/img/OKR.svg"
                    class="max-w-[150px] h-full object-contain"
                    alt="okr-logo"
                    loading="lazy"
                />
                <button class="bg-black text-white px-4 py-3 ml-10 rounded-md" @click="logout">Logout</button>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    methods: {
      logout() {
        this.$router.push('/login');
      }
    }
}
</script>