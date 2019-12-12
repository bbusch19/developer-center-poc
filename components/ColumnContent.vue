<template>
  <div class="column">
    <div class="column-content">
      <prismic-rich-text :class="$style.richText" :field="columnContent" />
      <div v-if="columnContent.linkHref" class="link-container">
        <a :href="columnContent.linkHref">{{ columnContent.linkText }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    columnContent: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" module>
// We need a module here thanks to rich text style inheritance
.richText {
  img {
    max-width: 100%;
  }

  h4,
  p,
  a {
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
  }

  h4 {
    font-size: 24px;
    line-height: 1.17;
    letter-spacing: -0.55px;
    color: #1c2e36;
  }

  p {
    font-weight: normal;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: normal;
    color: #5b616c;
  }

  a {
    font-size: 14px;
    line-height: 1;
    letter-spacing: 1px;
    color: #165fcf;
    text-decoration: none;
  }
}
</style>

<style lang="scss" scoped>
.column-content {
  height: 100%;
  margin: 0 20px;
}
</style>
