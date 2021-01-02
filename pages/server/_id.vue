<template>
  <div class="min-h-screen bg-gray-800">
    <div class="w-9/12 mx-auto">
      <!-- Title -->
      <div class="w-full h-20 bg-gray-700 justify-center items-center">
        <div class="text-gray-500 font-bold text-xl">
          Logged in as {{ name }} (server terminal #{{ id }})
        </div>
        <div class="text-gray-500 font-bold text-xl">
          Approximate waiting minutes: {{ approximateWaitingMinutes }}
        </div>
        <div class="text-gray-500 font-bold text-xl">
          Minutes per each customer: {{ minutesPerCustomer }}
        </div>
      </div>
      <!-- Content -->
      <div class="w-full flex">
        <!-- Customer -->
        <div class="w-1/2 px-16">
          <div class="flex items-center justify-center my-8">
            <span class="text-gray-600 font-semibold text-xl">Customers</span>
          </div>
          <div
            v-for="customer in customers"
            :key="customer.id"
            class="w-full border-gray-600 border-2 px-6 py-4 rounded-lg mt-4"
          >
            <div class="w-full flex justify-between items-center">
              <div class="flex items-center">
                <span class="text-gray-600 font-semibold text-lg mr-1"
                  >{{ customer.id }}-</span
                >
                <span class="text-gray-600 font-semibold text-lg">{{
                  customer.name
                }}</span>
              </div>
              <div
                class="border-2 w-1/3 rounded-3xl px-3 py-1 flex justify-center items-center"
                :class="{
                  'border-green-400': customer.isProcessed == true,
                  'border-red-600': customer.isProcessed !== true,
                }"
              >
                <span
                  v-if="customer.isProcessed == true"
                  class="text-gray-600 text-base font-semibold"
                  >done</span
                >
                <span
                  v-if="customer.isProcessed !== true"
                  class="text-gray-600 text-base font-semibold"
                  >waiting</span
                >
              </div>
            </div>
          </div>
        </div>
        <!-- Employee -->
        <div class="w-1/2 px-16">
          <div class="flex items-center justify-center my-8">
            <span class="text-gray-600 font-semibold text-xl">Employees</span>
          </div>
          <div
            v-for="employee in employees"
            :key="employee.id"
            class="w-full border-gray-600 border-2 px-6 py-4 rounded-lg mt-4"
          >
            <div class="w-full flex justify-between items-center">
              <div class="flex items-center">
                <span class="text-gray-600 font-semibold text-lg mr-1"
                  >{{ employee.id }}-</span
                >
                <span class="text-gray-600 font-semibold text-lg">{{
                  employee.name
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    minutesPerCustomer() {
      return StoreAccessor.ServerStore.minutesPerCustomer
    },
    approximateWaitingMinutes() {
      return StoreAccessor.ServerStore.approximateWaitingMinutes
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
