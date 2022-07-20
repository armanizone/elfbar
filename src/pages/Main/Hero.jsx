import React from 'react'
import { Box, Button, Heading, Text } from "@chakra-ui/react"
import Navbar from "../../modules/Navbar"

function Hero() {
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
                <div className="">
                  <img src="" alt="elfbar" />
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