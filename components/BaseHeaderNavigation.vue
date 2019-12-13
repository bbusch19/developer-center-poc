<template>
  <nav role="navigation">
    <span
      v-for="{ text, to, items } of filteredNavigationItems"
      :key="text"
      class="link-container"
    >
      <span v-if="to">
        <prismic-link :field="to" class="primary-link">
          {{ text }}
        </prismic-link>
      </span>
      <span v-else class="primary-link"
        >{{ text }} <img src="/images/icons/arrow-down.svg" />
      </span>
      <ul v-if="items.length > 0" class="subnav">
        <li v-for="subItem in items" :key="subItem.text">
          <a v-if="subItem.to" :href="subItem.to">{{ subItem.text }}</a>
        </li>
      </ul>
    </span>
  </nav>
</template>

<script>
export default {
  props: {
    navigationItems: {
      type: Array,
      required: true
    }
  },
  computed: {
    filteredNavigationItems() {
      const newItems = this.navigationItems
        .map((item, index) => {
          const navItem = { items: [] }
          if (item.slice_type === 'first_level') {
            const slicedItems = this.navigationItems.slice(index + 1, -1)
            navItem.to = item.primary.link
            navItem.text = item.primary.link_text
            for (let i = 0; i < slicedItems.length; i++) {
              const currentItem = slicedItems[i]
              if (currentItem.slice_type === 'first_level') break
              navItem.items.push({
                to: currentItem.primary.link,
                text: currentItem.primary.link_text
              })
            }
          }
          return navItem
        })
        .filter((item) => item.to)
      console.log(newItems)
      return newItems
    }
  }
  // data() {
  //   return {
  //     navigationItems: [
  //       {
  //         to: '/',
  //         text: 'Home'
  //       },
  //       {
  //         to: null,
  //         text: 'Events',
  //         items: [{ to: '#', text: 'See Events' }]
  //       },
  //       {
  //         to: null,
  //         text: 'Products',
  //         items: [{ to: '#', text: 'See Products' }]
  //       },
  //       {
  //         to: '/learn',
  //         text: 'Learn'
  //       },
  //       {
  //         to: '/developer-center',
  //         text: 'Developers'
  //       },
  //       {
  //         to: '/support',
  //         text: 'Support'
  //       }
  //     ]
  //   }
  // }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/colors.scss';

nav {
  display: flex;
  position: relative;
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
  top: 95%;
  padding: 0;
  list-style-type: none;
  background-color: white;
  margin: 0;
  padding: 20px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
}
</style>
