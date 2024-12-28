export interface IStoreAction {
   isDarkMode: boolean
   toogleTheme: () => void
}

export type TStore = IStoreAction
