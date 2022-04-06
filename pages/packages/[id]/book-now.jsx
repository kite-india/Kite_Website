import React, { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import {
  Heading,
  Box,
  Container,
  Text,
  FormControl,
  Input,
  InputGroup,
  // InputLeftElement,
  Flex,
  Button,
  Select,
  InputRightElement,
  Collapse,
  useDisclosure
} from '@chakra-ui/react'
// import { BsPersonFill } from 'react-icons/bs'
// import {
//   GiAirplaneDeparture,
//   GiAirplaneArrival,
//   GiCalendar
// } from 'react-icons/gi'
import { Section } from '../../../components'
import Layout from '../../../components/layouts/main'

// const dummyData = [
//   {
//     name: 'From where?',
//     type: 'text',
//     icon: <GiAirplaneDeparture />
//   },
//   {
//     name: 'Where To?',
//     type: 'text',
//     icon: <GiAirplaneArrival />
//   },
//   {
//     name: 'Depart - Return',
//     type: 'date',
//     icon: <GiCalendar />
//   },
//   {
//     name: '1 Adult',
//     type: 'number',
//     icon: <BsPersonFill />
//   }
// ]

// const InputItem = ({ item, no }) => (
//   <InputGroup>
//     <InputLeftElement>{item.icon}</InputLeftElement>
//     <Input
//       type={item.type}
//       placeholder={item.name}
//       borderRadius={no === 0 ? 'md' : '0'}
//       borderEndRadius="0"
//     />
//   </InputGroup>
// )

const ExtraPassenger = ({ onToggle, num, handleExtraPassengers }) => {
  const [passengerDetails, setPassengerDetails] = useState({})

  const handleChange = (e, name) => {
    setPassengerDetails(prevState => ({ ...prevState, [name]: e.target.value }))
    handleExtraPassengers(num - 1, passengerDetails)
    e.preventDefault()
  }

  return (
    <Box mt={8}>
      <Flex mb={3} alignItems="center" justifyContent="space-between">
        <Text fontSize="18px" fontWeight="semibold" color="#6E7491">
          Passenger {num}
        </Text>
        <Button
          onClick={onToggle}
          display={num !== 2 && 'none'}
          bg="#E34100"
          _hover={{ bg: 'red.600', color: 'white' }}
          color="white"
          px={6}
          py={1}
        >
          Cancel
        </Button>
      </Flex>
      <Flex gap={{ base: 4, md: 8 }} mb={6} direction="column">
        <Flex gap={{ base: 2, md: 6 }} w="100%">
          <Select
            w="30%"
            type="text"
            name="gender"
            onChange={e => handleChange(e, e.target.name)}
            placeholder="Suffix"
          >
            <option value="male">Mr</option>
            <option value="female">Mrs</option>
          </Select>
          <Input
            type="text"
            name="first_name"
            placeholder="First Name"
            onChange={e => handleChange(e, e.target.name)}
            required
          />
          <Input type="text" name="middle_name" placeholder="Middle" />
        </Flex>
        <Flex gap={{ base: 2, md: 6 }} w="100%">
          <Input
            type="text"
            name="last_name"
            placeholder="Last Name"
            onChange={e => handleChange(e, e.target.name)}
            required
          />
          <Input
            type="email"
            name="email"
            w="70%"
            placeholder="Email Address"
            onChange={e => handleChange(e, e.target.name)}
          />
          <Input
            type="number"
            name="age"
            w="20%"
            onChange={e => handleChange(e, e.target.name)}
            placeholder="Age"
          />
        </Flex>
      </Flex>
      <hr
        style={{
          backgroundColor: '#3E7C17',
          height: '4px',
          borderRadius: '3px'
        }}
      />
    </Box>
  )
}

const BookNow = ({ packages_data }) => {
  const router = useRouter()
  const { isOpen, onToggle } = useDisclosure()
  const [formParams, setFormParams] = useState({})
  const [passengers, setPassengers] = useState(1)
  const [extraPassengers, setExtraPassengers] = useState({})

  const { id } = router.query
  const [pkg_data] = packages_data.filter(pkg => pkg._id === id)
  const { location, price, duration } = pkg_data
  const [days, nights] = duration.split('/')

  const handleExtraPassengers = (num, passenger) => {
    setExtraPassengers(prevState => ({ ...prevState, [num]: passenger }))
  }

  const handleChange = (e, name) => {
    setFormParams(prevState => ({ ...prevState, [name]: e.target.value }))
    e.preventDefault()
  }

  const handleSubmit = async () => {
    const formDetails = formParams
    formDetails['persons'] = Object.values(extraPassengers)
    const res = await fetch(
      'https://kite-backend-test.azurewebsites.net/book/camp',
      {
        method: 'POST',
        body: formDetails,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    const data = await res.json()
    console.log(data)
  }

  return (
    <Layout>
      <Head>
        <title>Kite India - Book Now</title>
      </Head>
      <Container w="100%" pt={8} maxWidth="container.xl">
        <Section delay={0.1}>
          <Heading fontSize="72px" fontWeight="semibold" color="#8FB339">
            Book Now
          </Heading>
          {/* <Flex
            direction="row"
            alignItems="center"
            justifyContent="center"
            my={8}
            fontFamily="'Roboto'"
          >
            <FormControl>
              <Flex>
                {dummyData.map((item, idx) => (
                  <InputItem item={item} key={idx} no={idx} />
                ))}
                <Button bg="#5D5FEF" color="white" borderRadius="md" px={8}>
                  Search
                </Button>
              </Flex>
            </FormControl>
          </Flex> */}
        </Section>
        <Box mt={12} maxW="container.xl">
          <Section delay={0.3}>
            <Box align="center" maxW="container.xl">
              <Heading fontSize="48px" fontWeight="semibold" mb={2}>
                Jannat Chalein
              </Heading>
              <Flex
                gap={6}
                fontSize="20px"
                fontFamily="'Poppins'"
                justifyContent="center"
              >
                <Text>
                  {days} Days / {nights} Nights
                </Text>
                <Text>{location}</Text>
                <Text>
                  Rs {price}/
                  <Text as="span" fontSize="12px">
                    per person
                  </Text>
                </Text>
              </Flex>
            </Box>
            <Box mt={8} mb={4} maxW="container.xl">
              <Text
                color="#3E7C17"
                fontSize="24px"
                fontFamily="'Roboto'"
                fontWeight="bold"
                mb={3}
              >
                Passenger Information
              </Text>
              <Text fontFamily="'Roboto'" color="#7C8DB0" fontSize="18px">
                Enter the required information for each traveler and be sure
                that it exactly matches the government-issued ID presented at
                thhe airport.
              </Text>
            </Box>
            <Box maxW="container.xl" align="center">
              <FormControl fontFamily="'Roboto'">
                <Flex direction="column" gap={{ base: 4, md: 8 }} mb={6}>
                  <Flex gap={{ base: 2, md: 6 }}>
                    <Select
                      w="30%"
                      type="text"
                      name="gender"
                      placeholder="Suffix"
                      onChange={e => handleChange(e, e.target.name)}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </Select>
                    <Input
                      type="text"
                      name="first_name"
                      placeholder="First Name"
                      onChange={e => handleChange(e, e.target.name)}
                      required
                    />
                    <Input
                      type="text"
                      name="middle_name"
                      placeholder="Middle"
                      onChange={e => handleChange(e, e.target.name)}
                    />
                  </Flex>
                  <Flex gap={{ base: 4, md: 12 }}>
                    <Input
                      type="text"
                      name="last_name"
                      placeholder="Last Name"
                      required
                      onChange={e => handleChange(e, e.target.name)}
                    />
                    <Input
                      type="date"
                      name="dob"
                      placeholder="Date of Birth"
                      required
                      onChange={e => handleChange(e, e.target.name)}
                    />
                  </Flex>
                  <Flex gap={{ base: 4, md: 12 }}>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                      onChange={e => handleChange(e, e.target.name)}
                    />
                    <Input
                      type="number"
                      name="phone_number"
                      placeholder="Phone Number"
                      required
                      onChange={e => handleChange(e, e.target.name)}
                    />
                  </Flex>
                  <Flex gap={{ base: 2, md: 6 }}>
                    <Input
                      type="date"
                      name="start_date"
                      placeholder="Start Date"
                      required
                      onChange={e => handleChange(e, e.target.name)}
                    />
                    <Input
                      type="date"
                      name="end_date"
                      placeholder="End Date"
                      required
                      onChange={e => handleChange(e, e.target.name)}
                    />
                    <InputGroup>
                      <InputRightElement>
                        <Button
                          color="white"
                          bg="#009688"
                          borderRadius={32}
                          size="lg"
                          _hover={{
                            bg: '#3E7C17'
                          }}
                          onClick={onToggle}
                        >
                          +
                        </Button>
                      </InputRightElement>
                      <Input
                        type="number"
                        name="persons"
                        placeholder="No of persons"
                        onChange={e => setPassengers(Number(e.target.value))}
                        required
                      />
                    </InputGroup>
                  </Flex>
                </Flex>
                <hr
                  style={{
                    backgroundColor: '#3E7C17',
                    height: '4px',
                    borderRadius: '3px'
                  }}
                />
                <Collapse in={isOpen} animateOpacity>
                  {[...Array(passengers)].map((x, i) => (
                    <ExtraPassenger
                      handleExtraPassengers={handleExtraPassengers}
                      key={x}
                      num={i + 2}
                      onToggle={onToggle}
                    />
                  ))}
                </Collapse>
                <Button
                  bg="#B7CE63"
                  color="white"
                  w="80%"
                  py={2}
                  mt={4}
                  onClick={handleSubmit}
                >
                  Book Now
                </Button>
              </FormControl>
            </Box>
          </Section>
        </Box>
      </Container>
    </Layout>
  )
}

export default BookNow

export async function getServerSideProps() {
  const res1 = await fetch(
    'https://kite-backend-test.azurewebsites.net/package'
  )
  const packages_data = await res1.json()
  return { props: { packages_data } }
}
