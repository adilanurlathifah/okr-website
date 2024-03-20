<template>
  <div class="modal-overlay fixed top-0 bottom-0 left-0 right-0 flex justify-center bg-black/40 z-50">
    <div class="modal text-center bg-white h-auto my-auto mx-8 md:mx-12 py-[25px] rounded-3xl w-[500px] md:w-[350px] lg:w-[450px]">
      <slot></slot>
    </div>
  </div>
</template>
