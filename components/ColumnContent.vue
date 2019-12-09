<template>
  <div class="column">
    <div class="column-content">
      <img v-if="columnContent.image" :src="columnContent.image" />
      <h4 v-if="columnContent.title">{{ columnContent.title }}</h4>
      <p v-if="columnContent.subtitle">{{ columnContent.subtitle }}</p>
      <div v-if="columnContent.linkHref" class="link-container">
        <a :href="columnContent.linkHref">{{ columnContent.linkText }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    columnContent: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.column-content {
  width: 373px;
  height: 100%;
  margin: 0 auto;

  img {
    width: 373px;
    height: 200px;
    object-fit: contain;
  }

  h4,
  p,
  a {
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
  }

  h4 {
    font-size: 24px;
    line-height: 1.17;
    letter-spacing: -0.55px;
    color: #1c2e36;
  }

  p {
    font-weight: normal;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: normal;
    color: #5b616c;
  }

  a {
    font-size: 14px;
    line-height: 1;
    letter-spacing: 1px;
    color: #165fcf;
    text-decoration: none;
  }
}
</style>
