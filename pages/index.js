import React from 'react'
import { Box, Heading, Text, Container } from '@chakra-ui/react'
import Navbar from '../components/Navbar'

const Page = () => {
  return (
    <>
      <Navbar />
      <Container as="main" pt={16}>
        <Box borderRadius="lg" p={3} mb={6} align="center">
          <Heading as="h2" color={'color3'} fontWeight="normal">
            Hello, World I&apos;m from Kite India!
          </Heading>
          <Text color={'color1'}>Kite Description here</Text>
        </Box>
      </Container>
    </>
  )
}

export default Page
