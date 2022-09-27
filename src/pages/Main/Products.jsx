import React from 'react'
import Card from "../../components/Card"
import cn from 'classnames'

import { Input, IconButton, Tooltip,Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'

import { useDebouncedValue } from "@mantine/hooks"

import { BiSearchAlt } from 'react-icons/bi'

import elfbar from '../../images/elfbar-logo.jpg'
import parasha from '../../service/db.json'
import { ScrollContext } from '../../App'

const tastes = [
  'banana ice', 'banana milk', 'blue razz lemonade', 'blue razz ice', 'blueberry', 
  'coffe tobacco', 'cranberry grape', 'sakura grape', 'energy', 'grape energy',
  'grape', 'kiwi passion fruit guava', 'lemon mint', 'mango peach', 'peach mango watermelon', 
  'strawberry kiwi', 'strawberry mango', 'red mojito', 'watermelon ice', 'mango', 'peach mango guava', 
  'pineapple peach mango', 'pink lemonade', 'sour apple', 'strawberry energy', 'strawberry banana', 'strawberry grape', 'watermelon'
]

function Products() {

  const {target, targetRef, ref} = React.useContext(ScrollContext)
  

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
        setSorted({puffs: 0, price: 'min', taste: 'all'})
        break
      case "max": 
        setShits(w)
        setSorted({puffs: 0, price: 'max', taste: 'all'})
        break
      default: 
        setShits([...all])
        setSorted({puffs: 0, price: 'all', taste: 'all'})
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
        setSorted({puffs: 1500, price: 'all', taste: 'all'})
        setShits(q)
        break
      case 3000: 
        setSorted({puffs: 3000, price: 'all', taste: 'all'})
        setShits(w)
        break
      case 4000: 
        setSorted({puffs: 4000, price: 'all', taste: 'all'})
        setShits(e)
        break
      case 5000: 
        setSorted({puffs: 5000, price: 'all', taste: 'all'})
        setShits(r)
        break
      default: 
        setSorted({puffs: 0, price: 'all', taste: 'all'})
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
      setSorted({puffs: 0, price: 'all', taste: name})
      return
    }
    setSorted({puffs: 0, price: 'all', taste: 'all'})
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

  const is5000 = shit?.puffs === 5000
  const is4000 = shit?.puffs === 4000
  const is3000 = shit?.puffs === 3000
  const is1500 = shit?.puffs === 1500

  return (
    <>
      <div className="bg-slate-800 p-4 lg:p-14" ref={target === 'products' ? targetRef : ref}>
        <div className="grid grid-cols-1 md:grid-cols-[65%_35%] rounded-2xl w-full bg-white shadow-lg overflow-hidden">
          <div className="flex flex-col">   
            <div className="flex flex-col md:flex-row justify-between items-center bg-white">
              <img src={elfbar} alt="" className="w-36 ml-4" />
              <div className="flex gap-8 mx-4">
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
            <div className="p-2 md:p-4">
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
              <div className="max-w-full grid auto-rows-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 overflow-y-scroll max-h-[1100px] p-2 ">
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
              <p className="text-lg md:text-xl lg:text-2xl p-4">Выберите один из товаров</p>
            </div>
          )}
          {shit?.name && (
            <Box className={`flex flex-col h-full overflow-hidden`}>
              <img 
                src={shit?.url} 
                className={cn('w-full h-full max-h-[700px]', {
                  'object-contain': is5000 || is4000 || is3000,
                  'object-cover': is1500,
                })}
                alt="" 
              />
              <div className={`relative bg-black w-full py-4 h-full`}>
                <div className="text-white font-body">
                  <div className="flex justify-between gap-x-2 items-end px-4 pb-4">
                    <div>
                      <h3 className="text-base sm:text-xl md:text-2xl">{is1500 ? `${shit.puffs} LUX` : `BC${shit.puffs}`}</h3>
                      <h3 className="uppercase font-head font-semibold text-base sm:text-xl md:text-2xl">{shit.name}</h3>
                    </div>
                    <div className="flex flex-col items-end">
                      <h3 className="text-lg sm:text-xl md:text-2xl">
                        {`${shit.priceRub}руб`}
                      </h3>
                      <h3 className="text-lg sm:text-xl md:text-2xl">
                        {`${shit?.price}тнг`}
                      </h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="italic">{is1500 ? 
                      "Минимальный заказ от 400 штук, микса разных вкусов" 
                    : "Минимальный заказ от 300 штук, микс разных вкусов"}
                    </p>
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
                  <div className="px-4 pt-4 text-slate-300">
                    <p className='text-sm'>
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