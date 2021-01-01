import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import StartModule from '~/store/start'
import ServerModule from '~/store/server'
import CustomerModule from '~/store/customer'

export class StoreAccessor {
  private static _store: Store<any>
  private static _startStore: StartModule
  private static _serverStore: ServerModule
  private static _customerStore: CustomerModule

  public static initStore(store: Store<any>) {
    StoreAccessor._store = store
    StoreAccessor._startStore = getModule(StartModule, store)
    StoreAccessor._serverStore = getModule(ServerModule, store)
    StoreAccessor._customerStore = getModule(CustomerModule, store)
  }

  public static get RawStore(): Store<any> {
    return StoreAccessor._store
  }

  public static get StartStore(): StartModule {
    return StoreAccessor._startStore
  }

  public static get ServerStore(): ServerModule {
    return StoreAccessor._serverStore
  }

  public static get ClientStore(): CustomerModule {
    return StoreAccessor._customerStore
  }
}
