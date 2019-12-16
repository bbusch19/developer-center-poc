<template>
  <div>
    <div v-for="(slice, index) of slices" :key="index">
      <HeroSearch
        v-if="slice.slice_type === 'search_hero'"
        v-bind="slice.primary"
      />
    </div>
  </div>
</template>

<script>
import HeroSearch from '~/components/HeroSearch'

export default {
  components: {
    HeroSearch
  },
  props: {
    slices: {
      type: Array,
      required: true
    }
  }
}
</script>
