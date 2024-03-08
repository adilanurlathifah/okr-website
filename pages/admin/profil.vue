<template>
    <div>
        <div class="flex justify-center pr-12">
            <div class="mt-[8rem] p-6 bg-white rounded-lg w-full h-auto mb-10 shadow-md">
                <div class="flex justify-between items-center w-full">
                    <h1 class="text-lg font-bold">Data Karyawan</h1>
                    <button class="flex items-center text-[12px]">
                        <svg width="20" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 21V16.75L16.2 3.575C16.4 3.39167 16.621 3.25 16.863 3.15C17.105 3.05 17.359 3 17.625 3C17.8917 3 18.15 3.05 18.4 3.15C18.65 3.25 18.8667 3.4 19.05 3.6L20.425 5C20.625 5.18333 20.771 5.4 20.863 5.65C20.955 5.9 21.0007 6.15 21 6.4C21 6.66667 20.9543 6.921 20.863 7.163C20.7717 7.405 20.6257 7.62567 20.425 7.825L7.25 21H3ZM17.6 7.8L19 6.4L17.6 5L16.2 6.4L17.6 7.8Z" fill="#191F2F"/>
                        </svg>
                        Edit Profile
                    </button>
                </div>
                <div class="flex flex-row p-6">
                    <img class="mt-[1rem] w-[83px] h-[83px]" src="~/assets/img/profile.png" alt="profile-pic"/>
                    <div class="text-sm flex flex-row p-6 ml-8 justify-between gap-[40px]">
                        <div class="flex flex-col">
                            <ul>
                                <li>Nama</li>
                                <li class="font-bold">John Doe</li>
                                <div class="my-3"></div>
                                <li>Posisi</li>
                                <li class="font-bold">Front End Developer</li>
                            </ul>
                        </div>
                        <div class="flex flex-col">
                            <ul>
                                <li>Tim Departement</li>
                                <li class="font-bold">IT</li>
                                <div class="my-3"></div>
                                <li>Telepon</li>
                                <li class="font-bold">089290202</li>
                            </ul>
                        </div>
                        <div class="flex flex-col">
                            <ul>
                                <li>Email</li>
                                <li class="font-bold">johnappleseed@cyberarmy.id</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center">
                    <div class="bg-indigo-50 w-auto h-auto rounded-lg p-6 mb-8">
                        <h1 class="font-bold text-lg text-center">Objective Key Results</h1>
                        <div class="flex flex-row">
                            <div class="flex flex-row p-6">
                                <div class="bg-indigo-200 rounded-lg w-[47px] h-[49px]">
                                    <div class="items-center px-[14px] py-3">
                                        <svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 23V6.9H4.66667V23H0ZM8.16667 23V0H12.8333V23H8.16667ZM16.3333 23V13.8H21V23H16.3333Z" fill="#191F2F"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="flex flex-col text-center ml-3">
                                    <p class="font-bold text-lg">79</p>
                                    <p class="text-sm">Total Performa</p>
                                </div>
                            </div>
                            <div class="flex flex-row p-6">
                                <div class="bg-indigo-200 rounded-lg w-[47px] h-[49px]">
                                    <div class="items-center px-[14px] py-3">
                                        <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 3.05556C0 2.37778 0.269245 1.72776 0.748505 1.2485C1.22776 0.769245 1.87778 0.5 2.55556 0.5H20.4444C21.1222 0.5 21.7722 0.769245 22.2515 1.2485C22.7308 1.72776 23 2.37778 23 3.05556V20.9444C23 21.6222 22.7308 22.2722 22.2515 22.7515C21.7722 23.2308 21.1222 23.5 20.4444 23.5H2.55556C1.87778 23.5 1.22776 23.2308 0.748505 22.7515C0.269245 22.2722 0 21.6222 0 20.9444V3.05556ZM13.9776 6.44806C13.5266 5.31978 11.9102 5.38367 11.5473 6.54261L9.30861 13.7058L8.81283 12.713C8.70563 12.4988 8.54092 12.3186 8.33714 12.1927C8.13336 12.0668 7.89855 12.0001 7.659 12H5.11111C4.77222 12 4.44722 12.1346 4.20759 12.3743C3.96796 12.6139 3.83333 12.9389 3.83333 13.2778C3.83333 13.6167 3.96796 13.9417 4.20759 14.1813C4.44722 14.4209 4.77222 14.5556 5.11111 14.5556H6.877L8.42567 17.6542C8.94572 18.693 10.4663 18.5703 10.8126 17.4625L12.926 10.6992L14.1437 13.7442C14.3392 14.2348 14.8146 14.5556 15.3423 14.5556H17.8889C18.2278 14.5556 18.5528 14.4209 18.7924 14.1813C19.032 13.9417 19.1667 13.6167 19.1667 13.2778C19.1667 12.9389 19.032 12.6139 18.7924 12.3743C18.5528 12.1346 18.2278 12 17.8889 12H16.1984L13.9776 6.44806Z" fill="#191F2F"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="flex flex-col text-center ml-3">
                                    <p class="font-bold text-lg">79</p>
                                    <p class="text-sm">Total Kualitas</p>
                                </div>
                            </div>
                            <div class="flex flex-row p-6">
                                <div class="bg-indigo-200 rounded-lg w-[47px] h-[49px]">
                                    <div class="items-center px-[14px] py-3">
                                        <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.778 6.9783C11.7255 7.60865 9.90206 8.82532 8.532 10.4786C7.50387 10.3812 6.53111 9.96787 5.74737 9.29531C4.96362 8.62274 4.40735 7.72396 4.15496 6.72246C3.90258 5.72096 3.96648 4.66587 4.33788 3.70215C4.70927 2.73843 5.36995 1.91337 6.22913 1.34031C7.08831 0.767255 8.10384 0.474325 9.1362 0.501766C10.1686 0.529207 11.1671 0.875672 11.9946 1.49356C12.8222 2.11145 13.4381 2.97045 13.7578 3.95254C14.0775 4.93462 14.0852 5.99162 13.78 6.9783M3 12.4988H7.2C6.432 13.9989 6 15.6991 6 17.4992C5.9964 20.0145 6.85791 22.4545 8.44 24.4098C3.108 23.7798 0 19.9594 0 16.4991V15.9991C0 14.4089 1.344 12.4988 3 12.4988ZM26 17.4992C26 18.6812 25.7672 19.8516 25.3149 20.9437C24.8626 22.0357 24.1997 23.0279 23.364 23.8637C22.5282 24.6995 21.5361 25.3625 20.4442 25.8149C19.3522 26.2672 18.1819 26.5 17 26.5C15.8181 26.5 14.6478 26.2672 13.5558 25.8149C12.4639 25.3625 11.4718 24.6995 10.636 23.8637C9.80031 23.0279 9.13738 22.0357 8.68508 20.9437C8.23279 19.8516 8 18.6812 8 17.4992C8 15.1121 8.94821 12.8227 10.636 11.1347C12.3239 9.44672 14.6131 8.49843 17 8.49843C19.3869 8.49843 21.6761 9.44672 23.364 11.1347C25.0518 12.8227 26 15.1121 26 17.4992ZM21.708 13.7909C21.6151 13.6978 21.5048 13.6239 21.3833 13.5734C21.2618 13.523 21.1315 13.4971 21 13.4971C20.8685 13.4971 20.7382 13.523 20.6167 13.5734C20.4952 13.6239 20.3849 13.6978 20.292 13.7909L15 19.0854L13.708 17.7912C13.615 17.6983 13.5046 17.6245 13.3832 17.5742C13.2617 17.5239 13.1315 17.498 13 17.498C12.8685 17.498 12.7383 17.5239 12.6168 17.5742C12.4954 17.6245 12.385 17.6983 12.292 17.7912C12.199 17.8842 12.1253 17.9946 12.075 18.1161C12.0246 18.2376 11.9987 18.3678 11.9987 18.4993C11.9987 18.6308 12.0246 18.761 12.075 18.8825C12.1253 19.004 12.199 19.1144 12.292 19.2074L14.292 21.2075C14.3849 21.3007 14.4952 21.3746 14.6167 21.425C14.7382 21.4754 14.8685 21.5014 15 21.5014C15.1315 21.5014 15.2618 21.4754 15.3833 21.425C15.5048 21.3746 15.6151 21.3007 15.708 21.2075L21.708 15.207C21.8011 15.1141 21.875 15.0038 21.9254 14.8823C21.9758 14.7608 22.0018 14.6305 22.0018 14.499C22.0018 14.3674 21.9758 14.2372 21.9254 14.1157C21.875 13.9942 21.8011 13.8838 21.708 13.7909Z" fill="#191F2F"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="flex flex-col text-center ml-3">
                                    <p class="font-bold text-lg">79</p>
                                    <p class="text-sm">Total Kehadiran</p>
                                </div>
                            </div>
                            <div class="flex flex-row p-6">
                                <div class="bg-indigo-200 rounded-lg w-[47px] h-[49px]">
                                    <div class="items-center px-[14px] py-3">
                                        <svg width="23" height="23" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_231_867" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="29" height="30">
                                            <path d="M27 25.4167V4.58333C27 4.0308 26.7805 3.5009 26.3898 3.11019C25.9991 2.71949 25.4692 2.5 24.9167 2.5H4.08333C3.5308 2.5 3.0009 2.71949 2.61019 3.11019C2.21949 3.5009 2 4.0308 2 4.58333V25.4167C2 25.9692 2.21949 26.4991 2.61019 26.8898C3.0009 27.2805 3.5308 27.5 4.08333 27.5H24.9167C25.4692 27.5 25.9991 27.2805 26.3898 26.8898C26.7805 26.4991 27 25.9692 27 25.4167Z" fill="white" stroke="white" stroke-width="4" stroke-linejoin="round"/>
                                            <path d="M14.4996 8.96973L12.4885 13.0739L7.92041 13.7364L11.2294 16.9711L10.4385 21.4697L14.4996 19.3051L18.5614 21.4697L17.7767 16.9711L21.0794 13.7364L16.5371 13.0739L14.4996 8.96973Z" fill="black" stroke="black" stroke-width="2" stroke-linejoin="round"/>
                                            </mask>
                                            <g mask="url(#mask0_231_867)">
                                            <path d="M-0.083374 2.41666C-0.083374 1.31209 0.812056 0.416656 1.91663 0.416656H27.0833C28.1879 0.416656 29.0833 1.31209 29.0833 2.41666V27.5833C29.0833 28.6879 28.1879 29.5833 27.0833 29.5833H1.91662C0.812055 29.5833 -0.083374 28.6879 -0.083374 27.5833V2.41666Z" fill="#191F2F"/>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                                <div class="flex flex-col text-center ml-3">
                                    <p class="font-bold text-lg">79</p>
                                    <p class="text-sm">Total Produktivitas</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-center p-4">
                            <button class="bg-black rounded-md w-[144px] h-[40px] text-sm text-white font-semibold">
                                Update OKR
                            </button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        layout: 'default-sidebar'
    }
</script>

<style>

</style>