import React from 'react'
import { Box, Heading, Text, Container } from '@chakra-ui/react'
import { Navbar, Section } from '../components'
import HeroSection from '../components/sections/hero-section'

const Page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
    </div>
  )
}

export default Page
