import React from 'react'
import AboutUs from "./AboutUs"
import Hero from "./Hero"
import Order from "./Order"
import Products from "./Products"



function Main() {

  return (
    <div className="bg-slate-800 relative">
      <Hero/>
      <Products/> 
      <AboutUs/>
      <Order/>
    </div>
  )
}

export default Main