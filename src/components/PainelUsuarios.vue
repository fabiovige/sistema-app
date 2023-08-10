<template>
  <div class="row">
    <div class="col-12 d-flex justify-content-between">
      <h3>Gerênciamento de Usuários</h3>
      <button type="button" class="btn btn-primary">
        <i class="bi bi-plus"></i> Cadastrar novo usuário
      </button>
    </div>
  </div>

  <FilterInputComponent
    placeholder="Digite para filtrar"
    :termoFiltro="termoFiltro"
    @updateTermoFiltro="atualizarTermoFiltro"
  ></FilterInputComponent>

  <div class="row mt-3">
    <div class="col-12">
      <TableComponent
        :colunas="colunas"
        :itens="usuariosPaginados"
        :hasActions="true"
      ></TableComponent>

      <PaginationComponent
        :paginaAtual="paginaAtual"
        :totalPaginas="totalPaginas"
        :paginasNavegaveis="paginasNavegaveis"
        @mudarPagina="mudarPagina"
        @proximaPagina="proximaPagina"
        @paginaAnterior="paginaAnterior"
      ></PaginationComponent>
    </div>
  </div>
  <div class="row mt-3">
    <div class="col-12">
      <AutoCompleteSelect :fetchItems="fetchUsers" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PaginationComponent from "./UI/PaginationComponent.vue"; // Importando o componente
import FilterInputComponent from "./UI/FilterInputComponent.vue"; // Importando o componente
import TableComponent from "./UI/TableComponent.vue"; // Importe o novo componente
import AutoCompleteSelect from "./UI/AutoCompleteSelect.vue";

import { inject } from "vue";

export default {
  name: "PainelUsuarios",
  setup() {
    // Injetando a função de atualização do breadcrumb
    const updateBreadcrumb = inject("updateBreadcrumb");

    updateBreadcrumb([
      { name: "Dashboard", link: "#" },
      { name: "Painel de Usuário" },
    ]);
  },
  data: () => {
    return {
      termoFiltro: "",
      itensPorPagina: 5,
      paginaAtual: 1,
      paginasNavegaveisLimite: 5,
      colunas: [
        { key: "id", label: "ID ok" },
        { key: "nome", label: "Nome" },
        { key: "email", label: "E-mail" },
        { key: "telefone", label: "Telefone" },
      ],
    };
  },
  components: {
    PaginationComponent,
    FilterInputComponent,
    TableComponent,
    AutoCompleteSelect,
  },
  computed: {
    ...mapGetters(["getUsuarios"]),
    usuariosFiltrados() {
      this.realizarPesquisa();
      const termoFiltroLowerCase = this.termoFiltro.toLowerCase();
      return this.getUsuarios.filter(
        (usuario) =>
          usuario.nome.toLowerCase().includes(termoFiltroLowerCase) ||
          usuario.email.toLowerCase().includes(termoFiltroLowerCase)
      );
    },
    totalPaginas() {
      return Math.ceil(this.usuariosFiltrados.length / this.itensPorPagina);
    },
    usuariosPaginados() {
      const inicio = (this.paginaAtual - 1) * this.itensPorPagina;
      const fim = inicio + this.itensPorPagina;
      return this.usuariosFiltrados.slice(inicio, fim);
    },
    paginasNavegaveis() {
      const paginas = [];
      const metadeLimite = Math.floor(this.paginasNavegaveisLimite / 2);
      let inicio = this.paginaAtual - metadeLimite;
      let fim = this.paginaAtual + metadeLimite;

      if (inicio <= 0) {
        inicio = 1;
        fim = Math.min(this.totalPaginas, this.paginasNavegaveisLimite);
      }

      if (fim > this.totalPaginas) {
        fim = this.totalPaginas;
        inicio = Math.max(1, fim - this.paginasNavegaveisLimite + 1);
      }

      for (let pagina = inicio; pagina <= fim; pagina++) {
        paginas.push(pagina);
      }

      return paginas;
    },
  },
  methods: {
    fetchUsers(term) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const filteredUsers = this.getUsuarios.filter((usuario) =>
            usuario.nome.toLowerCase().includes(term.toLowerCase())
          );
          resolve(
            filteredUsers.map((user) => ({
              value: user.nome, // O texto que será exibido
              id: user.id, // Um identificador único
            }))
          );
        }, 1000);
      });
    },
    atualizarTermoFiltro(novoTermoFiltro) {
      this.termoFiltro = novoTermoFiltro;
      this.realizarPesquisa();
    },
    created() {
      this.getUsuarios();
    },
    proximaPagina() {
      if (this.paginaAtual < this.totalPaginas) {
        this.paginaAtual++;
      }
    },
    paginaAnterior() {
      if (this.paginaAtual > 1) {
        this.paginaAtual--;
      }
    },
    mudarPagina(pagina) {
      if (pagina >= 1 && pagina <= this.totalPaginas) {
        this.paginaAtual = pagina;
        this.termoFiltro = "";
      }
    },
    realizarPesquisa() {
      this.paginaAtual = 1; // Redefine a página atual para 1 ao realizar uma pesquisa
    },
  },
};
</script>
