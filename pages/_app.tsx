import type { AppProps } from 'next/app'
import { wrapper } from '../app/store'
import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import Fonts from '../libs/fonts'
import theme from '../libs/theme'

const Website = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <AnimatePresence>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </ChakraProvider>
  )
}

export default wrapper.withRedux(Website)
