import React from 'react'
import { Box } from '@chakra-ui/react'
import { Navbar, Section } from '../components'
import { HeroSection, FeaturedSection } from '../components/sections'

const Page = () => {
  return (
    <Box as="main">
      <Navbar />
      <HeroSection />
      <FeaturedSection />
    </Box>
  )
}

export default Page
