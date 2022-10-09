import React from 'react'
import { Box, Container, Flex, Heading, Image, Text } from '@chakra-ui/react'
import axios from 'axios'

import { Section } from '../../../components'
import Layout from '../../../components/layouts/main'
import Head from 'next/head'

const Page = ({ packages_data }) => {
  if (!packages_data) return null
  const { name, _id, image, description } = packages_data
  return (
    <Layout>
      <Head>
        <title>Kite India&apos;s Trip</title>
      </Head>
      <Container w="100%" pt={8} maxWidth="container.xl">
        <Section delay={0.2}>
          <Flex gap={6}>
            <Image src={image} alt={_id} />
            <Box p={6}>
              <Heading fontWeight="semibold" fontSize="72px">
                {name}
              </Heading>
              <Text fontFamily="'Poppins'" fontWeight="light" fontSize="22px">
                {description}
              </Text>
            </Box>
          </Flex>
        </Section>
      </Container>
    </Layout>
  )
}

export async function getStaticPaths() {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_KITE_BACKEND}/package`
  )

  const paths = data.map(el => {
    return {
      params: { id: `${el._id}` }
    }
  })
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  const { id } = context.params
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_KITE_BACKEND}/package/${id}`
  )

  return { props: { packages_data: data } }
}

export default Page

// TODO: React Map to set destinations, custom packages and directions service on google map, origin to client, services to show famous places around the selected area or search by name.
