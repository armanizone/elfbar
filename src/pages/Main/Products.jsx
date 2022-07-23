import React from 'react'
import axios from "axios"
import Card from "../../components/Card"

import { Input,IconButton,Button,Tooltip,Box } from '@chakra-ui/react'

import { useDebouncedValue } from "@mantine/hooks"

import { BiSearchAlt } from 'react-icons/bi'
import { IoIosArrowDropupCircle } from 'react-icons/io'

import elfbar from '../../images/elfbar-logo.jpg'
import parasha from '../../service/db.json'
import { ScrollContext } from "./Main"

function Products() {

  const [opened, setOpened] = React.useState(false);

  const {targetRef} = React.useContext(ScrollContext)

  const [all, setAll] = React.useState([])
  const [shits, setShits] = React.useState([])
  const [search, setSearch] = React.useState('')
  const [shit, setShit] = React.useState({})
  
  const [debounced] = useDebouncedValue(search, 400)

  const [sorted, setSorted] = React.useState({
    price: "all",
    puffs: 0,
    taste: ''
  })


  const sortPrice = () => {
    const q = [...shits].sort((a, b) => { return b?.price - a?.price} )
    const w = [...shits].sort((a, b) => { return a?.price - b?.price} )

    switch (sorted.price) {
      case "all": 
        setShits(q)
        setSorted({...sorted, price: "min"})
        break
      case "min": 
        setShits(w)
        setSorted({...sorted, price: "max"})
        break
      case "max": 
        setShits([...all])
        setSorted({...sorted, price: "all"})
        break
    }
  }

  const sortSize = () => {
    const q = [...all].filter(a => { return a.puffs === 1500})
    const w = [...all].filter(a => { return a.puffs === 3000})
    const e = [...all].filter(a => { return a.puffs === 4000})
    const r = [...all].filter(a => { return a.puffs === 5000})
    
    switch (sorted.puffs) {
      case 0: 
        setSorted({...sorted, puffs: 1500})
        setShits(q)
        break
      case 1500: 
        setSorted({...sorted, puffs: 3000})
        setShits(w)
        break
      case 3000: 
        setSorted({...sorted, puffs: 4000})
        setShits(e)
        break
      case 4000: 
        setSorted({...sorted, puffs: 5000})
        setShits(r)
        break
      case 5000: 
        setSorted({...sorted, puffs: 0})
        setShits([...all])
        break
    }
  }

  const searched = shits.filter(e => {
    return e.name?.toLowerCase().includes(debounced.toLowerCase())
  })

  const handleAddToCart = e => {
    setShit(e)
  }

  const handleShow = e => {
    setShit(e)
  }

  const getShits = async e => {
    const array = []
    const huinya = []
    huinya.push(parasha.shits)
    for (let i = 0; i < 3; i++) {
      array.push([...parasha.bigshits[i].shits])
    }
    setAll([...huinya[0], ...array.flat()].sort((a, b) => a.name.localeCompare(b.name)))
    setShits([...huinya[0], ...array.flat()].sort((a, b) => a.name.localeCompare(b.name)))
  }

  React.useEffect(e => {
    getShits()
  }, [])

  const is5000 = shit.puffs === 5000

  const priceSort = (sorted.price === "max" || sorted.price === "min") && "Цена:"
  const sizeSort = (sorted.puffs === 1500 && "1500" || sorted.puffs === 3000 || sorted.puffs === 4000 || sorted.puffs === 5000) && "Обьём:"

  return (
    <>
      <div className="bg-slate-800 lg:h-screen p-6 lg:p-14" ref={targetRef}>
        <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] rounded-2xl h-full w-full bg-white shadow-lg overflow-hidden">
          <div className="flex flex-col">   
            <div className="flex justify-between items-center bg-white">
              <img src={elfbar} alt="" className="w-36 ml-4" />
              <div className="hidden lg:flex gap-8 mr-4">
                <Button variant={"link"} onClick={sortPrice} disabled={sizeSort} >ЦЕНА</Button>
                <Button variant={"link"} onClick={sortSize} >ОБЬЕМ</Button>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between h-16">
                <div className="flex max-w-xs">
                  <Input bgColor={"white"} placeholder="Поиск по названию..." value={search} onChange={e => setSearch(e.target.value)} />
                  <Tooltip label="Поиск">
                    <IconButton 
                      icon={<BiSearchAlt/>} 
                      colorScheme={"teal"} 
                      size={"md"} 
                      fontSize={"xl"} 
                      variant="my" 
                      borderRadius={"md"} 
                      textColor="white" 
                    />
                  </Tooltip>
                </div>
                <div className="flex flex-col items-end font-body">
                  <div className="flex gap-2 text-lg">
                    <span>
                      {priceSort}
                    </span>
                    <span> 
                      {(sorted.price === "max" && "по возрастанию") || (sorted.price === "min" && "по убыванию")}
                    </span>
                  </div>
                  <div className="flex gap-2 text-lg">
                    <span>{sizeSort}</span>
                    <span>
                      {(sorted.puffs === 1500 && 1500) || (sorted.puffs === 3000 && 3000) || (sorted.puffs === 4000 && 4000) || (sorted.puffs === 5000 && 5000)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="max-w-full grid auto-rows-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 overflow-y-scroll max-h-[610px] p-2 ">
                {searched.length !== 0 && searched.map((e, i) => {
                  return <Card key={i} shit={e} handleAddToCart={handleAddToCart} handleShow={handleShow} />
                })}
                {searched.length === 0 && (
                  <div>Ничего не найдено</div>
                )}
              </div>
            </div>
          </div>
          {!shit?.name && (
            <div className="bg-teal-400 flex justify-center items-center text-white">
              <p className="text-xl md:text-2xl lg:text-3xl">Выберите один из товаров</p>
            </div>
          )}
          {shit?.name && (
            <Box className={`${is5000 ? "bg-white" : "bg-teal-400"} grid grid-rows-[60%_40%] lg:h-screen overflow-hidden`}>
              <Box 
                className="flex flex-col gap-8 p-4"
                bgImage={shit?.url}
                bgSize={`${is5000 ? "contain" : "cover"}`}
                bgRepeat={"no-repeat"}
                bgPosition={`${is5000 ? "center" : "bottom"}`}
              >
              </Box>
              {/* <BottomSheet onOpen={open} isOpen={opened} onClose={close} onToggle={onToggle} /> */}
              <div className={`${opened ? "-translate-y-1/2" : "translate-y-0"} relative transition-all duration-300 ease-in-out h-screen bg-black w-full`}>
                <div onClick={e => setOpened(q => !q)} className="flex justify-center my-4">
                  <span className={`${opened ? "rotate-180" : "rotate-0"} transition-all duration-200 text-4xl animate-pulse text-white`}>
                    <IoIosArrowDropupCircle/>
                  </span>
                </div>
                <div className="text-white font-body">
                  <div className="flex justify-between px-4 pb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl">{shit.puffs === 1500 ? `${shit.puffs} LUX` : `BC${shit.puffs}`}</h3>
                      <h3 className="uppercase font-head font-semibold text-xl md:text-2xl">{shit.name}</h3>
                    </div>
                    <div className="flex flex-col items-end">
                      <h3 className="text-xl md:text-2xl">
                        {`${shit.priceRub}руб`}
                      </h3>
                      <h3 className="text-xl md:text-2xl">
                        {`${shit?.price}тнг`}
                      </h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="italic">{shit.puffs === 1500 ? `"Минимальный закказ от 400 штук"` : `"Минимальный заказ от 300 штук"`}</p>
                  </div>
                  <h3 className="text-xl ml-4 mb-4">Характеристики</h3>
                  <ul className="">
                    <li className="flex gap-4 border-t p-4">
                      <span>Размер изделия:</span>
                      <span>{shit.size} мм</span>
                    </li>
                    <li className="flex gap-4 border-t p-4">
                      <span>Никотин:</span>
                      <span>{shit.nicotion}</span>
                    </li>
                    <li className="flex gap-4 border-t p-4">
                      <span>Батарея (ёмкость):</span>
                      <span>{shit.battery} мАч</span>
                    </li>
                    <li className="flex gap-4 border-t p-4">
                      <span>Картридж (ёмкость):</span>
                      <span>{shit.cartridge} мл</span>
                    </li>
                    <li className="flex gap-4 border-t p-4">
                      <span>Ресурс картриджа, затяжек:</span>
                      <span>{shit.puffs}</span>
                    </li>
                  </ul>
                  <div className="p-4 text-slate-300">
                    <p>
                      (Никотин вызывает зависимость, а также вредит вашему здоровью)
                    </p>
                  </div>
                </div>
              </div>
            </Box>
          )}
        </div>
      </div>
    </>
  )
}

export default Products