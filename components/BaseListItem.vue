<template>
  <li><slot></slot></li>
</template>

<script>
export default {
  props: {
    item: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
li {
  list-style-type: none;
  margin-bottom: 16px;

  &::before {
    content: url('/images/temp-icon-red.svg');
    position: absolute;
    left: 0;
  }
}
</style>
