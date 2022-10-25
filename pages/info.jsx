import React from 'react'
import Head from 'next/head'
import Layout from '../components/layouts/main'
import axios from 'axios'
import Section from '../components/Section'
import {
  Text,
  Button,
  Flex,
  Container,
  Image,
  Input,
  Center,
  Divider,
  Link,
  Avatar,
  AvatarBadge,
  Select
} from '@chakra-ui/react'

const Info = () => {
  return (
    <Layout>
      <Head>
        <title>Kite India - Home</title>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <Text
        fontFamily="'Poppins'"
        fontWeight="500"
        fontSize="35px"
        m="100px"
        lineHeight="52px"
        align="center"
      >
        Personal info
      </Text>
      <Container
        maxW="container.lg"
        my={12}
        borderWidth={3}
        borderRadius="38px"
        boxShadow="lg"
      >
        <Section>
          <Text
            fontFamily="'Poppins'"
            fontWeight="500"
            fontSize="30px"
            lineHeight="45px"
            color="#464646"
            mt="29px"
            ml="84px"
            mb="20px"
          >
            Basic information
          </Text>
          <Flex direction="row" gap="3">
            <Flex direction="column" ml="72px" mr="60px" gap="230">
              <Avatar w="137.89px" h="auto">
                <AvatarBadge borderColor="#FFFFFF" bg="#8A8888" boxSize="55px">
                  <Image src="./Vector.png"></Image>
                </AvatarBadge>
              </Avatar>
              <Link>
                <Text
                  fontFamily="'Poppins'"
                  w="154px"
                  fontWeight="500"
                  fontSize="20px"
                  color="#E83A3A;
"
                >
                  Delete Account
                </Text>
              </Link>
            </Flex>
            <Center height="429px">
              <Divider orientation="vertical" />
            </Center>
            <Flex px="50px" flexDirection="column" gap="9px">
              <Flex flexDirection="row" gap={10}>
                <Flex
                  flexDirection="column"
                  justifyContent="center"
                  width="100%"
                  gap={15}
                >
                  <Text
                    fontFamily="'Poppins'"
                    fontWeight="400"
                    fontSize="20px"
                    lineHeight="30px"
                  >
                    First Name
                  </Text>
                  <Input
                    width="268px"
                    boxShadow="md"
                    borderRadius="6px"
                    backgroundColor="white"
                  />
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
                    fontSize="20px"
                    lineHeight="30px"
                  >
                    Last Name
                  </Text>
                  <Input
                    width="268px"
                    boxShadow="md"
                    borderRadius="6px"
                    backgroundColor="white"
                  />
                </Flex>
              </Flex>
              <Flex flexDirection="row" gap={10}>
                <Flex
                  flexDirection="column"
                  justifyContent="center"
                  width="100%"
                  gap={15}
                >
                  <Text
                    fontFamily="'Poppins'"
                    fontWeight="400"
                    fontSize="20px"
                    lineHeight="30px"
                  >
                    Birthday
                  </Text>
                  <Input
                    type="date"
                    width="268px"
                    boxShadow="md"
                    borderRadius="6px"
                    backgroundColor="white"
                  />
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
                    fontSize="20px"
                    lineHeight="30px"
                  >
                    Gender
                  </Text>
                  <Select>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Unknown">Unknown</option>
                  </Select>
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
                  fontSize="20px"
                  lineHeight="30px"
                >
                  Location
                </Text>
                <Flex flexDirection="row" gap={10}>
                  <Input
                    type="country"
                    width="268px"
                    boxShadow="md"
                    borderRadius="6px"
                    backgroundColor="white"
                  />
                  <Input
                    width="268px"
                    boxShadow="md"
                    borderRadius="6px"
                    backgroundColor="white"
                  />
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
                  fontSize="20px"
                  lineHeight="30px"
                >
                  Email
                </Text>
                <Input
                  type="email"
                  width="100%"
                  boxShadow="md"
                  borderRadius="6px"
                  backgroundColor="white"
                />
              </Flex>
            </Flex>
          </Flex>
        </Section>
      </Container>
      <Container float="right" m="45px">
        <Button
          px="3"
          borderRadius="10px"
          color="white"
          backgroundColor="#A4C15E"
          boxShadow="lg"
          fontFamily="'Poppins'"
          w="229px"
          height="56px"
        >
          Save Changes
        </Button>
      </Container>
    </Layout>
  )
}
export default Info
