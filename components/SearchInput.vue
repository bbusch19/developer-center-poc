<template>
  <form @submit.prevent="handleSubmit" class="search-input">
    <TheSiteSearch placeholder="Search for code and content…" />
  </form>
</template>

<script>
import TheSiteSearch from '~/components/TheSiteSearch'

export default {
  components: {
    TheSiteSearch
  },
  methods: {
    handleSubmit() {}
  }
}
</script>

<style lang="scss" scoped>
.search-input {
  span {
    width: 100%;
  }
  input {
    padding: 16px;
    font-size: 15px;
    color: #7c8594;
    -webkit-appearance: none;
    border: 1px solid #c6cad1;
    width: 100%;
    max-width: 625px;

    &:focus {
      outline: none;
    }
  }
}
</style>

<style lang="scss">
.algolia-autocomplete {
  width: 100%;
  max-width: 625px;
}
</style>
