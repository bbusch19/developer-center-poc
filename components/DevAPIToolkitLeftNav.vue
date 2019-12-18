<template>
  <div class="left-nav-container">
    <ul>
      <li
        v-for="(item, index) in navItems"
        @click="setActiveContent(item.isActive, index)"
        :key="index"
        :class="{ active: item.isActive }"
      >
        <a>{{ item.text }}<span class="caret"></span></a>
      </li>
    </ul>
    <p>
      <a :href="apiRefLink.url" target="apiRefLink.target"
        >{{ apiRefLink.text }}<span></span
      ></a>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    navItems: {
      type: Array,
      required: true
    },
    apiRefLink: {
      type: Object,
      required: true
    }
  },
  methods: {
    setActiveContent(isActive, index) {
      if (!isActive) {
        this.$emit('setActiveContent', index)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/globals/mixins.scss';

.left-nav-container {
  width: 218px;
}
ul {
  margin: 0 0 34px 0;
  padding: 0;
  list-style: none;
  li {
    position: relative;
    height: 35px;
    line-height: 35px;
    margin: 0 0 6px 0;
    padding: 0 0 0 12px;
    &.active,
    &:hover {
      border-radius: 5px;
      background-color: #1c2636;
      a {
        color: #ffffff;
      }
      .caret {
        visibility: visible;
      }
    }
    &:hover {
      cursor: pointer;
    }
    .caret {
      visibility: hidden;
      @include right-facing-caret(8px, 2px, #ffffff, #1c2636, 10px, 13px);
    }
  }
}
a {
  text-decoration: none;
  color: #165fcf;
  font-size: 14px;
  font-weight: bold;
}
p {
  a {
    text-transform: uppercase;
    line-height: 1;
    letter-spacing: 1px;
  }
  span {
    margin-left: 12px;
    @include right-arrow(#165fcf, 6px, 22px);
  }
}
</style>
