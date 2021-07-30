<template>
  Detail by {{ getRouteId }}
</template>

<script>
import { useRoute } from 'vue-router'

export default {
  name: "Detail",
  computed: {
    getRouteId () {
      return useRoute().params.id
    },
  },
}
</script>

<style lang="scss">

</style>