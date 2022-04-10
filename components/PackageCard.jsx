import React from 'react'
import { useRouter } from 'next/router'
import {
  Box,
  Text,
  Flex,
  Image,
  SimpleGrid,
  Icon,
  ButtonGroup,
  Button
} from '@chakra-ui/react'

import { FiMap } from 'react-icons/fi'

const PackageCard = ({ data }) => {
  const router = useRouter()
  const { _id, location, price, activities, duration, image } = data
  const bookNow = () => {
    router.push(`/packages/${_id}/book-now`)
  }
  return (
    <Box as="div" boxShadow="lg" borderRadius="lg" maxW="container.sm" p={3}>
      <Image
        src={image}
        alt="card"
        w="500px"
        h="300px"
        mb={3}
        objectFit="cover"
        borderRadius="lg"
      />
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="space-between"
        w="100%"
        mb={3}
      >
        <Text fontFamily="'Poppins'" fontWeight="semibold" fontSize="24px">
          {location}
        </Text>
        <Text fontFamily="'Poppins'" fontWeight="normal" fontSize="16px">
          Duration: {duration}
        </Text>
      </Flex>
      <SimpleGrid
        fontFamily="'Poppins'"
        columns={2}
        align={{ base: 'center', lg: 'left' }}
        w="100%"
        spacingX="40px"
        px={1}
        mb={6}
      >
        <Box w="100%">
          {activities.map((tag, idx) => (
            <Text key={idx} w="100%">
              <Icon as={FiMap} mr={2} />
              {tag}
            </Text>
          ))}
        </Box>
        <Box w="100%">
          {activities.map((tag, idx) => (
            <Text key={idx} w="100%">
              <Icon as={FiMap} mr={2} />
              {tag}
            </Text>
          ))}
        </Box>
      </SimpleGrid>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="space-between"
        w="100%"
        gap={{ base: 2, lg: 0 }}
      >
        <Text fontFamily="'Poppins'" fontSize="18px">
          Rs {price}/{' '}
          <Text as="span" fontFamily="'Poppins'" fontSize="12px">
            person
          </Text>
        </Text>
        <ButtonGroup
          fontFamily="'Roboto'"
          color="white"
          w={{ base: '100%', lg: '60%' }}
          justifyContent="center"
        >
          <Button bg="#125C13" _hover={{ bg: '#8FB339' }} px={8}>
            More Info
          </Button>
          <Button
            bg="#8FB339"
            _hover={{ bg: '#125C13' }}
            onClick={bookNow}
            px={8}
          >
            Book Now
          </Button>
        </ButtonGroup>
      </Flex>
    </Box>
  )
}

export default PackageCard
