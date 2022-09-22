import React from 'react'
import { Box, Button, Image, keyframes, usePrefersReducedMotion } from "@chakra-ui/react"


import parasha1 from '../../images/11.png'
import parasha2 from '../../images/22.png'
import parasha3 from '../../images/33.png'
import smoke from '../../images/smoke_wide.png'
import { ScrollContext } from '../../App'


const labels = [
  {
    label: '1500LUX', 
    wrapper: '10',
    box: '400',
    carton: '56.2*28*28.5',
    weight: '19.3',
    deliveryPrice: '3$/1'
  },
  {
    label: 'BC3000', 
    wrapper: '10',
    box: '300',
    carton: '56.2*28*28.5',
    weight: '18.5',
    deliveryPrice: '3$/1'
  },
  {
    label: 'BC4000', 
    wrapper: '10',
    box: '300',
    carton: '56.2*28*28.5',
    weight: '18.9',
    deliveryPrice: '3$/1'
  },
  {
    label: 'BC5000', 
    wrapper: '10',
    box: '400',
    carton: '56.2*28*28.5',
    weight: '19.5',
    deliveryPrice: '3$/1'
  },
]

const deliveries = [
  {
    label: 'Ориентировочная стоимость доставки',
    adress: 'Россия: г. Москва',
    type: '1500LUX/BC3000/4000/5000',
    box: '300-400',
    delivery: '65$'
  },
  {
    label: 'Ориентировочная стоимость доставки',
    adress: 'Казахстан: г. Нур-Султан',
    type: '1500LUX/BC3000/4000/5000',
    box: '300-400',
    delivery: '58$'
  },
  {
    label: 'Ориентировочная стоимость доставки',
    adress: 'Казахстан: г. Алма-ата',
    type: '1500LUX/BC3000/4000/5000',
    box: '300-400',
    delivery: '55$'
  },
]


function AboutUs() {

  const {target, targetRef, ref, handleScroll} = React.useContext(ScrollContext)

  const trans = keyframes` 
  0% 
    {
      transform: translate(0px, 0px)
    }
  50% 
    { 
      transform: translate(10px, 15px); 
    }
  100%
    { 
      transform: translate(0px); 
    }
`

const prefersReducedMotion = usePrefersReducedMotion()

const animation1 = prefersReducedMotion ? undefined : `${trans} infinite 3s ease-in-out`
const animation2 = prefersReducedMotion ? undefined : `${trans} infinite 3s ease-in-out 0.66s`
const animation3 = prefersReducedMotion ? undefined : `${trans} infinite 3s ease-in-out 1.32s`

  return (
    <Box
      className="w-full pt-2 md:pt-8"
      ref={target === 'about' ? targetRef : ref}
    >
        <div className="flex flex-col text-white h-full justify-between">
          <Box 
            className="flex flex-col relative"
          >
            <div className="container">
              <Box
                className='flex flex-col h-full lg:flex-row justify-between'
              >
                <div className="max-w-md flex flex-col gap-y-8 md:py-8">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide font-head">
                    Оригинальные поды напрямую с завода
                  </h2>
                  <p className="text-slate-400 font-body">
                    Оптовая продажа электронных сигарет, доступно по всему СНГ- во все города, цена указана без учета доставки (уточняйте у оператора).
                    Далее указаны характеристики товара.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button textTransform={"uppercase"} variant="my" onClick={e => handleScroll('order')} >Узнать подробнее</Button>
                  </div>
                </div>
                <Box 
                  className='flex w-full max-w-4xl relative h-[55vmin] sm:[50vmin] lg:h-auto'
                  bgImage={smoke}
                  bgRepeat={"no-repeat"}
                  bgSize={"contain"}
                  bgPosition={"center"}
                >
                  <Image animation={animation1} src={parasha1} alt="" className='absolute top-[20%] md:top-0' />
                  <Image animation={animation2} src={parasha2} alt="" className='absolute top-[20%] md:top-0' />
                  <Image animation={animation3} src={parasha3} alt="" className='absolute top-[20%] md:top-0' /> 
                </Box>
              </Box>
            </div>
          </Box>
          <div className="md:py-5 bg-gradient-to-b from-slate-800 to-teal-400">
            <div className="container mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 justify-between items-center">
                {labels.map((e, i) => {
                  return (
                    <div className="flex flex-col gap-y-4 font-body border p-4 rounded-lg" key={i}>
                      <span className="font-semibold text-2xl font-mont">{e.label}</span>
                      <ul className='flex flex-col gap-y-2'>
                        <li className='text-lg'>
                          <span>Упаковка:</span>
                          <span> {e.wrapper}шт</span>
                        </li>
                        <li className='text-lg'>
                          <span>Коробка: </span>
                          <span>{e.box}шт</span>
                        </li>
                        <li className='text-lg'>
                          <span>Картон:</span>
                          <span> {e.carton}см</span>
                        </li>
                        <li className='text-lg'>
                          <span>Общий вес: </span>
                          <span> {e.weight}кг</span>
                        </li>
                        <li className='text-lg'>
                          <span>Стоимость доставки: </span>
                          <span> {e.deliveryPrice}кг</span>
                        </li>
                      </ul>
                    </div>
                  )
                })}
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 justify-between items-center mt-4 md:mt-8'>
                {deliveries.map((e, i) => {
                  return (
                    <div className='border p-4 rounded-lg' key={i} >
                      <span className='font-semibold text-xl block mb-4 font-mont'>{e.label}</span>
                      <ul className='flex flex-col gap-y-2 font-body'>
                        <li className='text-xl'>
                          <span>{e.adress}</span>
                        </li>
                        <li className='text-xl'>
                          <span>Вид: </span>
                          <span>{e.type}</span>
                        </li>
                        <li className='text-xl'>
                          <span>Коробка: </span>
                          <span>{e.box}шт</span>
                        </li>
                        <li className='text-xl'>
                          <span>Доставка: от </span>
                          <span>{e.delivery}</span>
                        </li>
                      </ul>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
    </Box>
  )
}

export default AboutUs