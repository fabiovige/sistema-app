<template>
  <h1>A5Maker Atualizado</h1>
</template>

<script setup>
import {onMounted, onUnmounted} from 'vue'

onUnmounted(() => {
  console.log('header desmontado')
})

onMounted(() => {
  console.log('header montado')
})
</script>

<style></style>
