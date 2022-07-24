import React from 'react'
import Card from "../../components/Card"

import { Input, IconButton, Tooltip,Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'

import { useDebouncedValue } from "@mantine/hooks"

import { BiSearchAlt } from 'react-icons/bi'
import { IoIosArrowDropupCircle } from 'react-icons/io'

import elfbar from '../../images/elfbar-logo.jpg'
import parasha from '../../service/db.json'
import { ScrollContext } from "./Main"

const tastes = ['banana', 'blue razz', 'blueberry', 'coffe', 'cranberry grape', 'energy', 'grape', 'kiwi', 'lemon', 'mango', 'watermelon', 'strawberry', 'mojito']

function Products() {

  const {target, targetRef, ref} = React.useContext(ScrollContext)
  
  const [opened, setOpened] = React.useState(false);

  const [all, setAll] = React.useState([])
  const [shits, setShits] = React.useState([])
  const [search, setSearch] = React.useState('')
  const [shit, setShit] = React.useState({})
  
  const [debounced] = useDebouncedValue(search, 400)

  const [sorted, setSorted] = React.useState({
    price: "all",
    puffs: 0,
    taste: 'all'
  })

  const sortPrice = (name) => {
    const q = [...shits].sort((a, b) => { return b?.price - a?.price} )
    const w = [...shits].sort((a, b) => { return a?.price - b?.price} )

    switch (name) {
      case "min": 
        setShits(q)
        setSorted({...sorted, price: "min"})
        break
      case "max": 
        setShits(w)
        setSorted({...sorted, price: "max"})
        break
      default: 
        setShits([...all])
        setSorted({...sorted, price: "all"})
        break
    }
  }

  const sortSize = (name) => {
    const q = [...all].filter(a => { return a.puffs === 1500})
    const w = [...all].filter(a => { return a.puffs === 3000})
    const e = [...all].filter(a => { return a.puffs === 4000})
    const r = [...all].filter(a => { return a.puffs === 5000})
    
    switch (name) {
      case 1500: 
        setSorted({...sorted, puffs: 1500})
        setShits(q)
        break
      case 3000: 
        setSorted({...sorted, puffs: 3000})
        setShits(w)
        break
      case 4000: 
        setSorted({...sorted, puffs: 4000})
        setShits(e)
        break
      case 5000: 
        setSorted({...sorted, puffs: 5000})
        setShits(r)
        break
      default: 
        setSorted({...sorted, puffs: 0})
        setShits([...all])
        break
    }
  }

  const sortTaste = (name) => {
    if (name !== 'all') {
      const q = [...all].filter(e => {
        return e.name?.includes(name)
      })
      setShits(q)
      setSorted({...sorted, taste: name})
      return
    }
    setSorted({...sorted, taste: 'all'})
    setShits([...all])
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

  return (
    <>
      <div className="bg-slate-800 lg:h-screen p-6 lg:p-14" ref={target === 'products' ? targetRef : ref}>
        <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] rounded-2xl h-full w-full bg-white shadow-lg overflow-hidden">
          <div className="flex flex-col">   
            <div className="flex justify-between items-center bg-white">
              <img src={elfbar} alt="" className="w-36 ml-4" />
              <div className="hidden lg:flex gap-8 mr-4">
                <Menu >
                  <MenuButton className="font-body">
                    Цена
                    <span>
                      {
                        (sorted.price === "all" && ": все") ||
                        (sorted.price === "max" && ": по возрастанию") || 
                        (sorted.price === "min" && ": по убыванию")
                      }
                    </span>
                  </MenuButton>
                  <MenuList className="font-body">
                    <MenuItem onClick={e => sortPrice("all")} >Все</MenuItem>
                    <MenuItem onClick={e => sortPrice("min")} >По убыванию</MenuItem>
                    <MenuItem onClick={e => sortPrice("max")} >По возрастанию</MenuItem>
                  </MenuList>
                </Menu>
                <Menu>
                  <MenuButton className="font-body">
                    Обьем
                    <span>
                      {
                        (sorted.puffs === 0 && `: все`) ||
                        (sorted.puffs === 1500 && `: 1500`) || 
                        (sorted.puffs === 3000 && `: 3000`) || 
                        (sorted.puffs === 4000 && `: 4000`) || 
                        (sorted.puffs === 5000 && `: 5000`)
                      }
                    </span>
                  </MenuButton>
                  <MenuList className="font-body">
                    <MenuItem onClick={e => sortSize(0)} >Все</MenuItem>
                    <MenuItem onClick={e => sortSize(1500)} >1500</MenuItem>
                    <MenuItem onClick={e => sortSize(3000)} >3000</MenuItem>
                    <MenuItem onClick={e => sortSize(4000)} >4000</MenuItem>
                    <MenuItem onClick={e => sortSize(5000)} >5000</MenuItem>
                  </MenuList>
                </Menu>
                <Menu>
                  <MenuButton className="font-body">
                    Вкус
                    <span>
                      {
                        (sorted.taste === "all" && `: все`) ||
                        (sorted.taste !== "all" && `: ${sorted.taste}`) 
                      }
                    </span>
                  </MenuButton>
                  <MenuList className="font-body" overflow={"scroll"} h={"64"}>
                    <MenuItem onClick={e => sortTaste('all')} >Все</MenuItem>
                    {tastes.sort().map((e, i) => {
                      return (
                        <MenuItem key={i} onClick={() => sortTaste(e)} >{e}</MenuItem>
                      )
                    })}
                  </MenuList>
                </Menu>
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
                    <p className="italic">{shit.puffs === 1500 ? `"Минимальный заказ от 400 штук"` : `"Минимальный заказ от 300 штук"`}</p>
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