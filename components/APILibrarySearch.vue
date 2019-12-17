<template>
  <section>
    <div class="form-container">
      <div class="icon-container"><span class="search-icon"></span></div>
      <form @submit.prevent="handleSubmit" class="search-input">
        <input v-model="inputValue" placeholder="Find anything…" />
      </form>
    </div>
  </section>
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
.form-container {
  height: 54px;
  border-left: 1px solid #e4e6ea;
  border-right: 1px solid #e4e6ea;
  border-bottom: 1px solid #e4e6ea;
  display: flex;
  align-items: left;
  justify-content: left;
  flex-direction: row;
}
.icon-container {
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.search-icon {
  width: 30px;
  height: 30px;
  display: inline-block;
  border: 1px solid #e4e6ea;
}

form {
  width: 100%;
}

input {
  height: 52px;
  width: 100%;
  -webkit-appearance: none;
  border: 0px;
  &:focus {
    outline: none;
  }
}
</style>
