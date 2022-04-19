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

export async function getStaticProps() {
  const res1 = await axios.get(`${process.env.NEXT_PUBLIC_KITE_BACKEND}/home`)
  const featured_data = await res1.data

  const res2 = await axios.get(
    `${process.env.NEXT_PUBLIC_KITE_BACKEND}/activity`
  )
  const activities_data = await res2.data

  return { props: { featured_data, activities_data } }
}

export default Page
