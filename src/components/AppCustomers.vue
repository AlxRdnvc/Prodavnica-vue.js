<template>
  <div>
    <h1>Customers</h1>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.id">
          <td>{{ customer.fullName }}</td>
          <td>{{ customer.email }}</td>
          <td><button @click="deleteCustomerNow(customer)">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import { customerService } from '../CustomerService.js'

export default {
  name: 'Customers',
  
  data() {
    return {
      customers: customerService.list()
    }
  },

  methods: {
    deleteCustomerNow(customer){
        customers: customerService.deleteCustomer(customer)
    }
  }
}
</script>
