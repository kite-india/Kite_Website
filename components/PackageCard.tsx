import React from 'react'
import { useRouter } from 'next/router'
import {
  Box,
  Text,
  Flex,
  SimpleGrid,
  Icon,
  ButtonGroup,
  Button
} from '@chakra-ui/react'
import { FiMap } from 'react-icons/fi'
import Image from 'next/image'
import type { Trip } from '@utils/types'
import CustomImage from './CustomImage'
import { transform } from 'framer-motion'

interface PackageProps {
  data: Trip
}

const PackageCard: React.FC<PackageProps> = ({ data }) => {
  const router = useRouter()
  const { id, location, cost, activities, description, image } = data
  const bookNow = () => {
    router.push(`/packages/${id}/book-now`)
  }
  return (
    <Box
      _hover={{ scale: 1.1 }}
      as="div"
      boxShadow="2xl"
      borderRadius="lg"
      maxW="container.sm"
      p={3}
    >
      <Flex
        flexDirection="column"
        align="center"
        justify="space-between"
        gap="11px"
      >
        <Flex flexDirection="column">
          <Box
            w={{ base: '100%', lg: '380px' }}
            h={{ base: '100%', lg: '240px' }}
            mb={3}
            borderRadius="xl"
            overflow="hidden"
          >
            <CustomImage
              src={image}
              alt="card"
              objectFit="cover"
              layout="responsive"
              sizes="100vw"
              width={380}
              height={240}
            />
          </Box>
          <Flex
            direction={{ base: 'column', md: 'row' }}
            align="center"
            justify="space-between"
            w="100%"
            mb={3}
          >
            <Flex direction={'column'}>
              <Text
                textAlign="center"
                fontFamily="'Poppins'"
                fontWeight="semibold"
                fontSize="24px"
              >
                {location}
              </Text>
              <Text
                height="56px"
                fontFamily="'Poppins'"
                fontWeight="normal"
                fontSize="16px"
                marginBottom="22px"
              >
                <Text>Description: </Text>
                {description.slice(0, 80) + '....'}
              </Text>
            </Flex>
          </Flex>
          <SimpleGrid
            fontFamily="'Poppins'"
            w="100%"
            mb={4}
            columns={2}
            height="80px"
          >
            {activities.map(tag => (
              <Text key={tag} w="100%">
                <Icon as={FiMap} mr={2} />
                {tag}
              </Text>
            ))}
          </SimpleGrid>
        </Flex>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align="center"
          justify="space-between"
          w="100%"
          gap={{ base: 2, lg: 0 }}
        >
          <Text fontFamily="'Poppins'" fontSize="18px">
            Rs {cost}/{' '}
            <Text as="span" fontFamily="'Poppins'" fontSize="12px">
              person
            </Text>
          </Text>
          <ButtonGroup
            fontFamily="'Roboto'"
            color="white"
            w={{ base: '100%', lg: '60%' }}
            justifyContent="center"
            alignItems="center"
            height="66px"
          >
            <Button bg="#125C13" _hover={{ bg: '#8FB339' }} px={8}>
              More Info
            </Button>
            <Button bg="#8FB339" _hover={{ bg: '#125C13' }} onClick={bookNow}>
              Book Now
            </Button>
          </ButtonGroup>
        </Flex>
      </Flex>
    </Box>
  )
}

export default PackageCard
