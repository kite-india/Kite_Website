import React from 'react'
import { Box, Text, Heading, Flex, Container } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import Image from 'next/image'

const Gallery = () => {
  return (
    <Layout>
      <Container maxW="container.xl" my={8} w="100%">
        <Flex
          my={8}
          direction={{ base: 'column-reverse', md: 'row' }}
          justify="space-evenly"
          align="center"
          gap={12}
        >
          <Box maxW="container.lg">
            <Heading
              mb={{ base: 0, md: 4 }}
              fontSize={{ xl: '128px', md: '96px', base: '72px' }}
              fontWeight="semibold"
            >
              Gallery
            </Heading>
          </Box>
          <Box>
            <Image
              src="/Saly-44.svg"
              layout="fixed"
              width="240px"
              height="240px"
              alt="globe-svg"
            />
          </Box>
        </Flex>
        <Text
          px={6}
          fontFamily="'Poppins'"
          fontSize="22px"
          fontWeight="light"
          textAlign="justify"
          mb={3}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          assumenda, cum minus veritatis eveniet ut itaque repudiandae ducimus
          architecto libero in adipisci dolore officia corporis aperiam quia
          nulla. A, neque.
        </Text>
        <hr
          style={{ width: '100%', backgroundColor: '#125C13', height: '12px' }}
        />
        <hr
          style={{
            backgroundColor: '#3E7C17',
            height: '12px'
          }}
        />
        <hr style={{ backgroundColor: '#8FB339', height: '18px' }} />
        {/* Photos and Videos Section*/}
      </Container>
    </Layout>
  )
}

export default Gallery
