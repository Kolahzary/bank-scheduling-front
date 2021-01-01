import { Plugin, Context } from '@nuxt/types'
import io from 'socket.io-client'
import { ClientSocket } from '~/interfaces'
import { SocketAccessor } from '~/utils/socket-accessor'

const accessor: Plugin = (_: Context) => {
  const instance = io('http://127.0.0.1:5960', {
    transports: ['websocket'],
  }) as ClientSocket
  SocketAccessor.init(instance)
}

export default accessor
