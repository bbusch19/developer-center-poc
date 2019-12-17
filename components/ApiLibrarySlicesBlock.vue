<template>
  <div>
    <div v-for="(slice, index) of slices" :key="index">
      <HeroSearch
        v-if="slice.slice_type === 'search_hero'"
        v-bind="slice.primary"
      />
      <CollapsibleContent
        :items="slice.items"
        v-bind="slice.primary"
        v-if="slice.slice_type === 'api_sample_section'"
        component-to-render="BaseEndpoint"
      />
      <CollapsibleContent
        :items="slice.items"
        v-bind="slice.primary"
        v-if="slice.slice_type === 'collapsible_schemas'"
        component-to-render="prism-editor"
        classes="no-pad"
      />
    </div>
  </div>
</template>

<script>
import HeroSearch from '~/components/HeroSearch'
import CollapsibleContent from '~/components/CollapsibleContent'

export default {
  components: {
    HeroSearch,
    CollapsibleContent
  },
  props: {
    slices: {
      type: Array,
      required: true
    }
  }
}
</script>
