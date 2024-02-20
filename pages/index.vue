<template>
    <div>
      <h1 class="text-sm font-bold">
        Hello world!
      </h1>
    </div>
</template>

<script>
export default {
  name: 'IndexPage',
  middleware: 'auth',
  layout: 'default-sidebar',
}
</script>
