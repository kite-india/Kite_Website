import React from 'react'
import { Box, Text, Heading, Flex } from '@chakra-ui/react'
import Layout from '../components/layouts/main'

const Gallery = () => {
  return (
    <Layout>
      <Flex
        maxW="container.xl"
        my={8}
        direction={{ base: 'column', lg: 'row' }}
        justify="space-evenly"
        align="center"
      >
        <Box maxW="container.md">
          <Heading mb={4} fontSize="128px" fontWeight="semibold">
            Gallery
          </Heading>
          <Text fontFamily="'Poppins'" fontSize="22px" fontWeight="light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            assumenda, cum minus veritatis eveniet ut itaque repudiandae ducimus
            architecto libero in adipisci dolore officia corporis aperiam quia
            nulla. A, neque.
          </Text>
        </Box>
        <Box>{/*SVG here */}</Box>
      </Flex>
      <hr style={{ backgroundColor: '#125C13', height: '12px' }} />
      <hr
        style={{
          backgroundColor: '#3E7C17',
          height: '12px'
        }}
      />
      <hr style={{ backgroundColor: '#8FB339', height: '18px' }} />
      {/* Photos and Videos Section*/}
    </Layout>
  )
}

export default Gallery
