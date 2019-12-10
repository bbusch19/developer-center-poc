<template>
  <div>
    <div v-for="(slice, index) of slices" :key="index">
      <HeroSearch
        v-if="slice.slice_type === 'search_hero'"
        v-bind="slice.primary"
      />
      <SplitContent
        v-if="slice.slice_type === 'split_content'"
        :slice="slice"
      />
    </div>
  </div>
</template>

<script>
import HeroSearch from '~/components/HeroSearch'
import SplitContent from '~/components/SplitContent'
export default {
  components: {
    HeroSearch,
    SplitContent
  },
  props: {
    slices: {
      type: Array,
      required: true
    }
  }
}
</script>
