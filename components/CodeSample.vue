<template>
  <div class="code-sample-container">
    <div class="cs-header-footer cs-header">
      <p>{{ codeSample.title }}</p>
    </div>
    <div class="cs-body">
      <div class="code-editor-wrapper">
        <prism-editor
          :code="code"
          :lineNumbers="true"
          :readonly="true"
          :autoStyleLineNumbers="false"
          language="js"
        ></prism-editor>
      </div>
    </div>
    <div class="cs-header-footer cs-footer">
      <div class="language-container cta-container">
        <p class="language">{{ codeSample.language }}</p>
      </div>
      <div class="right-container cta-container">
        <div class="help-container">
          <a>{{ codeSample.help.text }}</a>
        </div>
        <div class="run-container">
          <div>
            <div class="triangle-container">
              <span></span>
            </div>
            <p class="run-text">{{ codeSample.run.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      code: `// Require the RMS library with a test secret key.
const rms = require(‘rms’)(‘sk_test_BQokikJOvBiI2HlWgH4olfQ2');

// Create a cat event from a test card token.
const catEvent = await rms.catev.create({
  peril: ‘flod’,
  currency: 'usd',
  source: 'tok_amex',
  description: 'My first cat event deploy’
});

// Click “▶ run” to try this code live and create your first deploy`,
      codeSample: {
        title: 'CAT Event request API key',
        language: 'Node 8',
        nums: 12,
        help: {
          text: 'help',
          link: '#'
        },
        run: {
          text: 'run',
          link: '#'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/globals/mixins.scss';

.code-editor-wrapper,
pre,
code {
  width: 765px;
}
.code-sample-container {
  width: 765px;
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
</style>
