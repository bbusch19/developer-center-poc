<template>
  <section>
    <div class="meta-container">
      <h4>{{ metaData.title }}</h4>
      <p>{{ metaData.subtitle }}</p>
    </div>
    <div class="row-container">
      <div class="row">
        <div class="column">
          <LeftNav :nav-data="leftNav" />
        </div>
        <div class="column">
          <CodeSample :content="codeSample" />
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
  data() {
    return {
      metaData: {
        title: 'Developers APIs toolkit',
        subtitle:
          'We obsessively seek out elegant, composable abstractions that enable robust, scalable, flexible integrations. Because we eliminate needless complexity and extraneous details, you can get up and running with RMS in just a couple of minutes.'
      },
      leftNav: {
        navItems: [
          {
            text: 'CAT Events',
            href: '#',
            isActive: true
          },
          {
            text: 'Customers',
            href: '#',
            isActive: false
          },
          {
            text: 'Subscriptions',
            href: '#',
            isActive: false
          },
          {
            text: 'Reporting',
            href: '#',
            isActive: false
          }
        ],
        fullAPIRef: {
          text: 'Full Api Reference',
          href: '#'
        }
      },
      codeSample: {
        title: 'CAT Event request API key',
        codeContent: '//This is dummy data.',
        language: 'Node 8',
        nums: 12,
        help: {
          text: 'help',
          link: '#'
        },
        run: {
          text: 'run',
          link: '#'
        }
      }
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
