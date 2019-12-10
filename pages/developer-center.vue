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
    <ThreeColumnContent :content="columnsContentNoTitle" />
    <TwoColumnBillboard />
    <ThreeColumnContent :content="columnsContentWithTitle" />
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
import ThreeColumnContent from '~/components/ThreeColumnContent'
import TwoColumnBillboard from '~/components/TwoColumnBillboard'

export default {
  components: {
    HeroSearch,
    SplitContent,
    TwoColumnContent,
    ThreeColumnContent,
    TwoColumnBillboard
  },
  data() {
    return {
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
        metaData: {
          type: 'Case Studies',
          title: 'A use-case for every risk appetite',
          subtitle:
            'SiteIQ helps optimize their workflow at every stage to move business along more efficiently.',
          ctaText: 'View Case Study',
          ctaLink: '#'
        },
        columnContent: [
          {
            image: '/images/illustrations/three-column-illustration-1.jpg',
            title: 'Risk Screening',
            subtitle:
              'Quickly understand whether a location meets your risk appetite. Whether it is exposed to multiple perils or in an area of low hazard, you can assess a location in seconds so you can make a decision now or conduct deeper analysis later.',
            linkText: 'Go to documentation',
            linkHref: '#'
          },
          {
            image: '/images/illustrations/three-column-illustration-2.jpg',
            title: 'Outlier Identification',
            subtitle:
              'Import a spreadsheet of locations and get the insights you need quickly. View scores of several locations, and use the system to filter on those that concern you most so you can focus your attention on the risks that could impact you the most.',
            linkText: 'View API',
            linkHref: '#'
          },
          {
            image: '/images/illustrations/three-column-illustration-3.jpg',
            title: 'Costomized Guidelines',
            subtitle:
              'Set referral rules and risk card scores to match your underwriting guidelines and ensure locations fall within the rules you have set in seconds without having to find out whether a rule has been breached until it’s too late.',
            linkText: 'Join the community',
            linkHref: '#'
          }
        ]
      }
    }
  }
}
</script>
