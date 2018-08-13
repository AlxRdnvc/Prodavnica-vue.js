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
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in filteredList" :key="index">
          <td>{{ product.title }}</td>
          <td v-if="product.quantity === 0">out of stock</td>
          <td v-else>{{ product.quantity }}</td>
          <td><button @click="increment(product)">+</button></td>
          <td><button @click="decrement(product)">-</button></td>
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
  methods: {
    increment(product){
      productService.incrementQuantity(product);
    },
    decrement(product){
      productService.decrementQuantity(product);
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