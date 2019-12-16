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
      <CollapsibleContentItem
        v-for="(item, index) of items"
        :key="index"
        :item="item"
        class="collapsible-item"
      >
        <div v-for="(endpoint, subIndex) of item.endpoints" :key="subIndex">
          <!-- eslint-disable-next-line vue/require-component-is -->
          <component
            v-if="endpoint.spans[0].data.label === 'post-type'"
            :is="componentToRender"
            :method="endpoint.text"
            :uri="item.endpoints[subIndex + 1].text"
            :description="item.endpoints[subIndex + 2].text"
          />
        </div>
      </CollapsibleContentItem>
    </div>
  </section>
</template>
<script>
import CollapsibleContentItem from '~/components/CollapsibleContentItem'

export default {
  components: {
    CollapsibleContentItem
  },
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
    },
    componentToRender: {
      type: String,
      default: null
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
  border: 1px solid rgba(28, 46, 54, 0.2);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
}

.title {
  margin: 0;
  padding: 14px 15px;
  background-color: #f7f9fc;
}
</style>
