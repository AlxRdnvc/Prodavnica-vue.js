<template>
  <div>
    <h3>{{ customer.fullName }}</h3>
    <h3>{{ customer.email }}</h3><hr>
    <h3>latest purchases:</h3>
    <ul>
        <li>we will have some products here later on...</li>
    </ul>
  </div>
</template>

<script>
import { customerService } from '../CustomerService.js'

export default {
  name: 'LatestPurchases',
  props: ['id'],
  data(){
      return {

      }
    },
    created(){
        this.customer = customerService.findCustomer(this.id);
    }
}
</script>