<template>
  <li>{{ item }}</li>
</template>

<script>
export default {
  props: {
    item: {
      type: String,
      required: true
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
