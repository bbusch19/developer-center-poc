<template>
  <section>
    <prismic-rich-text
      :field="slice.primary.was_this_helpful"
      class="richText"
    />
  </section>
</template>

<script>
export default {
  props: {
    slice: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  padding: 60px 0;
  border-bottom: 1px solid #e4e6ea;
}
</style>
