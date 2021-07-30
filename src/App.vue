<template>
  <component :is="getLayout" />
</template>

<script>
import { useRoute } from 'vue-router'
import defaultLayout from '@/layouts/default.vue'
import authLayout from '@/layouts/auth.vue'

export default {
  name: 'App',
  components: { defaultLayout, authLayout },
  computed: {
    getLayout() {
      if (useRoute().meta.layout) {
        return useRoute().meta.layout
      } else {
        return 'defaultLayout'
      }
    },
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>