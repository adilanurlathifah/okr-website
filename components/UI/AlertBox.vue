<template>
    <div>
        <div v-if="isInfo" class="flex flex-row white text-wrap gap-4 items-center max-w-[330px] h-auto p-3 rounded-lg bg-white border-l-4 border-amber-500">
            <img src="~/assets/img/icons/info.svg" class="object-contain" />
            <span class="text-sm">{{ message }}</span>
        </div>
        <div v-if="isSuccess" class="flex flex-row white text-wrap gap-4 items-center max-w-[330px] h-auto p-3 rounded-lg bg-white border-l-4 border-green-700">
            <img src="~/assets/img/icons/success.svg" class="object-contain" />
            <span class="text-sm">{{ message }}</span>
        </div>
        <div v-if="isDanger" class="flex flex-row white text-wrap gap-4 items-center max-w-[330px] h-auto p-3 rounded-lg bg-white border-l-4 border-red-500">
            <img src="~/assets/img/icons/danger.svg" class="object-contain" />
            <span class="text-sm">{{ message }}</span>
        </div>
        <!-- <AlertBox :message="'Ini adalah tes pesan text-sm'" :isSuccess="true"/>
        <AlertBox :message="'Ini adalah tes pesan text-sm'" :isDanger="true"/>
        <AlertBox :message="'Ini adalah tes pesan text-sm'" :isInfo="true"/> -->
    </div>
</template>

<script>
export default {
    name: 'AlertBox',
    props: {
        message: {
            type: String,
            default: ''
        },
        isInfo: {
            type: Boolean,
            default: false
        },
        isSuccess: {
            type: Boolean,
            default: false
        },
        isDanger: {
            type: Boolean,
            default: false
        }
    }
}
</script>