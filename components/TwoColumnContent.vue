<template>
  <section>
    <div class="container">
      <h2>{{ $prismic.richTextAsPlain(slice.primary.heading) }}</h2>
      <h4 v-if="slice.primary.subheading" class="subheading">
        {{ $prismic.richTextAsPlain(slice.primary.subheading) }}
      </h4>
      <div class="columns">
        <div
          v-for="({ column_content, button_link, button_link_class },
          index) of slice.items"
          :key="index"
          class="column"
        >
          <prismic-rich-text :class="$style.richText" :field="column_content" />
          <prismic-link :field="button_link">
            <BaseButtonLink :classes="[button_link_class]" />
          </prismic-link>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import BaseButtonLink from '~/components/BaseButtonLink'

export default {
  components: {
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

<style lang="scss" module>
@import '~/assets/css/colors.scss';

.richText {
  h4 {
    color: $darker-text;
  }
}
</style>

<style lang="scss" scoped>
.subheading {
  font-weight: 400;
}

.column-heading {
  font-weight: bold;
  margin-top: 0;
}

section {
  padding: 120px 80px;
  border-top: 1px solid #e4e6ea;
  text-align: center;
}

.container {
  max-width: 1280px;
  margin: auto;
}

.columns {
  padding-top: 70px;
  display: flex;
  justify-content: space-around;
}

.column {
  padding: 48px 32px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  border: solid 1px #d1e4ff;
  margin: 0 2.5%;
}
</style>
