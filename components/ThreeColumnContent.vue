<template>
  <section>
    <div v-if="content.metaData" class="meta-container">
      <p class="meta-type">{{ content.metaData.type }}</p>
      <h4>{{ content.metaData.title }}</h4>
      <p class="meta-subtitle">{{ content.metaData.subtitle }}</p>
    </div>
    <div class="row-container">
      <div class="row">
        <ColumnContent
          v-for="column in content.columnContent"
          :columnContent="column"
        />
      </div>
    </div>
    <div v-if="content.metaData" class="meta-cta-container">
      <a href="content.metaData.ctaLink">{{ content.metaData.ctaText }}</a>
    </div>
  </section>
</template>

<script>
import ColumnContent from '~/components/ColumnContent'

export default {
  components: {
    ColumnContent
  },
  props: {
    content: {
      type: Object,
      required: true
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
  }
}
.meta-container {
  text-align: center;
  .meta-type {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
    letter-spacing: 0.53px;
    color: #165fcf;
    text-transform: uppercase;
    margin: 0 0 8px 0;
  }
  h4 {
    font-size: 42px;
    font-weight: bold;
    line-height: 1.19;
    letter-spacing: -0.95px;
    color: #000000;
    margin: 0 0 18px 0;
  }
  .meta-subtitle {
    font-size: 18px;
    line-height: 1.44;
    letter-spacing: normal;
    color: #5b616c;
    width: 532px;
    margin: 0 auto 80px auto;
  }
}

.meta-cta-container {
  width: 245px;
  height: 42px;
  background-color: #165fcf;
  text-align: center;
  margin: 60px auto;
  a {
    line-height: 42px;
    height: 100%;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    color: #ffffff;
    text-decoration: none;
  }
}
</style>
