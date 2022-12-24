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
  Checkbox,
  Divider,
  Spacer,
  Select
} from '@chakra-ui/react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import Section from '@components/Section'

const Signup: React.FC = () => {
  const [flag, setFlag] = useState(true)

  return (
    <Layout title="Login">
      <Container
        maxW={{ base: 'container.sm', lg: 'container.sm' }}
        my={12}
        w="100%"
        padding="10px"
        borderWidth={3}
        borderRadius={16}
        backgroundColor="#f3f3f3"
        boxShadow="lg"
      >
        <Section delay={0.2}>
          {flag ? (
            <Flex
              px={{ base: 2, lg: '50px' }}
              flexDirection="column"
              gap="40px"
            >
              <Flex direction="column" gap="1">
                <Heading
                  textAlign="center"
                  fontFamily="'Poppins'"
                  fontWeight="600"
                  fontSize="48px"
                  mt={4}
                  letterSpacing="10px"
                >
                  SIGN UP
                </Heading>
                <Flex direction="row" justifyContent="center">
                  <Divider
                    borderColor="black"
                    orientation="horizontal"
                    w="40%"
                  />
                  <Spacer />
                  <Divider
                    borderColor="black"
                    orientation="horizontal"
                    w="40%"
                  />
                </Flex>
              </Flex>

              <Flex
                flexDirection="row"
                justifyContent="center"
                width="100%"
                gap={4}
              >
                <Input
                  placeholder="Firt name"
                  width="100%"
                  height="53px"
                  boxShadow="md"
                  borderRadius="6px"
                  backgroundColor="white"
                />
                <Input
                  placeholder="Last name"
                  width="100%"
                  height="53px"
                  boxShadow="md"
                  borderRadius="6px"
                  backgroundColor="white"
                />
              </Flex>
              <Input
                placeholder="Email"
                width="100%"
                height="53px"
                boxShadow="md"
                borderRadius="6px"
                backgroundColor="white"
              />
              <Flex
                flexDirection="row"
                justifyContent="center"
                width="100%"
                gap={4}
              >
                <Input
                  placeholder="Password"
                  width="100%"
                  height="53px"
                  boxShadow="md"
                  borderRadius="6px"
                  backgroundColor="white"
                />
                <Input
                  placeholder="Confirm"
                  width="100%"
                  height="53px"
                  boxShadow="md"
                  borderRadius="6px"
                  backgroundColor="white"
                />
              </Flex>

              <Flex justifyContent="space-between">
                <Checkbox colorScheme="green" defaultChecked>
                  Show Password
                </Checkbox>
                <Button
                  width="20%"
                  px="3"
                  my="20px"
                  borderRadius="10px"
                  color="white"
                  backgroundColor="#A4C15E"
                  boxShadow="lg"
                  fontFamily="'Poppins'"
                  onClick={() => {
                    setFlag(!flag)
                  }}
                >
                  Next
                </Button>
              </Flex>
            </Flex>
          ) : (
            <Flex
              px={{ base: 2, lg: '50px' }}
              flexDirection="column"
              gap="40px"
            >
              <Flex direction="column" gap="1">
                <Heading
                  textAlign="center"
                  fontFamily="'Poppins'"
                  fontWeight="600"
                  fontSize="48px"
                  mt={4}
                  letterSpacing="10px"
                >
                  SIGN UP
                </Heading>
                <Flex direction="row" justifyContent="center">
                  <Divider
                    borderColor="black"
                    orientation="horizontal"
                    w="40%"
                  />
                  <Spacer />
                  <Divider
                    borderColor="black"
                    orientation="horizontal"
                    w="40%"
                  />
                </Flex>
              </Flex>
              <Input
                placeholder="Phone"
                width="100%"
                height="53px"
                boxShadow="md"
                borderRadius="6px"
                backgroundColor="white"
              />
              <Input
                type="date"
                width="100%"
                height="53px"
                boxShadow="md"
                borderRadius="6px"
                backgroundColor="white"
              />
              <Select
                width="100%"
                height="53px"
                boxShadow="md"
                borderRadius="6px"
                backgroundColor="white"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Unknown">Unknown</option>
              </Select>
              <Flex direction="column">
                <Checkbox colorScheme="green" defaultChecked>
                  I agree to terms and conditions
                </Checkbox>
                <Flex justifyContent="space-between">
                  <Button
                    width="20%"
                    px="3"
                    my="20px"
                    borderRadius="10px"
                    color="white"
                    backgroundColor="#A4C15E"
                    boxShadow="lg"
                    fontFamily="'Poppins'"
                    onClick={() => {
                      setFlag(!flag)
                    }}
                  >
                    <AiOutlineArrowLeft size={20} />
                  </Button>
                  <Button
                    width="20%"
                    px="3"
                    my="20px"
                    borderRadius="10px"
                    color="white"
                    backgroundColor="#A4C15E"
                    boxShadow="lg"
                    fontFamily="'Poppins'"
                  >
                    Submit
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          )}
        </Section>
      </Container>
    </Layout>
  )
}

export default Signup
