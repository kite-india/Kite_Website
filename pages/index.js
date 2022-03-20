import React from 'react'
import Head from 'next/head'
import {
  HeroSection,
  FeaturedSection,
  DiscoverTheWorld,
  NextDestinationForm
} from '../sections'
import Layout from '../components/layouts/main'

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
  const res1 = await fetch('https://kite-backend-test.azurewebsites.net/home')
  const featured_data = await res1.json()

  const res2 = await fetch(
    'https://kite-backend-test.azurewebsites.net/activity'
  )
  const activities_data = await res2.json()

  return { props: { featured_data, activities_data } }
}

export default Page
