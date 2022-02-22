import React from 'react'
import Image from 'next/image'
import {
  Box,
  Text,
  Heading,
  Input,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react'
import Section from '../Section'
import { BsSearch } from 'react-icons/bs'

const HeroSection = () => {
  return (
    <Box
      w="100vw"
      h={{ base: '85vh', md: '65vh' }}
      display="flex"
      alignItems="center"
      justifyContent={{ base: 'center', md: 'flex-start' }}
      pt={{ base: 3, md: 0 }}
      bgImage="url('/images/background.jpg')"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPosition="center"
    >
      <Box
        position="absolute"
        zIndex={10}
        w="100vw"
        px={{ base: '3', md: '8.75rem' }}
      >
        <Section delay={0.2}>
          <Heading fontSize="4.625rem" color="white">
            <Text as="span" color="#B7CE63">
              Let&apos;s talk{' '}
            </Text>
            about
            <br /> your next trip!
          </Heading>
          <Text
            w={{ md: '31.56rem' }}
            fontSize="1.365rem"
            color="white"
            fontFamily="'Roboto'"
            mt={3}
          >
            Share your favorite travel destination and we will feature it in our
            next blog!
          </Text>
          <InputGroup w={{ md: '25rem' }} mt={8}>
            <InputLeftElement pointerEvents="none">
              <BsSearch color="#3E7C17" fontSize="1.2rem" />
            </InputLeftElement>
            <Input
              placeholder="Search"
              variant="filled"
              fontSize="1.2rem"
              color="#434343"
            />
          </InputGroup>
        </Section>
      </Box>
    </Box>
  )
}

export default HeroSection
