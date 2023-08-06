import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Fonts from '@libs/fonts'
import theme from '@libs/theme'

import '../public/gallery.css'
import { Amplify } from 'aws-amplify'
import awsconfig from 'baseconfig'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

Amplify.configure({ ...awsconfig, ssr: true })

interface CustomProps{

}

const Website = ({
  Component,
  pageProps,
  router
}: AppProps<CustomProps>) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
        <ToastContainer></ToastContainer>
        <Component {...pageProps} key={router.route} />
    </ChakraProvider>
  )
}

export default Website
