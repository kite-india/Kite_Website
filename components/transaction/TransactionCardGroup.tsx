import React from 'react'
import { Stack } from '@chakra-ui/react'

import { Transaction } from '@utils/types'
import TransactCard from './TransactCard'

interface IProps {
  data: Transaction[]
}

const TransactionCardGroup: React.FC<IProps> = ({ data }) => {
  console.log(data)

  return (
    <Stack
      mx={{ sm: '0px' }}
      direction={'column'}
      gap={{sm:"10px",lg:'20px'}}
      ml={{ xl: '60px' }}
    >
      {data.map((transact, idx) => {
        return <TransactCard key={idx} transaction={transact} />
      })}
    </Stack>
  )
}

export default TransactionCardGroup
