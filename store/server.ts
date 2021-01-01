import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { Customer, Employee, UpdateMessage } from '~/interfaces'
import { SocketAccessor } from '~/utils/socket-accessor'

@Module({
  name: 'server',
  stateFactory: true,
  namespaced: true,
})
export default class ServerModule extends VuexModule {
  employees: Employee[] = []
  customers: Customer[] = []

  @Mutation
  UPDATE(message: UpdateMessage) {
    this.employees = message.employees
    this.customers = message.customers
  }

  @Action
  getUpdates() {
    SocketAccessor.Instance.on('/update', (message) => {
      this.UPDATE(message)
    })
  }
}
