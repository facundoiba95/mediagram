import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({children}) => {
    const [ isOpenMenu, setIsOpenMenu ] = useState(false);
    const [ isLogged, setIsLogged ] = useState(false);
    const [ isOpenSearchBar, setIsOpenSearchBar ] = useState(false);
    const [ isOpen, setIsOpen ] = useState(false);
    const [ isOpenNotifications, setIsOpenNotifications ] = useState(false);
    const [ isOpenMenuSetting, setIsOpenMenuSetting ] = useState(false); 


    return (
        <GlobalContext.Provider value={{
            isOpenMenu, setIsOpenMenu,
            isLogged, setIsLogged,
            isOpenSearchBar, setIsOpenSearchBar,
            isOpen, setIsOpen,
            isOpenNotifications, setIsOpenNotifications,
            isOpenMenuSetting, setIsOpenMenuSetting 
        }}>
            {children}
        </GlobalContext.Provider>
    )
}