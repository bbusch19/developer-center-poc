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
        <BaseList
          :list-items="[
            'Build on the worlds’s Leading CAT Science',
            'Supported by Key Third Party Insights',
            'Customized for your Unique Risk Appetite'
          ]"
        >
        </BaseList>
        <BaseButtonLink :classes="['ghost', 'primary']" to="/" />
      </div>
      <div class="image-container">
        <img :src="image" />
      </div>
    </div>
  </section>
</template>

<script>
import BaseButtonLink from '~/components/BaseButtonLink'
import BaseList from '~/components/BaseList'

export default {
  components: {
    BaseButtonLink,
    BaseList
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
}

section {
  padding: 100px 80px;
  background-color: grey;
  color: white;
}

.content {
  flex-basis: 40%;
}

.image-container {
  margin-left: 15px;

  img {
    position: absolute;
    right: 0;
    bottom: 0;
    flex-basis: 60%;
    width: 100%;
    max-width: 735px;
  }
}

ul {
  li {
    margin-bottom: 16px;
    &::before {
      content: url('/images/temp-icon-red.svg');
      position: absolute;
      left: 0;
    }
  }
}
</style>
