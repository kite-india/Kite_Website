import { Text, Box, Flex, Badge, Image } from '@chakra-ui/react'

export default function TransactCard(props) {
  return (
    <Box
      py={'15px'}
      key={props.id}
      maxWidth={{ sm: '2000px', md: '800px' }}
      _hover={{ border: '3px solid #9ca75c' }}
      border={'3px solid #D9D9D9'}
      borderRadius="10px"
    >
      <Text
        pl={'25px'}
        backgroundColor={'rgba(217, 217, 217, 0.22)'}
        fontSize={'12px'}
      >
        id : {props.id}
      </Text>
      <Box>
        <Flex
          justifyContent={'space-between'}
          fontFamily={'Poppins'}
          flexDirection={{ sm: 'column', md: 'row' }}
          pl={'25px'}
          py="15px"
        >
          <Image height={'70px'} width={'72px'} src={props.img} />

          <Flex flexDirection={'column'} lineHeight={'25px'}>
            <Text
              fontSize={{ sm: '16px', md: '17px', lg: '19px' }}
              fontWeight={'700'}
            >
              {props.place}
            </Text>
            <Text
              fontSize={{ sm: '15px', md: '16px', lg: '18px' }}
              fontWeight={'500'}
            >
              {props.date}
            </Text>
            <Text
              fontSize={{ sm: '16px', md: '17px', lg: '19px' }}
              fontWeight={'700'}
            >
              {props.guest} Guests
            </Text>
          </Flex>
          <Text
            pr={{ sm: '10px', md: '40px', lg: '60px' }}
            mt={'15px'}
            fontWeight={'400'}
            fontSize={{ sm: '24px', md: '28px', lg: '32px' }}
          >
            Rs : {props.cost}
          </Text>
        </Flex>
      </Box>
      <Text
        backgroundColor={'rgba(217, 217, 217, 0.22)'}
        fontSize={{ sm: '14px', md: '14px', lg: '15px' }}
        fontWeight={'500px'}
        textAlign={'right'}
        textTransform={'upperCase'}
      >
        status :
        {props.status ? (
          <Badge
            fontSize={{ sm: '14px', md: '14px', lg: '15px' }}
            mr={{ sm: '10px', md: '40px', lg: '60px' }}
            ml={'5px'}
            colorScheme={'white'}
            color="green"
          >
            Booked
          </Badge>
        ) : (
          <Badge
            fontSize={{ sm: '12px', md: '14px', lg: '15px' }}
            mr={{ sm: '10px', md: '40px', lg: '60px' }}
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
