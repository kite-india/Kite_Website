import { Text, Box, Flex, Badge, Stack } from '@chakra-ui/react'
import TransactCard from './TransactCard'
export default function TransactionCardGroup(props) {
  return (
    <Stack
      mx={{ sm: '10px' }}
      direction={'column'}
      gap={'10px'}
      ml={{ lg: '60px' }}
    >
      {props.nid.map((val, key) => {
        return (
          <TransactCard
            id={props.nid[key]}
            place={props.place[key]}
            date={props.date[key]}
            guest={props.guest[key]}
            cost={props.cost[key]}
            status={props.status[key]}
            img={props.img[key]}
          />
        )
      })}
    </Stack>
  )
}
