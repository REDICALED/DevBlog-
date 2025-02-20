import { recoilPersist } from 'recoil-persist';

const sessionStorage = 
      typeof window !== 'undefined' ? window.sessionStorage : undefined

export const { persistAtom } = recoilPersist({
  key: "sessionStorage",
  storage: sessionStorage,
})