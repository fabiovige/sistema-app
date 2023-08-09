<template>
  <div class="row">
    <div class="col-12 d-flex justify-content-between">
      <h3>Gerênciamento de Usuários</h3>
      <button type="button" class="btn btn-primary">
        <i class="bi bi-plus"></i> Cadastrar novo usuário
      </button>
    </div>
  </div>

  <input
    id="input-filtrar-usuarios"
    class="form-control mt-3"
    type="text"
    placeholder="Digite para filtrar"
    v-model="termoFiltro"
  />

  <div class="row mt-3">
    <div class="col-12">
      <table class="table table-bordered table-striped">
        <thead>
          <tr>
            <th>id</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Telefone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="usuario in usuariosPaginados" :key="usuario.id">
            <td>{{ usuario.id }}</td>
            <td>{{ usuario.nome }}</td>
            <td>{{ usuario.email }}</td>
            <td>{{ usuario.telefone }}</td>
            <td>
              <button class="btn btn-success">
                <i class="bi bi-check"></i> Emitir
              </button>
            </td>
          </tr>
        </tbody>
        <!-- Adicione a paginação aqui -->
      </table>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item" :class="{ disabled: paginaAtual === 1 }">
            <a class="page-link" href="#" @click="paginaAnterior">Anterior</a>
          </li>
          <li class="page-item" v-if="paginasNavegaveis[0] !== 1">
            <a class="page-link" href="#" @click="mudarPagina(1)">1</a>
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
            <a class="page-link" href="#" @click="mudarPagina(pagina)">{{
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
            v-if="
              paginasNavegaveis[paginasNavegaveis.length - 1] !== totalPaginas
            "
          >
            <a class="page-link" href="#" @click="mudarPagina(totalPaginas)">{{
              totalPaginas
            }}</a>
          </li>
          <li
            class="page-item"
            :class="{ disabled: paginaAtual === totalPaginas }"
          >
            <a class="page-link" href="#" @click="proximaPagina">Próxima</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "PainelUsuarios",
  data: () => {
    return {
      termoFiltro: "",
      itensPorPagina: 5,
      paginaAtual: 1,
      paginasNavegaveisLimite: 5,
    };
  },
  components: {},
  computed: {
    ...mapGetters(["getUsuarios"]),
    usuariosFiltrados() {
      this.realizarPesquisa();
      const termoFiltroLowerCase = this.termoFiltro.toLowerCase();
      console.log(termoFiltroLowerCase);
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
    created() {
      console.log("created...");
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
