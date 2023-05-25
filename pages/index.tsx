import React from 'react'
import {
  HeroSection,
  FeaturedSection,
  DiscoverTheWorld,
  NextDestinationForm
} from '@sections/index'
import Layout from '@components/layouts/main'
import axios from 'axios'
import type { NextPage } from 'next'
import type { HomePageProps } from '@utils/types'
import { API } from 'aws-amplify'
import { GraphQLQuery } from '@aws-amplify/api';
import { ListPackagesQuery } from "src/API";
import type { Activity } from 'src/API';

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

// Page.getInitialProps = async () => {
//   const { data: featured_data } = await axios.get(
//     `${process.env.NEXT_PUBLIC_KITE_BACKEND}/home`
//   )

//   const { data: activities_data } = await axios.get(
//     `${process.env.NEXT_PUBLIC_KITE_BACKEND}/activity`
//   )

//   return { featured_data, activities_data }
// }

export async function getStaticProps() {



  const allTodos = await API.graphql<GraphQLQuery<any>>({
    query: `query MyQuery {
      listPackages(filter: {is_premium_flag: {eq: "true"}}) {
        items {
          id
          image
          is_premium_flag
          location
          name
          updatedAt
          details_file
          description
          activities{
            items{
              name
              description
              image
              packageID
            }
          }
        }
      }
    }
    `})




  const { data: featured_data } = await axios.get(
    `${process.env.NEXT_PUBLIC_KITE_BACKEND}/packages/premium`
  )

  const { data: activities_data } = await axios.get(
    `${process.env.NEXT_PUBLIC_KITE_BACKEND}/activities`
  )
  if (!featured_data || !activities_data) {
    return {
      notFound: true
    }
  }

  return { props: { featured_data, activities_data } }
}

export default Page
