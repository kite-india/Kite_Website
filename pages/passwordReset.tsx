import React, { useState } from 'react'
import Layout from '../components/layouts/main'
import Section from '../components/Section'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import {
  Text,
  Button,
  Flex,
  Container,
  Input,
  Center,
  InputRightElement,
  InputGroup,
  IconButton
} from '@chakra-ui/react'
import type { GetServerSidePropsContext, NextPage } from 'next'
import { requireAuth } from '@utils/helpers/requireAuth'

const PasswordChange: NextPage = () => {
  const [data, setData] = useState([
    {
      id: 0,
      password: '',
      showPassword: false
    },
    {
      id: 1,
      password: '',
      showPassword: false
    },
    {
      id: 2,
      password: '',
      showPassword: false
    }
  ])

  const handleClickShowPassword = i => e => {
    e.preventDefault()
    const newArr = [...data]
    newArr[i].showPassword = !newArr[i].showPassword
    setData(newArr)
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  return (
    <Layout title="Contact US">
      <Text
        fontFamily="'Poppins'"
        fontWeight="500"
        fontSize={{ base: '20px', sm: '35px' }}
        lineHeight="52px"
        m={6}
        align="center"
      >
        Password
      </Text>
      <Container maxW="container.xl" p={3} my={4}>
        <Section>
          <Center>
            <Flex
              rounded="lg"
              direction={{ base: 'column-reverse', lg: 'row' }}
              justifyContent="between"
              alignItems="center"
              py="2"
              px={{ base: 4, lg: 8 }}
              gap={{ base: 1, lg: 6 }}
              borderWidth={3}
              borderRadius="38px"
              boxShadow="lg"
              minW={{ base: '80%', md: '70%' }}
            >
              <Flex
                direction="column"
                gap={3}
                justifyContent="center"
                fontFamily="'Roboto'"
                w="100%"
              >
                <Text
                  fontFamily="'Poppins'"
                  fontWeight="500"
                  fontSize={{ base: '20px', md: '30px' }}
                  lineHeight="45px"
                  color="#464646"
                  my={4}
                >
                  Change Password
                </Text>
                <Flex direction="column" gap={1} w="100%">
                  <Text
                    fontFamily="'Poppins'"
                    fontWeight="500"
                    fontSize={{ base: '18px', md: '20px' }}
                    lineHeight="45px"
                    color="#464646"
                  >
                    Old password
                  </Text>
                  <Flex gap="4" direction={{ base: 'column', md: 'row' }}>
                    <InputGroup>
                      <Input
                        position="relative"
                        type={data[0].showPassword ? 'text' : 'password'}
                        boxShadow="md"
                        borderRadius="6px"
                        backgroundColor="white"
                      />
                      <InputRightElement width="4.5rem">
                        <IconButton
                          aria-label="Show Password"
                          variant="none"
                          onClick={handleClickShowPassword(0)}
                          onMouseDown={handleMouseDownPassword}
                          icon={
                            data[0].showPassword ? (
                              <AiFillEyeInvisible />
                            ) : (
                              <AiFillEye />
                            )
                          }
                        />
                      </InputRightElement>
                    </InputGroup>
                  </Flex>
                </Flex>
                <Flex direction="column" gap={1} w="100%">
                  <Text
                    fontFamily="'Poppins'"
                    fontWeight="500"
                    fontSize={{ base: '18px', md: '20px' }}
                    lineHeight="45px"
                    color="#464646"
                  >
                    New password
                  </Text>
                  <InputGroup>
                    <Input
                      position="relative"
                      type={data[1].showPassword ? 'text' : 'password'}
                      boxShadow="md"
                      borderRadius="6px"
                      backgroundColor="white"
                    />
                    <InputRightElement width="4.5rem">
                      <IconButton
                        aria-label="Show Password"
                        variant="none"
                        onClick={handleClickShowPassword(1)}
                        onMouseDown={handleMouseDownPassword}
                        icon={
                          data[1].showPassword ? (
                            <AiFillEyeInvisible />
                          ) : (
                            <AiFillEye />
                          )
                        }
                      />
                    </InputRightElement>
                  </InputGroup>
                </Flex>
                <Flex direction="column" gap={1} w="100%">
                  <Text
                    fontFamily="'Poppins'"
                    fontWeight="500"
                    fontSize={{ base: '18px', md: '20px' }}
                    lineHeight="45px"
                    color="#464646"
                  >
                    Confirm Password
                  </Text>
                  <InputGroup>
                    <Input
                      position="relative"
                      type={data[2].showPassword ? 'text' : 'password'}
                      boxShadow="md"
                      borderRadius="6px"
                      backgroundColor="white"
                    />
                    <InputRightElement width="4.5rem">
                      <IconButton
                        aria-label="Show Password"
                        variant="none"
                        onClick={handleClickShowPassword(2)}
                        onMouseDown={handleMouseDownPassword}
                        icon={
                          data[2].showPassword ? (
                            <AiFillEyeInvisible />
                          ) : (
                            <AiFillEye />
                          )
                        }
                      />
                    </InputRightElement>
                  </InputGroup>
                </Flex>
                <Center>
                  <Button
                    mt={6}
                    px="3"
                    borderRadius="10px"
                    color="white"
                    backgroundColor="#A4C15E"
                    boxShadow="lg"
                    fontFamily="'Poppins'"
                    fontSize={{ base: '18px', md: '20px' }}
                    w={{ base: '90px', md: '112px' }}
                    height="50px"
                  >
                    Change
                  </Button>
                </Center>
              </Flex>
            </Flex>
          </Center>
        </Section>
      </Container>
    </Layout>
  )
}
export default PasswordChange

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return requireAuth(context, session => {
    return {
      props: { session }
    }
  })
}
