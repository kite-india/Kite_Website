import { ChakraProvider } from '@chakra-ui/react'
import Fonts from '../libs/fonts'
import theme from '../libs/theme'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} key={router.route} />
    </ChakraProvider>
  )
}

export default Website
