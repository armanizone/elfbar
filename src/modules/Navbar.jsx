import React from 'react'

import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'
import { ScrollContext } from "../pages/Main/Main"



function Navbar() {

  const {handleScroll} = React.useContext(ScrollContext)

  return (
    <div className="w-full z-30 text-white border-b border-b-gray-400">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <span className="text-xl md:text-2xl lg:text-3xl font-body">
              ELFBAR
            </span>
          </div>
          <div className="flex gap-6 font-semibold uppercase text-sm md:text-lg font-head my-4 md:my-0">
            <p onClick={e => handleScroll('products')} className="cursor-pointer">Продукты</p>
            <p onClick={e => handleScroll('about')} className="cursor-pointer">Обзор</p>
            <p onClick={e => handleScroll('order')} className="cursor-pointer">Контакты</p>
          </div>
          <div className="flex text-2xl justify-between w-full items-center md:w-auto">
            <div className="md:border-x md:w-full md:flex md:justify-center p-4 md:p-8" >
              <AiOutlineMail/>
            </div>
            <div className="md:w-full md:flex md:justify-center p-4 md:p-8" >
              <AiOutlineWhatsApp/>
            </div>
            <div className="md:border-x md:w-full md:flex md:justify-center p-4 md:p-8" >
              <AiOutlineWhatsApp/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar