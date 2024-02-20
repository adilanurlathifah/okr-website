<template>
    <div>
        <div id="dialog" class="absolute bg-white border w-fit shadow rounded-md px-8 py-6 top-1/2 left-1/2">
        <h1 class="text-lg font-bold"><slot name="title"></slot></h1>
        <div id="dialog-message" class="my-2">
            <slot name="message"></slot>
        </div>
        <div id="dialog-buttons" class="flex flex-row justify-end gap-2">
            <slot name="buttons"></slot>
        </div>
        </div>
    </div>
</template>