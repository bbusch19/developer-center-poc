<template>
  <section>
    <h1>{{ heading }}</h1>
    <h4 v-if="subheading" class="subheading">{{ subheading }}</h4>
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
      type: String,
      required: true
    },
    subheading: {
      type: String,
      default: null
    }
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
