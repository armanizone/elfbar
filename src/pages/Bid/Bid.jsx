import React from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router'

import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '../../service/firebase'

function Bid() {

  const passed = Cookies.get('passed')
  const navigation = useNavigate()

  const [shits, setShits] = React.useState([])
  
  const fetchData = async e => {
    const q = query(collection(db, "elfbarBid"))
    const snapShot = await getDocs(q)
    setShits(snapShot.docs.map(e => { 
      return {id: e.id, ...e.data()}
    })) 
  }

  React.useEffect(e  => {
    if (!passed) return navigation(-1)
    fetchData()
    return e => {
      setShits([])
    } 
  }, [])


  return (
    <div className='w-full'>
      <div className='flex justify-center items-center my-10'>
        <TableContainer>
          <Table variant={"simple"}>
            <TableCaption>
              Заказы
            </TableCaption>
            <Thead>
              <Tr>
                <Th>Имя</Th>
                <Th>Телефон</Th>
                <Th>Телеграм/Ватсап</Th>
                <Th>Создано</Th>
              </Tr>
            </Thead>
            <Tbody>
              {shits.map((e, i) => {
                console.log(new Date(e?.timestamp?.seconds * 1000));
                return (
                  <Tr key={i}>
                    <Td>{e?.name}</Td>
                    <Td>{e?.tel}</Td>
                    <Td>{`${e?.telegram}/${e?.whatsapp}`}</Td>
                    <Td>{`${new Date(e?.timestamp?.seconds * 1000).toLocaleDateString()} - ${new Date(e?.timestamp?.seconds * 1000).toLocaleTimeString()}`}</Td>
                  </Tr>
                )
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export default Bid