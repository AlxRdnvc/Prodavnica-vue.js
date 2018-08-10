<template>
  <div>
    <h1>Customers</h1>
    <form @submit.prevent>
      <div class="form-group">
        <label for="name">Name</label>
        <input v-model="newCustomer.fullName" type="text" class="form-control" id="name" placeholder="name">
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input v-model="newCustomer.email" type="email" class="form-control" id="email" placeholder="email">
      </div>
      <button @click="addCustomer()" type="submit" class="btn btn-primary">Add Customer</button>
    </form><br><br>

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
      customers: customerService.list(),
      newCustomer: {}
    }
  },

  methods: {
    deleteCustomerNow(customer){
        customers: customerService.deleteCustomer(customer)
    },

    addCustomer(newCustomer){
      customerService.addCustomer(this.newCustomer)
      this.newCustomer = {}
    }
  }
}
</script>
