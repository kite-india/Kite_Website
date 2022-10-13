import React, { useState } from 'react'
import Head from 'next/head'
import Layout from '../components/layouts/main'
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
import Section from '../components/Section'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Layout>
      <Container maxW="container.sm" my={12} w="100%" borderWidth={3} borderRadius={16} backgroundColor="#f3f3f3" boxShadow="lg">
        <Section>
          <Flex direction="column" gap="3">
            <Heading textAlign="center" fontFamily="'Poppins'" fontWeight="600" fontSize="48px" mt={4} letterSpacing="10px">
              LOG IN
            </Heading>
            <Button width="461px" m="auto" px="3" borderRadius="10px" backgroundColor="#fcfafa" boxShadow="lg">
              <Box mr={4}>
              <Image
                priority
                src="/googleicon.png"
                layout="fixed"
                width="30px"
                height="30px"
                alt="globe-svg"
              />
              </Box>
              <Text fontFamily="'Poppins'" fontWeight="600">Login With Google</Text>
            </Button>
          </Flex>
          <Text mt="20px" textAlign="center">Or</Text>
          
          <Flex px="50px" flexDirection="column" gap="9px">
            <Flex flexDirection="column" justifyContent="center" width="100%">
                <Text fontFamily="'Poppins'" fontWeight="500" fontSize="18px">Email</Text>
                <Input value={email} onChange={e=>setEmail(e.target.value)} width="100%" boxShadow="md" borderRadius="6px" backgroundColor="white" />
            </Flex>
            <Flex flexDirection="column" justifyContent="center" width="100%">
                <Text value={password} onChange={e=>setPassword(e.target.value)} fontFamily="'Poppins'" fontWeight="500" fontSize="18px">Password</Text>
                <Input type='password' width="100%" boxShadow="md" borderRadius="6px" backgroundColor="white" />
            </Flex>
            <Flex justifyContent="space-between">
              <Checkbox colorScheme='green' defaultChecked>
                Remember Me
              </Checkbox>
              <Text cursor='pointer' color="green">Forgot Password?</Text>
            </Flex>
          

            <Flex gap="2px" justifyContent="center" flexDirection="column">
              <Button width="100%" px="3" my="20px" borderRadius="10px" color="white" backgroundColor="#A4C15E" boxShadow="lg" fontFamily="'Poppins'">LOGIN</Button>
              <Flex gap="4px">
                <Text fontWeight="500" fontFamily="'Poppins'">Don't have an Account ?</Text>
                <Text cursor="pointer" fontWeight="500"  fontFamily="'Poppins'" color="green">Sign Up</Text>
              </Flex>
            </Flex>
          </Flex>

          
          

        </Section>
      </Container>
    </Layout>
  )
}

export default Login

