<template>
  <section>
    <div class="help-box-container">
      <div class="cs-header">
        <p>{{ $prismic.richTextAsPlain(slice.primary.callout) }}</p>
      </div>
      <div class="cs-body">
        <prismic-rich-text
          :field="slice.primary.description"
          :class="[$style['rich-text']]"
        />
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
.rich-text {
  p {
    font-size: 14px;
    line-height: 22px;
    color: #1c2e36;
  }
  a {
    text-decoration: none;
    color: #165fcf;
  }
}
</style>

<style lang="scss" scoped>
.help-box-container {
  width: 763px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  border: solid 1px rgba(28, 46, 54, 0.2);
  background-color: #ffffff;
  p {
    margin: 0;
    color: #1c2e36;
  }
  .cs-header {
    height: 40px;
    line-height: 40px;
    width: 100%;
    background-color: #f7f9fc;
    * {
      text-transform: uppercase;
    }
    p {
      font-size: 12px;
      font-weight: 600;
      letter-spacing: normal;
      color: rgba(28, 46, 54, 0.5);
      margin: 0 0 0 16px;
    }
  }
  .cs-body {
    margin: 16px 29px 20px 18px;
    p {
      font-size: 14px;
      line-height: 22px;
    }
  }
}
</style>
