import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react'
import Fonts from '../libs/fonts'
import theme from '../libs/theme'

const Website = ({
  Component,
  pageProps: { session, ...pageProps },
  router
}) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <SessionProvider session={session}>
        <Component {...pageProps} key={router.route} />
      </SessionProvider>
    </ChakraProvider>
  )
}

export default Website
