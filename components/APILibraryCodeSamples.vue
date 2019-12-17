<template>
  <section>
    <APILibraryCodeBlock :languages="languages" :content="codeOne" />
    <APILibraryCodeBlock :languages="languages" :content="codeTwo" />
  </section>
</template>

<script>
import APILibraryCodeBlock from '~/components/APILibraryCodeBlock'

export default {
  components: {
    APILibraryCodeBlock
  },
  props: {
    slice: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      one: 'one',
      two: 'two',
      languages: this.slice.primary.languages,
      codeOne: {
        title: this.slice.primary.list_of_api_callouts[0].text,
        code: `require ‘rms’
Rms.api_key = ‘sk_test_BQokikJOvBiI2HlWgH4olfQ2'`
      },
      codeTwo: {
        title: this.slice.primary.list_of_api_callouts[1].text,
        code: `require ‘rms’
charge = rms.Charge.retrieve(
  "ch_1FHC5b2eZvKYlo2CPldyGjpc",
  {
    api_key: ”sk_test_4eC39HqLyjWDarjtT1zdp7dc”,
  {
)
charge.save() # Uses the same API Key.`
      }
    }
  }
}
</script>
