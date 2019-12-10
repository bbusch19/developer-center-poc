<template>
  <div class="code-sample-container">
    <div class="cs-header-footer cs-header">
      <p>{{ content.title }}</p>
    </div>
    <div class="cs-body">
      <div class="row">
        <div class="nums-column column">
          <ul>
            <li v-for="(num, index) in content.nums">{{ index }}</li>
          </ul>
        </div>
        <div class="content-column column">
          <p>{{ content.codeContent }}</p>
        </div>
      </div>
    </div>
    <div class="cs-header-footer cs-footer">
      <div class="language-container cta-container">
        <p class="language">{{ content.language }}</p>
      </div>
      <div class="right-container cta-container">
        <div class="help-container">
          <a>{{ content.help.text }}</a>
        </div>
        <div class="run-container">
          <div>
            <div class="triangle-container">
              <span></span>
            </div>
            <p class="run-text">{{ content.run.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/globals/mixins.scss';

.code-sample-container {
  width: 765px;
  height: 379px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  border: solid 1px rgba(28, 46, 54, 0.2);
  background-color: #ffffff;
  p {
    margin: 0;
  }
}
.cs-header-footer {
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
.cs-footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .cta-container {
    display: flex;
  }
  .help-container {
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    text-align: center;
    color: #165fcf;
    cursor: pointer;
    margin: 0 21px 0 0;
  }
  .run-container {
    width: 80px;
    height: 40px;
    background-color: #165fcf;
    cursor: pointer;
    div {
      width: 51px;
      margin: 0 auto;
    }
    .triangle-container {
      width: 14px;
      display: inline;
      position: relative;
      span {
        @include triangle-right(#ffffff, 10px);
        position: absolute;
        top: 14px;
      }
    }
    .run-text {
      font-size: 14px;
      line-height: 40px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      letter-spacing: 1px;
      text-align: right;
      color: #ffffff;
    }
  }
}
.cs-body {
  @include flex-horizontal-column;
  .column {
    flex-basis: auto;
    flex: none;
    -webkit-box-flex: none;
  }
  .nums-column {
    width: 41px;
    background-color: #e2f7eb;
  }
  ul {
    padding: 0;
    margin: 15px 0 20px 0;
    list-style: none;
  }
  li {
    font-family: IBMPlexMono;
    font-size: 16px;
    font-weight: normal;
    line-height: 22px;
    text-align: center;
    color: #93c5a8;
  }
  .content-column {
    margin: 16px 48px 19px 17px;
  }
  p {
    color: #aaaaaa;
    line-height: 22px;
  }
}
</style>
