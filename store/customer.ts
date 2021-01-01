import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { TicketMessage, TurnMessage } from '~/interfaces'
import { SocketAccessor } from '~/utils/socket-accessor'

@Module({
  name: 'customer',
  stateFactory: true,
  namespaced: true,
})
export default class CustomerModule extends VuexModule {
  ticket: TicketMessage | null = null
  turn: TurnMessage | null = null

  @Mutation
  TICKET(message: TicketMessage) {
    this.ticket = message
  }

  @Mutation
  TURN(message: TurnMessage) {
    this.turn = message
  }

  @Action
  getUpdates() {
    SocketAccessor.Instance.on('/ticket', (message) => {
      this.TICKET(message)
    })
    SocketAccessor.Instance.on('/turn', (message) => {
      this.TURN(message)
    })
  }
}
