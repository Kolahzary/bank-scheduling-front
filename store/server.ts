import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { Customer, Employee, UpdateMessage } from '~/interfaces'
import { SocketAccessor } from '~/utils/socket-accessor'

@Module({
  name: 'server',
  stateFactory: true,
  namespaced: true,
})
export default class ServerModule extends VuexModule {
  approximateWaitingMinutes = 0
  minutesPerCustomer = 3
  employees: Employee[] = []
  customers: Customer[] = []

  @Mutation
  UPDATE(message: UpdateMessage) {
    this.approximateWaitingMinutes = message.approximateWaitingMinutes
    this.minutesPerCustomer = message.minutesPerCustomer
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
