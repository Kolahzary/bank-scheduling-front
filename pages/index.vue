<template>
  <div class="min-h-screen bg-gray-800 flex justify-center items-center">
    <div class="bg-gray-700 w-1/3 px-6 py-8 rounded-2xl shadow-3xl shadow-black">
      <span class="text-black text-2xl font-bold">Welcome...</span>

      <div class=" mt-8">
        <input
          class="appearance-none block w-full bg-gray-700 text-black text-lg font-semibold  border-b border-gray-500 p-1 leading-tight focus:outline-none focus:border-green-400"
          placeholder="Enter your name..."
          type="text"
          v-model="name"
        />
      </div>
      <div class="mt-8">
        <select class="w-full text-gray-500 text-lg font-semibold bg-gray-700 border-b border-gray-500  py-1 outline-none focus:outline-none focus:border-green-400 "  v-model="role">
        <option class="py-1">Select your role...</option>
          <option class="py-1" value="server">Server</option>
          <option class="py-1" value="customer">Customer</option>
          <option class="py-1" value="employee">Employee</option>
        </select>
      </div>

      <div class="mt-12 w-full flex justify-center items-center bg-green-400 px-6 py-3 rounded-lg cursor-pointer"  @click="start">
      <span class="text-xl font-bold text-white">Start</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { UserRoleType } from '~/interfaces'
import { SocketAccessor } from '~/utils/socket-accessor'
import { StoreAccessor } from '~/utils/store-accessor'

export default Vue.extend({
  data: () => {
    return {
      name: '',
      role: 'Select your role...' as UserRoleType,
    }
  },

  methods: {
    start() {
      StoreAccessor.ClientStore.getUpdates()
      StoreAccessor.ServerStore.getUpdates()

      SocketAccessor.Instance.once('/started', (message) => {
        this.$router.push(`/${this.role}/${message.id}`)
      })
      StoreAccessor.StartStore.Start({
        name: this.name,
        role: this.role,
      })
    },
  },
})
</script>


