import { Text, Box, Flex, Badge, Stack } from '@chakra-ui/react'
import TransactCard from './TransactCard'
export default function TransactionCardGroup(props) {
  return (
    <Stack
      mx={{ sm: '10px' }}
      direction={'column'}
      gap={'20px'}
      ml={{ lg: '60px' }}
    >
      {props.data.map((val, key) => {
        return (
          <TransactCard
            id={val.nid}
            place={val.place}
            date={val.date}
            guest={val.guest}
            cost={val.cost}
            status={val.status}
            img={val.img}
          />
        )
      })}
    </Stack>
  )
}
