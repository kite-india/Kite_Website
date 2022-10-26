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


const Page: NextPage<HomePageProps> = ({ featured_data = null, activities_data = null }) => {
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
  const { data: featured_data } = await axios.get(
    `${process.env.NEXT_PUBLIC_KITE_BACKEND}/home`
  )

  const { data: activities_data } = await axios.get(
    `${process.env.NEXT_PUBLIC_KITE_BACKEND}/activity`
  )

  if (!featured_data || !activities_data) {
    return {
      notFound: true
    }
  }

  return { props: { featured_data, activities_data } }
}

export default Page
