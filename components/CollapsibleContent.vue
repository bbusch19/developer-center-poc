<template>
  <section>
    <h2>
      {{ $prismic.richTextAsPlain(heading) }}
      <span v-if="version" class="version">{{ version }}</span>
      <span v-if="second_version_field" class="second-version">{{
        second_version_field
      }}</span>
    </h2>
    <p>{{ $prismic.richTextAsPlain(subheading) }}</p>
    <div class="collapsible-block">
      <p class="title">{{ title }}</p>
      <div v-for="(item, index) of items" :key="index" class="collapsible-item">
        test
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    heading: {
      type: Array,
      default: null
    },
    subheading: {
      type: Array,
      default: null
    },
    version: {
      type: String,
      default: null
    },
    // eslint-disable-next-line vue/prop-name-casing
    second_version_field: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: 'API SAMPLES'
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  padding: 50px 80px 0;
}

h2 {
  margin-top: 0;
}

.version,
.second-version {
  font-size: 12px;
  font-weight: 500;
  padding: 4px 12px;
  border-radius: 12px;
  border: solid 1px #899398;
  vertical-align: super;

  &:last-child {
    border: 0;
    background-color: #5eac7d;
    color: white;
  }
}

.collapsible-block {
  margin-top: 60px;
}

.title {
  margin: 0;
  padding: 14px 15px;
  background-color: #f7f9fc;
}
</style>
