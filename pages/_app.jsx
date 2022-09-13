import { useState, useEffect } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react'
import Fonts from '../libs/fonts'
import theme from '../libs/theme'

const Website = ({
  Component,
  pageProps: { session, ...pageProps },
  router
}) => {
  const [isSSR, setIsSSR] = useState(true)

  useEffect(() => {
    setIsSSR(false)
  }, [])

  if (isSSR) return null

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <SessionProvider session={session} refetchInterval={30 * 60}>
        <Component {...pageProps} key={router.route} />
      </SessionProvider>
    </ChakraProvider>
  )
}

export default Website
