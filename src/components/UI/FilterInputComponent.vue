<template>
  <input
    class="form-control mt-3"
    type="text"
    :placeholder="placeholder"
    v-model="localTermoFiltro"
    @input="updateTermoFiltro"
  />
</template>

<script>
export default {
  name: "FilterInputComponent",
  props: {
    placeholder: String,
    termoFiltro: String,
  },
  data() {
    return {
      localTermoFiltro: this.termoFiltro,
    };
  },
  watch: {
    termoFiltro(newValue) {
      this.localTermoFiltro = newValue;
    },
  },
  methods: {
    updateTermoFiltro() {
      this.$emit("updateTermoFiltro", this.localTermoFiltro);
    },
  },
};
</script>
