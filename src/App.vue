<template>
  <NavBar />
  <div class="container">
    <BreadcrumbUI :items="breadcrumbItems" />
    <RouterView @update-breadcrumb="updateBreadcrumb" />
  </div>
</template>

<script>
import { ref, provide } from 'vue';
import NavBar from "./components/NavBar.vue";
import BreadcrumbUI from "./components/UI/BreadcrumbUI.vue";

export default {
  name: "App",
  components: { NavBar, BreadcrumbUI },
  setup() {
    const breadcrumbItems = ref([]);

    const updateBreadcrumb = (items) => {
      breadcrumbItems.value = items;
    };

    // Fornecendo a função de atualização para todos os componentes descendentes
    provide('updateBreadcrumb', updateBreadcrumb);

    return {
      breadcrumbItems,
    };
  },
};
</script>
