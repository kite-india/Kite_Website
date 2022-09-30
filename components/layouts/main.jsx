import React from 'react'
import { Box } from '@chakra-ui/react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { useRouter } from 'next/router'

const Layout = ({ children }) => {
  const router = useRouter()
  return (
    <Box w="100%" as="main">
      <Navbar path={router.asPath} />
      <Box w="100%" pt={16}>
        {children}
      </Box>
      <Footer />
    </Box>
  )
}

export default Layout
