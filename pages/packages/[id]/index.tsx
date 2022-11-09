import React from 'react'
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import axios from 'axios'

import { Section } from '@components/index'
import Layout from '@components/layouts/main'
import type { NextPage } from 'next'
import type { Trip } from '@utils/types'
import { useTripsStore } from '@utils/hooks/useTripsStore'

interface PackagesPageProps {
  packages_data: Trip
}

const Page: NextPage<PackagesPageProps> = ({ packages_data }) => {
  if (!packages_data) return null
  const { name, _id, image } = packages_data
  return (
    <Layout title={name}>
      <Container w="100%" pt={8} maxWidth="container.xl">
        <Section delay={0.2}>
          <Flex gap={6}>
            <Box
              borderRadius="lg"
              w="640px"
              h="360px"
              overflow={'hidden'}
              position="relative"
            >
              <Image src={image} alt={_id} layout="fill" priority />
            </Box>
            <Box p={6} maxWidth="50%">
              <Heading fontWeight="semibold" fontSize="72px">
                {name}
              </Heading>
              <Text fontFamily="'Poppins'" fontWeight="light" fontSize="22px">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                distinctio quasi reiciendis libero, totam aut perspiciatis
                debitis quod pariatur perferendis necessitatibus aliquam optio
                porro eum aliquid assumenda. Maiores, nobis! Exercitationem!
              </Text>
            </Box>
          </Flex>
        </Section>
      </Container>
    </Layout>
  )
}

export async function getStaticPaths() {
  const { data }: { data: Trip[] } = await axios.get(
    `${process.env.NEXT_PUBLIC_KITE_BACKEND}/package`
  )

  const paths = data.map((trip: Trip) => {
    return {
      params: { id: `${trip._id}` }
    }
  })
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  const { id } = context.params
  // const { data }: { data: Trip } = await axios.get(
  //   `${process.env.NEXT_PUBLIC_KITE_BACKEND}/package/${id}`
  // )

  await useTripsStore.getState().fetchSingleTripById(id)

  const data = useTripsStore.getState().singleTripById

  return { props: { packages_data: data as Trip } }
}

export default Page

// TODO: React Map to set destinations, custom packages and directions service on google map, origin to client, services to show famous places around the selected area or search by name.
