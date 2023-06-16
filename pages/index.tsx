import React from 'react'
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
import { GraphQLQuery } from '@aws-amplify/api';
import { ListActivitiesQuery, ListPackagesQuery } from 'src/API'
import { listPackages, listActivities } from "src/graphql/queries";

const Page: NextPage<HomePageProps> = ({
  featured_data = null,
  activities_data = null
}) => {
  return (
    <Layout title="Home">
      <HeroSection />
      <FeaturedSection data={featured_data} />
      <DiscoverTheWorld data={activities_data} />
      <NextDestinationForm />
    </Layout>
  )
}

export async function getServerSideProps() {





  const premiumPackages = await API.graphql<GraphQLQuery<ListPackagesQuery>>({
    query: listPackages,
    variables: { filter: { is_premium_flag: { eq: true } } },

  })

  const activities = await API.graphql<GraphQLQuery<ListActivitiesQuery>>({
    query: listActivities
  })




  const featured_data = premiumPackages.data.listPackages.items;
  const activities_data = activities.data.listActivities.items;

  console.log(activities_data)

  if (!featured_data || !activities_data) {
    return {
      notFound: true
    }
  }



  return { props: { featured_data, activities_data } }
}

export default Page
