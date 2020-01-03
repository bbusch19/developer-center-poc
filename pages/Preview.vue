<template>
  <div class="outer-container">
    <p>Loading the Prismic's Preview...</p>
  </div>
</template>

<script>
import { Client } from '~/prismicHelpers'
import LinkResolver from '~/plugins/link-resolver.js'

export default {
  name: 'Preview',
  async asyncData({ req, query, redirect }) {
    const previewToken = query.token
    if (previewToken) {
      const url = await Client(req).previewSession(
        previewToken,
        LinkResolver,
        '/'
      )
      redirect(url)
    }
  }
}
</script>
