import React from 'react'
import Layout from '../components/layouts/main'
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
  Select,
  Spacer
} from '@chakra-ui/react'
import { GetServerSidePropsContext, NextPage } from 'next'
import { requireAuth } from '@utils/helpers/requireAuth'

const Info: NextPage = () => {
  return (
    <Layout title="Info">
      <Text
        fontFamily="'Poppins'"
        fontWeight="500"
        fontSize={{ base: '20px', sm: '25px', lg: '35px' }}
        m={{ base: '20px', sm: '100px' }}
        lineHeight="52px"
        align="center"
      >
        Personal info
      </Text>
      <Container
        maxW={{ base: 'container.sm', lg: 'container.lg' }}
        my={12}
        borderWidth={3}
        borderRadius="38px"
        boxShadow="lg"
      >
        <Section>
          <Text
            fontFamily="'Poppins'"
            fontWeight="500"
            fontSize={{ base: '18px', lg: '30px' }}
            lineHeight="45px"
            color="#464646"
            visibility={{ base: 'collapse', lg: 'visible' }}
            mt="29px"
            ml="50px"
          >
            Basic information
          </Text>
          <Flex direction={{ base: 'column', lg: 'row' }} gap="3">
            <Flex direction={{ base: 'column', sm: 'row', lg: 'column' }}>
              <Text
                fontFamily="'Poppins'"
                ml="50px"
                fontWeight="500"
                fontSize={{ base: '18px', sm: '25px', lg: '30px' }}
                lineHeight="45px"
                color="#464646"
                m={{ base: '0', sm: '5' }}
                visibility={{ base: 'visible', lg: 'collapse' }}
              >
                Basic information
              </Text>
              <Spacer></Spacer>

              <Flex
                direction="column"
                gap={{ base: '3', lg: '230' }}
                alignItems="center"
              >
                <Center mr={6}>
                  <Avatar w={{ base: '100px', lg: '137.89px' }} h="auto">
                    <AvatarBadge
                      borderColor="#FFFFFF"
                      bg="#8A8888"
                      boxSize={{ base: '20px', lg: '50px' }}
                    >
                      <Image src="./Vector.png" alt="vector-img" />
                    </AvatarBadge>
                  </Avatar>
                </Center>
                <Center mr={6}>
                  <Link>
                    <Text
                      fontFamily="'Poppins'"
                      fontWeight="500"
                      fontSize={{ base: '10px', lg: '20px' }}
                      color="#E83A3A;
"
                    >
                      Delete Account
                    </Text>
                  </Link>
                </Center>
              </Flex>
            </Flex>
            <Center>
              <Divider
                orientation="vertical"
                visibility={{ base: 'hidden', lg: 'inherit' }}
              />
            </Center>
            <Flex px="50px" flexDirection="column" gap="9px">
              <Flex flexDirection={{ base: 'column', sm: 'row' }} gap={10}>
                <Flex
                  flexDirection="column"
                  justifyContent="center"
                  width="100%"
                  gap={15}
                >
                  <Text
                    fontFamily="'Poppins'"
                    fontWeight="400"
                    fontSize={{ base: '10px', lg: '20px' }}
                    lineHeight="30px"
                  >
                    First Name
                  </Text>
                  <Input
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
                  gap={15}
                >
                  <Text
                    fontFamily="'Poppins'"
                    fontWeight="400"
                    fontSize={{ base: '10px', lg: '20px' }}
                    lineHeight="30px"
                  >
                    Last Name
                  </Text>
                  <Input
                    width="100%"
                    boxShadow="md"
                    borderRadius="6px"
                    backgroundColor="white"
                  />
                </Flex>
              </Flex>
              <Flex flexDirection={{ base: 'column', sm: 'row' }} gap={10}>
                <Flex
                  flexDirection="column"
                  justifyContent="center"
                  width="100%"
                  gap={15}
                >
                  <Text
                    fontFamily="'Poppins'"
                    fontWeight="400"
                    fontSize={{ base: '10px', lg: '20px' }}
                    lineHeight="30px"
                  >
                    Birthday
                  </Text>
                  <Input
                    type="date"
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
                  gap={15}
                >
                  <Text
                    fontFamily="'Poppins'"
                    fontWeight="400"
                    fontSize={{ base: '10px', lg: '20px' }}
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
                  fontSize={{ base: '10px', lg: '20px' }}
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
                    width="100%"
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
                  fontSize={{ base: '10px', lg: '20px' }}
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
      <Container float="right" mb={8}>
        <Center>
          <Button
            width={{ base: '50%', lg: '75%' }}
            borderRadius="10px"
            color="white"
            backgroundColor="#A4C15E"
            boxShadow="lg"
            fontFamily="'Poppins'"
            height="56px"
          >
            Save Changes
          </Button>
        </Center>
      </Container>
    </Layout>
  )
}
export default Info

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return requireAuth(context, session => {
    return {
      props: { session }
    }
  })
}
