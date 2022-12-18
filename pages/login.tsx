import React, { useState } from 'react'
import Layout from '@components/layouts/main'
import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  Container,
  Image,
  Input,
  Checkbox
} from '@chakra-ui/react'
import { signIn, useSession } from 'next-auth/react'
import Section from '@components/Section'
import type { NextPage } from 'next'

const Login: NextPage = () => {
  const { status } = useSession()
  const [loginParams, setLoginParams] = useState({})

  if (status === 'loading') {
    return <h1>Loading....</h1>
  }

  const handleGoogleLogin = () => {
    signIn('google', { callbackUrl: `${window.location.origin}` })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginParams(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleLogin = () => {
    console.log(loginParams)
  }

  return (
    <Layout title="Login">
      <Container
        maxW={{ base: 'container.sm', lg: 'container.md' }}
        my={12}
        w="100%"
        borderWidth={3}
        borderRadius={16}
        backgroundColor="#f3f3f3"
        boxShadow="lg"
      >
        <Section delay={0.2}>
          <Flex direction="column" gap="3">
            <Heading
              textAlign="center"
              fontFamily="'Poppins'"
              fontWeight="600"
              fontSize="48px"
              mt={4}
              letterSpacing="10px"
            >
              LOG IN
            </Heading>
            <Button
              width={{ base: '100%', lg: '75%' }}
              m="auto"
              px="3"
              borderRadius="10px"
              backgroundColor="#fcfafa"
              boxShadow="lg"
              onClick={handleGoogleLogin}
            >
              <Box mr={4}>
                <Image
                  src="/googleicon.png"
                  width="30px"
                  height="30px"
                  alt="globe-svg"
                />
              </Box>
              <Text fontFamily="'Poppins'" fontWeight="600">
                Login With Google
              </Text>
            </Button>
          </Flex>
          <Text mt="20px" textAlign="center">
            Or
          </Text>

          <Flex px={{ base: 2, lg: '50px' }} flexDirection="column" gap="9px">
            <Flex flexDirection="column" justifyContent="center" width="100%">
              <Text fontFamily="'Poppins'" fontWeight="500" fontSize="18px">
                Email
              </Text>
              <Input
                value={loginParams['email']}
                onChange={handleChange}
                width="100%"
                boxShadow="md"
                borderRadius="6px"
                backgroundColor="white"
              />
            </Flex>
            <Flex flexDirection="column" justifyContent="center" width="100%">
              <Text fontFamily="'Poppins'" fontWeight="500" fontSize="18px">
                Password
              </Text>
              <Input
                value={loginParams['password']}
                onChange={handleChange}
                type="password"
                width="100%"
                boxShadow="md"
                borderRadius="6px"
                backgroundColor="white"
              />
            </Flex>
            <Flex justifyContent="space-between">
              <Checkbox colorScheme="green" defaultChecked>
                Remember Me
              </Checkbox>
              <Text cursor="pointer" color="green">
                Forgot Password?
              </Text>
            </Flex>

            <Flex gap="2px" justifyContent="center" flexDirection="column">
              <Button
                width="100%"
                px="3"
                my="20px"
                borderRadius="10px"
                color="white"
                backgroundColor="#A4C15E"
                boxShadow="lg"
                fontFamily="'Poppins'"
                onClick={() => handleLogin()}
              >
                LOGIN
              </Button>
              <Flex gap="4px">
                <Text fontWeight="500" fontFamily="'Poppins'">
                  Don&apos;t have an Account ?
                </Text>
                <Text
                  cursor="pointer"
                  fontWeight="500"
                  fontFamily="'Poppins'"
                  color="green"
                >
                  Sign Up
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Section>
      </Container>
    </Layout>
  )
}

export default Login
