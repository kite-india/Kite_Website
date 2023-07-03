import React, { useState } from 'react'
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
  Image,
  Icon
} from '@chakra-ui/react'
import axios from 'axios'
import { Section } from '@components/index'
import Layout from '@components/layouts/main'
import type { GetServerSidePropsContext, NextPage } from 'next'
import type { BookNowProps, ExtraPassengersType, Trip } from '@utils/types'

import { ExtraPassenger } from '@sections/index'
import { useRouter } from 'next/router'
import { API, Auth, withSSRContext } from 'aws-amplify'
import { GraphQLQuery, GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import {
  GetPackageQuery,
  CreateRegistrationMutation,
  GetPackageQueryVariables,
  ActivitiesByPackageIDQuery
} from 'src/API'
import { createRegistration } from 'src/graphql/mutations'
import { Activities } from '@sections/index'
import { ToastContainer } from 'react-toastify'

import { toast } from 'react-toastify'
import BookedModel from '@components/BookedModel'
import 'react-toastify/dist/ReactToastify.css'
import { activitiesByPackageID, getPackage } from 'src/graphql/queries'

import { TbPlane } from "react-icons/tb";
import { MdLocalDining } from "react-icons/md";
import { BsBinoculars } from "react-icons/bs";
import { MdFastfood } from "react-icons/md";

const BookNow: NextPage<BookNowProps> = ({ packages_data, activities }) => {
  const router = useRouter()
  const { isOpen, onToggle } = useDisclosure()
  const [mainPassenger, setMainPassenger] = useState<any>({})
  const [passengers, setPassengers] = useState<number>(1)
  const [extraPassengers, setExtraPassengers] = useState<{
    [key: number]: ExtraPassengersType
  }>({})

  const [activity, setActivity] = useState<string[]>([])
  const [booked, setBooked] = useState(false)
  const [totalCost, setTotalCost] = useState(packages_data.cost)

  function updateTotalCost(cost: number, state: string) {
    if (state === 'add') {
      setTotalCost(prevState => {
        return prevState + Number(cost)
      })
    } else {
      setTotalCost(prevState => {
        return prevState - Number(cost)
      })
    }
  }

  if (!packages_data) {
    return <div>No Package chosen</div>
  }

  const addToCartHandler = (activityId: string, action: string) => {


    if (action == 'add') {
      setActivity(prevState => [...prevState, activityId])
    } else if (action == 'remove') {
      let tempArr = [...activity]
      let index = activity.indexOf(activityId)
      if (index !== -1) {
        tempArr.splice(index, 1)
        setActivity(tempArr)

        console.log(activity)
      }
    }


  }

  const { id, image, location, cost, description, name, duration, actual_cost, cities, have_flight, have_meals, have_hotels, have_sightseeing, have_transfers } = packages_data

  const handleExtraPassengers = (
    num: number,
    passenger: ExtraPassengersType
  ) => {
    setExtraPassengers(prevState => ({ ...prevState, [num]: passenger }))
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    console.log(e.target.name)
    setMainPassenger(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
    e.preventDefault()
  }

  const handleSubmit = async () => {
    console.log(mainPassenger)

    try {
      let totalPassengers = Object.keys(extraPassengers)
      let cost = totalCost

      cost = cost * (totalPassengers.length + 1)

      const user = await Auth.currentUserInfo()
      console.log(user)
      const reg = await API.graphql<GraphQLQuery<CreateRegistrationMutation>>({
        query: createRegistration,
        variables: {
          input: {
            userinfoID: user.username,
            registrationPackageId: router.query.id,
            activitiesId: activity,
            bookingStatus: 'Processing',
            mainPassenger: mainPassenger,
            passengers: Object.values(extraPassengers),
            packageName: name,
            total_cost: cost,
          }
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
      })

      setBooked(true)
      console.log(reg)
    } catch (e) {
      console.log(e)
      console.log('Inside')
      toast.error('Fill all the fields properly')
    }
  }

  const addPassenger = () => {
    if (passengers === 1) {
      onToggle()
      setPassengers(passengers + 1)
    }
    if (passengers < 7) {
      setPassengers(passengers + 1)
    }
  }

  const deletePassenger = () => {
    if (passengers >= 2) {
      setPassengers(passengers - 1)
    }
  }
  console.log(passengers)
  return (
    <Layout title="Book Now">
      <ToastContainer></ToastContainer>
      <BookedModel booked={booked}></BookedModel>
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
                alt={id}
                src={`${process.env.NEXT_PUBLIC_S3_ENDPOINT}${image}`}
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
              {/* <Box textAlign="center" w="100%">
                <Heading fontSize="48px" fontWeight="semibold" mb={2}>
                  {location}
                </Heading>
                <Flex
                  direction="column-reverse"
                  gap={6}
                  fontSize="20px"
                  fontFamily="'Poppins'"
                  justifyContent="center"
                >
                  <Text>
                    {description}
                    {/* {days} Days / {nights} Nights */}
              {/* </Text>
                  {/* <Text>{location}</Text> */}
              {/* <Text>
                    Rs {cost}/
                    <Text as="span" fontSize="12px">
                      per person
                    </Text>
                  </Text>
                </Flex> */}
              {/* </Box> */}

              <Flex flexDirection={"column"} paddingLeft={34}>
                <Flex>
                  <Text fontSize={40} fontWeight={'bold'}>  {name}</Text>
                </Flex>
                <Flex pt={5} textAlign={"center"}>
                  <Box opacity={!have_flight ? 0.3 : 1}  pr={8}>
                    <Icon as={TbPlane} w={8} h={8} />
                    <Text>Flight</Text>
                  </Box>

                  <Box opacity={!have_hotels ? 0.3 : 1}  pr={8}>
                    <Icon as={MdLocalDining} w={8} h={8} />
                    <Text >Hotels</Text>
                  </Box>
                  <Box opacity={!have_sightseeing ? 0.3 : 1}  pr={8} >
                    <Icon as={BsBinoculars} w={10} h={8} />
                    <Text>Sightseeing</Text>
                  </Box>

                  <Box opacity={!have_meals ? 0.3 : 1}  pr={8} >
                    <Icon as={MdFastfood} w={10} h={8} />
                    <Text>Meals</Text>
                  </Box>

                  <Box opacity={!have_transfers ? 0.3 : 1}  pr={8} >
                    <Icon as={BsBinoculars} w={10} h={8} />
                    <Text>Transfers</Text>
                  </Box>
                </Flex>
                <Text pt={5}>Duration: {duration}</Text>
                <Flex pt={3}>
                  <Text fontWeight={"bold"} pr={3}>
                    Cities:

                  </Text>
                  <Text>
                    {cities}
                  </Text>
                </Flex>
                <Flex>
                  <Text color={"green"} pt={5} fontSize={30} fontWeight={"bold"}>Rs. {cost}</Text>
                  <Text pl={4} fontSize={20} pt={8} as={'s'}>Rs. {actual_cost}</Text>

                </Flex>


              </Flex>
            </Flex>
            <Box mt={20}>
              <Section delay={0.4}>
                <Activities
                  updateTotalCost={updateTotalCost}
                  addToCartHandler={addToCartHandler}
                  data={activities}
                />
              </Section>
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
            <Box maxW="container.xl" alignContent="center">
              <FormControl fontFamily="'Roboto'">
                <Flex direction="column" gap={{ base: 4, md: 8 }} mb={6}>
                  <Flex gap={{ base: 2, md: 6 }}>
                    <Select
                      w="30%"
                      typeof="text"
                      name="suffix"
                      placeholder="Suffix"
                      onChange={handleChange}
                    >
                      <option value="mr">Mr</option>
                      <option value="mrs">Mrs</option>
                    </Select>
                    <Input
                      type="text"
                      name="firstName"
                      // value={session ? session.user.name : undefined}
                      placeholder="First Name"
                      onChange={handleChange} //here
                      required
                    />
                  </Flex>
                  <Flex gap={{ base: 4, md: 12 }}>
                    <Input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      required
                      onChange={handleChange}
                    />
                    <Text paddingTop="2">Dob:</Text>
                    <Input
                      type="date"
                      name="birthdate"
                      placeholder="Date of Birth"
                      required
                      onChange={handleChange}
                    />
                  </Flex>
                  <Flex gap={{ base: 4, md: 12 }}>
                    <Input
                      type="email"
                      name="email"
                      // value={session ? session.user.email : undefined}
                      placeholder="Email Address"
                      required
                      onChange={handleChange}
                    />
                    <Input
                      type="text"
                      name="phoneNumber"
                      placeholder="Phone Number"
                      required
                      onChange={handleChange}
                    />
                  </Flex>
                  <Flex gap={{ base: 2, md: 6 }}>
                    <Text>Start Date</Text>
                    <Input
                      type="date"
                      name="starts"
                      placeholder="Start Date"
                      required
                      onChange={handleChange}
                    />
                    <Text>End Date</Text>
                    <Input
                      type="date"
                      name="ends"
                      placeholder="End Date"
                      required
                      onChange={handleChange}
                    />
                    <InputGroup>
                      <Button
                        disabled={passengers === 7}
                        color="white"
                        bg="#009688"
                        borderRadius={32}
                        size="lg"
                        _hover={{
                          bg: '#3E7C17'
                        }}
                        onClick={() => addPassenger()}
                      >
                        +
                      </Button>
                      <Text marginX={4} marginY={2} fontWeight={'bold'}>
                        {passengers} Persons
                      </Text>
                      <Button
                        disabled={passengers === 1}
                        color="white"
                        bg="#009688"
                        borderRadius={32}
                        size="lg"
                        _hover={{
                          bg: '#3E7C17'
                        }}
                        onClick={() => deletePassenger()}
                      >
                        -
                      </Button>
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
                  {[...Array(passengers - 1)].map((x, i) => (
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
                  w="100%"
                  py={2}
                  mt={10}
                  mb={10}
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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { Auth } = withSSRContext(context)
  try {
    await Auth.currentAuthenticatedUser()
    const { id } = context.params
    // const SSR = withSSRContext(context)
    // console.log(SSR)
    const fetchPackage = await API.graphql<GraphQLQuery<GetPackageQuery>>({
      query: getPackage,
      variables: {
        id: `${id}`
      }
    })

    const getActivities = await API.graphql<
      GraphQLQuery<ActivitiesByPackageIDQuery>
    >({
      query: activitiesByPackageID,
      variables: {
        packageID: id
      }
    })

    const activities = getActivities.data.activitiesByPackageID.items

    return {
      props: { packages_data: fetchPackage.data.getPackage as Trip, activities }
    }
  } catch (err) {
    console.log(err)
    console.log('User is not authenticated')
    //Redirect to login page
    return {
      redirect: {
        permanent: false,
        destination: '/login'
      },
      props: {}
    }

    // User is not authenticated
  }
}
