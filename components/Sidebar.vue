<template>
    <div>
        <div class="bg-[#191F2F] z-40 md:mr-[300px]">
            <div class="relative">
                <div class="fixed top-0 left-0 pl-6 pb-6 pt-[50px] pr-12 h-full justify-left overflow-y-auto">
                    <nav v-if="showSidebar" id="sidebar" class="font-display w-64 fixed z-20 inset-y-0 left-0 bg-[#191F2F] shadow-sm" >
                        <ul class="pt-24 list-none">
                            <li class="relative">
                                <nuxt-link to="/admin/" class="flex h-12 items-center px-6 py-4 transition duration-300 ease-linear hover:bg-[#484D59]">
                                    <svg 
                                        width="26"
                                        height="26"
                                        viewBox="0 0 26 26"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M14.0833 9.75V3.25H22.75V9.75H14.0833ZM3.25 14.0833V3.25H11.9167V14.0833H3.25ZM14.0833 22.75V11.9167H22.75V22.75H14.0833ZM3.25 22.75V16.25H11.9167V22.75H3.25Z" fill="white"/>
                                    </svg>
                                    <p class="ml-2 text-white font-medium">Dashboard</p>
                                </nuxt-link>
                            </li>
                            <li class="relative">
                                <div to="/" class="flex h-12 items-center px-6 py-4 transition duration-300 ease-linear hover:bg-[#484D59]">
                                    <button @click="dropdownOpen" class="flex items-center">
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_1564_1864)">
                                                <path d="M9.33332 12.5532H8.65665C7.73324 12.5199 6.81282 12.6766 5.95252 13.0138C5.09221 13.3509 4.31038 13.8613 3.65554 14.5132L3.46887 14.731V21.171H6.64221V17.5155L7.06998 17.0332L7.26443 16.8077C8.27704 15.7674 9.5377 15.0019 10.9278 14.5832C10.2318 14.0537 9.68291 13.3548 9.33332 12.5532Z" fill="white"/>
                                                <path d="M24.3756 14.49C23.7207 13.8381 22.9389 13.3277 22.0786 12.9906C21.2183 12.6534 20.2979 12.4967 19.3745 12.53C19.0913 12.5308 18.8083 12.5464 18.5267 12.5767C18.1705 13.3287 17.6366 13.9828 16.9711 14.4823C18.4551 14.8928 19.7994 15.6994 20.86 16.8156L21.0545 17.0334L21.4745 17.5156V21.1789H24.5389V14.7078L24.3756 14.49Z" fill="white"/>
                                                <path d="M8.63334 11.0367H8.87445C8.76242 10.0748 8.9312 9.10097 9.36043 8.23286C9.78965 7.36475 10.461 6.63943 11.2933 6.14446C10.9916 5.6835 10.5753 5.30882 10.0853 5.05708C9.59525 4.80534 9.04823 4.68519 8.4978 4.70839C7.94736 4.73158 7.41239 4.89733 6.94526 5.1894C6.47813 5.48148 6.09487 5.88986 5.83299 6.37456C5.57111 6.85926 5.43961 7.40367 5.45134 7.95446C5.46308 8.50526 5.61767 9.04356 5.89996 9.51667C6.18225 9.98977 6.58257 10.3815 7.06172 10.6534C7.54086 10.9253 8.08242 11.0681 8.63334 11.0678V11.0367Z" fill="white"/>
                                                <path d="M19.0011 10.4533C19.0106 10.6321 19.0106 10.8112 19.0011 10.99C19.1504 11.0136 19.3011 11.0266 19.4522 11.0289H19.6C20.1485 10.9996 20.6801 10.8288 21.143 10.5332C21.6059 10.2375 21.9844 9.82699 22.2416 9.34163C22.4987 8.85627 22.6258 8.3126 22.6105 7.76353C22.5952 7.21447 22.438 6.67872 22.1541 6.20846C21.8703 5.7382 21.4695 5.34944 20.9909 5.08004C20.5122 4.81064 19.9719 4.66977 19.4226 4.67115C18.8734 4.67253 18.3338 4.81612 17.8565 5.08793C17.3792 5.35973 16.9804 5.7505 16.6989 6.22219C17.4029 6.6818 17.9817 7.30898 18.3835 8.04745C18.7853 8.78592 18.9976 9.61259 19.0011 10.4533Z" fill="white"/>
                                                <path d="M13.8989 13.9377C15.819 13.9377 17.3756 12.3812 17.3756 10.461C17.3756 8.54093 15.819 6.98438 13.8989 6.98438C11.9788 6.98438 10.4222 8.54093 10.4222 10.461C10.4222 12.3812 11.9788 13.9377 13.8989 13.9377Z" fill="white"/>
                                                <path d="M14.0855 15.789C13.0698 15.7479 12.0562 15.9128 11.1059 16.2737C10.1555 16.6346 9.28802 17.1841 8.55553 17.889L8.36108 18.1067V23.0301C8.36412 23.1904 8.39872 23.3486 8.46291 23.4956C8.52709 23.6426 8.61961 23.7755 8.73517 23.8868C8.85074 23.998 8.98708 24.0854 9.13642 24.1439C9.28576 24.2024 9.44516 24.2309 9.60553 24.2278H18.5422C18.7026 24.2309 18.862 24.2024 19.0113 24.1439C19.1606 24.0854 19.297 23.998 19.4125 23.8868C19.5281 23.7755 19.6206 23.6426 19.6848 23.4956C19.749 23.3486 19.7836 23.1904 19.7866 23.0301V18.1223L19.6 17.889C18.8722 17.1819 18.0077 16.6309 17.0595 16.2698C16.1113 15.9087 15.0992 15.7451 14.0855 15.789Z" fill="white"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_1564_1864">
                                            <rect width="28" height="28" fill="white"/>
                                            </clipPath>
                                            </defs>
                                        </svg>
                                        <p class="ml-2 text-white font-medium">Tim</p>
                                        <svg class="ml-[120px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 10L12 15L17 10H7Z" fill="white"/>
                                        </svg>
                                    </button>
                                </div>
                            </li>
                            <ul :class="{ 'hidden': !dropdown }" id="dropdown">
                                <li v-for="division in divisions" :key="division" class="flex h-12  space-y-2 items-center px-4 py-4 transition duration-300 ease-linear hover:bg-[#484D59]">
                                    <nuxt-link :to="`/admin/tim/${division}`" class="capitalize flex items-center w-full text-white pl-12">{{ division }}</nuxt-link>
                                </li>
                            </ul>
                        </ul>
                        <button @click="toggleSidebar" class="w-fit h-fit mx-24 my-6 px-3 py-2 bg-transparent border border-white rounded-md">
                            <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.3 0L11.5 2L4.9 8L11.5 14L9.3 16L0.5 8L9.3 0Z" fill="white"/>
                            </svg>
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <!-- <div>
        <transition name="slide">
            <nav v-if="showSidebar" id="sidebar" class="font-display w-64 fixed z-20 inset-y-0 left-0 bg-[#191F2F] shadow-sm" >
            <ul class="relative pt-24 list-none px-[0.2rem] space-y-3">
                <li class="relative">
                    <nuxt-link to="/admin/" class="flex h-12 items-center px-6 py-4 transition duration-300 ease-linear hover:bg-[#484D59]">
                        <svg 
                            width="26"
                            height="26"
                            viewBox="0 0 26 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M14.0833 9.75V3.25H22.75V9.75H14.0833ZM3.25 14.0833V3.25H11.9167V14.0833H3.25ZM14.0833 22.75V11.9167H22.75V22.75H14.0833ZM3.25 22.75V16.25H11.9167V22.75H3.25Z" fill="white"/>
                        </svg>
                        <p class="ml-2 text-white font-medium">Dashboard</p>
                    </nuxt-link>
                </li>
                <li class="relative">
                    <div to="/" class="flex h-12 items-center px-6 py-4 transition duration-300 ease-linear hover:bg-[#484D59]">
                        <button @click="dropdownOpen" class="flex items-center">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1564_1864)">
                                    <path d="M9.33332 12.5532H8.65665C7.73324 12.5199 6.81282 12.6766 5.95252 13.0138C5.09221 13.3509 4.31038 13.8613 3.65554 14.5132L3.46887 14.731V21.171H6.64221V17.5155L7.06998 17.0332L7.26443 16.8077C8.27704 15.7674 9.5377 15.0019 10.9278 14.5832C10.2318 14.0537 9.68291 13.3548 9.33332 12.5532Z" fill="white"/>
                                    <path d="M24.3756 14.49C23.7207 13.8381 22.9389 13.3277 22.0786 12.9906C21.2183 12.6534 20.2979 12.4967 19.3745 12.53C19.0913 12.5308 18.8083 12.5464 18.5267 12.5767C18.1705 13.3287 17.6366 13.9828 16.9711 14.4823C18.4551 14.8928 19.7994 15.6994 20.86 16.8156L21.0545 17.0334L21.4745 17.5156V21.1789H24.5389V14.7078L24.3756 14.49Z" fill="white"/>
                                    <path d="M8.63334 11.0367H8.87445C8.76242 10.0748 8.9312 9.10097 9.36043 8.23286C9.78965 7.36475 10.461 6.63943 11.2933 6.14446C10.9916 5.6835 10.5753 5.30882 10.0853 5.05708C9.59525 4.80534 9.04823 4.68519 8.4978 4.70839C7.94736 4.73158 7.41239 4.89733 6.94526 5.1894C6.47813 5.48148 6.09487 5.88986 5.83299 6.37456C5.57111 6.85926 5.43961 7.40367 5.45134 7.95446C5.46308 8.50526 5.61767 9.04356 5.89996 9.51667C6.18225 9.98977 6.58257 10.3815 7.06172 10.6534C7.54086 10.9253 8.08242 11.0681 8.63334 11.0678V11.0367Z" fill="white"/>
                                    <path d="M19.0011 10.4533C19.0106 10.6321 19.0106 10.8112 19.0011 10.99C19.1504 11.0136 19.3011 11.0266 19.4522 11.0289H19.6C20.1485 10.9996 20.6801 10.8288 21.143 10.5332C21.6059 10.2375 21.9844 9.82699 22.2416 9.34163C22.4987 8.85627 22.6258 8.3126 22.6105 7.76353C22.5952 7.21447 22.438 6.67872 22.1541 6.20846C21.8703 5.7382 21.4695 5.34944 20.9909 5.08004C20.5122 4.81064 19.9719 4.66977 19.4226 4.67115C18.8734 4.67253 18.3338 4.81612 17.8565 5.08793C17.3792 5.35973 16.9804 5.7505 16.6989 6.22219C17.4029 6.6818 17.9817 7.30898 18.3835 8.04745C18.7853 8.78592 18.9976 9.61259 19.0011 10.4533Z" fill="white"/>
                                    <path d="M13.8989 13.9377C15.819 13.9377 17.3756 12.3812 17.3756 10.461C17.3756 8.54093 15.819 6.98438 13.8989 6.98438C11.9788 6.98438 10.4222 8.54093 10.4222 10.461C10.4222 12.3812 11.9788 13.9377 13.8989 13.9377Z" fill="white"/>
                                    <path d="M14.0855 15.789C13.0698 15.7479 12.0562 15.9128 11.1059 16.2737C10.1555 16.6346 9.28802 17.1841 8.55553 17.889L8.36108 18.1067V23.0301C8.36412 23.1904 8.39872 23.3486 8.46291 23.4956C8.52709 23.6426 8.61961 23.7755 8.73517 23.8868C8.85074 23.998 8.98708 24.0854 9.13642 24.1439C9.28576 24.2024 9.44516 24.2309 9.60553 24.2278H18.5422C18.7026 24.2309 18.862 24.2024 19.0113 24.1439C19.1606 24.0854 19.297 23.998 19.4125 23.8868C19.5281 23.7755 19.6206 23.6426 19.6848 23.4956C19.749 23.3486 19.7836 23.1904 19.7866 23.0301V18.1223L19.6 17.889C18.8722 17.1819 18.0077 16.6309 17.0595 16.2698C16.1113 15.9087 15.0992 15.7451 14.0855 15.789Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1564_1864">
                                <rect width="28" height="28" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                            <p class="ml-2 text-white font-medium">Tim</p>
                            <svg class="ml-[120px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 10L12 15L17 10H7Z" fill="white"/>
                            </svg>
                        </button>
                    </div>
                </li>
                <ul :class="{ 'hidden': !dropdown }" id="dropdown">
                    <li v-for="division in divisions" :key="division" class="flex h-12  space-y-2 items-center px-4 py-4 transition duration-300 ease-linear hover:bg-[#484D59]">
                        <nuxt-link :to="`/admin/tim/${division}`" class="capitalize flex items-center w-full text-white pl-12">{{ division }}</nuxt-link>
                    </li>
                </ul>
            </ul>
            <button @click="toggleSidebar" class="w-fit h-fit mx-24 my-6 px-3 py-2 bg-transparent border border-white rounded-md">
                <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.3 0L11.5 2L4.9 8L11.5 14L9.3 16L0.5 8L9.3 0Z" fill="white"/>
                </svg>
            </button>
        </nav>
    </transition>
    </div> -->
</template>

<script>
export default {
    data() {
        return {
            dropdown: false, 
            showSidebar: true,
            divisions: ['IT', 'kreatif', 'keuangan']
        };
    },
    methods: {
        dropdownOpen() {
            this.dropdown = !this.dropdown; 
        },
        toggleSidebar() {
            this.showSidebar = !this.showSidebar;
        }
    },
}
</script>

<style>
.font-display {
    font-family: Roboto, sans-serif;
}
</style>
