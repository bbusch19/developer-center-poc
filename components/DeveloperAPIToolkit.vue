<template>
  <section>
    <div class="meta-container">
      <h4>{{ $prismic.richTextAsPlain(slice.primary.title) }}</h4>
      <p>{{ $prismic.richTextAsPlain(slice.primary.subtitle) }}</p>
    </div>
    <div class="row-container">
      <div class="row">
        <div class="column">
          <LeftNav
            :nav-items="navItems"
            :api-ref-link="apiRefLink"
            @setActiveContent="setActiveContent"
          />
        </div>
        <div class="column">
          <CodeSample :code="codeBlock" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import LeftNav from '~/components/DevAPIToolkitLeftNav'
import CodeSample from '~/components/CodeSample'

export default {
  components: {
    LeftNav,
    CodeSample
  },
  props: {
    slice: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      navItems: this.slice.primary.left_nav_items,
      apiRefLink: {
        text: this.slice.primary.full_api_reference_link_text,
        url: this.slice.primary.full_api_reference_link.url,
        target: this.slice.primary.full_api_reference_link.target
      },
      codeBlock: '',
      codeBlocksData: [
        {
          code: `// Require the RMS library with a test secret key.
const rms = require(‘rms’)(‘sk_test_BQokikJOvBiI2HlWgH4olfQ2');

// Create a cat event from a test card token.
const catEvent = await rms.catev.create({
  peril: ‘flod’,
  currency: 'usd',
  source: 'tok_amex',
  description: 'My first cat event deploy’
});

// Click “▶ run” to try this code live and create your first deploy`
        },
        {
          code: `// This is code for the Customers API Key`
        },
        {
          code: `// This is code for the Subscriptions API Key`
        },
        {
          code: `// This is code for the Reporting API Key`
        }
      ]
    }
  },
  mounted() {
    console.log(76, this.codeBlock)
    this.setDefaultCodeBlock()
    this.setNavData()
    console.log(799, this.codeBlock)
  },
  methods: {
    setActiveContent(index) {
      this.setActiveNav(index)
      this.setCodeBlockData(index)
    },
    setActiveNav(activeNavIndex) {
      this.navItems.forEach((item, index) => {
        item.isActive = false
        item.isActive = activeNavIndex === index
      })
    },
    setDefaultCodeBlock() {
      this.codeBlock = this.codeBlocksData[0].code
    },
    setCodeBlockData(index) {
      const navItemsData = this.navItems
      const codeBlocks = this.codeBlocksData

      navItemsData.forEach((item, index) => {
        this.navItems[index].code = codeBlocks[index].code
      })
    },
    setNavData() {
      const propsNavItems = this.navItems
      const navData = []
      propsNavItems.forEach((item, index) => {
        const isActive = index === 0
        const navItem = {
          text: item.text,
          isActive
        }
        navData.push(navItem)
      })
      this.navItems = navData
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/globals/mixins.scss';

section {
  padding: 100px 80px;
  .row-container {
    @include flex-horizontal-column;
    justify-content: center;
    .row {
      width: auto;
    }
  }
}

.meta-container {
  text-align: center;
  width: 606px;
  margin: 0 auto 80px auto;
  h4 {
    font-size: 42px;
    font-weight: bold;
    line-height: 1.19;
    letter-spacing: -0.95px;
    color: #1c2e36;
    margin: 0 0 18px 0;
  }
  p {
    font-size: 18px;
    line-height: 1.44;
    color: #5b616c;
  }
}

.left-nav-container {
  margin: 0 79px 0 0;
}
</style>
