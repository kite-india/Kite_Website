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
import type { NextPage } from 'next'

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
    <Layout title="Password Info">
      <Text
        fontFamily="'Poppins'"
        fontWeight="500"
        fontSize={{ base: '20px', sm: '35px' }}
        m="100px"
        lineHeight="52px"
        align="center"
      >
        Password
      </Text>
      <Container
        maxW={{ base: 'container.sm', lg: 'container.md' }}
        my={12}
        borderWidth={3}
        w="100%"
        borderRadius="38px"
        boxShadow="lg"
      >
        <Section>
          <Text
            fontFamily="'Poppins'"
            fontWeight="500"
            fontSize={{ base: '18px', sm: '30px' }}
            lineHeight="45px"
            color="#464646"
            mt="29px"
            ml="84px"
            mb="20px"
          >
            Change Password
          </Text>
          <Flex flexDirection="column" px={{ base: 2, lg: '50px' }} gap={35}>
            <Flex
              flexDirection="column"
              justifyContent="center"
              width="100%"
              gap={15}
            >
              <Text
                fontFamily="'Poppins'"
                fontWeight="400"
                fontSize={{ base: '10px', sm: '20px' }}
                lineHeight="30px"
              >
                Old Password
              </Text>
              <Flex flexDirection="row">
                <InputGroup>
                  <Input
                    position="relative"
                    type={data[0].showPassword ? 'text' : 'password'}
                    width="100%"
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
            <Flex
              flexDirection="column"
              justifyContent="center"
              width="100%"
              gap={15}
            >
              <Text
                fontFamily="'Poppins'"
                fontWeight="400"
                fontSize={{ base: '10px', sm: '20px' }}
                lineHeight="30px"
              >
                New Password
              </Text>
              <InputGroup>
                <Input
                  position="relative"
                  type={data[1].showPassword ? 'text' : 'password'}
                  width="100%"
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
            <Flex
              flexDirection="column"
              justifyContent="center"
              width="100%"
              gap={15}
            >
              <Text
                fontFamily="'Poppins'"
                fontWeight="400"
                fontSize={{ base: '10px', sm: '20px' }}
                lineHeight="30px"
              >
                Confirm Password
              </Text>
              <InputGroup>
                <Input
                  position="relative"
                  type={data[2].showPassword ? 'text' : 'password'}
                  width="100%"
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
          </Flex>
          <Center>
            <Button
              mt="62px"
              px="3"
              borderRadius="10px"
              color="white"
              backgroundColor="#A4C15E"
              boxShadow="lg"
              fontFamily="'Poppins'"
              fontSize="17px"
              w="117px"
              height="50px"
            >
              Change
            </Button>
          </Center>
        </Section>
      </Container>
      <Container float="right" m="45px"></Container>
    </Layout>
  )
}
export default PasswordChange
