<template>
  <ul>
    <BaseListItem
      v-for="(item, index) of listItems"
      :key="index"
      :item="item"
    />
  </ul>
</template>

<script>
import BaseListItem from '~/components/BaseListItem'

export default {
  components: {
    BaseListItem
  },
  props: {
    listItems: {
      type: Array,
      required: true
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
