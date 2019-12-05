<template>
  <section :style="{ backgroundImageStyles }">
    <div class="content">
      <p>FEATURED</p>
      <img src="/images/logo-site-iq.png" />
      <h2>Assess Location Risk in Seconds</h2>
      <p>
        Reduce underwriting overhead and make more informed decisions faster
        than ever.
      </p>
      <ul>
        <li>Build on the worlds’s Leading CAT Science</li>
        <li>Supported by Key Third Party Insights</li>
        <li>Customized for your Unique Risk Appetite</li>
      </ul>
      <ActionButton :classes="['ghost', 'primary']" />
    </div>
    <div class="image-container">
      <img :src="image" />
    </div>
  </section>
</template>

<script>
import ActionButton from '~/components/ActionButton'
export default {
  components: {
    ActionButton
  },
  props: {
    content: {
      type: String,
      required: true
    },
    image: {
      type: String,
      default: null
    },
    backgroundImage: {
      type: String,
      default: null
    }
  },
  computed: {
    backgroundImageStyles() {
      return (
        this.backgroundImage && {
          backgroundImage: `url(${this.backgroundImage})`
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  display: flex;
  padding: 100px 80px;
  background-color: grey;
  color: white;

  & > div {
    flex-basis: 100%;
  }
}

.image-container {
  img {
    width: 100%;
  }
}
</style>
