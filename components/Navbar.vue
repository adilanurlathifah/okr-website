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
                <t-dropdown>
                    <div
                        slot="trigger"
                        slot-scope="{
                        mousedownHandler,
                        focusHandler,
                        blurHandler,
                        keydownHandler,
                        isShown
                        }"
                    >
                        <button
                            id="user-menu"
                            class="flex items-center pr-3 text-[15px] font-semibold text-gray-700 transition duration-150 ease-in-out focus:outline-none focus:shadow-solid"
                            :class="{ 'text-gray-800 ': isShown }"
                            aria-label="User menu"
                            aria-haspopup="true"
                            @mousedown="mousedownHandler"
                            @focus="focusHandler"
                            @blur="blurHandler"
                            @keydown="keydownHandler"
                        >
                        <img class="w-10 h-10 mr-2 rounded-full" src="~/assets/img/profile.png" alt="profile-pic">
                           John Doe <!-- {{ $auth.user.name }} -->
                        </button>
                    </div>

                    <div slot-scope="{ hide, blurHandler }">
                        <button
                            class="block w-full px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                            role="menuitem"
                            @blur="blurHandler"
                        >
                            Profile Saya
                        </button>
                        <button
                            class="block w-full px-4 py-2 text-sm leading-5 text-red-500 transition duration-150 ease-in-out border-t hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                            @click="userLogout"
                        >
                            Keluar
                        </button>
                    </div>
                </t-dropdown>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    methods: {
        async userLogout() {
            try {
                await this.$auth.logout();
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    await this.$auth.logout();
                } else {
                    console.error(error);
                    alert(error.message);
                }
            }
        },
        async userName() {
            const { data } = await this.$auth.user
        }
    }
}
</script>