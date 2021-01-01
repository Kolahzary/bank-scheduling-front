<template>
  <div>
    <div>Logged in as {{ name }} (customer #{{ id }})</div>
    <div>
      <div>Ticket:</div>
      <div>{{ ticket }}</div>
    </div>
    <div>
      <div>Turn:</div>
      <div>{{ turn }}</div>
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
