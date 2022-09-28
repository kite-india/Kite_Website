import React from 'react'
import Head from 'next/head'
import {
  HeroSection,
  FeaturedSection,
  DiscoverTheWorld,
  NextDestinationForm
} from '../sections'
import Layout from '../components/layouts/main'
import axios from 'axios'

const Page = ({ featured_data, activities_data }) => {
  if (!featured_data || !activities_data) {
    return (
      <Layout>
        <Head>
          <title>Kite India - Home</title>
        </Head>
        <HeroSection />
      </Layout>
    )
  }
  return (
    <Layout>
      <Head>
        <title>Kite India - Home</title>
      </Head>
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

  return { props: { featured_data, activities_data } }
}

export default Page
