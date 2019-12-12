<template>
  <section>
    <div class="meta-container">
      <h4>{{ $prismic.richTextAsPlain(slice.primary.title) }}</h4>
      <p>{{ $prismic.richTextAsPlain(slice.primary.subtitle) }}</p>
    </div>
    <div class="row-container">
      <div class="row">
        <div class="column">
          <LeftNav :nav-data="slice.primary" />
        </div>
        <div class="column">
          <CodeSample />
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
