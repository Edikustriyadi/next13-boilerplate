'use client'
import React, { FC } from "react"
import { Provider } from "jotai"
type AppProps = {
  children: React.ReactNode
}
const ProviderJotai: FC<AppProps> = ({ children }) => {
  return (
    <>
      <Provider>
        {children}
      </Provider>
    </>
  )
}

export default ProviderJotai