<template>
  <button :class="classes">{{ text }}</button>
</template>

<script>
export default {
  props: {
    classes: {
      type: Array,
      default() {
        return ['primary']
      }
    },
    text: {
      type: String,
      default: 'Learn More'
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  -webkit-appearance: none;
  border: 0;
  padding: 14px 24px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;

  &.primary {
    background-color: #468fff;
    color: white;

    &.ghost {
      background-color: white;
      border: 2px solid #468fff;
      color: #468fff;
    }
  }
}
</style>
