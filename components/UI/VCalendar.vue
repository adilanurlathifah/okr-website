<template>
    <div>
      <no-ssr>
        <v-calendar :attributes='attrs' />
      </no-ssr>
    </div>
</template>
  
<script>
export default {
    data() {
      return {
        attrs: [
          {
            key: 'today',
            highlight: {
              color: 'gray',
              fillMode: 'light',
            },
            dates: new Date(),
          },
        ],
      };
    },
  };
</script>
  