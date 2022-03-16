import {
  Stack,
  HStack,
  useColorModeValue,
  Box,
  Flex,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  Button
} from '@chakra-ui/react'
import { useState } from 'react'
import {
  RiFlightTakeoffFill,
  RiFlightLandLine,
  RiCalendar2Fill,
  RiUser3Fill
} from 'react-icons/ri'
import { DatePicker } from 'chakra-ui-date-input'
const FlightSearch = () => {
  const [flightDetails, setFlightDetails] = useState({
    Source: '',
    Destination: '',
    Adults: '',
    Start: '',
    End: ''
  })

  return (
    <Box
      backgroundImage="url('https://image.shutterstock.com/z/stock-vector-world-map-vector-grey-isolated-on-white-background-flat-earth-globe-worldmap-icon-travel-1676324032.jpg')"
      // rounded={'xl'}
      boxShadow={'lg'}
      h={'400px'}
    >
      <Flex direction={['column', 'row']} maxW={'6xl'} pt={6} pb={6}>
        <Text
          as="b"
          color="color13"
          fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
        >
          Book Now
        </Text>
      </Flex>
      <Flex
        direction={['column', 'row']}
        maxW={'6xl'}
        // bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        mt={6}
        mb={6}
      >
        <InputGroup flex="3">
          <InputLeftElement
            pointerEvents="none"
            children={<RiFlightTakeoffFill color="gray.300" />}
          />
          <Input
            bg={useColorModeValue('white', 'gray.1200')}
            borderRightRadius="0"
            type="place"
            placeholder="From where?"
            value={flightDetails.Source}
            onChange={e =>
              setFlightDetails({ ...flightDetails, Source: e.target.value })
            }
          />
        </InputGroup>
        <InputGroup flex="3">
          <InputLeftElement
            pointerEvents="none"
            children={<RiFlightLandLine color="gray.300" />}
          />
          <Input
            bg={useColorModeValue('white', 'gray.1200')}
            borderRadius={'0'}
            type="place"
            placeholder="Where to?"
            value={flightDetails.Destination}
            onChange={e =>
              setFlightDetails({
                ...flightDetails,
                Destination: e.target.value
              })
            }
          />
        </InputGroup>
        <InputGroup flex="3.5">
          <InputLeftElement
            pointerEvents="none"
            children={<RiCalendar2Fill color="gray.300" />}
          />
          {/* <Input borderRadius={'0'} type="calendar" /> */}
          <DatePicker
            bg={useColorModeValue('white', 'gray.1200')}
            pl={'35px'}
            borderRight={'0'}
            borderRadius={'0'}
            placeholder="Depart"
            name="departDate"
            onChange={e => setFlightDetails({ ...flightDetails, Start: e })}
          ></DatePicker>
          <DatePicker
            bg={useColorModeValue('white', 'gray.1200')}
            pl={'28px'}
            borderLeft={'0'}
            placeholder="Return"
            name="returnDate"
            onChange={e => setFlightDetails({ ...flightDetails, End: e })}
          ></DatePicker>
        </InputGroup>
        <InputGroup flex="2">
          <InputLeftElement
            pointerEvents="none"
            children={<RiUser3Fill color="gray.300" />}
          />
          <Input
            bg={useColorModeValue('white', 'gray.1200')}
            borderRadius={'0'}
            type="person"
            placeholder="1 adult"
            value={flightDetails.Adults}
            onChange={e =>
              setFlightDetails({
                ...flightDetails,
                Adults: e.target.value
              })
            }
          />
        </InputGroup>
        <Button
          flex="1"
          type="search"
          bg={'#5D5FEF'}
          color={'white'}
          w="full"
          _hover={{
            bg: '#4b4cb3'
          }}
          onClick={() => console.log(flightDetails)}
        >
          Search
        </Button>
      </Flex>
      <Box
        height={'51px'}
        // bg={useColorModeValue('red', 'gray.900')}
        pt={"10px"}
        // rounded={'xl'}
        boxShadow={'lg'}
        // opacity={'0.1'}
        mt={'145px'}
      >
        <Flex direction={['column', 'row']} maxW={'6xl'}>
          <Text color={'black'} fontSize={{ base: 'l', md: 'xl', lg: 'xl' }}>
            Explore More:
          </Text>
          
        </Flex>
      </Box>
    </Box>
  )
}

export default FlightSearch
