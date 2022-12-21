import { Text, Box, Flex, Badge } from '@chakra-ui/react'
import Image from 'next/image'
import { Transaction } from '@utils/types'
import React from 'react'
interface IProps {
  transaction: Transaction
}

const TransactCard: React.FC<IProps> = ({ transaction }) => {
  const { id, img, place, date, guest, cost, status } = transaction
  return (
    <Box
      py={'15px'}
      key={id}
      maxWidth={{ base: '2000px', md: '800px' }}
      _hover={{ border: '3px solid #9ca75c' }}
      border={'3px solid #D9D9D9'}
      borderRadius="10px"
    >
      <Text
        pl={'25px'}
        backgroundColor={'rgba(217, 217, 217, 0.22)'}
        fontSize={'12px'}
      >
        id : {id}
      </Text>
      <Box>
        <Flex
          justifyContent={'space-between'}
          fontFamily={'Poppins'}
          flexDirection={{ base: 'column', md: 'row' }}
          pl={'25px'}
          py="15px"
        >
          <div style={{ width: '72px' }}>
            <Image
              height={'70px'}
              width={'72px'}
              src={img}
              loading="lazy"
              alt={place}
            />
          </div>
          <Flex
            mt={{ base: '20px', md: '0' }}
            flexDirection={'column'}
            lineHeight={'25px'}
          >
            <Text
              fontSize={{ base: '16px', md: '17px', lg: '19px' }}
              fontWeight={'700'}
            >
              {place}
            </Text>
            <Text
              fontSize={{ base: '15px', md: '16px', lg: '18px' }}
              fontWeight={'500'}
            >
              {date}
            </Text>
            <Text
              fontSize={{ base: '16px', md: '17px', lg: '19px' }}
              fontWeight={'700'}
            >
              {guest} Guests
            </Text>
          </Flex>
          <Text
            pr={{ base: '10px', md: '40px', lg: '60px' }}
            mt={'15px'}
            fontWeight={'400'}
            fontSize={{ base: '24px', md: '28px', lg: '32px' }}
          >
            Rs : {cost}
          </Text>
        </Flex>
      </Box>
      <Text
        backgroundColor={'rgba(217, 217, 217, 0.22)'}
        fontSize={{ base: '14px', md: '14px', lg: '15px' }}
        fontWeight={'500px'}
        textAlign={'right'}
        textTransform={'uppercase'}
      >
        status :
        {status ? (
          <Badge
            fontSize={{ base: '14px', md: '14px', lg: '15px' }}
            mr={{ base: '10px', md: '40px', lg: '60px' }}
            ml={'5px'}
            colorScheme={'white'}
            color="green"
          >
            Booked
          </Badge>
        ) : (
          <Badge
            fontSize={{ base: '12px', md: '14px', lg: '15px' }}
            mr={{ base: '10px', md: '40px', lg: '60px' }}
            ml={'5px'}
            colorScheme={'white'}
            color="red"
          >
            cancelled
          </Badge>
        )}
      </Text>
    </Box>
  )
}

export default TransactCard
