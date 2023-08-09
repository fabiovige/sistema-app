<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination col-12">
      <li class="page-item" :class="{ disabled: paginaAtual === 1 }">
        <a class="page-link" href="#" @click="$emit('paginaAnterior')"
          >Anterior</a
        >
      </li>
      <li class="page-item" v-if="paginasNavegaveis[0] !== 1">
        <a class="page-link" href="#" @click="$emit('mudarPagina', 1)">1</a>
      </li>
      <li class="page-item" v-if="paginasNavegaveis[0] > 2">
        <span class="page-link">...</span>
      </li>
      <li
        class="page-item"
        v-for="pagina in paginasNavegaveis"
        :key="pagina"
        :class="{ active: pagina === paginaAtual }"
      >
        <a class="page-link" href="#" @click="$emit('mudarPagina', pagina)">{{
          pagina
        }}</a>
      </li>
      <li
        class="page-item"
        v-if="
          paginasNavegaveis[paginasNavegaveis.length - 1] < totalPaginas - 1
        "
      >
        <span class="page-link">...</span>
      </li>
      <li
        class="page-item"
        v-if="paginasNavegaveis[paginasNavegaveis.length - 1] !== totalPaginas"
      >
        <a
          class="page-link"
          href="#"
          @click="$emit('mudarPagina', totalPaginas)"
          >{{ totalPaginas }}</a
        >
      </li>
      <li class="page-item" :class="{ disabled: paginaAtual === totalPaginas }">
        <a class="page-link" href="#" @click="$emit('proximaPagina')"
          >Próxima</a
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "PaginationComponent",
  props: {
    paginaAtual: Number,
    totalPaginas: Number,
    paginasNavegaveis: Array,
  },
};
</script>
