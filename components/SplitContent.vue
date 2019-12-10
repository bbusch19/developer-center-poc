<template>
  <section :style="backgroundImageStyles" :class="slice.slice_label">
    <div class="container">
      <div class="content">
        <prismic-rich-text
          :field="slice.primary.side_content"
          class="richText"
        />
        <prismic-link
          v-if="slice.primary.button_link"
          :field="slice.primary.button_link"
        >
          <BaseButtonLink
            :classes="[
              slice.primary.button_link_class,
              backgroundImageStyles && 'ghost'
            ]"
            to="/"
          />
        </prismic-link>
      </div>
      <div class="image-container">
        <img :src="slice.primary.main_image.url" />
      </div>
    </div>
  </section>
</template>

<script>
import BaseButtonLink from '~/components/BaseButtonLink'

export default {
  components: {
    BaseButtonLink
  },
  props: {
    slice: {
      type: Object,
      required: true
    }
  },
  computed: {
    backgroundImageStyles() {
      const backgroundImage = this.slice.primary.background_image.url

      return (
        backgroundImage && {
          backgroundImage: `url(${backgroundImage}),  linear-gradient(-49deg, #92BCFE 0%, #3872CC 99%)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
}

section {
  padding: 100px 80px;
  background-color: grey;

  &.light-text {
    color: white;
  }
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
</style>
