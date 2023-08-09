<template>
  <div>
    <table class="table table-bordered table-striped mt-5">
      <thead>
        <tr>
          <th>bilhete_id</th>
          <th>plano_id</th>
          <th>usuario_id</th>
          <th>bilhete_ativo</th>
          <th>bilhete_cambio</th>
          <th>bilhete_voucher</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.bilhete_id">
          <td>{{ product.bilhete_id }}</td>
          <td>{{ product.plano_id }}</td>
          <td>{{ product.usuario_id }}</td>
          <td>{{ product.bilhete_ativo }}</td>
          <td>{{ product.bilhete_cambio }}</td>
          <td>{{ product.bilhete_voucher }}</td>
        </tr>
      </tbody>
    </table>

    <paginate
      :page-count="total_pages"
      :page-range="3"
      :margin-pages="2"
      :click-handler="clickCallback"
      :prev-text="'Anterior'"
      :next-text="'Próximo'"
      :container-class="'pagination'"
      :page-class="'page-item'"
    >
    </paginate>
  </div>
</template>

<script>
import {ref, onMounted} from 'vue'
import axios from 'axios'
import Paginate from 'vuejs-paginate-next'

export default {
  components: {
    paginate: Paginate,
  },
  setup() {
    const products = ref([])
    const total_pages = ref(0)

    const fetchProducts = async (pageNum = 0) => {
      try {
        const response = await axios.get(`http://sistema.test/prototipo?page=${pageNum}`)
        products.value = response.data.products
        total_pages.value = response.data.total_pages
        console.log(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    const clickCallback = (pageNum) => {
      console.log(pageNum)
      if (pageNum === total_pages.value) {
        console.log('last page')
      }
      fetchProducts(pageNum)
    }

    onMounted(fetchProducts) // Executa o fetchProducts após o componente ser montado

    return {
      products,
      clickCallback,
      total_pages,
    }
  },
}
</script>
