<template>
  <form @submit.prevent="handleSubmit" class="search-input">
    <input v-model="inputValue" placeholder="Search for code and content" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      inputValue: null
    }
  },
  methods: {
    handleSubmit() {
      alert(this.inputValue)
    }
  }
}
</script>

<style lang="scss" scoped>
.search-input {
  input {
    padding: 16px;
    font-size: 15px;
    color: #7c8594;
    -webkit-appearance: none;
    border: 1px solid #c6cad1;
    width: 100%;
    max-width: 635px;

    &:focus {
      outline: none;
    }
  }
}
</style>
