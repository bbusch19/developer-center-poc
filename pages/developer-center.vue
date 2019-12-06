<template>
  <div class="container">
    <ThreeColumnContent />
  </div>
</template>

<script>
import ThreeColumnContent from '~/components/ThreeColumnContent'

export default {
  components: {
    ThreeColumnContent
  },
  data() {
    return { test: 'I am a test piece of data' }
  }
}
</script>
