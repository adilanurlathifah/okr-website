<template>
    <div>
      <h1 class="text-sm font-bold">
        Hello world!
      </h1>
      <VCard>
        <p class="text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </VCard>
      <!-- <AddKaryawan /> -->
    </div>
</template>

<script>
import VCard from '../components/UI/VCard.vue';
import AddKaryawan from '../components/Modals/AddKaryawan.vue';
export default {
  name: 'IndexPage',
  layout: 'default-admin',
  // middleware: 'auth',
  auth: false,
  components: { VCard }
}
</script>
