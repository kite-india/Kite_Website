import React, { useState } from 'react'
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
  Spacer,
  InputGroup,
  InputRightElement,
  IconButton
} from '@chakra-ui/react'
import { GetServerSidePropsContext, NextPage } from 'next'
import { requireAuth } from '@utils/helpers/requireAuth'
import { useSession } from 'next-auth/react'
import { FiEdit2 } from 'react-icons/fi'

const Info: NextPage = () => {
  const { data: session } = useSession()
  const [data, setData] = useState({
    firstName: session.user.name,
    lastName: 'smith',
    location: 'usa',
    email: session.user.email,
    mobile: '99889988',
    date: '2013-01-08',
    gender: 'Female'
  })
  const [isEdit, setIsEdit] = useState({
    firstName: true,
    lastName: true,
    location: true,
    email: true,
    gender: true,
    mobile: true,
    date: true,
    changes: true
  })
  const handleSubmit = () => {
    console.log(data)
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
    setIsEdit({ ...isEdit, changes: false })
  }
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
    setIsEdit({ ...isEdit, changes: false })
  }
  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  return (
    <Layout title="Info">
      <Text
        fontFamily="'Poppins'"
        fontWeight="500"
        fontSize={{ base: '20px', sm: '25px', lg: '35px' }}
        m={{ base: '5px', sm: '100px' }}
        lineHeight="52px"
        align="center"
      >
        Personal info
      </Text>
      <Container
        maxW={{ base: 'container.sm', lg: 'container.lg' }}
        my={{ base: 0, sm: 14 }}
        borderWidth={{ base: 0, sm: 3 }}
        borderRadius="38px"
        boxShadow={{ base: 'none', sm: 'lg' }}
      >
        <Section>
          <Text
            fontFamily="'Poppins'"
            fontWeight="500"
            fontSize={{ base: '18px', lg: '30px' }}
            lineHeight="45px"
            color="#464646"
            visibility={{ base: 'collapse', lg: 'visible' }}
            m="29px"
            ml="50px"
          >
            Basic information
          </Text>
          <Flex direction={{ base: 'column', lg: 'row' }} gap="3">
            <Flex
              direction={{ base: 'column', sm: 'row', lg: 'column' }}
              textAlign="center"
            >
              <Text
                my={{ base: 4, sm: 0 }}
                fontFamily="'Poppins'"
                ml="50px"
                fontWeight="500"
                fontSize={{ base: '18px', sm: '25px', lg: '30px' }}
                lineHeight="45px"
                color="#464646"
                mx={{ base: '0', sm: '5' }}
                visibility={{ base: 'visible', lg: 'collapse' }}
              >
                Basic information
              </Text>
              <Spacer display={{ base: 'flex', lg: 'none' }} />

              <Flex
                direction="column"
                gap={{ base: '3', lg: '230' }}
                alignItems="center"
              >
                <Center mr={6}>
                  <Avatar
                    src={session ? session.user.image : undefined}
                    w={{ base: '100px', lg: '137.89px' }}
                    h="auto"
                  >
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
                display={{ base: 'none', lg: 'flex' }}
              />
            </Center>
            <Flex px="50px" flexDirection="column" gap="20px">
              <Flex
                flexDirection={{ base: 'column', sm: 'row' }}
                gap={10}
                fontSize={{ base: '15px', lg: '20px' }}
              >
                <Flex
                  flexDirection="column"
                  justifyContent="center"
                  width="100%"
                  gap={15}
                >
                  <Text
                    fontFamily="'Poppins'"
                    fontWeight="400"
                    lineHeight="30px"
                  >
                    First Name
                  </Text>
                  <InputGroup>
                    <Input
                      value={data.firstName}
                      name="firstName"
                      width="100%"
                      boxShadow="md"
                      borderRadius="6px"
                      backgroundColor="white"
                      disabled={isEdit.firstName}
                      onChange={handleChange}
                    />
                    <InputRightElement>
                      <IconButton
                        aria-label="Edit"
                        variant="none"
                        onMouseDown={handleMouseDownPassword}
                        onClick={() => {
                          setIsEdit({
                            ...isEdit,
                            ['firstName']: !isEdit.firstName
                          })
                        }}
                      >
                        <FiEdit2 />
                      </IconButton>
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
                    lineHeight="30px"
                  >
                    Last Name
                  </Text>
                  <InputGroup>
                    <Input
                      value={data.lastName}
                      name="lastName"
                      width="100%"
                      boxShadow="md"
                      borderRadius="6px"
                      backgroundColor="white"
                      disabled={isEdit.lastName}
                      onChange={handleChange}
                    />
                    <InputRightElement>
                      <IconButton
                        aria-label="Edit"
                        variant="none"
                        onMouseDown={handleMouseDownPassword}
                        onClick={() => {
                          setIsEdit({
                            ...isEdit,
                            ['lastName']: !isEdit.lastName
                          })
                        }}
                      >
                        <FiEdit2 />
                      </IconButton>
                    </InputRightElement>
                  </InputGroup>
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
                    lineHeight="30px"
                  >
                    Birthday
                  </Text>
                  <InputGroup>
                    <Input
                      type="date"
                      name="date"
                      width="100%"
                      boxShadow="md"
                      borderRadius="6px"
                      backgroundColor="white"
                      value={data.date}
                      disabled={isEdit.date}
                      onChange={handleChange}
                    />
                    <InputRightElement>
                      <IconButton
                        aria-label="Edit"
                        variant="none"
                        onMouseDown={handleMouseDownPassword}
                        onClick={() => {
                          setIsEdit({
                            ...isEdit,
                            ['date']: !isEdit.date
                          })
                        }}
                      >
                        <FiEdit2 />
                      </IconButton>
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
                    lineHeight="30px"
                  >
                    Gender
                  </Text>
                  <InputGroup>
                    <Select
                      width="100%"
                      name="gender"
                      value={data.gender}
                      boxShadow="md"
                      borderRadius="6px"
                      backgroundColor="white"
                      disabled={isEdit.gender}
                      onChange={handleSelectChange}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Unknown">Unknown</option>
                    </Select>
                    <InputRightElement>
                      <IconButton
                        aria-label="Edit"
                        variant="none"
                        onMouseDown={handleMouseDownPassword}
                        onClick={() => {
                          setIsEdit({
                            ...isEdit,
                            ['gender']: !isEdit.gender
                          })
                        }}
                      >
                        <FiEdit2 />
                      </IconButton>
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
                <Text fontFamily="'Poppins'" fontWeight="400" lineHeight="30px">
                  Location
                </Text>
                <InputGroup>
                  <Input
                    value={data.location}
                    name="location"
                    boxShadow="md"
                    borderRadius="6px"
                    backgroundColor="white"
                    disabled={isEdit.location}
                    onChange={handleChange}
                  />
                  <InputRightElement>
                    <IconButton
                      aria-label="Edit"
                      variant="none"
                      onMouseDown={handleMouseDownPassword}
                      onClick={() => {
                        setIsEdit({ ...isEdit, ['location']: !isEdit.location })
                      }}
                    >
                      <FiEdit2 />
                    </IconButton>
                  </InputRightElement>
                </InputGroup>
              </Flex>

              <Flex
                flexDirection="column"
                justifyContent="center"
                width="100%"
                gap={15}
              >
                <Text fontFamily="'Poppins'" fontWeight="400" lineHeight="30px">
                  Email
                </Text>
                <InputGroup>
                  <Input
                    value={data.email}
                    name="email"
                    type="email"
                    width="100%"
                    boxShadow="md"
                    borderRadius="6px"
                    backgroundColor="white"
                    disabled={isEdit.email}
                    onChange={handleChange}
                  />
                  <InputRightElement>
                    <IconButton
                      aria-label="Edit"
                      variant="none"
                      onMouseDown={handleMouseDownPassword}
                      onClick={() => {
                        setIsEdit({ ...isEdit, ['email']: !isEdit.email })
                      }}
                    >
                      <FiEdit2 />
                    </IconButton>
                  </InputRightElement>
                </InputGroup>
              </Flex>
              <Flex
                flexDirection="column"
                justifyContent="center"
                width="100%"
                gap={15}
              >
                <Text fontFamily="'Poppins'" fontWeight="400" lineHeight="30px">
                  Mobile
                </Text>
                <InputGroup>
                  <Input
                    value={data.mobile}
                    name="mobile"
                    type="number"
                    width="100%"
                    boxShadow="md"
                    borderRadius="6px"
                    backgroundColor="white"
                    disabled={isEdit.mobile}
                    onChange={handleChange}
                  />
                  <InputRightElement>
                    <IconButton
                      aria-label="Edit"
                      variant="none"
                      onMouseDown={handleMouseDownPassword}
                      onClick={() => {
                        setIsEdit({ ...isEdit, ['mobile']: !isEdit.mobile })
                      }}
                    >
                      <FiEdit2 />
                    </IconButton>
                  </InputRightElement>
                </InputGroup>
              </Flex>
              <Flex>
                <Spacer />
                <Button
                  bg="#8FB339"
                  _hover={{ bg: 'green.400' }}
                  _focus={{ bg: 'green.400' }}
                  isDisabled={isEdit.changes}
                  color="white"
                  fontFamily="'Roboto'"
                  borderRadius="10px"
                  fontSize={{ base: '15', sm: '20', md: '20' }}
                  px={{ base: 6, lg: 12 }}
                  py={{ base: 3, lg: 6 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleSubmit}
                >
                  Save Changes
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Section>
      </Container>
      <Container float="right" mb={8}></Container>
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
