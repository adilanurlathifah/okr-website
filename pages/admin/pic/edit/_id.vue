<template>
    <div class="flex justify-center">
        <div class="mt-[8rem] p-6 rounded-xl bg-white w-[417px] h-auto shadow-md">
            <div class="flex flex-row items-center gap-2 pb-3">
                <button>
                    <nuxt-link to="/admin/">
                        <svg width="25" height="25" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <mask id="mask0_1593_1806" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36">
                            <rect width="36" height="36" fill="url(#pattern0)"/>
                            </mask>
                            <g mask="url(#mask0_1593_1806)">
                            <rect x="-35" y="-15" width="92" height="66" fill="#191F2F"/>
                            </g>
                            <defs>
                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image0_1593_1806" transform="scale(0.01)"/>
                            </pattern>
                            <image id="image0_1593_1806" width="100" height="100" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA9ElEQVR4nO3cMarVABRF0XveFLRz4FaOyd7JRAQLu/+rxwbXgnQpQjaBEMi5AwAAAAAAAAAAgI+97u7rJ87jDXZ33+/u1919c8cbMZ6/hyihGI8ovRiPKL0YjyjvfZv68YkYooSejOef4+fdfXnHxf1vJkbHxOiYGB0To2NidEyMjonRMTE6JkbHxOiYGB0To0OMEDFCxAgRI0SMEDFiBAkSJUiUIFGCRAkSJWg+LvZMlJ6J0jNReiZKz0TpmSg9E6VnovRMlJ6J0jNReiZKz8tv0T0zHNAz0xo9Mz7TM/NMPTNg1vMy8QcAAAAAAAAAAMAfvwFIHCczWqMUZgAAAABJRU5ErkJggg=="/>
                            </defs>
                        </svg>
                    </nuxt-link>
                </button>
                <h1 class="text-center font-bold text-xl capitalize">Edit PIC</h1>
            </div>
            <!-- <p class="text-center text-slate-500">Tambah Anggota tim disini</p> -->
            <form @submit="submit($event)">
                <div class="mt-4">
                    <div class="text-base text-left">
                        <label class="font-bold">Nama</label>
                        <input type="text" class="p-2 mt-2 rounded-lg w-full h-[45px] border border-gray-300 focus:ring-slate-700" placeholder="ex. John Doe..">
                    </div>
                    <div class="text-base text-left mt-2">
                        <label class="font-bold">Email</label>
                        <input type="email" class="p-2 mt-2 rounded-lg w-full h-[45px] border border-gray-300 focus:ring-slate-700" placeholder="ex. johndoe@gmail.com">
                    </div>
                    <div class="mt-2">
                        <label class="font-bold">Department</label>
                        <select id="posisi" class="mt-2 shadow-sm border border-gray-300 text-base rounded-lg block w-full h-[45px] p-2">
                            <option value="">Pilih Department</option>
                            <option value="IT">IT</option>
                            <option value="Kreatif">Kreatif</option>
                            <option value="Keuangan">Keuangan</option>
                        </select>
                    </div>
                </div>
                <ButtonForm class="mt-6"/>
            </form>
        </div>
    </div>
</template>

<script>
import ButtonForm from '~/components/UI/ButtonForm.vue';
export default {
    layout: 'default',
    components: { ButtonForm },
}
</script>