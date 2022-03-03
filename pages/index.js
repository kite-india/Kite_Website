import React from 'react'
import Head from 'next/head'
import { HeroSection, FeaturedSection } from '../sections'
import Layout from '../components/layouts/main'

const Page = () => {
  return (
    <Layout>
      <Head>
        <title>Kite India - Home</title>
      </Head>
      <HeroSection />
      <FeaturedSection />
    </Layout>
  )
}

export default Page
