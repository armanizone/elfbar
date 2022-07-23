import React from 'react'

import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'
import { ScrollContext } from "../pages/Main/Main"



function Navbar() {

  const {scrollIntoView} = React.useContext(ScrollContext)

  return (
    <div className="w-full z-30 text-white border-b border-b-gray-400">
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-xl md:text-2xl lg:text-3xl font-body">
              ELFBAR
            </span>
          </div>
          <div className="hidden lg:flex gap-6 font-semibold uppercase text-lg font-head">
            <p onClick={e => scrollIntoView({aligment: 'center'})}>Продукты</p>
            <p >Обзор</p>
            <p>Контакты</p>
          </div>
          <div className="flex flex-col lg:flex-row text-2xl" >
            <div className="border-x p-4 md:p-8" >
              <AiOutlineMail/>
            </div>
            <div className="p-4 md:p-8" >
              <AiOutlineWhatsApp/>
            </div>
            <div className="border-x p-4 md:p-8" >
              <AiOutlineWhatsApp/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar