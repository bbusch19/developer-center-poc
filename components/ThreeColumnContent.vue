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
}

.column-content {
  width: 373px;
  height: 100%;
  border: 1px solid black;
}

img {
  width: 373px;
  height: 200px;
  object-fit: contain;
}
</style>
