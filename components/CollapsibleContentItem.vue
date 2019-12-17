<template>
  <div class="collapsible-item">
    <h5 @click="handleClick">
      {{ item.dropdown_title }}
      <img :class="{ open: isOpen }" src="/images/icons/arrow-down.svg" />
    </h5>
    <p v-if="item.dropdown_description" class="description">
      {{ item.dropdown_description }}
    </p>
    <div v-show="isOpen">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    handleClick() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style lang="scss" scoped>
.collapsible-item {
  margin: 15px;
}

h5 {
  margin: 0;

  img {
    float: right;

    &.open {
      transform: rotate(180deg);
    }
  }
}

.description {
  font-size: 12px;
  margin-top: 4px;
}
</style>
