<template>
  <div class="left-nav-container">
    <ul>
      <li
        v-for="(item, index) in navData.navItems"
        :class="{ active: item.isActive }"
        @click="activeNav(index)"
      >
        <a>{{ item.text }}</a>
        <span class="caret"></span>
      </li>
    </ul>
    <p>
      <a :href="navData.fullAPIRef.href">{{ navData.fullAPIRef.text }}</a>
      <span></span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    navData: {
      type: Object,
      required: true
    }
  },
  methods: {
    activeNav(navItemIndex) {
      const navItems = this.navData.navItems

      navItems.forEach((item, index) => {
        if (navItemIndex === index) {
          item.isActive = true
        } else {
          item.isActive = false
        }
      })

      return navItems
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
    padding: 0 0 6px 12px;
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
      @include right-facing-caret(8px, 2px, #ffffff, #1c2636, 12px, 13px);
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
