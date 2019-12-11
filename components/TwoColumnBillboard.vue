<template>
  <section
    :style="{ backgroundImage: `url(${slice.primary.background_image.url})` }"
  >
    <div class="meta-container">
      <p class="meta-type">
        {{ $prismic.richTextAsPlain(slice.primary.callout) }}
      </p>
      <h4>{{ $prismic.richTextAsPlain(slice.primary.heading) }}</h4>
      <p class="meta-subtitle">
        {{ $prismic.richTextAsPlain(slice.primary.subheading) }}
      </p>
    </div>
    <div class="row-container">
      <div class="row">
        <div
          v-for="({ background_color, text_color, column_content, left_image },
          index) in slice.items"
          :key="index"
          class="column"
        >
          <div :class="`column-content ${background_color}`">
            <div v-if="left_image" class="icon-container">
              <div
                :style="{ backgroundImage: `url(${left_image.url})` }"
                class="icon"
              ></div>
            </div>
            <prismic-rich-text
              :field="column_content"
              :class="[
                $style['rich-text'],
                text_color === 'light' && $style.dark
              ]"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    slice: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" module>
// Using a module here because rich text won't get scoped styles. We need to actually pass styles into the rich text

.rich-text {
  h4 {
    font-size: 24px;
    font-weight: bold;
    line-height: 1.17;
    letter-spacing: -0.55px;
    margin: 0 0 20px 0;
    color: #1c2e36;
  }

  a {
    font-size: 14px;
    font-weight: bold;
    line-height: 1;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-decoration: none;
    color: #165fcf;
  }

  p,
  ul {
    font-size: 16px;
    font-weight: normal;
    line-height: 1.5;
    margin: 0 0 18px 0;
    padding-left: 18px;
    color: #5b616c;
  }

  li {
    list-style-type: disc;
    margin-bottom: 0;

    &::before {
      content: '';
    }
  }

  &.dark {
    h4 {
      color: #ffffff;
    }
    p,
    li {
      color: rgba(255, 255, 255, 0.7);
    }
    a {
      color: #ffffff;
    }
  }
}
</style>

<style lang="scss" scoped>
@import '~/assets/css/globals/mixins.scss';

section {
  padding: 100px 80px;
  .row-container {
    @include flex-horizontal-column;
  }
}
.meta-container {
  text-align: center;
  margin: 0 0 68px 0;
  .meta-type {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
    letter-spacing: 0.53px;
    color: rgba(255, 255, 255, 0.6);
    text-transform: uppercase;
    margin: 0 0 8px 0;
  }
  h4 {
    font-size: 42px;
    font-weight: bold;
    line-height: 1.19;
    letter-spacing: -0.95px;
    color: #ffffff;
    margin: 0 0 18px 0;
  }
  .meta-subtitle {
    font-size: 18px;
    font-weight: normal;
    line-height: 1.44;
    color: rgba(255, 255, 255, 0.8);
    width: 760px;
    margin: 0 auto;
  }
}
.column {
  padding: 0 2.5%;
  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    padding-right: 0;
  }
  .column-content {
    background-color: #ffffff;
    min-height: 231px;
    height: 100%;
    box-shadow: 0 2px 40px 0 rgba(0, 0, 0, 0.35);
    padding: 44px 70px 41px 44px;
    display: flex;
    flex-direction: row;

    &.primary {
      color: white;
      background-color: #3872cc;
    }
  }
  .icon-container,
  .content-container {
    display: flex;
    flex-direction: column;
  }
  .icon-container {
    width: 60px;
    margin-right: 28px;
    height: 100%;
  }
  .icon {
    width: 60px;
    height: 60px;
  }
  .content-container {
    display: flex;
  }
}
</style>
