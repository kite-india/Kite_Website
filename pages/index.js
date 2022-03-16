import React from 'react'
import Head from 'next/head'
import {
  HeroSection,
  FeaturedSection,
  DiscoverTheWorld,
  NextDestinationForm
} from '../sections'
import Layout from '../components/layouts/main'

const Page = () => {
  return (
    <Layout>
      <Head>
        <title>Kite India - Home</title>
      </Head>
      <HeroSection />
      <FeaturedSection />
      <DiscoverTheWorld />
      <NextDestinationForm />
    </Layout>
  )
}

export default Page
