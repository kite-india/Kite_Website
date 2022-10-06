import React, { useState } from 'react'
import Head from 'next/head'
import {
  Heading,
  Box,
  Container,
  Text,
  FormControl,
  Input,
  InputGroup,
  Flex,
  Button,
  Select,
  InputRightElement,
  Collapse,
  useDisclosure,
  Image
} from '@chakra-ui/react'
import axios from 'axios'
import { Section } from '../../../components'
import Layout from '../../../components/layouts/main'

const ExtraPassenger = ({ onToggle, num, handleExtraPassengers }) => {
  const [passengerDetails, setPassengerDetails] = useState({})

  const handleChange = e => {
    setPassengerDetails(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
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
            name="suffix"
            onChange={handleChange}
            placeholder="Suffix"
          >
            <option value="mr">Mr</option>
            <option value="mrs">Mrs</option>
          </Select>
          <Input
            type="text"
            name="fname"
            placeholder="First Name"
            onChange={handleChange}
            required
          />
          <Input type="text" name="mname" placeholder="Middle" />
        </Flex>
        <Flex gap={{ base: 2, md: 6 }} w="100%">
          <Input
            type="text"
            name="lname"
            placeholder="Last Name"
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            w="70%"
            placeholder="Email Address"
            onChange={handleChange}
          />
          <Input
            type="text"
            name="phone"
            w="20%"
            onChange={handleChange}
            placeholder="Phone Number"
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
  const { isOpen, onToggle } = useDisclosure()
  const [formParams, setFormParams] = useState({})
  const [passengers, setPassengers] = useState(1)
  const [extraPassengers, setExtraPassengers] = useState({})

  if (!packages_data) {
    return null
  }

  const { _id, name, image, location, price, duration } = packages_data
  const [days, nights] = duration.split('/')
  const handleExtraPassengers = (num, passenger) => {
    setExtraPassengers(prevState => ({ ...prevState, [num]: passenger }))
  }

  const handleChange = e => {
    setFormParams(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
    e.preventDefault()
  }

  const handleSubmit = () => {
    formParams['packageid'] = _id
    formParams['persons'] = Object.values(extraPassengers)
    formParams['dob'] = new Date(formParams.dob).toISOString()
    formParams['from'] = new Date(formParams.from).toISOString()
    formParams['to'] = new Date(formParams.to).toISOString()
    console.log(formParams)
    axios
      .post(`${process.env.NEXT_PUBLIC_KITE_BACKEND}/book/package`, formParams)
      .then(response => console.log(response.data))
      .catch(err => console.log(err))
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
        </Section>
        <Box mt={12} maxW="container.xl">
          <Section delay={0.3}>
            <Flex align="center" direction={{ base: 'column', lg: 'row' }}>
              <Image
                alt={_id}
                src={image}
                w={{ base: '80vw', lg: '100%' }}
                h={{ base: '80vw', lg: '32vh' }}
                objectFit="cover"
                borderRadius="lg"
                clipPath={{
                  base: 'circle(50% at 50% 50%)',
                  lg: 'polygon(86% 0, 100% 49%, 84% 100%, 0% 100%, 10% 49%, 0% 0%)'
                }}
                mb={{ base: 6, lg: 0 }}
              />
              <Box align="center" w="100%">
                <Heading fontSize="48px" fontWeight="semibold" mb={2}>
                  {name}
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
            </Flex>
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
                      name="suffix"
                      placeholder="Suffix"
                      onChange={handleChange}
                    >
                      <option value="mr">Mr</option>
                      <option value="mrs">Mrs</option>
                    </Select>
                    <Input
                      type="text"
                      name="fname"
                      placeholder="First Name"
                      onChange={handleChange}
                      required
                    />
                    <Input
                      type="text"
                      name="mname"
                      placeholder="Middle"
                      onChange={e => handleChange(e, e.target.name)}
                    />
                  </Flex>
                  <Flex gap={{ base: 4, md: 12 }}>
                    <Input
                      type="text"
                      name="lname"
                      placeholder="Last Name"
                      required
                      onChange={handleChange}
                    />
                    <Input
                      type="date"
                      name="dob"
                      placeholder="Date of Birth"
                      required
                      onChange={handleChange}
                    />
                  </Flex>
                  <Flex gap={{ base: 4, md: 12 }}>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                      onChange={handleChange}
                    />
                    <Input
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                      required
                      onChange={handleChange}
                    />
                  </Flex>
                  <Flex gap={{ base: 2, md: 6 }}>
                    <Input
                      type="datetime-local"
                      name="from"
                      placeholder="Start Date"
                      required
                      onChange={handleChange}
                    />
                    <Input
                      type="datetime-local"
                      name="to"
                      placeholder="End Date"
                      required
                      onChange={handleChange}
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
                      key={i}
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

export async function getServerSideProps(context) {
  const { id } = context.params
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_KITE_BACKEND}/package/${id}`
  )
  return { props: { packages_data: data } }
}
