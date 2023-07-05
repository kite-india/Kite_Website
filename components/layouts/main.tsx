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
  let content = `Kite India - ${title}`
  return (
    <>
      <Head>
        <title>{content}</title>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <Navbar path={router.asPath} />
      <Box w="100%" as={"div"} pt={16} scrollSnapType="y mandatory">
        {children}
      </Box>
      <Footer />
    </>

  )
}

export default Layout
