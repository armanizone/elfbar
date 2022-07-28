import React from 'react'
import { flushSync } from 'react-dom'
import { useNavigate } from 'react-router'
import { ScrollContext } from '../App'

import logo from '../images/logo.png'

function Footer() {

  const { handleScroll } = React.useContext(ScrollContext)

  const [clicked, setClicked] = React.useState(0)

  const navigation = useNavigate()

  const shit = e => {
    flushSync(e => {
      setClicked(q => q + 1)
    })
    if (clicked === 10) {
      navigation('/bid')
      setClicked(0)
    }
  }

  return (
    <footer className="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-gray-900">
      <div className="container">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span onClick={e => handleScroll("hero")} className="flex items-center mb-4 sm:mb-0 cursor-pointer">
            <img src={logo} className="mr-3 h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Elfbar</span>
          </span>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
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
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <span onClick={shit} >Elfbar.shop</span>. All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer