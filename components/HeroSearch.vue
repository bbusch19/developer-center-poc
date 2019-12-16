<template>
  <section>
    <h1>{{ $prismic.richTextAsPlain(heading) }}</h1>
    <h4 v-if="subheading" class="subheading">
      {{ $prismic.richTextAsPlain(subheading) }}
    </h4>
    <SearchInput />
  </section>
</template>

<script>
import SearchInput from '~/components/SearchInput'
export default {
  components: {
    SearchInput
  },
  props: {
    heading: {
      type: Array,
      required: true
    },
    subheading: {
      type: Array,
      default: null
    }
  },
  created() {
    console.log(28, this.heading)
  }
}
</script>

<style lang="scss" scoped>
section {
  padding: 100px 80px;
  text-align: center;
}

.subheading {
  font-weight: 400;
}
</style>
