<template>
  <SlicesBlock :slices="slices" />
</template>

<script>
import Prismic from 'prismic-javascript'
import PrismicConfig from '~/prismic.config.js'
import SlicesBlock from '~/components/SlicesBlock.vue'

export default {
  components: {
    SlicesBlock
  },
  async asyncData({ context, error, req }) {
    try {
      // Query to get API object
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req })

      // Query to get blog home content
      const document = await api.getByID('Xe_iyBEAAN-vcDxb')
      const pageContent = document.data
      const slices = pageContent.body
      console.log(slices)

      return {
        pageContent,
        slices
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>
