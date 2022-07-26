import React from 'react'

import { AiOutlineWhatsApp } from 'react-icons/ai'
import { TbBrandTelegram } from 'react-icons/tb'
import { ScrollContext } from '../App'

import logo from '../images/logo.png'
import kazakhstan from '../images/kazakhstan.png'
import russia from '../images/russia.png'


function Navbar() {

  const {handleScroll} = React.useContext(ScrollContext)

  return (
    <div className="w-full z-30 text-white border-b border-b-gray-400">
      <div className="container md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center ">
          <div>
            <span>
              <img src={logo} alt="" className='w-20 object-cover object-center my-2' />
            </span>
          </div>
          <div className="flex gap-6 font-semibold uppercase text-sm md:text-lg font-head my-4 md:my-0">
            <p onClick={e => handleScroll('products')} className="cursor-pointer">Продукты</p>
            <p onClick={e => handleScroll('about')} className="cursor-pointer">Обзор</p>
            <p onClick={e => handleScroll('order')} className="cursor-pointer">Контакты</p>
          </div>
          <div className="flex text-2xl justify-between w-full items-center md:w-auto">
            <a href="tg://resolve?domain=Abylay_Optobox" rel="noreferrer">
              <div className="md:border-x md:w-full md:flex md:justify-center p-4 md:p-8" >
                <TbBrandTelegram/>
              </div>
            </a>
            <a target="_blank" href="https://wa.me/77081534658?text=Добрый день! Я заинтересован в покупке Эльфбаров. Я обращаюсь из города:" rel="noreferrer">
              <div className="md:w-full md:flex md:justify-center relative p-4 md:p-8" >
                <AiOutlineWhatsApp/>
                <span className='block absolute top-0 right-0'>
                  <img src={kazakhstan} alt="" className='w-6' />
                </span>
              </div>
            </a>
            <a target="_blank" href="https://wa.me/79773067130?text=Добрый день! Я заинтересован в покупке Эльфбаров. Я обращаюсь из города:" rel="noreferrer">
              <div className="md:border-x md:w-full md:flex md:justify-center relative p-4 md:p-8" >
                <AiOutlineWhatsApp/>
                <span className='block absolute top-0 right-0'>
                  <img src={russia} alt="" className='w-6' />
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar