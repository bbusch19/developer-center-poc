<template>
  <ul>
    <template v-if="listItems">
      <BaseListItem
        v-for="(item, index) of listItems"
        :key="index"
        :item="item"
      />
    </template>
    <slot v-else></slot>
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
