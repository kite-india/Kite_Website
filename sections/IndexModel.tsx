import React from 'react'
import { Formik, Form, Field } from 'formik'
import {
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
  Box,
  Select,
  Textarea,
  FormErrorMessage
} from '@chakra-ui/react'
import { Section } from '../components'
import { motion } from 'framer-motion'
import { API } from 'aws-amplify'
import { GraphQLQuery } from '@aws-amplify/api'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { CreateEnquiryInput } from 'src/API'
import { relative } from 'path'

const IndexModal: React.FC = () => {
  function validateDestinationName(value) {
    let error = ''
    if (!value) {
      error = 'Destination name is required'
    }
    return error
  }

  function validateNumberOfPeople(value) {
    let error = ''
    if (!value) {
      error = 'Number of people is Required'
    } else if (isNaN(value)) {
      error = 'Enter a Valid Number'
    }
    return error
  }

  function validateName(value) {
    let error = ''
    if (!value) {
      error = 'Name is required'
    }
    return error
  }

  function validateEmail(value) {
    let error = ''
    if (!value) {
      error = 'Email is required'
    }
    return error
  }

  function validatePhone(value) {
    let error = ''
    if (!value) {
      error = 'Phone is required'
    } else if (isNaN(value)) {
      error = 'Enter phone number'
    }
    return error
  }

  function validateShootingCategory(value) {
    let error = ''
    if (!value) {
      error = 'Vacaction Type is required'
    }
    return error
  }

  function validateDescription(value) {
    let error = ''
    if (!value) {
      error = 'Description is required'
    }
    return error
  }
  const initialValues = {
    destinationName: '',
    name: '',
    shootingCategory: '',
    numberOfPeople: '',
    email: '',
    phone: ''
  }
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.800')}
      position={'relative'}
      bottom={8}
      py={{ base: '3', lg: '6' }}
      px="4"
      mx={12}
    >
      <ToastContainer></ToastContainer>
      <Box textAlign="center" gap={{ base: 1, lg: 4 }} pt={4}>
        <Section>
          <Heading
            color={'color13'}
            fontFamily="'Poppins'"
            size={'xs'}
            textAlign={'center'}
          >
            LET&apos;S BUILD OUR COMMUNITY
          </Heading>
          <Heading
            color={'color5'}
            fontFamily={'Poppins'}
            fontSize={{ base: 'xl', sm: 'sm', md: 'sm' }}
          >
            Join our next destination
          </Heading>
        </Section>
      </Box>
      <Flex minH={'30vh'} align={'center'} justify={'center'}>
        <Stack
          w={'full'}
          maxW={'sm'}
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'2xl'}
          boxShadow={'lg'}
          p={3}
        >
          <Heading
            fontFamily="'Changa One'"
            lineHeight={1.1}
            color="#434343"
            fontWeight={'semibold'}
            fontSize={{ sm: 'sm', md: '2xl' }}
            as="h2"
          >
            Enquiry Form
          </Heading>
          <Text fontFamily="'Roboto'" fontSize={{ sm: 'sm', md: 'xl' }}>
            Suggest a new travel destination that you want to see and we will
            feature it in our blog.
          </Text>
          <Formik
            initialValues={initialValues}
            onSubmit={async (values, actions) => {
              values.numberOfPeople = Number(values.numberOfPeople)
              console.log(values)

              try {
                const createEnq = await API.graphql<
                  GraphQLQuery<CreateEnquiryInput>
                >({
                  query: `
                mutation MyMutation {
                  createEnquiry(input: {number_of_people: ${Number(
                    values.numberOfPeople
                  )}, name: "${values.name}", phone_number: "${
                    values.phone
                  }" vacation_type: "${values.shootingCategory}", email: "${
                    values.email
                  }", destination_name: "${values.destinationName}"}) {
                    email
                    id
                    name
                    number_of_people
                    phone_number
                    vacation_type
                  }
                }
                `
                })

                toast('Success')
              } catch (e) {
                toast('Error')
              }
            }}
          >
            {props => (
              <Form>
                <Stack fontFamily="'Roboto'" fontSize="10px">
                  <Field
                    name="destinationName"
                    validate={validateDestinationName}
                  >
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.destinationName &&
                          form.touched.destinationName
                        }
                      >
                        <Input
                          {...field}
                          id="destinationName"
                          placeholder="Destination Name"
                        />
                        <FormErrorMessage>
                          {form.errors.destinationName}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="name" validate={validateName}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.name && form.touched.name}
                      >
                        <Input {...field} id="name" placeholder="Your Name" />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="email" validate={validateEmail}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.email && form.touched.email}
                      >
                        <Input {...field} id="email" placeholder="Email" />
                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="phone" validate={validatePhone}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.phone && form.touched.phone}
                      >
                        <Input
                          {...field}
                          id="phone"
                          placeholder="Phone Number"
                        />
                        <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field
                    name="shootingCategory"
                    validate={validateShootingCategory}
                  >
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.shootingCategory &&
                          form.touched.shootingCategory
                        }
                      >
                        <Select
                          {...field}
                          id="shootingCategory"
                          placeholder="Vacation Type"
                        >
                          <option>Couples</option>
                          <option>Solo</option>
                          <option>Groups</option>
                        </Select>
                        <FormErrorMessage>
                          {form.errors.shootingCategory}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field
                    name="numberOfPeople"
                    validate={validateNumberOfPeople}
                  >
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.numberOfPeople &&
                          form.touched.numberOfPeople
                        }
                      >
                        <Input
                          {...field}
                          id="numberOfPeople"
                          placeholder="No.Of People"
                        />
                        <FormErrorMessage>
                          {form.errors.numberOfPeople}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Button
                    isLoading={props.isSubmitting}
                    type="submit"
                    maxWidth={'160px'}
                    bg={'color13'}
                    color={'white'}
                    w="full"
                    _hover={{
                      bg: 'color5'
                    }}
                    as={motion.button}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    mt={2}
                  >
                    Submit
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
        </Stack>
      </Flex>
    </Box>
  )
}

export default IndexModal
