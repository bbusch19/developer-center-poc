<template>
  <header>
    <div class="logo">
      <img src="/images/logo-rms.svg" alt="RMS Logo" />
      <p>OWL <br /><span>Support Center</span></p>
    </div>
    <BaseHeaderNavigation :navigationItems="navigationItems" />
    <div>
      <p>Icons go here</p>
    </div>
  </header>
</template>

<script>
import BaseHeaderNavigation from '~/components/BaseHeaderNavigation'

export default {
  components: {
    BaseHeaderNavigation
  },
  props: {
    navigationItems: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/colors.scss';

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
  border-bottom: 1px solid #e4e6ea;
}

.logo {
  * {
    display: inline-block;
  }

  img {
    margin-right: 18px;
  }
}

p {
  margin: 0;
  font-weight: bold;
  font-size: 18px;
  color: $darker-text;

  span {
    font-size: 15px;
    font-weight: 500;
    color: $text;
  }
}
</style>
