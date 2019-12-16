<template>
  <div>
    <BaseHeader :navigationItems="navigationItems" />
    <main><ApiLibrarySlicesBlock :slices="slices" /></main>
  </div>
</template>

<script>
import Prismic from 'prismic-javascript'
import PrismicConfig from '~/prismic.config.js'
import ApiLibrarySlicesBlock from '~/components/ApiLibrarySlicesBlock.vue'
import BaseHeader from '~/components/BaseHeader'

export default {
  components: {
    ApiLibrarySlicesBlock,
    BaseHeader
  },
  async asyncData({ context, error, req }) {
    try {
      // Query to get API object
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req })

      // Query to get blog home content
      // TODO: Update folder structure and API call to generate dynamic routes
      const document = await api.getByID('XfKDBhEAACIA-Mwi')
      const navDocument = await api.getByID('XfK-sxEAACMA-dR-')
      const pageContent = document.data
      const navigationItems = navDocument.data.body
      const slices = pageContent.body

      return {
        pageContent,
        slices,
        navigationItems
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>
