import {createContext, useState} from "react"
import {TStore} from "../types/store"

interface StoreProps {
   children: React.ReactNode
}

const Store = createContext<TStore | null>(null)

export const StoreProvider: React.FC<StoreProps> = ({children}) => {
   const [isDarkMode, setIsDarkMode] = useState(false)

   const toogleTheme = () => {
      setIsDarkMode((Prev) => !Prev)
   }

   return (
      <>
         <Store.Provider value={{isDarkMode, toogleTheme}}>
            {children}
         </Store.Provider>
      </>
   )
}

export default Store
