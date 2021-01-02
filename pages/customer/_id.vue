<template>
  <div class="min-h-screen bg-gray-800">
    <div class="w-9/12 mx-auto">
      <!-- Title -->
      <div class="w-full h-20 bg-gray-700 flex justify-between items-center px-20">
        <div>
          <span class="text-gray-500 font-bold text-xl">Logged in as :</span>
          <span class="text-gray-100 font-bold text-xl ml-2">{{ name }}</span>
        </div>
        <div>
          <span class="text-gray-500 font-bold text-xl">Your customer_id :</span>
          <span class="text-gray-100 font-bold text-xl ml-2">{{ id }}</span>
        </div>
      </div>
      <!-- Ticket detail -->
      <div class="flex flex-col items-center justify-center mt-32">
        <span class="text-gray-500 font-bold text-2xl">Ticket detail</span>
        <div class="w-3/4 border-gray-600 border-2 px-10 py-6 rounded-lg mt-6">
          <div class="w-full flex justify-between">
            <div>
              <span class="text-gray-500 font-semibold text-xl mr-3">activeEmployees:</span>
              <span class="text-gray-100 font-semibold text-xl">{{ ticket.activeEmployees}}</span>
            </div>
            <div>
              <span class="text-gray-500 font-semibold text-xl mr-3">approximateWaitingTimer:</span>
              <span class="text-gray-100 font-semibold text-xl">{{ ticket.approximateWaitingTimer}}</span>
            </div>
          </div>
          <div class="w-full flex justify-between mt-10">
            <div>
              <span class="text-gray-500 font-semibold text-xl mr-3">positionInQueue:</span>
              <span class="text-gray-100 font-semibold text-xl">{{ ticket.positionInQueue}}</span>
            </div>
            <div class>
              <span class="text-gray-500 font-semibold text-xl mr-3">waitingCustomers:</span>
              <span class="text-gray-100 font-semibold text-xl">{{ ticket.waitingCustomers}}</span>
            </div>
          </div>
          <!-- Turn -->
          <div class="flex justify-center items-center mt-12" v-if="turn">
            <div
              class="w-full bg-green-600 rounded-lg px-3 py-1 cursor-pointer flex justify-between items-center"
            >
              <span class="text-gray-100 text-lg font-semibold">it's your turn!</span>
              <span class="text-gray-100 text-lg font-semibold">go to employee : {{ turn.employeeName }}</span>
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

    ticket() {
      return StoreAccessor.ClientStore.ticket
    },

    turn() {
      return StoreAccessor.ClientStore.turn
    },
  },
  created() {
    if (!StoreAccessor.StartStore.isStarted) {
      this.$router.push('/')
    }
  },
})
</script>
