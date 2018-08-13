<template>
    <div>
        <div v-if="product.quantity > 0">
            <table class="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{ product.title }}</td>
                        <td>{{ product.quantity }}</td>
                    </tr>
                </tbody>
            </table><br>

            <select v-model="selectedCustomer">
                <option disabled value="">Please select customer</option>
                <option v-for='(customer, index) in customers' :key='index' v-bind:value="customer">
                    {{customer.fullName}}
                </option>
            </select>
            <button @click="purchase()" type="submit">Confirm</button>
            <router-link  to='/app-product'>
                <button>Cancel</button>
            </router-link>  
        </div>
        <div v-else>
            <h2>Out of stock</h2>
        </div>
  </div>
</template>

<script>
import { productService } from '../ProductService.js'
import { customerService } from '../CustomerService.js'

export default {
    name: 'PurchaseProduct',
    props: ['id'],
    data(){
        return {
            products: productService.list(),
            customers: customerService.list(),
            selectedCustomer: ''
        }
    },
    created(){
        this.product = productService.findProduct(this.id);
    },
    methods: {
        purchase(){
            if(!this.selectedCustomer){
                alert("Please select customer");
            } else {
                customerService.addProduct(this.selectedCustomer, this.product)
                productService.decrementQuantity(this.product)
                // console.log(this.selectedCustomer)
            }
        }
    }
}
</script>