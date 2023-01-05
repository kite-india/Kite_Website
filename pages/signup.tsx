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
  Select,
  FormControl,
  FormErrorMessage,
  useBoolean
} from '@chakra-ui/react'
import { Formik, Field, ErrorMessage } from 'formik'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import Section from '@components/Section'

const Signup: React.FC = () => {
  const [flag, setFlag] = useState(true)
  const [password, setPassword] = useState('')
  const [check, setCheck] = useBoolean(true)

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
          <div>
            {flag ? (
              <Formik
                initialValues={{
                  fname: '',
                  lname: '',
                  email: '',
                  pass: '',
                  cpass: ''
                }}
                onSubmit={values => {
                  setFlag(false)
                  // alert(JSON.stringify(values, null, 2))
                }}
              >
                {({ handleSubmit, errors, touched }) => (
                  <form onSubmit={handleSubmit}>
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
                        <FormControl
                          isInvalid={!!errors.fname && touched.fname}
                        >
                          <Field
                            as={Input}
                            placeholder="First name"
                            name="fname"
                            id="name"
                            width="100%"
                            height="53px"
                            boxShadow="md"
                            borderRadius="6px"
                            backgroundColor="white"
                            validate={value => {
                              if (value.length < 3) {
                                return 'First name should be over 3 characters.'
                              }
                            }}
                          />
                          <FormErrorMessage>{errors.fname}</FormErrorMessage>
                        </FormControl>
                        <FormControl
                          isInvalid={!!errors.lname && touched.lname}
                        >
                          <Field
                            as={Input}
                            placeholder="Last name"
                            name="lname"
                            id="lname"
                            width="100%"
                            height="53px"
                            boxShadow="md"
                            borderRadius="6px"
                            backgroundColor="white"
                            validate={value => {
                              if (value.length < 3) {
                                return 'Last name should be over 3 characters.'
                              }
                            }}
                          />
                          <FormErrorMessage>{errors.lname}</FormErrorMessage>
                        </FormControl>
                      </Flex>
                      <FormControl isInvalid={!!errors.email && touched.email}>
                        <Field
                          as={Input}
                          type="email"
                          placeholder="Email"
                          name="email"
                          id="email"
                          width="100%"
                          height="53px"
                          boxShadow="md"
                          borderRadius="6px"
                          backgroundColor="white"
                          validate={value => {
                            if (value.length < 6) {
                              return 'Email should be over 6 characters.'
                            }
                          }}
                        />
                        <FormErrorMessage>{errors.email}</FormErrorMessage>
                      </FormControl>

                      <Flex
                        flexDirection="row"
                        justifyContent="center"
                        width="100%"
                        gap={4}
                      >
                        <FormControl isInvalid={!!errors.pass && touched.pass}>
                          <Field
                            as={Input}
                            placeholder="Password"
                            name="pass"
                            type={check ? '' : 'password'}
                            id="pass"
                            width="100%"
                            height="53px"
                            boxShadow="md"
                            borderRadius="6px"
                            backgroundColor="white"
                            validate={value => {
                              setPassword(value)
                              if (value.length < 6) {
                                return 'Password should be over 6 characters.'
                              }
                            }}
                          />
                          <FormErrorMessage>{errors.pass}</FormErrorMessage>
                        </FormControl>
                        <FormControl
                          isInvalid={!!errors.cpass && touched.cpass}
                        >
                          <Field
                            as={Input}
                            placeholder="Confirm"
                            name="cpass"
                            id="cpass"
                            type={check ? '' : 'password'}
                            width="100%"
                            height="53px"
                            boxShadow="md"
                            borderRadius="6px"
                            backgroundColor="white"
                            validate={value => {
                              if (value.length < 6) {
                                return 'Confirm Password should be over 6 characters.'
                              } else if (value !== password) {
                                return 'Password and Confirm Password Should Match'
                              }
                            }}
                          />
                          <FormErrorMessage>{errors.cpass}</FormErrorMessage>
                        </FormControl>
                      </Flex>

                      <Flex justifyContent="space-between">
                        <Checkbox
                          colorScheme="green"
                          onChange={() => {
                            setCheck.toggle()
                            // console.log(check)
                          }}
                          defaultChecked
                        >
                          Show Password
                        </Checkbox>
                        <Button
                          width="20%"
                          type="submit"
                          px="3"
                          my="20px"
                          borderRadius="10px"
                          color="white"
                          backgroundColor="#A4C15E"
                          boxShadow="lg"
                          fontFamily="'Poppins'"
                        >
                          Next
                        </Button>
                      </Flex>
                    </Flex>
                  </form>
                )}
              </Formik>
            ) : (
              <Formik
                initialValues={{
                  phone: '',
                  date: ''
                }}
                onSubmit={values => {
                  // setFlag(false)
                  // alert(JSON.stringify(values, null, 2))
                }}
              >
                {({ handleSubmit, errors, touched }) => (
                  <form>
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
                      <FormControl isInvalid={!!errors.phone && touched.phone}>
                        <Field
                          as={Input}
                          required
                          type={'number'}
                          id="phone"
                          name="phone"
                          placeholder="Phone"
                          validate={value => {
                            if (value + ''.length != 10)
                              return 'Should be a valid phone number'
                          }}
                          width="100%"
                          height="53px"
                          boxShadow="md"
                          borderRadius="6px"
                          backgroundColor="white"
                        />
                        <FormErrorMessage>{errors.phone}</FormErrorMessage>
                      </FormControl>
                      <FormControl isInvalid={!!errors.date && touched.date}>
                        <Field
                          required
                          as={Input}
                          type="date"
                          width="100%"
                          height="53px"
                          id="date"
                          name="date"
                          boxShadow="md"
                          borderRadius="6px"
                          backgroundColor="white"
                          validate={value => {
                            // console.log(Date(value) < Date())
                            var selected = new Date(value)
                            var today = new Date()
                            if (selected < today)
                              return 'Please enter current or future date'
                          }}
                        />

                        <FormErrorMessage>{errors.date}</FormErrorMessage>
                      </FormControl>

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
                        <Checkbox colorScheme="green" required defaultChecked>
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
                            type="submit"
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
                  </form>
                )}
              </Formik>
            )}
          </div>
        </Section>
      </Container>
    </Layout>
  )
}

export default Signup
