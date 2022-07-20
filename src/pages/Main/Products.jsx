import React from 'react'
import { 
  Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalHeader, 
  ModalFooter, 
  ModalBody, 
  ModalCloseButton, 
  Input, 
  IconButton, 
  Button, 
  Tooltip, 
  useDisclosure, 
  Box, 
  NumberInput, 
  NumberInputField,  
  NumberInputStepper, 
  NumberIncrementStepper, 
  NumberDecrementStepper, 
  Badge} from '@chakra-ui/react'

import Card from "../../components/Card"

import { BiSearchAlt } from 'react-icons/bi'
import { BsFillCartFill } from 'react-icons/bs'

import elfbar from '../../images/elfbar-logo.jpg'
import axios from "axios"
import { useDebouncedValue } from "@mantine/hooks"

function Products() {

  const [opened, setOpened] = React.useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure()

  const [shits, setShits] = React.useState([])
  const [sorted, setSorted] = React.useState([])
  const [search, setSearch] = React.useState('')
  const [debounced] = useDebouncedValue(search, 400)
  const [shit, setShit] = React.useState({})
  const [cart, setCart] = React.useState([])

  const searched = sorted.filter(e => {
    return e.name?.toLowerCase().includes(debounced.toLowerCase())
  })

  const handleAddToCart = e => {
    setShit(e)
    setCart([...cart, e])
  }

  const handleShow = e => {
    setShit(e)
  }

  const getShits = async e => {
    const array = []
    const parasha = []
    await axios.get("http://localhost:3001/shits")
    .then(e => {
      parasha.push(e.data)
    })
    .catch(e => {
      console.log(e);
    })
    await axios.get("http://localhost:3001/bigshits")
    .then(e => {
      for (let i = 0; i < 3; i++) {
        array.push([...e.data[i].shits])
      }
    })
    .catch(e => {
      console.log(e);
    })
    setShits([...parasha[0], ...array.flat()])
    setSorted([...parasha[0], ...array.flat()].sort((a, b) => a.name.localeCompare(b.name)))
  }

  React.useEffect(e => {
    getShits()
  }, [])

  const [count, setCount] = React.useState({})

  React.useEffect(e => {
    const coun = {};
    
    cart.forEach(e => {
      coun[`${e.name} - ${e.puffs}`] = (coun[`${e.name} - ${e.puffs}`] || 0) + 1;
    })

    setCount({...count, ...coun})
  }, [cart])

  const is5000 = shit.puffs === 5000

  return (
    <>
      <div className="bg-slate-800 lg:h-screen p-6 lg:p-14">
        <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] rounded-2xl h-full w-full bg-white shadow-lg overflow-hidden">
          <div className="flex flex-col">   
            <div className="flex justify-between items-center bg-white">
              <img src={elfbar} alt="" className="w-36 ml-4" />
              <div className="hidden lg:flex gap-8 mr-16">
                <Button variant={"link"}>ЦЕНА</Button>
                <Button variant={"link"}>ОБЬЕМ</Button>
                <Button variant={"link"}>ВКУС</Button>
              </div>
            </div>
            <div className="p-4">
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
              <div className="max-w-full grid auto-rows-auto grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 overflow-y-scroll max-h-[610px] p-2 ">
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
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <Button variant={"my"} textColor={"white"} onClick={e => handleAddToCart(shit)} >
                      Добавить в корзину
                    </Button>
                    <Button 
                      variant={"ghost"} 
                      onClick={e => setOpened(q => !q)} 
                      textColor={shit.puffs > 1500 ? "black" : "white"} 
                      _hover={{bg: "teal.400", textColor: "white"}} 
                      borderRadius={"full"} 
                    >
                      Подробнее
                    </Button>
                  </div>
                  <Tooltip label="Корзина">
                    <Badge>
                      <IconButton 
                        icon={<BsFillCartFill/>} 
                        size={"md"} 
                        fontSize={"xl"} 
                        variant="my" 
                        textColor={"white"} 
                        onClick={e => onOpen()}
                      />
                    </Badge>
                  </Tooltip>
                </div>
              </Box>
              {/* <BottomSheet onOpen={open} isOpen={opened} onClose={close} onToggle={onToggle} /> */}
              <div className={`${opened ? "-translate-y-1/2" : "translate-y-0"} transition-all duration-300 ease-in-out h-screen bg-black w-full`}>
                <div>
                <NumberInput textColor={"white"} >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                </div>
                <div className="text-white">
                  <h2 className="uppercase font-head font-semibold text-2xl mb-6 ml-4 mt-4">{shit.name}</h2>
                  <h3 className="text-xl ml-4 mb-4">Характеристики</h3>
                  <ul className="">
                    <li className="flex gap-4 border-t p-4">
                      <span>Размер изделия:</span>
                      <span>{shit.size} мм</span>
                    </li>
                    <li className="flex gap-4 border-t p-4">
                      <span>Никотин:</span>
                      <span>{shit.nicotion}:</span>
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
                </div>
              </div>
            </Box>
          )}
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="2xl"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Корзина</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>
              {cart.map((e, i) => {
                return (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-x-4"> 
                      <img src={e.thumbnail} alt="" className="w-24" />
                      <div>
                        <p className="font-semibold uppercase font-head">{e.name}</p>
                        <p >{e.puffs}</p>
                      </div>
                    </div>
                    <div>
                      <p className="flex justify-end gap-4">
                        <span>Колво:</span>
                        <span>300</span>
                      </p>
                      <p className="flex justify-end gap-4">
                        <span>Цена:</span>
                        <span>3000</span>
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='teal' mr={3} onClick={onClose}>
              Закрыть
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

// function BottomSheet({ isOpen, onClose, onOpen, onToggle }) {
//   const prevIsOpen = usePrevious(isOpen);
//   const controls = useAnimation();


//   function onDragEnd(event, info) {
//     const shouldClose =
//       info.velocity.y > 20 || (info.velocity.y >= 0 && info.point.y > 45);
//     if (shouldClose) {
//       controls.start("hidden");
//       onClose();
//     } else {
//       controls.start("visible");
//       onOpen();
//     }
//   }

//   React.useEffect(() => {
//     if (prevIsOpen && !isOpen) {
//       controls.start("hidden");
//     } else if (!prevIsOpen && isOpen) {
//       controls.start("visible");
//     }
//   }, [controls, isOpen, prevIsOpen]);


//   return (
//     <motion.div
//       drag="y"
//       onDragEnd={onDragEnd}
//       initial="hidden"
//       animate={controls}
//       transition={{
//         type: "spring",
//         damping: 20,
//         stiffness: 400
//       }}
//       variants={{
//         visible: { y: '-50%' },
//         hidden: { y: 0 }
//       }}
//       dragConstraints={{ top: 0}}
//       dragElastic={0.8}
//       className="relative bg-black h-screen w-full"
//     >
//       <motion.div
//         className={`w-24 h-2 bg-white absolute left-1/2  -translate-x-1/2 -top-5 rounded-full cursor-pointer`}
//       >  
//       </motion.div>
//     </motion.div>
//   );
// }

// function usePrevious(value) {
//   const previousValueRef = React.useRef();

//   React.useEffect(() => {
//     previousValueRef.current = value;
//   }, [value]);

//   return previousValueRef.current;
// }

export default Products