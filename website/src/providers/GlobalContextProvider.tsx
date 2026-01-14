"use client"

import { GlobalContext } from '@/contexts/GlobalContext'
import {ReactNode, useState} from 'react'

type Props = {children: ReactNode}

export default function GlobalContextProvider({children}: Props) {
    const [isActiveMobileButton, setIsActiveMobileButton] = useState(false)
  return (
    <GlobalContext.Provider value={{isActiveMobileButton, setIsActiveMobileButton}}>{children}</GlobalContext.Provider>
  )
}