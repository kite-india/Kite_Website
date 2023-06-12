import React from 'react'
import { Box, Text, Heading, Flex, Container } from '@chakra-ui/react'
import Layout from '@components/layouts/main'
import Section from '@components/Section'
import { NextPage } from 'next'
import CustomImage from '@components/CustomImage'
import GalleryCard from '@components/GalleryCard'
import { GalleryPageProps } from '@utils/types'
import { API } from 'aws-amplify';
import { GraphQLQuery } from '@aws-amplify/api';
import { ListGalleriesQuery } from "src/API";
import { listGalleries } from 'src/graphql/queries'


const GalleryPage: NextPage = (props: GalleryPageProps) => {
  const { data } = props ?? {}
  const section1 = data.slice(0, 5)
  const section2 = data.slice(6, 9)
  const section3 = data.slice(10, 14)
  return (
    <Layout title="Gallery">
      <Container maxW="container.xl" my={8} w="100%">
        <Section delay={0.2}>
          <Flex
            my={{ base: 4, sm: 8 }}
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
                src="" //static-public/Saly-44.svg
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
            fontSize={{ base: 15, sm: '22px' }}
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
            make unforgettable memories.
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
                {section1.map(item => (
                  <GalleryCard
                    key={item.id}
                    src={`https://kite-storage-backend.s3.ap-south-1.amazonaws.com/${item.image}`}
                  />
                ))}
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

export default GalleryPage

export const getStaticProps = async () => {


  const allTodos = await API.graphql<GraphQLQuery<ListGalleriesQuery>>({
    query: listGalleries
  })



  return { props: { data: allTodos.data.listGalleries.items } }


}
