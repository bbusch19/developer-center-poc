<template>
  <div>
    <div v-for="(slice, index) of slices" :key="index">
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
        classes="no-pad"
      />
    </div>
  </div>
</template>

<script>
import AuthenticationSection from '~/components/AuthenticationSection'
import APILibraryCodeSamples from '~/components/APILibraryCodeSamples'
import APIKeyHelpBox from '~/components/APIKeyHelpBox'
import WasThisHelpful from '~/components/WasThisHelpful'
import CollapsibleContent from '~/components/CollapsibleContent'

export default {
  components: {
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
