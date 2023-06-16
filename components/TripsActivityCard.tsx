import React, { useState } from 'react'
import { Box, Heading, Text, Button, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import type { Activity } from '@utils/types'
import CustomImage from './CustomImage'

interface IProps {
  data: Activity
}

const TripsActivityCard: React.FC<IProps> = ({ data }) => {
  const { id, name, description, image, cost } = data

  if (!data) return null
  return (
    <Flex
      gap={4}
      height={{ base: '360px', lg: '200px' }}
      bg="white"
      borderRadius="lg"
      boxShadow="md"
      alignItems="center"
      direction={{ base: 'column', lg: 'row' }}
      p={3}
      w="100%"
    >
      <Box
        w={{ base: '100%', lg: '320px' }}
        h={{ base: '180px', md: '40vh', lg: '160px' }}
        borderRadius="lg"
        overflow="hidden"
        position="relative"
      >
        <CustomImage
          src={image}
          alt="activity"
          layout="fill"
          objectFit="cover"
          objectPosition="50%"
          loading="lazy"
        />
      </Box>
      <Box w="100%">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          mb={4}
        >
          <Heading fontWeight="semibold" fontSize="24px">
            {name}
          </Heading>
          <Text as="p" fontFamily="'Poppins'" fontSize="16px">
            {description.slice(0, 100) + '...'}
          </Text>
        </Flex>
        <Flex justify="space-between" gap={4} alignItems="center" p={1}>
          <Text fontFamily="'Poppins'" fontSize="18px">
            Rs {cost} /{' '}
            <Text as="span" fontSize="12px">
              person
            </Text>
          </Text>
        </Flex>
      </Box>
    </Flex>
  )
}

export default TripsActivityCard
