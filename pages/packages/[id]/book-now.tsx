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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  ModalBody,
  Lorem
} from '@chakra-ui/react'
import axios from 'axios'
import { Section } from '@components/index'
import Layout from '@components/layouts/main'
import type { GetServerSidePropsContext, NextPage } from 'next'
import type {
  BookNowFormType,
  BookNowProps,
  ExtraPassengersType,
  Trip
} from '@utils/types'
import { useTripsStore } from '@utils/redux/useTripsStore'
import { ExtraPassenger } from '@sections/index'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { requireAuth } from '@utils/helpers/requireAuth'
import { Amplify, API, Auth, withSSRContext } from "aws-amplify";
import { GraphQLQuery, GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import { GetPackageQuery, GetRegistrationQuery } from 'src/API'
import { Activities } from '@sections/index'

const composeBookTrip = () => () => { }

import { Authenticator } from "@aws-amplify/ui-react";
import { toast } from 'react-toastify'

const BookNow: NextPage<BookNowProps> = ({ packages_data, activities }) => {

  let router = useRouter()
  const { isOpen, onToggle, onOpen, onClose } = useDisclosure()
  const [mainPassenger, setMainPassenger] = useState<any>({})
  const [passengers, setPassengers] = useState<number>(1)
  const [extraPassengers, setExtraPassengers] = useState<{
    [key: number]: ExtraPassengersType
  }>({})

  const [activity, setActivity] = useState<string[]>([])
  if (!packages_data) {
    return null
  }

  const addToCartHandler = (activityId: string, action: string) => {

    if (action == "add") {

      setActivity(prevState => ([...prevState, activityId]))
    }
    else if (action == "remove") {

      let tempArr = [...activity]
      let index = activity.indexOf(activityId);
      if (index !== -1) {

        tempArr.splice(index, 1);
        setActivity(tempArr);

        console.log(activity)
      }
    }
  }


  const { id, name, image, location, cost, description } = packages_data
  // const [days, nights] = duration.split('/')
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

    await Auth.currentAuthenticatedUser({ bypassCache: true })
    console.log(activity)
    try {
      const res = await axios.post("/api/register", {
        packageId: router.query.id,
        activities: activity,
        mainPassenger,
        extraPassengers: Object.values(extraPassengers)
      })

      if (res.data.status === false) {
        toast.error(res.data.message)
      }
      else if (res.data.status === true) {
        toast.success(res.data.message)
      }
    }

    catch (e) {
      console.log(e)
    }
  }




  return (

    <Layout title="Book Now">

      {/* <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Lorem count={2} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
       */}
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
              <Box align="center" w="100%">
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
                  </Text>
                  {/* <Text>{location}</Text> */}
                  <Text>
                    Rs {cost}/
                    <Text as="span" fontSize="12px">
                      per person
                    </Text>
                  </Text>
                </Flex>
              </Box>
            </Flex>
            <Section delay={0.4}>
              <Activities addToCartHandler={addToCartHandler} data={activities} />
            </Section>
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

export async function getServerSideProps(context: GetServerSidePropsContext) {


  const { Auth } = withSSRContext(context);
  try {
    const user = await Auth.currentAuthenticatedUser();
    const { id } = context.params
    // const SSR = withSSRContext(context)
    // console.log(SSR)
    const data = await API.graphql<GraphQLQuery<GetPackageQuery>>({
      query: `  query MyQuery {
        getPackage(id: "${id}") {
          cost
          createdAt
          description
          details_file
          image
          id
          name
          contact
          location
          is_premium_flag
          updatedAt
          video_link
        }
      }
    
      `})


    const getActivities = await API.graphql<GraphQLQuery<any>>({
      query: `  
        query MyQuery {
          activitiesByPackageID(packageID: "${id}") {
            items {
              createdAt
              cost
              description
              id
              image
              link
              packageID
              packageName
              name
              updatedAt
            }
          }
        }
        
      
        `})

    let activities = getActivities.data.activitiesByPackageID.items;
    return {
      props: { packages_data: data.data.getPackage as Trip, activities }
    }

  } catch (err) {
    console.log(err)
    console.log('User is not authenticated');
    //Redirect to login page
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props: {},
    };

    // User is not authenticated

  }


}

