<template>
  <section>
    <div class="container">
      <h1>{{ $prismic.richTextAsPlain(slice.primary.title) }}</h1>
      <prismic-rich-text
        :field="slice.primary.description"
        :class="[$style['rich-text']]"
      />
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
.rich-text {
  a {
    text-decoration: none;
    color: #165fcf;
  }
  em {
    display: inline-block;
    border-radius: 2px;
    border: solid 1px rgba(28, 46, 54, 0.2);
    background-color: #f7f9fc;
    padding: 2px 3px 0px 3px;
    color: #e35d74;
    font-weight: normal;
    font-style: normal;
  }
}
</style>

<style lang="scss" scoped>
section {
  margin: 50px 0 60px 0;
}
</style>
