import React from 'react'
import { Box, Heading, Image, Text, Button, Flex } from '@chakra-ui/react'

const ActivityCard = ({ data }) => {
  const { _id, name, description, image } = data
  console.log(data)
  return (
    <Flex
      gap={4}
      bg="white"
      borderRadius="lg"
      boxShadow="md"
      alignItems="center"
      direction={{ base: 'column', lg: 'row' }}
      p={3}
      w="100%"
    >
      <Image
        src={image}
        alt="activity"
        w={{ base: '100%', lg: '160px' }}
        h={{ base: '100%', lg: '160px' }}
        objectFit="cover"
        borderRadius="lg"
      />
      <Box w="100%">
        <Box mb={4}>
          <Heading fontWeight="semibold" fontSize="24px">
            {name}
          </Heading>
          <Text as="p" fontFamily="'Poppins'" fontSize="16px">
            {description.length > 120
              ? description.slice(0, 120) + '...'
              : description}
          </Text>
        </Box>
        <Flex justify="space-between" alignItems="center" p={1}>
          <Text fontFamily="'Poppins'" fontSize="18px">
            Rs 20,000 /{' '}
            <Text as="span" fontSize="12px">
              person
            </Text>
          </Text>
          <Button
            bg="#8FB339"
            _hover={{ bg: '#125C13' }}
            color="white"
            fontFamily="'Roboto'"
            borderRadius="lg"
            px={{ base: 6, lg: 12 }}
          >
            Add to Cart
          </Button>
        </Flex>
      </Box>
    </Flex>
  )
}

export default ActivityCard
