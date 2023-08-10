<template>
  <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="mt-3">
    <ol class="breadcrumb">
      <li v-for="(item, index) in items" :key="index" class="breadcrumb-item" :class="{ active: index === items.length - 1 }">
        <a v-if="item.link" :href="item.link">{{ item.name }}</a>
        <span v-else>{{ item.name }}</span>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
/* Adicione quaisquer estilos adicionais aqui, se necessário */
</style>
