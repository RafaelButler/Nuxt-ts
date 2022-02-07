<script lang="ts">
export default {
  name: 'ButtonComponent',
  methods: {
    show() {
      alert('hello world')
    },
  },
}
</script>

<template>
  <button @click="show">Botao</button>
</template>
