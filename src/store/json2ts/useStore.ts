import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { initialState, IState } from './initialState'

interface StoreMethod {
  setLastJson: (lastJson: string) => void
}

export type TQrcodeStore = IState & StoreMethod

export const useStore = create(
  persist<TQrcodeStore>(
    (set) => ({
      ...initialState,
      setLastJson: (lastJson: string) => {
        set(() => ({ lastJson }))
      },
    }),
    {
      name: 'json2ts-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
