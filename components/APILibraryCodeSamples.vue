<template>
  <div class="code-sample-container">
    <div class="cs-header">
      <p>{{ content.title }}</p>
      <div @click="copyCode(content.code)" class="copy-icon"></div>
    </div>
    <div class="cs-langs">
      <ol>
        <li
          v-for="(item, index) in languages"
          :key="index"
          :class="{ active: item.isActive === true }"
        >
          {{ item.lang }}
        </li>
      </ol>
    </div>
    <div class="cs-body">
      <div class="code-editor-wrapper">
        <prism-editor
          :code="content.code"
          :lineNumbers="true"
          :readonly="true"
          :autoStyleLineNumbers="false"
          language="js"
        />
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
  },
  data() {
    return {
      languages: [
        {
          lang: 'Ruby',
          isActive: true
        },
        {
          lang: 'cURL',
          isActive: false
        },
        {
          lang: 'Python',
          isActive: false
        },
        {
          lang: 'PHP',
          isActive: false
        },
        {
          lang: 'Java',
          isActive: false
        },
        {
          lang: 'Node.js',
          isActive: false
        },
        {
          lang: '.NET',
          isActive: false
        }
      ]
    }
  },
  methods: {
    copyCode: (text) => {
      const dummy = document.createElement('textarea')
      document.body.appendChild(dummy)
      dummy.value = text
      dummy.select()
      document.execCommand('copy')
      document.body.removeChild(dummy)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/globals/mixins.scss';

.code-editor-wrapper,
.code-sample-container,
pre,
code {
  width: 765px;
}
.code-sample-container {
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  border: solid 1px rgba(28, 46, 54, 0.2);
  background-color: #ffffff;
  p {
    margin: 0;
  }
}

.cs-header {
  height: 40px;
  line-height: 40px;
  width: 100%;
  background-color: #f7f9fc;
  position: relative;
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
  .copy-icon {
    position: absolute;
    top: 12px;
    right: 14px;
    width: 14px;
    height: 17px;
    background-color: #165fcf;
    cursor: pointer;
  }
}
.cs-langs {
  border-bottom: 1px solid #e4e6ea;
  height: 44px;
  line-height: 40px;
  ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    width: 60px;
    display: inline-block;
    font-size: 12px;
    text-align: center;
    color: #5b616c;
    border-bottom: 2px solid #ffffff;
    &.active {
      color: #165fcf;
      border-bottom: 2px solid #165fcf;
    }
  }
}
</style>
