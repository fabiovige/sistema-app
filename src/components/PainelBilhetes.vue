<template>
  <div class="row">
    <div class="col-12 d-flex justify-content-between">
      <h3>Gerênciamento de Bilhetes</h3>
      <button type="button" class="btn btn-primary">
        <i class="bi bi-check"></i> Emitir novo bilhete
      </button>
    </div>
  </div>
  <div class="row mt-3">
    <div class="col-12">
      <table class="table table-bordered table-striped">
        <thead>
          <tr>
            <th>id</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="bilhete in getBilhetes" :key="bilhete.id">
            <td>{{ bilhete.id }}</td>
            <td>{{ bilhete.nome }}</td>
            <td>{{ bilhete.descricao }}</td>
            <td>
              <button class="btn btn-primary">
                <i class="bi bi-gear"></i> Gerenciar
              </button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="4">paginacao aqui</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "PainelBilhetes",
  data: () => {
    return {
      id: "",
      nome: "",
      descricao: "",
    };
  },
  components: {},
  computed: {
    ...mapGetters(["getBilhetes"]),
  },
  methods: {
    created() {
      this.getBilhetes();
    },
  },
};
</script>
