import React from 'react'
import { Box, Button } from "@chakra-ui/react"

import smoke from '../../images/smoke_wide.png'
import { ScrollContext } from "./Main"


const labels = [
  {
    label: 'Be productive', 
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis praesentium
    ipsum voluptatum nesciunt rem quas. Consequuntur deleniti distinctio voluptatibus
    reprehenderit, non eveniet nobis perspiciatis! Suscipit asperiores commodi molestiae
    dolor id quas saepe autem nesciunt reiciendis tenetur quae maiores recusandae rerum
    sunt expedita optio quibusdam minus, pariatur quisquam, ad libero accusamus.`
  },
  {
    label: 'Be productive', 
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis praesentium
    ipsum voluptatum nesciunt rem quas. Consequuntur deleniti distinctio voluptatibus
    reprehenderit, non eveniet nobis perspiciatis! Suscipit asperiores commodi molestiae
    dolor id quas saepe autem nesciunt reiciendis tenetur quae maiores recusandae rerum
    sunt expedita optio quibusdam minus, pariatur quisquam, ad libero accusamus.`
  },
  {
    label: 'Be productive', 
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis praesentium
    ipsum voluptatum nesciunt rem quas. Consequuntur deleniti distinctio voluptatibus
    reprehenderit, non eveniet nobis perspiciatis! Suscipit asperiores commodi molestiae
    dolor id quas saepe autem nesciunt reiciendis tenetur quae maiores recusandae rerum
    sunt expedita optio quibusdam minus, pariatur quisquam, ad libero accusamus.`
  },
  {
    label: 'Be productive', 
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis praesentium
    ipsum voluptatum nesciunt rem quas. Consequuntur deleniti distinctio voluptatibus
    reprehenderit, non eveniet nobis perspiciatis! Suscipit asperiores commodi molestiae
    dolor id quas saepe autem nesciunt reiciendis tenetur quae maiores recusandae rerum
    sunt expedita optio quibusdam minus, pariatur quisquam, ad libero accusamus.`
  },
  {
    label: 'Be productive', 
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis praesentium
    ipsum voluptatum nesciunt rem quas. Consequuntur deleniti distinctio voluptatibus
    reprehenderit, non eveniet nobis perspiciatis! Suscipit asperiores commodi molestiae
    dolor id quas saepe autem nesciunt reiciendis tenetur quae maiores recusandae rerum
    sunt expedita optio quibusdam minus, pariatur quisquam, ad libero accusamus.`
  },
  {
    label: 'Be productive', 
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis praesentium
    ipsum voluptatum nesciunt rem quas. Consequuntur deleniti distinctio voluptatibus
    reprehenderit, non eveniet nobis perspiciatis! Suscipit asperiores commodi molestiae
    dolor id quas saepe autem nesciunt reiciendis tenetur quae maiores recusandae rerum
    sunt expedita optio quibusdam minus, pariatur quisquam, ad libero accusamus.`
  },
]


function AboutUs() {

  const {target, targetRef, ref} = React.useContext(ScrollContext)

  return (
    <Box
      className="w-full pt-8"
      ref={target === 'about' ? targetRef : ref}
    >
        <div className="flex flex-col text-white h-full justify-between">
          <Box 
            className="flex flex-col relative"
            bgImage={smoke}
            bgRepeat={"no-repeat"}
            bgSize={"contain"}
            bgPosition={"right"}
          >
            <div className="container">
              <div className="max-w-md flex flex-col gap-y-8 py-8">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide font-head">Landing template for startups</h2>
                <p className="text-slate-400 font-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, aliquam illum et 
                  totam cupiditate ut adipisci a hic, nostrum, consectetur iure accusamus dignissimos inventore soluta.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button textTransform={"uppercase"} variant="my" >Free orders now</Button>
                  <Button textTransform={"uppercase"} variant="my" >get in touch</Button>
                </div>
              </div>
            </div>
          </Box>
          <div className="py-10 bg-gradient-to-b from-slate-800 to-teal-400">
            <div className="container mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {labels.map((e, i) => {
                  return (
                    <div className="flex flex-col items-center gap-y-4" key={i}>
                      <span className="font-semibold text-xl font-head">{e.label}</span>
                      <p className="text-white font-body">
                        {e.description}
                      </p>
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