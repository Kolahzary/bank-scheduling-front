import { Store } from 'vuex'
import { StoreAccessor } from '~/utils/store-accessor'

const initializer = (store: Store<any>) => StoreAccessor.initStore(store)

export const plugins = [initializer]

export { StoreAccessor }
