import React from 'react'
import { Box, Button, Input, NumberInput, NumberInputField, } from '@chakra-ui/react'
import { shitSchema } from "../../service/validation"


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
      <div className="grid md:grid-cols-[65%_35%] overflow-hidden bg-white max-w-6xl mx-auto md:rounded-tr-[50px] " >
        <div className="flex flex-col gap-y-5 p-8" >
          <p className="uppercase text- font-bold text-cyan-400"  >
            best web solution
          </p>
          <h2  className="text-xl md:text-4xl lg:text-6xl font-extrabold font-head" >
            Great Ways to Show Your Services
          </h2>
          <p className="text-gray-400 tracking-wider" >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem natus 
            quis hic id distinctio ea modi illum, non animi libero dolorem asperiores sit qui dolor.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="text-white bg-blue-600 py-10 px-14 text-center -mr-0.5">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold font-head mb-2">
              Start Your Free Trial
            </h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <div className="w-16 h-0.5 bg-white mx-auto mt-8"> </div>
          </div>
          <form onSubmit={submit} className="flex flex-col gap-y-4 h-full bg-cyan-50 py-10 px-14 md:rounded-bl-[50px]">
            <Input 
              borderRadius={"full"} 
              bgColor={"white"}
              placeholder="Как к вам обращаться?" 
              value={order.name}
              onChange={handleInput}
              borderColor={errors?.name?.[0] && "red.400"}
              name="name"
            />
            {errors?.name?.[0] && <p className="text-red-600">{errors?.name?.[0]}</p>}
            <Input 
              borderRadius={"full"} 
              bgColor={"white"}
              placeholder="Номер телефона" 
              value={order.tel}
              onChange={handleInput}
              borderColor={errors?.name?.[0] && "red.400"}
              name="tel"
            />
            {errors?.tel?.[0] && <p className="text-red-600">{errors?.tel?.[0]}</p>}
            <Input 
              borderRadius={"full"} 
              bgColor={"white"}
              placeholder="Телеграм" 
              value={order.telegram}
              onChange={handleInput}
              borderColor={errors?.telegram?.[0] && "red.400"}
              name="telegram"
            />
            <Input 
              borderRadius={"full"} 
              bgColor={"white"}
              placeholder="Ватсап" 
              value={order.whatsapp}
              onChange={handleInput}
              borderColor={errors?.whatsapp?.[0] && "red.400"}
              name="whatsapp"
            />
            {(errors?.whatsapp?.[0] || errors?.telegram?.[0]) && (
              <p className="text-red-600">{errors?.whatsapp?.[0] || errors?.telegram?.[0]}</p>
            )}
            <Button variant={"my"} type="submit" textColor={"white"} >
              Отправить
            </Button>
          </form>
        </div>
      </div>
    </Box>
  )
}

export default Order