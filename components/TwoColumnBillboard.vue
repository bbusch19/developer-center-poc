<template>
  <section>
    <div v-if="metaData" class="meta-container">
      <p class="meta-type">{{ metaData.type }}</p>
      <h4>{{ metaData.title }}</h4>
      <p class="meta-subtitle">{{ metaData.subtitle }}</p>
    </div>
    <div class="row-container">
      <div class="row">
        <div v-for="column in columns" class="column">
          <div class="column-content">
            <div class="icon-container">
              <div
                :style="{ backgroundImage: `url(${column.image})` }"
                class="icon"
              ></div>
            </div>
            <div class="content-container">
              <h6>{{ column.title }}</h6>
              <p v-if="column.subtitle">{{ column.subtitle }}</p>
              <ul v-if="column.list">
                <li v-for="item in column.list">{{ item }}</li>
              </ul>
              <a :href="column.ctaHref">{{ column.ctaText }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      metaData: {
        type: 'COMPREHENSIVE ASSESSMENTS',
        title: 'Drive deeper location insights',
        subtitle:
          'Make informed decisions quickly. Connect, model, and then explore your data with visual reports that you can collaborate, publish, and share. Leverage full HD model science and localized hazard variations, visualize high-risk areas and isolate key exposures, quickly rank your data against one or multiple hazards'
      },
      columns: [
        {
          image: '/images/icons/temp-play.svg',
          title: 'Get ready to deploy your App',
          subtitle:
            'Watch our webinar to see a product demo and learn about how Strong Customer Authentication will impact checkout flows in Europe.',
          ctaText: 'Start Learning',
          ctaHref: '#'
        },
        {
          image: '/images/icons/temp-icon-default.svg',
          title: 'Reduce your reliance on other teams',
          list: [
            'Enter any location’s address for instant hazard scores',
            'View high resolution hazard maps within seconds',
            'Assess single risks in context to your current portfolio'
          ],
          ctaText: 'Request a demo',
          ctaHref: '#'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/globals/mixins.scss';

section {
  padding: 100px 80px;
  background: url('/images/pattern-on-dark-grey-background.png');
  .row-container {
    @include flex-horizontal-column;
  }
}
.meta-container {
  text-align: center;
  margin: 0 0 68px 0;
  .meta-type {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
    letter-spacing: 0.53px;
    color: rgba(255, 255, 255, 0.6);
    text-transform: uppercase;
    margin: 0 0 8px 0;
  }
  h4 {
    font-size: 42px;
    font-weight: bold;
    line-height: 1.19;
    letter-spacing: -0.95px;
    color: #ffffff;
    margin: 0 0 18px 0;
  }
  .meta-subtitle {
    font-size: 18px;
    font-weight: normal;
    line-height: 1.44;
    color: rgba(255, 255, 255, 0.8);
    width: 760px;
    margin: 0 auto;
  }
}
.column {
  &:first-child {
    .column-content {
      background-color: #ffffff;
    }
    h6 {
      color: #1c2e36;
    }
    p,
    li {
      color: #5b616c;
    }
    a {
      color: #165fcf;
    }
  }
  &:last-child {
    .column-content {
      background-color: #3872cc;
    }
    h6 {
      color: #ffffff;
    }
    p,
    li {
      color: rgba(255, 255, 255, 0.7);
    }
    a {
      color: #ffffff;
    }
  }
  .column-content {
    width: 500px;
    height: 231px;
    box-shadow: 0 2px 40px 0 rgba(0, 0, 0, 0.35);
    padding: 44px 70px 41px 44px;
    display: flex;
    flex-direction: row;
  }
  .icon-container,
  .content-container {
    display: flex;
    flex-direction: column;
  }
  .icon-container {
    width: 60px;
    margin-right: 28px;
    height: 100%;
  }
  .icon {
    width: 60px;
    height: 60px;
  }
  .content-container {
    display: flex;
    h6 {
      font-size: 24px;
      font-weight: bold;
      line-height: 1.17;
      letter-spacing: -0.55px;
      margin: 0 0 20px 0;
    }
    p,
    ul {
      font-size: 16px;
      font-weight: normal;
      line-height: 1.5;
      margin: 0 0 18px 0;
    }
    ul {
      padding-left: 18px;
    }
    li {
      list-style-type: disc;
    }
    a {
      font-size: 14px;
      font-weight: bold;
      line-height: 1;
      letter-spacing: 1px;
      text-transform: uppercase;
      text-decoration: none;
    }
  }
}
</style>
