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
    <Box
      display={'flex'}
      flexDirection={'column'}
      // justifyContent={'space-around'}
      // gap={2}
      as="div"
      boxShadow="lg"
      borderRadius="lg"
      maxW="600px"
      p={6}
    >
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
        mb={6}
      >
        <Text fontFamily="'Poppins'" fontWeight="semibold" fontSize="24px">
          {location}
        </Text>
        <Spacer />
        <Text fontFamily="'Poppins'" fontWeight={500} p={3} fontSize="16px">
          Duration:{` 5 Days / 4 Nights`}
        </Text>
      </Flex>
      <Text
        fontFamily="'Poppins'"
        fontWeight={700}
        fontSize="18px"
        lineHeight="10px"
      >
        Plan Includes:
      </Text>

      <Text
        // height="56px"
        fontFamily="'Poppins'"
        fontWeight="normal"
        fontSize="16px"
        // marginBottom="22px"
        pt={'3'}
      >
        {description}
      </Text>
      <Flex
        justifyContent={'space-between'}
        flexDirection={'column'}
        flexGrow={1}
      >
        <SimpleGrid
          mt={2}
          fontFamily="'Poppins'"
          columns={2}
          alignItems={{ base: 'center', lg: 'left' }}
          w="full"
          pt={3}
        >
          {activities.map(tag => (
            <Box w="100%">
              <Text key={tag}>
                <Icon as={FiMap} mr={2} />
                {tag}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
        <SimpleGrid
          mt={3}
          fontFamily="'Poppins'"
          columns={2}
          alignItems={{ base: 'center', lg: 'left' }}
          w="100%"
          spacingX="40px"
          px={1}
        >
          <Text fontFamily="'Poppins'" fontSize="18px" fontWeight={'bold'}>
            Rs {cost}/{' '}
            <Text
              as="span"
              fontWeight={'normal'}
              fontFamily="'Poppins'"
              fontSize="12px"
            >
              person
            </Text>
          </Text>
          <Flex
            direction={{ base: 'column', md: 'row' }}
            align="center"
            justify="space-between"
            w="100%"
            gap={{ base: 2, lg: 0 }}
          >
            <ButtonGroup gap={2}>
              <Button
                color="white"
                textAlign="center"
                px={4}
                py={2}
                bg="#125C13"
                _hover={{ bg: '#8FB339' }}
              >
                More Info
              </Button>
              <Button
                textAlign="center"
                color="white"
                bg="#8FB339"
                px={4}
                py={2}
                _hover={{ bg: '#125C13' }}
                onClick={bookNow}
              >
                Book Now
              </Button>
            </ButtonGroup>
          </Flex>
        </SimpleGrid>
      </Flex>
    </Box>
  )
}

export default PackageCard
