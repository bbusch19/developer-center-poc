<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>

<script>
export default {
  mounted() {
    // From testing, without a brief timeout, it won't work.
    // setTimeout(() => this.scrollFix(this.$route.hash), 1)
    if (this.$route.hash) {
      const anchorEl = document.querySelector(`${this.$route.hash}`)

      if (anchorEl) {
        anchorEl.scrollIntoView()
      }
    }
  }
}
</script>
