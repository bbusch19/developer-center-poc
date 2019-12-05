<template>
  <div class="container">
    <HeroSearch
      heading="Developers Center"
      subheading="Integrate with RMS. Easily build apps with our APIs."
    />
    <SplitContent
      content="Hey there this is the content!"
      image="/images/SiteIq-hero-image.png"
    />
  </div>
</template>

<script>
import HeroSearch from '~/components/HeroSearch'
import SplitContent from '~/components/SplitContent'

export default {
  components: {
    HeroSearch,
    SplitContent
  },
  data() {
    return { test: 'I am a test piece of data' }
  }
}
</script>
