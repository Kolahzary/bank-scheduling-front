import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { StartedMessage, StartMessage } from '~/interfaces'
import { SocketAccessor } from '~/utils/socket-accessor'

@Module({
  name: 'start',
  stateFactory: true,
  namespaced: true,
})
export default class StartModule extends VuexModule {
  isStarted = false
  id = -1
  name = ''
  role = 'customer'

  @Mutation
  START(message: StartMessage) {
    this.name = message.name
    this.role = message.role
  }

  @Mutation
  STARTED(message: StartedMessage) {
    this.id = message.id
    this.isStarted = true
  }

  @Action
  Start(message: StartMessage) {
    if (this.isStarted) {
      return
    }

    this.START(message)
    SocketAccessor.Instance.on('/started', (message) => {
      this.STARTED(message)
    })
    SocketAccessor.Instance.on('/ticket', (message) => {
      console.log(message)
    })
    SocketAccessor.Instance.emit('/start', message)
  }
}
