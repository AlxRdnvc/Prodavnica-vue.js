<template>
  <div>
    <h1>Products</h1>
    <table class="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Quantitiy</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, key) in products" :key="key">
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
      products: productService.list()
    }
  }
}
</script>