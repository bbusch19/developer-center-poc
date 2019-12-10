<template>
  <section>
    <div class="container">
      <h2>{{ heading }}</h2>
      <h4 v-if="subheading" class="subheading">{{ subheading }}</h4>
      <div class="columns">
        <div v-for="(column, index) of columns" :key="index" class="column">
          <h4 class="column-heading">{{ column.heading }}</h4>
          <p>{{ column.subheading }}</p>
          <BaseButtonLink to="#" />
        </div>
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
    heading: {
      type: String,
      required: true
    },
    subheading: {
      type: String,
      default: null
    },
    columns: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.subheading {
  font-weight: 400;
}

.column-heading {
  font-weight: bold;
  margin-top: 0;
}

section {
  padding: 120px 80px;
  border-top: 1px solid #e4e6ea;
  text-align: center;
}

.container {
  max-width: 1280px;
  margin: auto;
}

.columns {
  padding-top: 70px;
  display: flex;
  justify-content: space-around;
}

.column {
  padding: 48px 32px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  border: solid 1px #d1e4ff;
  margin: 0 2.5%;
}
</style>
