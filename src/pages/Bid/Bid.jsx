import Cookies from 'js-cookie'
import React from 'react'
import { useNavigate } from 'react-router'

import {
  Table,
  TableContainer,
} from '@chakra-ui/react'

function Bid() {

  const passed = Cookies.get('passed')
  const navigation = useNavigate()

  React.useEffect(e  => {
    if (!passed) return navigation(-1)
  }, [])

  return (
    <div className='w-full'>
      <div className='flex justify-center items-center'>
        <TableContainer>

        </TableContainer>
        <Table>

        </Table>
      </div>
    </div>
  )
}

export default Bid