import {
  Flex,
  Heading,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Link,
  Text,
  Divider
} from '@chakra-ui/react'
import React from 'react'
import { signIn, useSession } from 'next-auth/react'
import Layout from '../components/layouts/main'

const Login = () => {
  const { session, status } = useSession()
  if (status !== 'unauthenticated' && !session) {
    return (
      <Layout>
        <Heading>Already Logged In</Heading>
      </Layout>
    )
  }
  return (
    <Layout>
      <Flex w="100%" justify="center" align="center" direction="col">
        <Container
          textAlign="center"
          bgColor="#F3F3F3"
          borderRadius="lg"
          boxShadow="lg"
          my={12}
          py={8}
          px={12}
        >
          <Heading mb={6} fontSize="48px" fontWeight="semibold">
            LOG IN
          </Heading>
          <Button
            borderRadius="lg"
            w="100%"
            boxShadow="lg"
            px={12}
            py={2}
            bgColor="white"
            onClick={() => signIn('google')}
          >
            Login with Google
          </Button>
          <Flex my={4} gap={6} align="center" justify="center">
            <Divider color="black" />
            <Text fontSize="18px" fontWeight="medium">
              or
            </Text>
            <Divider color="black" />
          </Flex>
          <FormControl fontSize="18px" fontFamily="'Poppins'" isRequired>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              bgColor="white"
              id="email"
              type="email"
              name="email"
              mb={4}
            />
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              bgColor="white"
              id="password"
              type="password"
              name="password"
              mb={3}
            />
            <Flex mb={5} fontSize="14px" justify="space-between" align="center">
              <Checkbox color="black" fontSize="14px">
                Remember Me
              </Checkbox>
              <Link color="#125C13">Forgot Password?</Link>
            </Flex>
            <Button
              boxShadow="lg"
              borderRadius="lg"
              w="100%"
              color="white"
              bgColor="#A4C15E"
            >
              Login
            </Button>
            <Text fontWeight="medium" my={2} fontSize="14px" textAlign="left">
              Don&apos;t have an Account?{' '}
              <Link href="/signup" color="#125C13">
                Sign Up
              </Link>
            </Text>
          </FormControl>
        </Container>
      </Flex>
    </Layout>
  )
}

export default Login
