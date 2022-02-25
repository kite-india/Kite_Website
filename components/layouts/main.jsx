import React from 'react'
import { Box } from '@chakra-ui/react'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Layout = ({ children }) => {
  return (
    <Box w="100%" as="main">
      <Navbar />
      <Box w="100%" pt={12}>
        {children}
      </Box>
      <Footer />
    </Box>
  )
}

export default Layout
