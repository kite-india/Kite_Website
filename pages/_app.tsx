import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Fonts from '@libs/fonts'
import theme from '@libs/theme'
import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'
import '../public/gallery.css'
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsconfig from 'src/aws-exports.js';
Amplify.configure(awsconfig);
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Website = ({
  Component,
  pageProps,
  router
}: AppProps<{ session: Session }>) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <SessionProvider session={pageProps.session}>
      <ToastContainer></ToastContainer>
        <Component {...pageProps} key={router.route} />
      </SessionProvider>
    </ChakraProvider>
  )
}

export default Website
