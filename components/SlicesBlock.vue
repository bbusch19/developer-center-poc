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
      <DeveloperAPIToolkit
        v-if="slice.slice_type === 'dev_api_toolkit'"
        :slice="slice"
      />
      <TwoColumnContent
        v-if="slice.slice_type === 'two_column_content'"
        :slice="slice"
      />
      <ThreeColumnContent
        v-if="slice.slice_type === 'three_column_content'"
        :slice="slice"
      />
      <AuthenticationSection
        v-if="slice.slice_type === 'authentication_section'"
        :slice="slice"
      />
      <APILibraryCodeSamples
        v-if="slice.slice_type === 'code_samples'"
        :slice="slice"
      />
      <APIKeyHelpBox
        v-if="slice.slice_type === 'api_key_help_box'"
        :slice="slice"
      />
      <WasThisHelpful
        v-if="slice.slice_type === 'was_this_helpful'"
        :slice="slice"
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
        classes="no-pad-top"
      />
    </div>
  </div>
</template>

<script>
import HeroSearch from '~/components/HeroSearch'
import SplitContent from '~/components/SplitContent'
import DeveloperAPIToolkit from '~/components/DeveloperAPIToolkit'
import TwoColumnBillboard from '~/components/TwoColumnBillboard'
import TwoColumnContent from '~/components/TwoColumnContent'
import ThreeColumnContent from '~/components/ThreeColumnContent'
import AuthenticationSection from '~/components/AuthenticationSection'
import APILibraryCodeSamples from '~/components/APILibraryCodeSamples'
import APIKeyHelpBox from '~/components/APIKeyHelpBox'
import WasThisHelpful from '~/components/WasThisHelpful'
import CollapsibleContent from '~/components/CollapsibleContent'

export default {
  components: {
    HeroSearch,
    SplitContent,
    DeveloperAPIToolkit,
    TwoColumnBillboard,
    TwoColumnContent,
    ThreeColumnContent,
    AuthenticationSection,
    APILibraryCodeSamples,
    APIKeyHelpBox,
    WasThisHelpful,
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
