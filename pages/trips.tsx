import React from 'react'
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
import { useTripsStore } from '@utils/redux/useTripsStore'
import Link from 'next/link'
import { API} from "aws-amplify";
import { GraphQLQuery,GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { GetRegistrationQuery } from 'src/API'
const Trips: NextPage<TripsPageProps> = ({ packages_data = null }) => {



  return (
    <Layout title="Trips">
      <Container w="100%" pt={8} maxW="container.xl">
        <Section delay={0.2}>
          <Heading
            fontSize={{ base: '56px', lg: '72px' }}
            fontWeight="semibold"
            color="#8FB339"
            mb={{ base: 3, lg: 6 }}
          >
            Plan your trips
            <div onClick={async ()=>{
                const res =  await axios.get("/api/register");

                console.log(res)
            }}>Hi</div>
            <div onClick={async () => {
              let foo = await API.post("kiterestapi", "/item", { body: { rfsd: "fesd" } });
              console.log(foo)
            }}>Book</div>
          </Heading>
          <Flex
            direction={{ base: 'column', lg: 'row' }}
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
                <Heading fontSize="72px" fontWeight="semibold">
                  Kashmir
                </Heading>
                <Text
                  fontFamily="'Poppins'"
                  fontWeight="light"
                  fontSize="22px"
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
                    px={16}
                    bg="#B7CE63"
                    color="white"
                    fontFamily="'Roboto', serif"
                    borderRadius="full"
                    _hover={{ bg: 'green.400' }}
                    fontSize="2xl"
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
          <PackagesSection data={packages_data} />
        </Section>
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  // const { data: packages_data } = await axios.get(
  //   `${process.env.NEXT_PUBLIC_KITE_BACKEND}/package`
  // )

  // if (!packages_data || !activities_data) {
  //   return {
  //     notFound: true
  //   }
  // }

  // await useTripsStore.getState().fetchTrips()

  // const packages_data = useTripsStore.getState().trips
  // console.log(packages_data)
  const packagesAndActivities = await API.graphql<GraphQLQuery<any>>({
    query: `query MyQuery {
      listPackages {
        items {
          contact
          cost
          createdAt
          description
          details_file
          id
          image
          is_premium_flag
          location
          name
          updatedAt
          video_link
          activities {
            items {
              id
              image
              description
              name
            }
          }
        }
      }
    }
    
    `})

  let packages_data = packagesAndActivities.data.listPackages.items as Trip[];

  console.log("Hi")
  console.log(packages_data.length)
  console.log('end')
  return { props: { packages_data } }
}

export default Trips
