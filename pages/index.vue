<template>
  <div class="container">
    <label for="name">
      Name:
      <input v-model="name" type="text" />
    </label>
    <label for="role">
      Role:
      <select v-model="role">
        <option value="server">Server</option>
        <option value="employee">Employee</option>
        <option value="customer">Customer</option>
      </select>
    </label>
    <button @click="start">Start</button>
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
      name: 'user1',
      role: 'customer' as UserRoleType,
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

<style scoped>
input {
  border: 1px black solid;
}
button {
  padding: 5px;
  background: lightgreen;
}
</style>
