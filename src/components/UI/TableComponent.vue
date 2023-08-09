<template>
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th v-for="coluna in colunas" :key="coluna.key">{{ coluna.label }}</th>
        <th v-if="hasActions"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in itens" :key="item.id">
        <td v-for="coluna in colunas" :key="coluna.key">
          {{ item[coluna.key] }}
        </td>
        <td v-if="hasActions" class="actions-column">
          <div class="d-flex justify-content-between">
            <button class="btn btn-success action-button">
              <i class="bi bi-check"></i> Emitir
            </button>
            <button class="btn btn-info action-button">
              <i class="bi bi-eye"></i> Exibir
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "TableComponent",
  props: {
    colunas: {
      type: Array,
      required: true,
    },
    itens: {
      type: Array,
      required: true,
    },
    hasActions: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.actions-column {
  white-space: nowrap;
  width: 100px;
}
.action-button:not(:last-child) {
  margin-right: 10px;
}
</style>
