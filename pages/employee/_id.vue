<template>
  <div>
    <div>Logged in as {{ name }} (employee #{{ id }})</div>
    <button @click="call">Call Customer</button>
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
