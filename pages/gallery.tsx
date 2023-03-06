import React from 'react'
import {
  Box,
  Text,
  Heading,
  Flex,
  Container,
  Grid,
  UnorderedList,
  ListItem,
  Image
} from '@chakra-ui/react'
import Layout from '@components/layouts/main'
import Section from '@components/Section'
import { NextPage } from 'next'
import CustomImage from '@components/CustomImage'
import GalleryCard from '@components/GalleryCard'

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
            Welcome to our gallery page, showcasing the captivating destinations
            and experiences we offer throughout India and Nepal. Browse through
            our collection of pictures taken by our team during our camping and
            travel adventures. Let us help you create a personalized itinerary
            that caters to your interests and allows you to explore the wonders
            of these diverse regions. Embark on a journey with Kite India and
            make unforgettable memories.
          </Text>

          <hr
            style={{
              width: '100%',
              backgroundColor: '#125C13',
              height: '12px'
            }}
          />

          {/* Photos and Videos Section*/}
          <Box mt={4}>
            <Flex direction="row" w="100%" justifyContent="center">
              <Flex direction="column">
                <GalleryCard
                  src={
                    'https://drive.google.com/uc?export=view&id=1Rcq3M1AZQiYoUST2TxTGKgCn_zbkti99'
                  }
                />
                <GalleryCard
                  src={
                    'https://drive.google.com/uc?export=view&id=1p9rh_eeFN1gNboPh3zrHMCDYPJRC8g81'
                  }
                />
                <GalleryCard
                  src={
                    'https://drive.google.com/uc?export=view&id=19O3WXZVrraPMJaCbFdi5_Hrsc39f8c3W'
                  }
                />
                <GalleryCard
                  src={
                    'https://drive.google.com/uc?export=view&id=15ljeIRN9IZ34OtBs_NRr1MFnNsGPwLhW'
                  }
                />
                <GalleryCard
                  src={
                    'https://drive.google.com/uc?export=view&id=1nK9r98JgTsLBJwl7H-YmvV_er7MeNJy2'
                  }
                />
              </Flex>
              <Flex direction="column">
                <GalleryCard
                  src={
                    'https://drive.google.com/uc?export=view&id=1tyfAg5WMfCz8KnpMfwYilLkM3OqqjZNM'
                  }
                />
                <GalleryCard
                  src={
                    'https://drive.google.com/uc?export=view&id=1mHmpqX8iBla5ZnaL0PfIsGZs_9ctoLK5'
                  }
                />
                <GalleryCard
                  src={
                    'https://drive.google.com/uc?export=view&id=1sMs4S5nmFxVUvRB4fUKOSScpJzbcwo58'
                  }
                />
              </Flex>
              <Flex direction="column" maxWidth="30%">
                <GalleryCard
                  src={
                    'https://drive.google.com/uc?export=view&id=1yFR7p7JCJhXBnjwJ2RAo6OUVgXPGlhLr'
                  }
                />
                <GalleryCard
                  src={
                    'https://drive.google.com/uc?export=view&id=1ukZI7x9W9QcdETPiYdwc_moZmIP1n9I3'
                  }
                />
                <GalleryCard
                  src={
                    'https://drive.google.com/uc?export=view&id=1V6ksPOpWGH5aqF1qeYYWVncQjcZHyMIn'
                  }
                />
                <GalleryCard
                  src={
                    'https://drive.google.com/uc?export=view&id=17wta27owsGcOzDPXFC073x2MqbxorAeW'
                  }
                />
              </Flex>
            </Flex>
          </Box>
          <hr
            style={{
              backgroundColor: '#3E7C17',
              height: '12px'
            }}
          />
          <hr style={{ backgroundColor: '#8FB339', height: '18px' }} />
        </Section>
      </Container>
    </Layout>
  )
}

export default Gallery
