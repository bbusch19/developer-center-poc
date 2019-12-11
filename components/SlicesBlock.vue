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
      <TwoColumnBillboard
        v-if="slice.slice_type === 'two_column_billboard'"
        :slice="slice"
      />
      <TwoColumnContent
        v-if="slice.slice_type === 'two_column_content'"
        :slice="slice"
      />
    </div>
  </div>
</template>

<script>
import HeroSearch from '~/components/HeroSearch'
import SplitContent from '~/components/SplitContent'
import TwoColumnBillboard from '~/components/TwoColumnBillboard'
import TwoColumnContent from '~/components/TwoColumnContent'

export default {
  components: {
    HeroSearch,
    SplitContent,
    TwoColumnBillboard,
    TwoColumnContent
  },
  props: {
    slices: {
      type: Array,
      required: true
    }
  }
}
</script>
