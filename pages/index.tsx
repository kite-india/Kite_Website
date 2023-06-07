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

export async function getStaticProps() {



  const premiumPackages = await API.graphql<GraphQLQuery<ListPackagesQuery>>({
    query: `query MyQuery {
      listPackages(filter: {is_premium_flag: {eq: true}}) {
        items {
          id
          is_premium_flag
          image
          location
          name
          createdAt
          description
          details_file
          cost
          updatedAt
          video_link
        }
      }
    }
    `})




  const activities = await API.graphql<GraphQLQuery<ListActivitiesQuery>>({
    query: `query MyQuery {
      listActivities {
        items {
          id
          image
          description
          name
        }
      }
    }
    
    `})




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
