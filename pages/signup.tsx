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
import { Auth } from "aws-amplify";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup: React.FC = () => {
  const [flag, setFlag] = useState(true)

  const [signUparams, setSignUpParams] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '',
    birthdate: ''
  })

  async function registerHandler() {

    console.log(signUparams)
    try {
      const { user } = await Auth.signUp({
        username: signUparams.email,
        password: signUparams.password,
        attributes: {
          picture: "fds",
          birthdate: "rgfthgrhyd",
          phone_number: signUparams.phone,
          email: signUparams.email,
          name: signUparams.firstName+" "+signUparams.lastName

        }
      })

      console.log(user)

    }
    catch (e) {

      toast("Account Already Exist")
    }





  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setSignUpParams(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <Layout title="Login">
      <ToastContainer></ToastContainer>
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
                  name="firstName"
                  onChange={handleChange}
                  value={signUparams["firstName"]}
                  placeholder="First name"
                  width="100%"
                  height="53px"
                  boxShadow="md"
                  borderRadius="6px"
                  backgroundColor="white"
                />
                <Input
                  name="lastName"
                  onChange={handleChange}
                  value={signUparams["lastName"]}
                  placeholder="Last name"
                  width="100%"
                  height="53px"
                  boxShadow="md"
                  borderRadius="6px"
                  backgroundColor="white"
                />
              </Flex>
              <Input
                name="email"
                value={signUparams["email"]}
                onChange={handleChange}
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
                  name="password"
                  value={signUparams["password"]}
                  onChange={handleChange}
                  placeholder="Password"
                  width="100%"
                  height="53px"
                  boxShadow="md"
                  borderRadius="6px"
                  backgroundColor="white"
                />
                <Input
                   onChange={handleChange}
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
                name="phone"
                onChange={handleChange}
                value={signUparams["phone"]}
                placeholder="Phone"
                width="100%"
                height="53px"
                boxShadow="md"
                borderRadius="6px"
                backgroundColor="white"
              />
              <Input
                name="birthdate"
                onChange={handleChange}
                value={signUparams["birthdate"]}
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
                    onClick={registerHandler}
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
