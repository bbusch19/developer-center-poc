<template>
  <div>
    <nuxt-link :to="to" :class="classes" v-if="isLinkInternal">{{
      text
    }}</nuxt-link>
    <a v-else :herf="to" :class="classes">{{ text }}</a>
  </div>
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
    },
    to: {
      type: String,
      default: ''
    }
  },
  computed: {
    isLinkInternal() {
      return this.to.indexOf('/') === 0
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/colors.scss';

a {
  display: inline-block;
  border: 0;
  padding: 14px 24px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 1rem;
  text-decoration: none;
  cursor: pointer;

  &.primary {
    background-color: $primary;
    color: white;

    &.ghost {
      background-color: white;
      border: 2px solid $primary;
      color: #468fff;

      &:hover {
        background-color: white;
      }
    }

    &:hover {
      background-color: $primary-hov;
    }
  }

  &.secondary {
    background-color: $secondary;
    color: white;

    &.ghost {
      background-color: white;
      border: 2px solid $secondary;
      color: #468fff;

      &:hover {
        background-color: white;
      }
    }

    &:hover {
      background-color: $secondary-hov;
    }
  }
}
</style>
