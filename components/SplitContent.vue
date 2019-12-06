<template>
  <section :style="backgroundImageStyles">
    <div class="container">
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
        <BaseButton :classes="['ghost', 'primary']" />
      </div>
      <div class="image-container">
        <img :src="image" />
      </div>
    </div>
  </section>
</template>

<script>
import BaseButton from '~/components/BaseButton'
export default {
  components: {
    BaseButton
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
          backgroundImage: `url(${this.backgroundImage}),  linear-gradient(-49deg, #92BCFE 0%, #3872CC 99%)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
h1,
h2 {
  color: white;
}

.container {
  display: flex;
  margin: auto;
  max-width: 1280px;

  & > div {
    flex-basis: 100%;
  }
}
section {
  padding: 100px 80px;
  background-color: grey;
  color: white;
}

.image-container {
  img {
    width: 100%;
  }
}
</style>
