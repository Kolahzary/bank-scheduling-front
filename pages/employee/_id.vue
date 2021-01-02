<template>
  <div class="min-h-screen bg-gray-800">
    <div class="w-9/12 mx-auto">
      <!-- Title -->
      <div
        class="w-full h-20 bg-gray-700 flex justify-between items-center px-20"
      >
        <div>
          <span class="text-gray-500 font-bold text-xl">Logged in as :</span>
          <span class="text-gray-100 font-bold text-xl ml-2">{{ name }}</span>
        </div>
        <div>
          <span class="text-gray-500 font-bold text-xl"
            >Your employee_id :</span
          >
          <span class="text-gray-100 font-bold text-xl ml-2">{{ id }}</span>
        </div>
      </div>
      <!-- call Customer button -->
      <div class="flex justify-center items-center mt-32">
        <div
          class="w-1/3 bg-green-400 rounded-lg py-3 cursor-pointer flex justify-center items-center"
          @click="call"
        >
          <span class="text-gray-100 text-lg font-semibold">Call Customer</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { SocketAccessor } from '~/utils/socket-accessor'
import { StoreAccessor } from '~/utils/store-accessor'

export default Vue.extend({
  computed: {
    id() {
      return StoreAccessor.StartStore.id
    },
    name() {
      return StoreAccessor.StartStore.name
    },
  },
  created() {
    if (!StoreAccessor.StartStore.isStarted) {
      this.$router.push('/')
    }
  },
  methods: {
    call() {
      SocketAccessor.Instance.emit('/call-customer')
    },
  },
})
</script>
