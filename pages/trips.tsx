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
import type { TripsPageProps } from '@utils/types'
import { useTripsStore } from '@utils/hooks/useTripsStore'

const Trips: NextPage<TripsPageProps> = ({
  packages_data = null,
  activities_data = null
}) => {
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
                  breathtaking views of the Himalayas, there's something for
                  everyone in Kashmir. Come, indulge in a soulful journey to one
                  of the most enchanting destinations on earth.
                </Text>
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
              </Box>
            </Section>
          </Flex>
        </Section>
        <Section delay={0.3}>
          <PackagesSection data={packages_data} />
        </Section>
        <Section delay={0.4}>
          <Activities data={activities_data} />
        </Section>
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  // const { data: packages_data } = await axios.get(
  //   `${process.env.NEXT_PUBLIC_KITE_BACKEND}/package`
  // )

  const { data: activities_data } = await axios.get(
    `${process.env.NEXT_PUBLIC_KITE_BACKEND}/activity`
  )

  // if (!packages_data || !activities_data) {
  //   return {
  //     notFound: true
  //   }
  // }

  await useTripsStore.getState().fetchTrips()

  const packages_data = useTripsStore.getState().trips

  return { props: { packages_data, activities_data } }
}

export default Trips
