import React from 'react'
import { ScrollContext } from '../App'

import logo from '../images/logo.png'

function Footer() {

  const { handleScroll } = React.useContext(ScrollContext)

  return (
    <footer className="p-4 shadow md:px-6 md:py-8 bg-gray-900">
      <div className="container">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span onClick={e => handleScroll("hero")} className="flex items-center mb-4 sm:mb-0 cursor-pointer">
            <img src={logo} className="mr-3 h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">ElfBar.shop</span>
          </span>
          <ul className="flex flex-wrap items-center mb-6 text-sm sm:mb-0 text-gray-400">
            <li>
              <span onClick={e => handleScroll('products')}  className="cursor-pointer mr-4 hover:underline md:mr-6 ">Продукты</span>
            </li>
            <li>
              <span onClick={e => handleScroll('about')}  className="cursor-pointer mr-4 hover:underline md:mr-6">Обзор</span>
            </li>
            <li>
              <span onClick={e => handleScroll('order')}  className="cursor-pointer mr-4 hover:underline md:mr-6 ">Контакты</span>
            </li>
          </ul>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
        <span className="block text-sm sm:text-center text-gray-400">© 2022 <span>Elfbar.shop</span>. All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer