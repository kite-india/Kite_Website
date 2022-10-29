import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Fonts from '@libs/fonts'
import theme from '@libs/theme'

const Website = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} key={router.route} />
    </ChakraProvider>
  )
}

export default Website
