import React from 'react'
import { useRouter } from 'next/router'
import {
  Box,
  Text,
  Flex,
  SimpleGrid,
  Icon,
  ButtonGroup,
  Button,
  Spacer
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
    <Box as="div" boxShadow="lg" borderRadius="lg" maxW="600px" p={6} h="full">
      <Box
        // w={{ base: '100%', lg: '380px' }}
        // h={{ base: '100%', lg: '240px' }}
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
        flexDirection="column"
        align="center"
        justify="space-between"
        w="100%"
        mb={3}
      >
        <Text fontFamily="'Poppins'" fontWeight="semibold" fontSize="24px">
          {location}
        </Text>
        {/* <Text fontFamily="'Poppins'" fontWeight="normal" fontSize="16px">
          Description: {description}
        </Text> */}
        <Spacer />
        <Text fontFamily="'Poppins'" fontWeight={500} fontSize="16px">
          Duration:{` 5 Days / 4 Nights`}
        </Text>
      </Flex>
      <Text
        fontFamily="'Poppins'"
        fontWeight={500}
        fontSize="18px"
        lineHeight="24px"
      >
        Plan Includes:
      </Text>
      <SimpleGrid
        mt={3}
        fontFamily="'Poppins'"
        columns={2}
        alignItems={{ base: 'center', lg: 'left' }}
        w="100%"
        spacingX="40px"
        px={1}
        mb={6}
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
            height="100px"
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
      </SimpleGrid>
    </Box>
  )
}

export default PackageCard
