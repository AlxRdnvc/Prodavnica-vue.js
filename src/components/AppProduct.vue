<template>
  <div>
    <h1>Products</h1>
    <div>
      <input type="text" v-model="search" placeholder="search...">
    </div><br>
    <table class="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Quantitiy</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in filteredList" :key="index">
          <td>{{ product.title }}</td>
          <td>{{ product.quantity }}</td> 
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { productService } from '../ProductService.js'

export default {
  name: 'Products',
  data(){
    return {
      search: '',
      products: productService.list()
    }
  },
  computed: {
    filteredList() {
      return this.products.filter(products => {
        return products.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}
</script>