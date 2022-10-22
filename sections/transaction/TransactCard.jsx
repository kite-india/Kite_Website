import { Text, Box, Flex, Badge } from '@chakra-ui/react'

export default function TransactCard(props) {
  return (
    <Box
      py={'15px'}
      key={props.id}
      maxWidth={{ md: '800px' }}
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
          pl={'25px'}
          py="15px"
        >
          <img height={'70px'} width={'72px'} src={props.img} />
          <Flex flexDirection={'column'} lineHeight={'25px'}>
            <Text fontSize={{ sm: '15px', lg: '19px' }} fontWeight={'700'}>
              {props.place}
            </Text>
            <Text fontSize={{ sm: '14px', lg: '18px' }} fontWeight={'500'}>
              {props.date}
            </Text>
            <Text fontSize={{ sm: '15px', lg: '19px' }} fontWeight={'700'}>
              {props.guest} Guests
            </Text>
          </Flex>
          <Text
            pr={'60px'}
            mt={'15px'}
            fontWeight={'400'}
            fontSize={{ sm: '28px', lg: '32px' }}
          >
            Rs : {props.cost}
          </Text>
        </Flex>
      </Box>
      <Text
        backgroundColor={'rgba(217, 217, 217, 0.22)'}
        fontSize={{ sm: '13px', lg: '15px' }}
        fontWeight={'500px'}
        textAlign={'right'}
        textTransform={'upperCase'}
      >
        status :
        {props.status ? (
          <Badge
            fontSize={{ sm: '13px', lg: '15px' }}
            mr={'59px'}
            ml={'5px'}
            colorScheme={'white'}
            color="green"
          >
            Booked
          </Badge>
        ) : (
          <Badge
            fontSize={{ sm: '13px', lg: '15px' }}
            mr={'59px'}
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
