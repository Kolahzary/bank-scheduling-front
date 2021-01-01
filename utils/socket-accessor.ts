import 'socket.io-client'
import { ClientSocket } from '~/interfaces'

export class SocketAccessor {
  private static instance: ClientSocket

  public static init(socketInstance: ClientSocket) {
    SocketAccessor.instance = socketInstance
  }

  public static get Instance(): ClientSocket {
    return this.instance
  }
}
