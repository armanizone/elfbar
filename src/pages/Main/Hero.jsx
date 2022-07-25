import React from 'react'
import { Box, Button, Image, keyframes, usePrefersReducedMotion } from "@chakra-ui/react"
import Navbar from "../../modules/Navbar"

import parasha1 from '../../images/1.png'
import parasha2 from '../../images/2.png'
import parasha3 from '../../images/3.png'
import parasha4 from '../../images/4.png'
import smoke from '../../images/smoke.png'

function Hero() {


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
      <div className="relative h-full lg:h-screen bg-teal-400 z-20">
        <div className="absolute shadow-lg h-full w-full clip-path bg-slate-800 -z-10">
        </div>
        <div className="h-full p-6 lg:p-14">
          <div className="relative w-full h-full hero-shadow bg-teal-400 z-20 rounded-2xl overflow-hidden">
            <div className="absolute clip-path-inner bg-slate-700 h-full w-full top-0 left-0 -z-10"></div>
            <Navbar/>
            <div className="container">
              <div className='flex flex-col md:flex-row justify-between items-center text-white'>
                <div className="mt-8 z-10 max-w-md relative">
                  <div className="text-5xl md:text-6xl lg:text-8xl mb-8 font-bold" >
                    ELFBAR LUX
                  </div>
                  <div className="leading-7 tracking-wider mb-16">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis consequatur, 
                    ipsam itaque minima voluptas dolor! Possimus pariatur cupiditate
                  </div>
                  <Button 
                    variant={"my"}
                    bg={"gray.700"}
                    px={"10"}
                    py={"7"}
                    textTransform={"uppercase"}
                    letterSpacing={"wider"}
                    className="font-head"
                  >
                    Подробнее
                  </Button>
                </div>
                <Box 
                  className="max-w-[650px] w-full pt-36 pb-48 md:h-[650px] relative z-50"
                >
                  <div className='z-20'>
                    <Box bgImage={smoke} bgSize={"contain"} bgPosition={"center"} bgRepeat={"no-repeat"} className="z-20 absolute top-0 right-0 w-full h-full"></Box>
                  </div>
                  <div className='absolute top-0 left-0 h-full z-10'>
                    <Image animation={animation1} src={parasha1} alt="elfbar 5000 red" className='max-w-full '/>
                  </div>
                  <div className='absolute top-0 left-0 h-full z-20'>
                    <Image animation={animation2} src={parasha3} alt="elfbar 1500 blue" className='max-w-full '/>
                  </div>
                  <div className='absolute top-0 left-0 h-full z-20'>
                    <Image animation={animation4} src={parasha4} alt="elfbar 5000 blue" className='max-w-full '/> 
                  </div>
                  <div className='absolute top-0 left-0 h-full z-10'>
                    <Image animation={animation3} src={parasha2} alt="elfbar 1500 red" className='max-w-full '/>
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