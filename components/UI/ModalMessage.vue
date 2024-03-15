<template>
    <div class="modal-overlay fixed top-0 bottom-0 left-0 right-0 flex justify-center bg-black/40 z-50">
      <div class="modal text-center bg-white h-auto w-auto md:w-[500px] my-auto py-[25px] rounded-3xl">
        <slot></slot>
      </div>
    </div>
</template>