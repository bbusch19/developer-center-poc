<template>
  <nav role="navigation">
    <span
      v-for="{ text, to, items } of navigationItems"
      :key="text"
      class="link-container"
    >
      <span v-if="to">
        <nuxt-link :to="to" class="primary-link" exact>{{ text }}</nuxt-link>
      </span>
      <span v-else class="primary-link"
        >{{ text }} <img src="/images/icons/arrow-down.svg" />
      </span>
      <ul v-if="items" class="subnav">
        <li v-for="subItem in items" :key="subItem.text">
          <a v-if="subItem.to" :href="subItem.to">{{ subItem.text }}</a>
        </li>
      </ul>
    </span>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navigationItems: [
        {
          to: '/',
          text: 'Home'
        },
        {
          to: null,
          text: 'Events',
          items: [{ to: '#', text: 'See Events' }]
        },
        {
          to: null,
          text: 'Products',
          items: [{ to: '#', text: 'See Products' }]
        },
        {
          to: '/learn',
          text: 'Learn'
        },
        {
          to: '/developer-center',
          text: 'Developers'
        },
        {
          to: '/support',
          text: 'Support'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/colors.scss';

nav {
  display: flex;
}

.primary-link {
  padding: 30px 13px 27px;
  font-weight: 500;
  display: inline-block;
}

.link-container {
  &:hover {
    .subnav {
      display: block;
    }
  }
}

a,
span {
  text-decoration: none;
  color: $darker-text;

  img {
    display: inline-block;
    vertical-align: bottom;
    width: 15px;
    height: 15px;
    opacity: 0.6;
  }
}

.nuxt-link-active {
  color: $primary;
  border-bottom: 3px solid $primary;
}

.subnav {
  display: none;
  position: absolute;
  padding: 0;
  list-style-type: none;
  background-color: white;
  margin: 0;
  padding: 20px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
}
</style>
