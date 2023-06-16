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

const NextDestinationForm: React.FC = () => {
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
      error = 'ShootingCategory is required'
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
    numberOfPeople: 0,
    email: '',
    phone: ''
  }
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.800')}
      position={'relative'}
      py={{ base: '3', lg: '6' }}
      px="4"
    >
      <ToastContainer></ToastContainer>
      <Box textAlign="center" gap={{ base: 2, lg: 4 }} pt={4}>
        <Section>
          <Heading
            color={'color13'}
            fontFamily="'Poppins'"
            size={'sm'}
            align={'center'}
          >
            LET&apos;S BUILD OUR COMMUNITY
          </Heading>
          <Heading
            color={'color5'}
            fontFamily={'Poppins'}
            fontSize={{ base: 'xl', sm: '3xl' }}
          >
            Join our next destination
          </Heading>
        </Section>
      </Box>
      <Flex minH={'50vh'} align={'center'} justify={'center'}>
        <Stack
          spacing={4}
          w={'full'}
          maxW={'md'}
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}
          my={8}
        >
          <Heading
            fontFamily="'Changa One'"
            lineHeight={1.1}
            color="#434343"
            fontWeight={'semibold'}
            fontSize={{ base: 'xl', sm: '2xl' }}
            as="h2"
          >
            Enquiry Form
          </Heading>
          <Text fontFamily="'Roboto'">
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
                <Stack spacing={4} fontFamily="'Roboto'" fontSize="16px">
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
                  {/* <Field name="country" validate={validateCountry}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.country && form.touched.country}
                      >
                        <Select
                          {...field}
                          id="country"
                          placeholder="Country of Destination"
                        >
                          <option>India</option>
                          <option>Nepal</option>
                          <option>Sri-Lanka</option>
                          <option>Bhutan</option>
                          <option>Switzerland</option>
                          <option>United Arab Emirates</option>
                          <option>Nigeria</option>
                        </Select>
                        <FormErrorMessage>
                          {form.errors.country}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field> */}
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
                          <option>Single</option>
                          <option>option3</option>
                          <option>option4</option>
                          <option>option5</option>
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
                          placeholder="No. Of People"
                        />
                        <FormErrorMessage>
                          {form.errors.numberOfPeople}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  {/* <Field name="description" validate={validateDescription}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.description && form.touched.description
                        }
                      >
                        <Textarea
                          {...field}
                          id="description"
                          placeholder="Describe what kind of photos you want to focus on"
                        />
                        <FormErrorMessage>
                          {form.errors.description}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field> */}
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

export default NextDestinationForm
