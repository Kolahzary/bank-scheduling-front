<template>
  <div>
    <div>Logged in as {{ name }} (server terminal #{{ id }})</div>
    <div>
      <span>Customers</span>

      <ul>
        <li v-for="customer in customers" :key="customer.id">
          {{ customer.id }}: {{ customer.name }} -- {{ customer }}
        </li>
      </ul>
    </div>
    <div>
      <span>Employees</span>

      <ul>
        <li v-for="employee in employees" :key="employee.id">
          {{ employee.id }}: {{ employee.name }} -- {{ employee }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { StoreAccessor } from '~/utils/store-accessor'

export default Vue.extend({
  computed: {
    id() {
      return StoreAccessor.StartStore.id
    },
    name() {
      return StoreAccessor.StartStore.name
    },
    employees() {
      return StoreAccessor.ServerStore.employees
    },
    customers() {
      return StoreAccessor.ServerStore.customers
    },
  },
  created() {
    if (!StoreAccessor.StartStore.isStarted) {
      this.$router.push('/')
    }
  },
})
</script>
