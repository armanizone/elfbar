import React from 'react'
import { Button, IconButton } from '@chakra-ui/react'

import { BsPlusLg } from 'react-icons/bs'

function Card({shit, handleAddToCart, handleShow}) {
  return (
    <div className="w-full h-full" >
      <img src={shit?.thumbnail} loading="lazy" className="object-contain h-52 w-96 mx-auto cursor-pointer hover:scale-95 transition-all duration-200" onClick={e => handleShow(shit)} />
      <div className="flex justify-center">
        <IconButton variant={"my"} textColor={"white"}  icon={<BsPlusLg/>} onClick={e => handleAddToCart(shit)} />
      </div>
      <div className="p-4 rounded-b-xl shadow-xl bg-white text-center">
        <p className="text-base font-semibold text-center uppercase">{shit?.name}</p>
        <p>{shit?.puffs}</p>
        <p>{`${shit?.price} T - ${shit.priceRub} P`}</p>
      </div>
    </div>
  )
}

export default Card