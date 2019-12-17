<template>
  <section>
    <div class="container">
      <h1>{{ $prismic.richTextAsPlain(slice.primary.title) }}</h1>
      <prismic-rich-text :field="slice.primary.description" class="richText" />
    </div>
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
  margin: 50px 0 60px 0;
}
</style>
