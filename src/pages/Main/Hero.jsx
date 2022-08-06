import React from 'react'
import { Box, Button, Image, keyframes, usePrefersReducedMotion } from "@chakra-ui/react"
import Navbar from "../../modules/Navbar"

import parasha1 from '../../images/1.png'
import parasha2 from '../../images/2.png'
import parasha3 from '../../images/3.png'
import parasha4 from '../../images/4.png'
import smoke from '../../images/smoke.png'
import { ScrollContext } from '../../App'

function Hero() {

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
  const animation4 = prefersReducedMotion ? undefined : `${trans} infinite 3s ease-in-out 1.98s`

  return (
    <>
      <div className="relative bg-teal-400 z-20" ref={target === "hero" ? targetRef : ref}>
        <div className="absolute shadow-lg h-full w-full clip-path bg-slate-800 -z-10">
        </div>
        <div className="h-full p-4 md:p-6 lg:-8 xl:p-14">
          <div className="relative w-full h-full hero-shadow bg-teal-400 z-20 rounded-2xl ">
            <div className="absolute clip-path-inner bg-slate-700 h-full w-full top-0 left-0 -z-10"></div>
            <Navbar/>
            <div className="container">
              <div className='py-8 xl:py-14 h-full flex flex-col md:flex-row justify-between items-start text-white md:px-4'>
                <div className="z-10 relative pb-14 sm:pb-0">
                  <div className="text-[10vmin] xl:mb-4 font-bold font-hero" >
                    ELFBAR SHOP
                  </div>
                  <div className="leading-7 tracking-wider mb-6 text-lg font-semibold max-w-lg">
                    Уже сегодня! Приобретайте самые знаменитые электронные сигареты. Удобный дизайн и разнообразие видов. Только лучшие поды 1500LUX &BC-3000-4000-5000 всех вкусов. Доступно для всех стран СНГ.
                  </div>
                  <Button 
                    variant={"my"}
                    bg={"gray.700"}
                    px={"10"}
                    py={"7"}
                    textTransform={"uppercase"}
                    letterSpacing={"wider"}
                    className="font-head w-fit"
                    onClick={e => handleScroll('about')}
                  >
                    Подробнее
                  </Button>
                  <div className="flex flex-col font-hero text-[5vmin] xl:mb-6 font-bold mt-8" >
                    <p className='mb-2'>
                      1500 LUX 
                    </p>
                    <p className='font-mont'>BC SERIES 3000/4000/5000</p>
                  </div>
                </div>
                <Box 
                  className="max-w-xl w-full h-[90vmin] md:h-[40vmin] relative z-50"
                >
                  <div className='z-20'>
                    <Box  
                      className="z-20 absolute top-0 w-full h-full"
                      bgImage={smoke} bgSize={"contain"} bgPosition={{lg: 'center', base: 'center'}} bgRepeat={"no-repeat"}
                    >
                    </Box>
                  </div>
                  <div className='absolute top-0 z-10'>
                    <Image animation={animation1} src={parasha1} alt="elfbar 5000 red" className=''/>
                  </div>
                  <div className='absolute top-0 z-20'>
                    <Image animation={animation2} src={parasha3} alt="elfbar 1500 blue" className=''/>
                  </div>
                  <div className='absolute top-0 z-50'>
                    <Image animation={animation4} src={parasha4} alt="elfbar 5000 blue" className=''/> 
                  </div>
                  <div className='absolute top-0 z-10'>
                    <Image animation={animation3} src={parasha2} alt="elfbar 1500 red" className=''/>
                  </div>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Hero