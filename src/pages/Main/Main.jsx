import React from 'react'
import AboutUs from "./AboutUs"
import Hero from "./Hero"
import Order from "./Order"
import Products from "./Products"

import { useScrollIntoView } from '@mantine/hooks'
import { flushSync } from "react-dom"

export const ScrollContext = React.createContext(null)

function Main() {

  const [target, setTarget] = React.useState("")
  const ref = React.useRef(null)

  const { scrollIntoView, targetRef } = useScrollIntoView({
    cancelable: false, 
  });

  const handleScroll = (name) => {
    flushSync(e => {
      setTarget(name)
    })
    scrollIntoView({alignment: 'center'})
  }

  return (
    <div className="bg-slate-800 relative">
      <ScrollContext.Provider value={{handleScroll, targetRef, target, ref}}>
        <Hero/>
        <Products/>
        <AboutUs/>
        <Order/>
      </ScrollContext.Provider>
    </div>
  )
}

export default Main