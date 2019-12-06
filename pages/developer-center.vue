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

    <ThreeColumnContent :content="columnsContentNoTitle" />
    <ThreeColumnContent :content="columnsContentWithTitle" />
  </div>
</template>

<script>
import HeroSearch from '~/components/HeroSearch'
import SplitContent from '~/components/SplitContent'
import ThreeColumnContent from '~/components/ThreeColumnContent'

export default {
  components: {
    HeroSearch,
    SplitContent,
    ThreeColumnContent
  },
  data() {
    return {
      test: 'I am a test piece of data',
      columnsContentNoTitle: {
        columnContent: [
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
      },
      columnsContentWithTitle: {
        title: 'tomtomt',
        columnContent: [
          {
            image: '/images/illustrations/three-column-illustration-1.jpg',
            title: 'asdf',
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
}
</script>
