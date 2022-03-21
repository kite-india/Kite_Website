import React from 'react'
import { Box, Text, Flex, Image, SimpleGrid, Icon } from '@chakra-ui/react'

import { FiMap } from 'react-icons/fi'

const PackageCard = ({ tags }) => {
  return (
    <Box as="div" boxShadow="lg" borderRadius="lg" maxW="container.sm" p={3}>
      <Image src="/images/trips.png" alt="card" w="100%" mb={3} />
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="space-between"
        w="100%"
        mb={3}
      >
        <Text fontFamily="'Poppins'" fontWeight="semibold" fontSize="24px">
          Location
        </Text>
        <Text fontFamily="'Poppins'" fontWeight="normal" fontSize="16px">
          Duration: 5 Days / 4 Nights
        </Text>
      </Flex>
      <SimpleGrid
        fontFamily="'Poppins'"
        columns={{ base: 2, md: 2 }}
        align={{ base: 'center', lg: 'left' }}
        w="100%"
        spacingX="40px"
        px={3}
      >
        <Box w="100%">
          {tags.map((tag, idx) => (
            <Text key={idx} w="100%">
              <Icon as={FiMap} mr={2} />
              {tag}
            </Text>
          ))}
        </Box>
        <Box w="100%">
          {tags.map((tag, idx) => (
            <Text key={idx} w="100%">
              <Icon as={FiMap} mr={2} />
              {tag}
            </Text>
          ))}
        </Box>
      </SimpleGrid>
    </Box>
  )
}

export default PackageCard
