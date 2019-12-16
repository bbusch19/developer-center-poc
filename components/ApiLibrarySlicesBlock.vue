<template>
  <div>
    <div v-for="(slice, index) of slices" :key="index">
      <AuthenticationSection
        v-if="slice.slice_type === 'authentication_section'"
        :slice="slice"
      />
      <APILibraryCodeSamples :content="codeOne" />
      <APILibraryCodeSamples :content="codeTwo" />
      <APIKeyHelpBox
        v-if="slice.slice_type === 'api_key_help_box'"
        :slice="slice"
      />
      <WasThisHelpful
        v-if="slice.slice_type === 'was_this_helpful'"
        :slice="slice"
      />
    </div>
  </div>
</template>

<script>
import AuthenticationSection from '~/components/AuthenticationSection'
import APILibraryCodeSamples from '~/components/APILibraryCodeSamples'
import APIKeyHelpBox from '~/components/APIKeyHelpBox'
import WasThisHelpful from '~/components/WasThisHelpful'

export default {
  components: {
    AuthenticationSection,
    APILibraryCodeSamples,
    APIKeyHelpBox,
    WasThisHelpful
  },
  props: {
    slices: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      codeOne: {
        code: `require ‘rms’
Rms.api_key = ‘sk_test_BQokikJOvBiI2HlWgH4olfQ2'`,
        title: 'Global API key'
      },
      codeTwo: {
        code: `require ‘rms’
charge = rms.Charge.retrieve(
  "ch_1FHC5b2eZvKYlo2CPldyGjpc",
  {
    api_key: ”sk_test_4eC39HqLyjWDarjtT1zdp7dc”,
  {
)
charge.save() # Uses the same API Key.`,
        title: 'Per-request API key'
      }
    }
  }
}
</script>
