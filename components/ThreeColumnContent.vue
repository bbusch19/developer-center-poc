<template>
  <section>
    <div class="row">
      <ColumnContent
        v-for="column in content.columnContent"
        :columnContent="column"
      />
    </div>
  </section>
</template>

<script>
import ColumnContent from '~/components/ColumnContent'

export default {
  components: {
    ColumnContent
  },
  props: {
    content: Object
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/globals/mixins.scss';

section {
  @include flex-horizontal-column;
  padding: 100px 80px;
}
</style>
