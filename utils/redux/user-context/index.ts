import create, { StateCreator } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

type UserStore = {
  user_id: string | null
  login_status: boolean
  setLoginStatus: (status: boolean) => void
  setUserId: (user_id: string) => void
}

const initialState = {
  user_id: null,
  login_status: false
}

const userStore: StateCreator<
  UserStore,
  [['zustand/immer', never], ['zustand/devtools', never]],
  [],
  UserStore
> = (set, get) => ({
  ...initialState,
  setLoginStatus: status =>
    set(state => {
      state.login_status = status
    }),
  setUserId: user_id =>
    set(state => {
      state.user_id = user_id
    })
})

export const useUserStore = create<UserStore>()(
  immer(devtools(userStore, { name: 'user-store' }))
)

export const getUserStore = useUserStore.getState()
