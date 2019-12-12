<template>
  <section>
    <div class="meta-container">
      <p class="meta-type">
        {{ $prismic.richTextAsPlain(slice.primary.callout) }}
      </p>
      <h4>{{ $prismic.richTextAsPlain(slice.primary.heading) }}</h4>
      <p class="meta-subtitle">
        {{ $prismic.richTextAsPlain(slice.primary.subheading) }}
      </p>
    </div>
    <div class="row-container">
      <div class="row">
        <ColumnContent
          v-for="(item, index) in slice.items"
          :columnContent="item.column_content"
          :key="index"
        />
      </div>
    </div>
    <div v-if="slice.primary.button_link" class="meta-cta-container">
      <prismic-link :field="slice.primary.button_link">
        <BaseButtonLink
          :text="slice.primary.button_link_text"
          :classes="[slice.primary.button_link_class]"
        />
      </prismic-link>
    </div>
  </section>
</template>

<script>
import ColumnContent from '~/components/ColumnContent'
import BaseButtonLink from '~/components/BaseButtonLink'

export default {
  components: {
    ColumnContent,
    BaseButtonLink
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
  text-align: center;
}
</style>
