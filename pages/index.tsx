import React, { useEffect, useState } from 'react'
import {
  HeroSection,
  FeaturedSection,
  DiscoverTheWorld,
  NextDestinationForm
} from '@sections/index'
import Layout from '@components/layouts/main'
import type { NextPage } from 'next'
import type { HomePageProps } from '@utils/types'
import { API } from 'aws-amplify'
import { GraphQLQuery } from '@aws-amplify/api'
import { ListActivitiesQuery, ListPackagesQuery } from 'src/API'
import { listPackages, listActivities } from 'src/graphql/queries'
import { CloseButton } from '@chakra-ui/react'
import { Box, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, StylesProvider, useDisclosure } from '@chakra-ui/react'

const Page: NextPage<HomePageProps> = ({
  featured_data = null,
  activities_data = null
}) => {

  const [mode, setMode] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMode(true);
    }, 4000)
  }, [])


  return (
    <Layout title="Home">
      {mode &&
        <Flex justifyContent={"center"}>

          <Box backgroundColor={"rgba(0, 0, 0, 0.4)"} zIndex={99} position={"fixed"} height={"100vh"} width={"100%"}></Box>

          <Box position={"fixed"} zIndex={100} textAlign="center">
            <CloseButton position={"relative"} zIndex={200} left={430} top={10} size='lg' onClick={(e) => {
              setMode(false)
            }} />
            <NextDestinationForm />
          </Box>

        </Flex>}
      <HeroSection />
      {featured_data && <FeaturedSection data={featured_data} />}
      {activities_data && <DiscoverTheWorld data={activities_data} />}
      <NextDestinationForm />
    </Layout>
  )
}

export async function getStaticProps() {

  const premiumPackages = await API.graphql<GraphQLQuery<ListPackagesQuery>>({
    query: listPackages,
    variables: { filter: { is_premium_flag: { eq: true } } }
  })

  const activities = await API.graphql<GraphQLQuery<ListActivitiesQuery>>({
    query: listActivities
  })

  const featured_data = premiumPackages.data.listPackages.items
  const activities_data = activities.data.listActivities.items

  return { props: { featured_data, activities_data, revalidate: 10 } }
}

export default Page
