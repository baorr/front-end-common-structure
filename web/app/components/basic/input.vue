<template>
  <input
    type="text"
    class="input"
    :value="value"
    v-on="listeners"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    }
  },
  computed: {
    listeners () {
      return {
        input: event => this.$emit('input', event.target.value)
      }
    }
  }
}
</script>