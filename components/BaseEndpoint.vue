<template>
  <div>
    <p class="method">{{ method }}</p>
    <p class="uri">
      {{ uri }} <span>{{ description }}</span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    method: {
      type: String,
      required: true
    },
    uri: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  display: flex;
  border: 1px solid #5eac7d;
  background-color: #f7f9fc;
  margin-bottom: 12px;
}

p {
  padding: 8px 15px;
  font-size: 14px;
  margin: 0;
}

span {
  font-size: 11px;
  font-weight: normal;
}

.method {
  background-color: #5eac7d;
  color: white;
  font-weight: 600;
}

.uri {
  font-weight: 600;
  color: #1c2e36;
}
</style>
