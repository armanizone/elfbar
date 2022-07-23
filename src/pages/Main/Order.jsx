import React from 'react'
import { Box, Button, Input } from '@chakra-ui/react'
import { shitSchema } from "../../service/validation"

import shit5000 from '../../images/5000.jpg'
import shit5000Mobile from '../../images/5000-mobile.jpg'
import kazakhstan from '../../images/kazakhstan.png'
import russia from '../../images/russia.png'

function Order() {

  const [order, setOrder] = React.useState({
    name: '',
    tel: '',
    telegram: '',
    whatsapp: ''
  })

  const [errors, setErrors] = React.useState({
    name: [],
    number: [],
    telegram: [],
    whatsapp: []
  })

  const handleInput = e => {
    const { name, value } = e.target
    setOrder({...order, [name]: value})
    setErrors({})
  }

  const yupErrorToErrorObject = (err) => {
    const object = {};
    err.inner.forEach((x) => {
      if (x.path !== undefined) {
        object[x.path] = x.errors;
      }
    });
    return setErrors(object);
  }

  const submit = e => {
    e.preventDefault()
    shitSchema.validate(order, { abortEarly: false })
    .then(e => {
      console.log(e);
    })
    .catch(e => {
      console.log(e);
      yupErrorToErrorObject(e)
    })
  }

  return (
    <Box 
      className="w-full py-8 z-50 bg-teal-400"
    >
      <Box  
        className="grid md:grid-cols-[65%_35%] overflow-hidden bg-white max-w-6xl mx-auto md:rounded-tr-[50px] md:rounded-bl-[50px] " 
        bgImage={{base: shit5000Mobile, lg: shit5000}}
        bgRepeat="no-repeat"
        bgSize={"cover"}
      >
        <div className="flex flex-col  gap-y-5 p-4 sm:p-8" >
          <h2  className="text-xl md:text-4xl lg:text-6xl font-extrabold font-head text-white" >
            Great Ways to Show Your Services
          </h2>
          <form onSubmit={submit} className="flex flex-col gap-y-4 h-full max-w-md ">
            <Input 
              borderRadius={"full"} 
              bgColor={"white"}
              placeholder="Как к вам обращаться?" 
              value={order.name}
              onChange={handleInput}
              borderColor={errors?.name?.[0] && "teal.400"}
              borderWidth={"thick"}
              name="name"
              className={errors?.name?.[0] && "input-animation"}
            />
            {/* {errors?.name?.[0] && <p className="text-white">{errors?.name?.[0]}</p>} */}
            <Input 
              borderRadius={"full"} 
              bgColor={"white"}
              placeholder="Номер телефона" 
              value={order.tel}
              onChange={handleInput}
              borderColor={errors?.tel?.[0] && "teal.400"}
              borderWidth={"thick"}
              name="tel"
              className={errors?.tel?.[0] && "input-animation"}

            />
            {/* {errors?.tel?.[0] && <p className="text-white">{errors?.tel?.[0]}</p>} */}
            <Input 
              borderRadius={"full"} 
              bgColor={"white"}
              placeholder="Телеграм" 
              value={order.telegram}
              onChange={handleInput}
              borderColor={errors?.telegram?.[0] && "teal.400"}
              borderWidth={"thick"}
              name="telegram"
              className={errors?.telegram?.[0] && "input-animation"}

            />
            <Input 
              borderRadius={"full"} 
              bgColor={"white"}
              placeholder="Ватсап" 
              value={order.whatsapp}
              onChange={handleInput}
              borderColor={errors?.whatsapp?.[0] && "teal.400"}
              borderWidth={"thick"}
              name="whatsapp"
              className={errors?.whatsapp?.[0] && "input-animation"}
            />
            {/* {(errors?.whatsapp?.[0] || errors?.telegram?.[0]) && (
              <p className="text-white">{errors?.whatsapp?.[0] || errors?.telegram?.[0]}</p>
            )} */}
            <Button variant={"my"} type="submit" bgColor={"white"} textColor={"black"} >
              Отправить
            </Button>
          </form>
        </div>
        <div className="flex flex-col">
          <div
           className="text-white py-4 px-4 md:py-10 md:px-14 text-center -mr-0.5"
          >
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold font-head mb-2">
              Start Your Free Trial
            </h3>
            <p className="inline-flex items-center gap-4 text-sm border p-2 cursor-pointer rounded-xl mb-4 justify-center bg-slate-200 opacity-75" >
              <span className="text-black opacity-100">
                Написать WhatsApp:
              </span>
              <img src={russia} alt=""className="w-12 opacity-100" />
            </p>
            <p className="inline-flex items-center gap-4 text-sm border p-2 cursor-pointer rounded-xl mb-4 justify-center bg-slate-200 opacity-75" >
              <span className="text-black opacity-100">
                Написать WhatsApp:
              </span>
              <img src={kazakhstan} alt="" className="w-12 opacity-100"/>
            </p>
            <div className="w-16 h-0.5 bg-white mx-auto"> </div>
          </div>

        </div>
      </Box>
    </Box>
  )
}

export default Order