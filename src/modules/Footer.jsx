import React from 'react'
import { ScrollContext } from '../App'

function Footer() {

  const { handleScroll } = React.useContext(ScrollContext)

  return (
    <footer className="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-gray-900">
      <div className="container">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
            <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
          </a>
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
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer