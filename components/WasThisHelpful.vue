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
  },
  created() {
    console.log(16, this.slice)
  }
}
</script>

<style lang="scss" scoped></style>
