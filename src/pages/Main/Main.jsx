import React from 'react'
import AboutUs from "./AboutUs"
import Hero from "./Hero"
import Order from "./Order"
import Products from "./Products"

import { useScrollIntoView } from '@mantine/hooks'

export const ScrollContext = React.createContext(null)

function Main() {


  const { scrollIntoView, targetRef } = useScrollIntoView({
    cancelable: false, 
    isList: true
  });

  return (
    <div className="bg-slate-800">
      <ScrollContext.Provider value={{scrollIntoView, targetRef}}>
        <Hero/>
        <Products/>
        <AboutUs/>
        <Order/>
      </ScrollContext.Provider>
    </div>
  )
}

export default Main