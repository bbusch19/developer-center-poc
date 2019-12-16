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

<style lang="scss" module>
// Adding a module here because of rich text inheritance

.richText {
  color: #5b616c;
  color: red;
  p {
    color: #5b616c;
    color: blue;
  }
  strong {
    font-weight: normal;
    color: red;
  }

  a {
    text-decoration: none;
    color: #165fcf;
    color: red !important;
  }
}
</style>
