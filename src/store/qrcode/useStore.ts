import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { initialState, QRcodeRecord, QRcodeState } from './initialState'

interface StoreMethod {
  addRecord: (record: QRcodeRecord) => void
}

export type TQrcodeStore = QRcodeState & StoreMethod
// export const useQRcodeStore = create<TQrcodeStore>((set) => ({
//   ...initialState,
//   addRecord: (record: QRcodeRecord) => {
//     set((state) => ({ history: [...state.history, record] }))
//   },
// }))

export const useQRcodeStore = create(
  persist<TQrcodeStore>(
    (set, get) => ({
      ...initialState,
      addRecord: (record: QRcodeRecord) => {
        set(() => ({ history: [...get().history, record] }))
      },
    }),
    {
      name: 'qrcode-storage', // name of the item in th\\e storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
)
