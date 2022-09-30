import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import {
  HeroSection,
  FeaturedSection,
  DiscoverTheWorld,
  NextDestinationForm
} from '../sections'
import Layout from '../components/layouts/main'
import axios from 'axios'

const Page = () => {
  const [featuredData, setFeaturedData] = useState([])
  const [activitiesData, setActivitiesData] = useState([])
  const [isLoading, setLoading] = useState(false)

  const getData = async () => {
    const { data: featured_data } = await axios.get(
      `${process.env.NEXT_PUBLIC_KITE_BACKEND}/home`
    )

    const { data: activities_data } = await axios.get(
      `${process.env.NEXT_PUBLIC_KITE_BACKEND}/activity`
    )

    setFeaturedData(featured_data)
    setActivitiesData(activities_data)
    console.log(featured_data)
    console.log(activities_data)
  }

  useEffect(() => {
    setLoading(true)
    getData()
    setLoading(false)
  }, [])

  return (
    <Layout>
      <Head>
        <title>Kite India - Home</title>
      </Head>
      <HeroSection />
      <FeaturedSection data={featuredData} isLoading={isLoading} />
      <DiscoverTheWorld data={activitiesData} isLoading={isLoading} />
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

// export async function getServerSideProps() {
//   const { data: featured_data } = await axios.get(
//     `${process.env.NEXT_PUBLIC_KITE_BACKEND}/home`
//   )

//   const { data: activities_data } = await axios.get(
//     `${process.env.NEXT_PUBLIC_KITE_BACKEND}/activity`
//   )

//   if (!featured_data || !activities_data) {
//     return {
//       notFound: true
//     }
//   }

//   return { props: { featured_data, activities_data } }
// }

export default Page
