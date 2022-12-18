import React from 'react'
import { Box, Text, Heading, Flex, Container } from '@chakra-ui/react'
import Layout from '@components/layouts/main'
import Image from 'next/image'
import Section from '@components/Section'
import { NextPage } from 'next'
import CustomImage from '@components/CustomImage'

const Gallery: NextPage = () => {
  return (
    <Layout title="Gallery">
      <Container maxW="container.xl" my={8} w="100%">
        <Section delay={0.2}>
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
              <CustomImage
                priority
                src="static-public/Saly-44.svg"
                layout="fixed"
                width="280px"
                height="280px"
                alt="globe-svg"
              />
            </Box>
          </Flex>
        </Section>
        <Section delay={0.3}>
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
            style={{
              width: '100%',
              backgroundColor: '#125C13',
              height: '12px'
            }}
          />
          <hr
            style={{
              backgroundColor: '#3E7C17',
              height: '12px'
            }}
          />
          <hr style={{ backgroundColor: '#8FB339', height: '18px' }} />
          {/* Photos and Videos Section*/}
        </Section>
      </Container>
    </Layout>
  )
}

export default Gallery
