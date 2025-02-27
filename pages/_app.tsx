import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Fonts from '@libs/fonts'
import theme from '@libs/theme'
import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'
import '../public/gallery.css'

const Website = ({
  Component,
  pageProps,
  router
}: AppProps<{ session: Session }>) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} key={router.route} />
      </SessionProvider>
    </ChakraProvider>
  )
}

export default Website
