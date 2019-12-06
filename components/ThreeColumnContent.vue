<template>
  <section>
    <div class="row">
      <ColumnContent v-for="column in columnsContent" :columnContent="column" />
    </div>
  </section>
</template>

<script>
import ColumnContent from '~/components/ColumnContent'

export default {
  components: {
    ColumnContent
  },
  data() {
    return {
      columnsContent: [
        {
          image: '/images/illustrations/three-column-illustration-1.jpg',
          title: 'Documentation',
          subtitle:
            'Learn about API core concepts, tutorials, troubleshooting, and much more.',
          linkText: 'Go to documentation',
          linkHref: '#'
        },
        {
          image: '/images/illustrations/three-column-illustration-2.jpg',
          title: 'API Reference',
          subtitle: 'Customize RMS API, to help you get the data you need.',
          linkText: 'View API',
          linkHref: '#'
        },
        {
          image: '/images/illustrations/three-column-illustration-3.jpg',
          title: 'Community',
          subtitle:
            'Connecting with peers and discuss all about RMS and coding.',
          linkText: 'Join the community',
          linkHref: '#'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/globals/mixins.scss';

section {
  @include flex-horizontal-column;
  padding: 100px 80px;
}
</style>
