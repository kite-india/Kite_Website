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

const NextDestinationForm: React.FC = () => {
  function validateDestinationName(value) {
    let error
    if (!value) {
      error = 'Destination name is required'
    } else if (value.toLowerCase() !== 'naruto') {
      error = "Jeez! You're not a fan 😱"
    }
    return error
  }
  function validateCountry(value) {
    let error
    if (!value) {
      error = 'Country is required'
    } else if (value.toLowerCase() !== 'nepal') {
      error = "Jeez! You're not a tourist 😱"
    }
    return error
  }
  function validateName(value) {
    let error
    if (!value) {
      error = 'Name is required'
    } else if (value.toLowerCase() !== 'naruto') {
      error = "Jeez! You're not a fan 😱"
    }
    return error
  }
  function validateShootingCategory(value) {
    let error
    if (!value) {
      error = 'ShootingCategory is required'
    } else if (value.toLowerCase() !== 'blog') {
      error = "Jeez! You're not a blogger 😱"
    }
    return error
  }
  function validateDescription(value) {
    let error
    if (!value) {
      error = 'Description is required'
    } else if (value.length < 5) {
      error = "Jeez! You're not a blogger 😱"
    }
    return error
  }
  const initialValues = {
    destinationName: '',
    country: '',
    name: '',
    shootingCategory: ''
  }
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.800')}
      position={'relative'}
      py={{ base: '3', lg: '6' }}
      px="4"
    >
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
            Share your travels
          </Heading>
          <Text fontFamily="'Roboto'">
            Suggest a new travel destination that you want to see and we will
            feature it in our blog.
          </Text>
          <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                actions.setSubmitting(false)
              }, 1000)
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
                  <Field name="country" validate={validateCountry}>
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
                          placeholder="Shooting Category"
                        >
                          <option>Blog</option>
                          <option>option2</option>
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
                  <Field name="description" validate={validateDescription}>
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
