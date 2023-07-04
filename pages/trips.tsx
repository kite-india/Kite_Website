import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  Container,
  Image
} from '@chakra-ui/react'
import axios from 'axios'
import { PackagesSection, Activities } from '@sections/index'
import Section from '@components/Section'
import Layout from '@components/layouts/main'
import type { NextPage } from 'next'
import type { Trip, TripsPageProps } from '@utils/types'
import Link from 'next/link'
import { API } from 'aws-amplify'
import { GraphQLQuery, GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import {
  GetRegistrationQuery,
  ListActivitiesQuery,
  ListPackagesQuery
} from 'src/API'
import { listActivities, listPackages } from 'src/graphql/queries'
import ThreeDotsWaveLoadingScreen from '@components/LoadingScreen'
import { toast } from 'react-toastify'

const Trips: NextPage<TripsPageProps> = () => {


  const [packages_data, setPackage] = useState(null);
  const [activities_data, setActivity] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const packagesAndActivities = await API.graphql<
          GraphQLQuery<ListPackagesQuery>
        >({
          query: listPackages
        })

        let activities = await API.graphql<GraphQLQuery<ListActivitiesQuery>>({
          query: listActivities
        })



        let packages_data = packagesAndActivities.data.listPackages.items as Trip[]
        let activities_data = activities.data.listActivities.items

        setPackage(packages_data);
        setActivity(activities_data);
      }
      catch (e) {

        toast.error(e.errors[0].message)
      }

    }

    fetchData();
  }, [])



  return (

    <Layout title="Trips">

      {activities_data && packages_data ? <Container w="100%" pt={8} maxW="container.xl">

        <Section delay={0.2}>
          <Heading
            fontSize={{sm:'2rem', md: '3rem', lg: '3.3rem',xl:"4rem" }}
            fontWeight="semibold"
            color="#8FB339"
            mb={{ base: 3, lg: 6 }}
          >
            Plan your trips


          </Heading>
          <Flex
            direction={{ sm:"column",md:"column","2xl":"row" }}
            pt={6}
            w="100%"
            gap={{ base: 8, lg: 16 }}
          >
            <Image
              src="/images/trips.png"
              alt="trips"
              objectFit="cover"
              borderRadius="xl"
              boxShadow="lg"
            />
            <Section delay={0.3}>
              <Box
                alignItems="left"
                py={3}
                textAlign={{ base: 'center', lg: 'left' }}
              >
                <Heading fontSize={{sm:"2rem",xl:"3rem"}} textAlign={"left"} fontWeight="semibold">
                  Kashmir
                </Heading>
                <Text
                  fontFamily="'Poppins'"
                  fontWeight="light"
                  fontSize={{sm:"1rem",xl:"1.3rem"}}
                  textAlign="justify"
                  my={1}
                >
                  Experience the pristine beauty and serenity of Kashmir - the
                  land of picturesque landscapes, snow-capped mountains, and
                  tranquil lakes. Immerse yourself in the warm hospitality of
                  the locals and explore the rich culture and heritage of the
                  region. From the vibrant markets of Srinagar to the
                  breathtaking views of the Himalayas, there&apos;s something
                  for everyone in Kashmir. Come, indulge in a soulful journey to
                  one of the most enchanting destinations on earth.
                </Text>
                <Link href={`/packages/clevhuj91000ovqsci1zpw8rc`}>
                  <Button
                    size="xl"
                    mt={3}
                    py={4}
                    px={20}
                    bg="#B7CE63"
                    color="white"
                    fontFamily="'Roboto', serif"
                    borderRadius="full"
                    _hover={{ bg: 'green.400' }}
                    fontSize={{sm:"1rem",lg:"2rem"}}
                    as={motion.button}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Explore Packages
                  </Button>
                </Link>
              </Box>
            </Section>
          </Flex>
        </Section>
        <Section delay={0.3}>
          <PackagesSection
            activities_data={activities_data}
            data={packages_data}
          />
        </Section>
      </Container> : <ThreeDotsWaveLoadingScreen></ThreeDotsWaveLoadingScreen>
      
      }
    </Layout>
  )
}



export default Trips
