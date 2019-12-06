<template>
  <section>
    <div class="row">
      <div class="column">
        <div class="column-content">
          <img src="" />
          <h4>Documentation</h4>
          <p>
            Learn about API core concepts, tutorials, troubleshooting, and much
            more.
          </p>
          <div class="link-container">
            <a href="#">Go to documentation</a>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="column-content">
          <img src="" />
          <h4>Documentation</h4>
          <p>
            Learn about API core concepts, tutorials, troubleshooting, and much
            more.
          </p>
          <div class="link-container">
            <a href="#">Go to documentation</a>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="column-content">
          <img src="" />
          <h4>Documentation</h4>
          <p>
            Learn about API core concepts, tutorials, troubleshooting, and much
            more.
          </p>
          <div class="link-container">
            <a href="#">Go to documentation</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>

<style lang="scss" scoped>
@import '~/assets/css/mixins.scss';

section {
  @include flex-horizontal-column;
  padding: 100px 80px;
}

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
