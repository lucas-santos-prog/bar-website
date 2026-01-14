"use client"

import {createContext, Dispatch, SetStateAction} from "react"

export type _globalContextDefaultValuesType = {
    isActiveMobileButton: boolean;
    setIsActiveMobileButton: Dispatch<SetStateAction<boolean>>
}

const _globalContextDefaultValues: _globalContextDefaultValuesType = {
    isActiveMobileButton: false,
    setIsActiveMobileButton: () => {}
}

export const GlobalContext = createContext(_globalContextDefaultValues)