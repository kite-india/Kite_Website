import React from 'react'
import Head from 'next/head'
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
import { PackagesSection, Activities } from '../sections'
import Section from '../components/Section'
import Layout from '../components/layouts/main'

const Trips = ({ packages_data = null, activities_data = null }) => {
  return (
    <Layout>
      <Head>
        <title>Kite India - Trips</title>
      </Head>
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
              priority="true"
              src="/images/trips.png"
              alt="trips"
              objectFit="cover"
              borderRadius="xl"
              boxShadow="lg"
            />
            <Section delay={0.3}>
              <Box
                align="left"
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
                  Volutpat at sit curabitur duis tristique est. Pharetra vel,
                  arcu ultrices fringilla. Eu arcu dolor neque enim ac lectus
                  adipiscing proin. Neque, senectus tellus lectus molestie
                  tortor ut leo. Justo tellus a mattis nascetur condimentum
                  purus orci lobortis. Habitasse suscipit vivamus cras a
                  tristique in.
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
        <Section delay={0.4}>
          <PackagesSection data={packages_data} />
        </Section>
        <Section delay={0.5} mt={6}>
          <Activities data={activities_data} />
        </Section>
      </Container>
    </Layout>
  )
}

export async function getServerSideProps() {
  const { data: packages_data } = await axios.get(
    `${process.env.NEXT_PUBLIC_KITE_BACKEND}/package`
  )

  const { data: activities_data } = await axios.get(
    `${process.env.NEXT_PUBLIC_KITE_BACKEND}/activity`
  )

  if (!packages_data || !activities_data) {
    return {
      notFound: true
    }
  }

  return { props: { packages_data, activities_data } }
}

export default Trips
