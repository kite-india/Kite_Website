import React from 'react'
import {
  Box,
  Text,
  Heading,
  Input,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react'
import Section from '../components/Section'
import { BsSearch } from 'react-icons/bs'

const HeroSection = () => {
  return (
    <Box
      w="100%"
      h={{ base: '85vh', md: '75vh' }}
      display="flex"
      alignItems="center"
      justifyContent={{ base: 'center', lg: 'flex-start' }}
      pt={{ base: 3, md: 0 }}
      bgImage="url('/images/hero.png')"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPosition="center"
    >
      <Box
        position="absolute"
        zIndex={10}
        w="100%"
        mt={4}
        px={{ base: '3', md: '8.75rem' }}
      >
        <Section delay={0.2}>
          <Heading fontSize={{ base: '4rem', lg: '4.625rem' }} color="white">
            <Text
              as="span"
              color="#B7CE63"
              textShadow="0px 0px 0 rgb(183,206,99),
              -1px 1px  0 rgb(183,206,99),
              -2px 2px 1px rgba(0,0,0,0.08),
              -2px 2px 1px rgba(0,0,0,0.5),
              0px 0px 1px rgba(0,0,0,.2)"
            >
              Let&apos;s talk{' '}
            </Text>
            <Text
              as="span"
              textShadow="0px 0px 0 rgb(255,255,255),
              -1px 1px  0 rgb(255,255,255),
              -2px 2px 1px rgba(0,0,0,0.08),
              -2px 2px 1px rgba(0,0,0,0.5),
              0px 0px 1px rgba(0,0,0,.2)"
            >
              about
              <br /> your next trip!
            </Text>
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
