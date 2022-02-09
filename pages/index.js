import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'
import Navbar from '../components/Navbar'

const Page = () => {
  return (
    <>
      <Navbar></Navbar>

      <Box borderRadius="lg" p={3} mb={6} mt={4} align="center">
        <Heading as="h2" color={'color3'} fontWeight="normal">
          Hello, World I&apos;m from Kite India!
        </Heading>
        <Text color={'color1'}>Kite Description here</Text>
      </Box>
    </>
  )
}

export default Page
