<template>
  <div class="form-group">
    <label for="autocomplete-select">Selecione um Item</label>
    <input
      list="items"
      class="form-control"
      id="autocomplete-select"
      v-model="selectedValue"
      @input="onInput"
      placeholder="Digite para buscar..."
    />
    <datalist id="items">
      <option v-for="item in filteredItems" :key="item.id" :value="item.value">
        {{ item.value }}
      </option>
    </datalist>
  </div>
</template>

<script>
export default {
  props: {
    fetchItems: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      searchTerm: '',
      selectedValue: null,
      items: [],
    };
  },
  computed: {
    filteredItems() {
      const term = this.searchTerm.toLowerCase();
      return this.items
        .filter((item) => item.value.toLowerCase().includes(term))
        .slice(0, 10);
    },
  },
  methods: {
    onInput(event) {
      this.searchTerm = event.target.value;
      this.fetchItems(this.searchTerm).then((data) => {
        this.items = data;
      });
    },
  },
};
</script>
