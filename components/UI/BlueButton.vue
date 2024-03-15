<template>
    <div id="blue-button">
        <button 
            @click="buttonClicked"
            type="button"
            :class="['flex', 'flex-row', 'font-semibold', 'text-xs', 'text-center', 'rounded-md', 'w-auto', 'h-[45px]', 'px-6', 'py-3', 'shadow-sm', 'whitespace-nowrap', 
            buttonColor ? 'bg-[#E3E8FF]' : 'bg-[#191F2F]']"
            :style="{'background-color': buttonColor ? '#E3E8FF' : '#191F2F'}"
        >
            <svg v-if="showIcon" class="mt-[1px] mr-1" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1564_1817)">
                    <path :fill="iconColor" d="M8.81252 15C8.81252 15.2984 8.93763 15.5845 9.16033 15.7955C9.38303 16.0065 9.68508 16.125 10 16.125C10.315 16.125 10.617 16.0065 10.8397 15.7955C11.0624 15.5845 11.1875 15.2984 11.1875 15V10.125H16.3334C16.6483 10.125 16.9503 10.0065 17.173 9.7955C17.3957 9.58452 17.5209 9.29837 17.5209 9C17.5209 8.70163 17.3957 8.41548 17.173 8.2045C16.9503 7.99353 16.6483 7.875 16.3334 7.875H11.1875V3C11.1875 2.70163 11.0624 2.41548 10.8397 2.2045C10.617 1.99353 10.315 1.875 10 1.875C9.68508 1.875 9.38303 1.99353 9.16033 2.2045C8.93763 2.41548 8.81252 2.70163 8.81252 3V7.875H3.66669C3.35174 7.875 3.0497 7.99353 2.827 8.2045C2.6043 8.41548 2.47919 8.70163 2.47919 9C2.47919 9.29837 2.6043 9.58452 2.827 9.7955C3.0497 10.0065 3.35174 10.125 3.66669 10.125H8.81252V15Z"/>
                </g>
                <defs>
                    <clipPath id="clip0_1564_1817">
                    <rect width="19" height="18" fill="white" transform="translate(0.5)"/>
                    </clipPath>
                </defs>
            </svg>
            <div id="dialog-message" class="flex-grow">
                <slot name="message"></slot>
            </div>
        </button>
    </div>
</template>

<script>
export default {
    props: {
        showIcon: {
            type: Boolean,
            default: true
        },
        buttonColor: {
            type: Boolean,
            default: true
        },
        iconColor: {
            type: String,
            default: '#191F2F' 
        }
    },
    methods: {
        buttonClicked() {
            this.$emit('click');
        }
    },
    computed: {
        computedIconColor() {
            return this.buttonColor ? '#ffffff' : this.iconColor; 
        }
    }
}
</script>
