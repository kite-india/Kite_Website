import React, { useEffect, useState } from 'react'
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
import Section from '@components/Section'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Auth, Hub } from 'aws-amplify'
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth'
import Verification from '@components/Verification'
import Link from 'next/link'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Login: NextPage = () => {
  const router = useRouter()
  const [confirmation, setConfirmation] = useState(false)
  const [loginParams, setLoginParams] = useState({
    email: '',
    password: ''
  })

  async function googleSignIn() {
    const data = await Auth.federatedSignIn({
      provider: CognitoHostedUIIdentityProvider.Google
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name)
    setLoginParams(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))

    console.log(loginParams)
  }

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }

  const handleLogin = async () => {
    if (!loginParams.email || !loginParams.password) {
      toast.error('Enter All Details')
      return
    } else {
      if (!validateEmail(loginParams.email)) {
        toast.error('Invalid Mail Id')
        return
      } else if (loginParams.password.length < 8) {
        toast.error('Password should be larger than 8 character')
        return
      }
    }

    try {
      const user = await Auth.signIn({
        username: loginParams.email,
        password: loginParams.password
      })

      console.log(user)

      router.push('/')
      // const code = await Auth.resendSignUp("athulrithu123@gmail.com");
      // // const user = await Auth.confirmSignUp("athulrithu123@gmail.com",code);
      // console.log(code)
      // Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google })
    } catch (e) {
      console.log(e)
      switch (e.name) {
        case 'UserNotConfirmedException': {
          await Auth.resendSignUp(loginParams.email)
          setConfirmation(true)
          break
        }

        default:
          toast.error(e.message)
          break
      }
    }
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
          {!confirmation && (
            <>
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
                  onClick={googleSignIn}
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
              <Flex
                px={{ base: 2, lg: '50px' }}
                flexDirection="column"
                gap="9px"
              >
                <Flex
                  flexDirection="column"
                  justifyContent="center"
                  width="100%"
                >
                  <Text fontFamily="'Poppins'" fontWeight="500" fontSize="18px">
                    Email
                  </Text>
                  <Input
                    name="email"
                    value={loginParams['email']}
                    onChange={handleChange}
                    width="100%"
                    boxShadow="md"
                    borderRadius="6px"
                    backgroundColor="white"
                  />
                </Flex>
                <Flex
                  flexDirection="column"
                  justifyContent="center"
                  width="100%"
                >
                  <Text fontFamily="'Poppins'" fontWeight="500" fontSize="18px">
                    Password
                  </Text>
                  <Input
                    name="password"
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
                  <Link href="/login/forgotPassword">
                    <Text cursor="pointer" color="green">
                      Forgot Password?
                    </Text>
                  </Link>
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
                    <Link href="/signup">
                      <Text
                        cursor="pointer"
                        fontWeight="500"
                        fontFamily="'Poppins'"
                        color="green"
                      >
                        Sign Up
                      </Text>
                    </Link>
                  </Flex>
                </Flex>
              </Flex>
            </>
          )}

          {confirmation && (
            <Verification username={loginParams.email}></Verification>
          )}
        </Section>
      </Container>
    </Layout>
  )
}

export default Login
