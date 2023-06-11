import React from 'react'
import { Box } from '@chakra-ui/react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { useRouter } from 'next/router'
import Head from 'next/head'

interface Props {
  children: React.ReactNode
  title: string
}

const Layout: React.FC<Props> = ({ children, title }) => {
  const router = useRouter()
  return (
    <Box w="100%" as="main">
      <Head>
        <title>Kite India - {title}</title>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <Navbar path={router.asPath} />
      <Box w="100%" pt={16} scrollSnapType="y mandatory">
        {children}
      </Box>
      <Footer />
    </Box>
  )
}

export default Layout
