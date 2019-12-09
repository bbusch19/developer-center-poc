<template>
  <div class="container">
    <HeroSearch
      heading="Developers Center"
      subheading="Integrate with RMS. Easily build apps with our APIs."
    />
    <SplitContent
      content="Hey there this is the content!"
      image="/images/SiteIq-hero-image.png"
      background-image="/images/SiteIQ-bg-pattern.png"
    />
    <TwoColumnContent
      :columns="[
        {
          heading: 'Live chat',
          subheading:
            'We are available from Monday to Friday. Expected response time should be whithin a few minutes.'
        },
        {
          heading: 'Email',
          subheading:
            'We are available from Monday to Friday. Expected response time should be whithin 24 hours.'
        }
      ]"
      heading="Need help?"
      subheading="Our support team is here to help you."
    />
  </div>
</template>

<script>
import HeroSearch from '~/components/HeroSearch'
import SplitContent from '~/components/SplitContent'
import TwoColumnContent from '~/components/TwoColumnContent'

export default {
  components: {
    HeroSearch,
    SplitContent,
    TwoColumnContent
  },
  data() {
    return { test: 'I am a test piece of data' }
  }
}
</script>
