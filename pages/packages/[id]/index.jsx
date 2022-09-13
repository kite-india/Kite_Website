import React from 'react'
import { Box, Container, Flex, Heading, Image, Text } from '@chakra-ui/react'
import axios from 'axios'
import { getSession } from 'next-auth/react'
import { Section } from '../../../components'
import Layout from '../../../components/layouts/main'

const Page = ({ packages_data }) => {
  const { name, _id, image, description } = packages_data
  return (
    <Layout>
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

export async function getServerSideProps(context) {
  const { id } = context.params
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_KITE_BACKEND}/package/${id}`
  )

  const session = await getSession(context)
  if (!session) {
    context.res.writeHead(302, { Location: '/' })
    context.res.end()
    return {}
  }
  console.log(session)
  return { props: { packages_data: data, user: session.user } }
}

export default Page

// TODO: React Map to set destinations, custom packages and directions service on google map, origin to client, services to show famous places around the selected area or search by name.
