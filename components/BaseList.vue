<template>
  <ul>
    <slot></slot>
    <!-- <BaseListItem
      v-for="(item, index) of listItems"
      :key="index"
      :item="item"
    /> -->
  </ul>
</template>

<script>
export default {
  props: {
    listItems: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  position: relative;
  font-size: 22px;
  font-weight: 600;
}
</style>
