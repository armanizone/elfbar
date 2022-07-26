import React from 'react'
import { Box, Button, Image, keyframes, usePrefersReducedMotion } from "@chakra-ui/react"


import parasha1 from '../../images/11.png'
import parasha2 from '../../images/22.png'
import parasha3 from '../../images/33.png'
import smoke from '../../images/smoke_wide.png'
import { ScrollContext } from '../../App'


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
                <Box 
                  className='flex w-full max-w-2xl relative h-44 lg:h-auto'
                  bgImage={smoke}
                  bgRepeat={"no-repeat"}
                  bgSize={"contain"}
                  bgPosition={"right"}
                >
                  <Image animation={animation1} src={parasha1} alt="" className='absolute' />
                  <Image animation={animation2} src={parasha2} alt="" className='absolute' />
                  <Image animation={animation3} src={parasha3} alt="" className='absolute' />
                </Box>
              </Box>
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