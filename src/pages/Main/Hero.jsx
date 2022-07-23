import React from 'react'
import { Button, Image, keyframes, usePrefersReducedMotion } from "@chakra-ui/react"
import Navbar from "../../modules/Navbar"

import parasha1 from '../../images/1.png'
import parasha2 from '../../images/2.png'
import parasha3 from '../../images/3.png'
import parasha4 from '../../images/4.png'
import parasha5 from '../../images/5.png'
import { motion } from "framer-motion"

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

  const firstVariants = {

  }


  return (
    <>
      <div className="relative h-screen bg-teal-400 z-20">
        <div className="absolute shadow-lg h-full w-full clip-path bg-slate-800 -z-10">
        </div>
        <div className="h-full p-6 lg:p-14">
          <div className="relative w-full h-full hero-shadow bg-teal-400 z-20 rounded-2xl overflow-hidden">
            <div className="absolute clip-path-inner bg-slate-700 h-full w-full top-0 left-0 -z-10"></div>
            <Navbar/>
            <div className="grid place-items-center h-full">
              <div className="container flex flex-col md:flex-row justify-between items-center gap-x-16 text-white">
                <div className=" z-10 max-w-md">
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
                <div className="w-full h-2 relative">
                  <Image animation={animation1}src={parasha1} alt="elfbar" className="absolute right-0 -bottom-36 animate-spin" />
                  <Image animation={animation2}  src={parasha2} alt="elfbar" className="absolute right-0 -bottom-36"  />
                  <Image animation={animation3}  src={parasha4} alt="elfbar" className="absolute right-0 -bottom-36"  />
                  <Image animation={animation4} src={parasha5} alt="elfbar" className="absolute right-0 -bottom-36"  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Hero