import React from 'react'


function Card({shit, handleShow}) {
  return (
    <div className="w-full h-full" >
      <img src={shit?.thumbnail} loading="lazy" className="object-contain h-52 w-96 mx-auto cursor-pointer hover:scale-95 transition-all duration-200" onClick={e => handleShow(shit)} alt=" " />
      <div className="p-4 rounded-b-xl shadow-md bg-white text-center font-body">
        <p className="text-base font-semibold text-center uppercase text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-pink-500">
          {shit.name}
        </p>
        <p className="text-sm text-slate-500">
          {shit?.puffs === 1500 ? `${shit.puffs} LUX` : `BC${shit.puffs} `}
        </p>
        <p className="text-xl">
          {`${shit?.price}тнг - ${shit.priceRub}руб`}
        </p>
      </div>
    </div>
  )
}

export default Card