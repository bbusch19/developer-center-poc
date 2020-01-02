<template>
  <div>
    <BaseHeader :navigationItems="navigationItems" />
    <div class="temp-container">
      <APILibrarySearch />
    </div>
    <div class="temp-container">
      <main><ApiLibrarySlicesBlock :slices="slices" /></main>
    </div>
  </div>
</template>

<script>
import Prismic from 'prismic-javascript'
import PrismicConfig from '~/prismic.config.js'
import APILibrarySearch from '~/components/APILibrarySearch.vue'
import ApiLibrarySlicesBlock from '~/components/ApiLibrarySlicesBlock.vue'
import BaseHeader from '~/components/BaseHeader'

export default {
  components: {
    ApiLibrarySlicesBlock,
    BaseHeader,
    APILibrarySearch
  },
  async asyncData({ context, error, req, $payloadURL, route, $axios }) {
    try {
      if (process.static && process.client && $payloadURL) {
        return await $axios.$get($payloadURL(route))
      }

      // Query to get API object
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req })

      // Query to get blog home content
      // TODO: Update folder structure and API call to generate dynamic routes
      const document = await api.getByID('XfQZtREAACEA_-YC')
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

<style lang="scss" scoped>
.temp-container {
  width: 80%;
  margin: 0 auto;
}
</style>
