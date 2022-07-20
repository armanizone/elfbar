import React from 'react'
import { Box, Button } from "@chakra-ui/react"



const images = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/1200px-Flag_of_Kazakhstan.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/1200px-Flag_of_Kazakhstan.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/1200px-Flag_of_Kazakhstan.svg.png',
]


function AboutUs() {
  return (
    <Box
      className="w-full pt-8"
    >
        <div className="flex flex-col text-white h-full justify-between">
          <div className="container">
            <div className="flex flex-col gap-y-8 max-w-md pb-8 ">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide font-head">Landing template for startups</h2>
              <p className="text-slate-400 font-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, aliquam illum et 
                totam cupiditate ut adipisci a hic, nostrum, consectetur iure accusamus dignissimos inventore soluta.
              </p>
              <div className="flex gap-4 ">
                <Button textTransform={"uppercase"} variant="my" >Free orders now</Button>
                <Button textTransform={"uppercase"} variant="my" >get in touch</Button>
              </div>
            </div>
          </div>
          <div className="py-10 bg-gradient-to-b from-slate-800 to-teal-400">
            <div className="container mb-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex flex-col items-center gap-y-4">
                  <img src={images[0]} alt="" className="max-w-xs" />
                  <span className="font-semibold text-xl font-head">Be Prductive</span>
                  <p className="text-white font-body">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis praesentium
                    ipsum voluptatum nesciunt rem quas. Consequuntur deleniti distinctio voluptatibus
                    reprehenderit, non eveniet nobis perspiciatis! Suscipit asperiores commodi molestiae
                    dolor id quas saepe autem nesciunt reiciendis tenetur quae maiores recusandae rerum
                    sunt expedita optio quibusdam minus, pariatur quisquam, ad libero accusamus.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-y-4">
                  <img src={images[1]} alt="" className="max-w-xs" />
                  <span className="font-semibold text-xl font-head">Be Prductive</span>
                  <p className="text-white font-body">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis praesentium
                    ipsum voluptatum nesciunt rem quas. Consequuntur deleniti distinctio voluptatibus
                    reprehenderit, non eveniet nobis perspiciatis! Suscipit asperiores commodi molestiae
                    dolor id quas saepe autem nesciunt reiciendis tenetur quae maiores recusandae rerum
                    sunt expedita optio quibusdam minus, pariatur quisquam, ad libero accusamus.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-y-4">
                  <img src={images[2]} alt="" className="max-w-xs" />
                  <span className="font-semibold text-xl font-head">Be Prductive</span>
                  <p className="text-white font-body">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis praesentium
                    ipsum voluptatum nesciunt rem quas. Consequuntur deleniti distinctio voluptatibus
                    reprehenderit, non eveniet nobis perspiciatis! Suscipit asperiores commodi molestiae
                    dolor id quas saepe autem nesciunt reiciendis tenetur quae maiores recusandae rerum
                    sunt expedita optio quibusdam minus, pariatur quisquam, ad libero accusamus.
                  </p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex flex-col items-center gap-y-4">
                  <img src={images[0]} alt="" className="max-w-xs" />
                  <span className="font-semibold text-xl font-head">Be Prductive</span>
                  <p className="text-white font-body">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis praesentium
                    ipsum voluptatum nesciunt rem quas. Consequuntur deleniti distinctio voluptatibus
                    reprehenderit, non eveniet nobis perspiciatis! Suscipit asperiores commodi molestiae
                    dolor id quas saepe autem nesciunt reiciendis tenetur quae maiores recusandae rerum
                    sunt expedita optio quibusdam minus, pariatur quisquam, ad libero accusamus.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-y-4">
                  <img src={images[1]} alt="" className="max-w-xs" />
                  <span className="font-semibold text-xl font-head">Be Prductive</span>
                  <p className="text-white font-body">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis praesentium
                    ipsum voluptatum nesciunt rem quas. Consequuntur deleniti distinctio voluptatibus
                    reprehenderit, non eveniet nobis perspiciatis! Suscipit asperiores commodi molestiae
                    dolor id quas saepe autem nesciunt reiciendis tenetur quae maiores recusandae rerum
                    sunt expedita optio quibusdam minus, pariatur quisquam, ad libero accusamus.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-y-4">
                  <img src={images[2]} alt="" className="max-w-xs" />
                  <span className="font-semibold text-xl font-head">Be Prductive</span>
                  <p className="text-white font-body">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis praesentium
                    ipsum voluptatum nesciunt rem quas. Consequuntur deleniti distinctio voluptatibus
                    reprehenderit, non eveniet nobis perspiciatis! Suscipit asperiores commodi molestiae
                    dolor id quas saepe autem nesciunt reiciendis tenetur quae maiores recusandae rerum
                    sunt expedita optio quibusdam minus, pariatur quisquam, ad libero accusamus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Box>
  )
}

export default AboutUs