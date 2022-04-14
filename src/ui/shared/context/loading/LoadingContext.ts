import { createContext } from 'react'

export const LoadingContext = createContext({
  loadingCount: 0,
  showLoading: () => { },
  closeLoading: () => { }
})
