import React from 'react'
import { Box, Button, Input } from '@chakra-ui/react'
import { shitSchema } from "../../service/validation"

import kazakhstan from '../../images/kazakhstan.png'
import russia from '../../images/russia.png'
import telegram from '../../images/telegram.png'

import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from "../../service/firebase"
import { ScrollContext } from '../../App'


function Order() {

  const {target, targetRef, ref} = React.useContext(ScrollContext)

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
      addDoc(collection(db, "elfbarBid"), {
        ...order,
        timestamp: serverTimestamp()
      })
      .then(e => {
        console.log(e);
      })
      .catch(e => {
        console.log(e);
      })
    })
    .catch(e => {
      console.log(e);
      yupErrorToErrorObject(e)
    })
  }

  return (
    <Box 
      className="w-full py-8 z-50"
      ref={target === 'order' ? targetRef : ref}
    >
      <Box  
        className="grid md:grid-cols-[65%_35%] overflow-hidden max-w-6xl mx-auto md:rounded-tr-[50px] md:rounded-bl-[50px] " 
      >
        <div className="flex flex-col gap-y-5 p-4" >
          <h2  className="text-xl md:text-4xl lg:text-6xl font-extrabold font-head text-white" >
            Отправьте заявку или свяжитесь с нами 
          </h2>
          <div
            className="text-white"
          >
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold font-head mb-2">
            Выберите оператора страны:
            </h3>
            <div className='flex flex-col md:flex-row gap-4'>
              <p className="inline-flex items-center gap-4 text-sm border p-2 cursor-pointer rounded-xl mb-4 justify-center bg-white" >
                <span className="text-black opacity-100">
                  Написать WhatsApp:
                </span>
                <img src={russia} alt=""className="w-12 opacity-100" />
              </p>
              <p className="inline-flex items-center gap-4 text-sm border p-2 cursor-pointer rounded-xl mb-4 justify-center bg-white" >
                <span className="text-black opacity-100">
                  Написать WhatsApp:
                </span>
                <img src={kazakhstan} alt="" className="w-12 opacity-100"/>
              </p>
              <p className="inline-flex items-center gap-4 text-sm border p-2 cursor-pointer rounded-xl mb-4 justify-center bg-white" >
                <span className="text-black opacity-100">
                  Написать Telegram:
                </span>
                <img src={telegram} alt="" className="w-12 opacity-100"/>
              </p>
            </div>
          </div>
        </div>
        <form onSubmit={submit} className="flex flex-col gap-y-4 h-full md:max-w-md p-4">
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
            <Button variant={"my"} type="submit" textColor={"white"} >
              Отправить
            </Button>
        </form>
      </Box>
    </Box>
  )
}

export default Order