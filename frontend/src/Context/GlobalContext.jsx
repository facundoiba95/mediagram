import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [toggleIsLogged, setToggleIsLogged] = useState(false);
    const [isOpenSearchBar, setIsOpenSearchBar] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenNotifications, setIsOpenNotifications] = useState(false);
    const [isOpenMenuSetting, setIsOpenMenuSetting] = useState(false);
    const [isOpenAddTags, setIsOpenAddTags] = useState(false);
    const [isOpenViewPost, setIsOpenViewPost] = useState(false);
    const [isOpenImageProfile, setIsOpenImageProfile] = useState(false);
    const [isOpenModalWindowAuth, setIsOpenModalWindowAuth] = useState(false);
    const [toggleAuth, setToggleAuth] = useState('login');
    const [isOpenModalInteractionsInfo, setIsOpenModalInteractionsInfo] = useState(false);
    const [isLoadingSearch, setIsLoadingSearch] = useState(false);
    const [openLoader, setOpenLoader] = useState(false);
    const [topScroll, setTopScroll] = useState(true);
    const [isSelectedImage, setIsSelectedImage] = useState(false);
    const [locationSelected, setLocationSelected] = useState('');
    const [listReferTo, setListReferTo] = useState([]);
    const [switchChecked, setSwitchChecked] = useState(false);
    const [isOpenHistory, setIsOpenHistory] = useState(false);
    const [isOpenTrendTags, setIsOpenTrendTags] = useState(false);
    const [activeEffect, setActiveEffect] = useState(false);

    return (
        <GlobalContext.Provider value={{
            isOpenMenu, setIsOpenMenu,
            toggleIsLogged, setToggleIsLogged,
            isOpenSearchBar, setIsOpenSearchBar,
            isOpen, setIsOpen,
            isOpenNotifications, setIsOpenNotifications,
            isOpenMenuSetting, setIsOpenMenuSetting,
            isOpenViewPost, setIsOpenViewPost,
            isOpenModalWindowAuth, setIsOpenModalWindowAuth,
            toggleAuth, setToggleAuth,
            isOpenModalInteractionsInfo, setIsOpenModalInteractionsInfo,
            isLoadingSearch, setIsLoadingSearch,
            openLoader, setOpenLoader,
            topScroll, setTopScroll,
            isSelectedImage, setIsSelectedImage,
            locationSelected, setLocationSelected,
            listReferTo, setListReferTo,
            switchChecked, setSwitchChecked,
            isOpenAddTags, setIsOpenAddTags,
            isOpenImageProfile, setIsOpenImageProfile,
            isOpenHistory, setIsOpenHistory,
            isOpenTrendTags, setIsOpenTrendTags,
            activeEffect, setActiveEffect
        }}>
            {children}
        </GlobalContext.Provider>
    )
}