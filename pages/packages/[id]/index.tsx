import React from 'react'
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  Icon,
  Divider,
  Link,
  Grid,
  Image,
  Badge
} from '@chakra-ui/react'
import { FiMap } from 'react-icons/fi'
import axios from 'axios'

import { Section } from '@components/index'
import Layout from '@components/layouts/main'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import type { Activity, Gallery, Trip } from '@utils/types'
import { useTripsStore } from '@utils/redux/useTripsStore'
import CustomImage from '@components/CustomImage'
import { GrDocumentPdf } from 'react-icons/gr'
import Packages from '@sections/trips/packages-section'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import { Activities } from '@sections/index'
import { API } from 'aws-amplify';
import { GraphQLQuery } from '@aws-amplify/api'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { ListPackagesQuery } from 'src/API'

interface PackagesPageProps {
  packages_data: Trip
  gallery_data: Gallery[]
}

const Page: NextPage<PackagesPageProps> = ({
  packages_data,
  gallery_data
}) => {
  const router = useRouter()
  if (!packages_data) return null
  const {
    name,
    id,
    image,
    description,
    activities,
    cost,
    details_file,
    location,
    is_premium_flag
  } = packages_data

  console.log(activities)
  const bookNow = () => {
    router.push(`/packages/${id}/book-now`)
  }
  return (
    <Layout title={name}>
      <Container w="100%" pt={8} maxWidth="container.xl">
        <Section delay={0.2}>
          <Flex direction={{ base: 'column', md: 'row' }} w="100%">
            <Box
              w={{ sm: '100%', md: '50%' }}
              borderRadius="xl"
              overflow="hidden"
            >
              <CustomImage
                priority
                src={image}
                // src="static-public/Saly-44.svg"
                alt={id}
                layout="responsive"
                width={240}
                height={200}
              />
            </Box>
            <Flex
              w={{ sm: '100%', md: '50%' }}
              direction="column"
              gap={4}
              p={{ sm: 6, md: 12 }}
              ml={{ sm: 0, md: 4 }}
              fontSize={20}
              fontFamily="'Poppins'"
            >
              <Heading
                fontSize={{ base: '25', md: '64' }}
                textAlign={{ base: 'center', md: 'left' }}
                p={{ base: 4, sm: 0 }}
              >
                {name}
              </Heading>
              <Flex
                direction="row"
                gap={4}
                fontSize={{ base: '15', sm: '20', md: '25' }}
              >
                {is_premium_flag ? (
                  <Badge colorScheme="purple" fontSize="0.6em">
                    Premium
                  </Badge>
                ) : (
                  <Badge colorScheme="green">New</Badge>
                )}
              </Flex>
              <Text fontSize={{ base: '15', sm: '20', md: '22' }}>
                {description}
              </Text>
              <Text>{`₹ ${cost}`}</Text>
              <Flex direction="row" gap={4}>
                <Button
                  bg="#8FB339"
                  _hover={{ bg: 'green.400' }}
                  _focus={{ bg: 'green.400' }}
                  color="white"
                  fontFamily="'Roboto'"
                  borderRadius="10px"
                  fontSize={{ base: '15', sm: '20', md: '20' }}
                  px={{ base: 6, lg: 12 }}
                  py={{ base: 3, lg: 6 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={bookNow}
                >
                  Book now
                </Button>
                <Button
                  bg="#8FB339"
                  _hover={{ bg: 'green.400' }}
                  _focus={{ bg: 'green.400' }}
                  color="white"
                  fontFamily="'Roboto'"
                  borderRadius="10px"
                  fontSize={{ base: '15', sm: '20', md: '20' }}
                  px={{ base: 6, lg: 12 }}
                  py={{ base: 3, lg: 6 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Contact us
                </Button>
              </Flex>
            </Flex>
          </Flex>
          <Box fontSize={20} mt={10}>
            <Flex
              direction={{ base: 'column', md: 'row' }}
              justify="space-evenly"
              w="100%"
              gap={4}
            >
              <Flex
                direction="column"
                borderRight={{ base: 0, md: '2px' }}
                pr={6}
                w={{ sm: '100%', md: '50%' }}
              >
                <Heading fontSize={{ base: '20', md: '35' }}>
                  Plan Includes:
                </Heading>
                <SimpleGrid
                  mt={2}
                  fontFamily="'Poppins'"
                  columns={2}
                  alignItems={{ base: 'center', lg: 'left' }}
                  w="full"
                  pt={3}
                >
                  {activities.items.map(tag => (
                    <Box key={tag.id} w="100%">
                      <Text key={tag.id}>
                        <Icon as={FiMap} mr={2} />
                        {tag.name}
                      </Text>
                    </Box>
                  ))}
                </SimpleGrid>
              </Flex>
              <Flex
                direction="column"
                fontSize={20}
                gap={4}
                w={{ sm: '100%', md: '50%' }}
                pr={6}
              >
                <Heading fontSize={{ base: '20', md: '35' }}>
                  Extra Info:
                </Heading>
                <Box
                  border="2px"
                  borderRadius="20px"
                  borderColor="gray.200"
                  fontSize={{ base: '15', md: '20' }}
                >
                  <Flex p={8} direction="row" gap={6}>
                    <GrDocumentPdf size={60} />
                    <Flex direction="column" gap={2}>
                      <Text>Camping Information</Text>
                      <Link
                        color="#8FB339"
                        href={
                          process.env.NEXT_PUBLIC_S3_ENDPOINT + details_file
                        }
                      >
                        Download
                      </Link>
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
            </Flex>
          </Box>
          <Box mt={8}>
            <Heading fontSize={{ base: '20', md: '35' }} mb={3}>
              Gallery
            </Heading>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              breakpoints={{
                768: {
                  slidesPerView: 2
                },
                1024: {
                  slidesPerView: 3
                },
                1200: {
                  slidesPerView: 4
                }
              }}
              spaceBetween={20}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false
              }}
              pagination={{ clickable: true }}
              slidesPerView={1}
            >
              {gallery_data.slice(0, gallery_data.length / 2).map(item => (
                <SwiperSlide
                  key={item.id}
                  style={{ paddingBottom: '55px', height: '350px' }}
                >
                  <Box borderRadius="xl" overflow="hidden">
                    <CustomImage
                      loading="lazy"
                      src={item.image}
                      alt={item.image}
                      layout="responsive"
                      width={240}
                      height={240}
                    />
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Section>
        <Section delay={0.4}>
          <Activities data={activities.items} />
        </Section>
      </Container>
    </Layout>
  )
}

// export async function getStaticPaths() {
//   const packagesId = await API.graphql<GraphQLQuery<ListPackagesQuery>>({
//     query: `query MyQuery {
//       listPackages {
//         items {
//           id
          
//         }
//       }
//     }
    
//     `})
//   let data = packagesId.data.listPackages.items;

//   const paths = data.map((id: any) => {
//     return {
//       params: { id: `${id}` }
//     }
//   })
//   return {
//     paths,
//     fallback: false
//   }
// }

export async function getServerSideProps(context: { params: { id: string } }) {
  const { id } = context.params



  const packagesAndActivities = await API.graphql<GraphQLQuery<any>>({
    query: `  query MyQuery {
      getPackage(id: "${id}") {
      
        cost
        createdAt
        description
        details_file
        image
        id
        name
        contact
        location
        is_premium_flag
        updatedAt
        video_link

        activities {
          items {
            description
            id
            image
            link
            name

          }
        }
      }
    }
    
    `})


  console.log(packagesAndActivities)
  let data = packagesAndActivities.data.getPackage;
  // const { data: activities_data } = await axios.get(
  //   `${process.env.NEXT_PUBLIC_KITE_BACKEND}/activities`
  // )
  const { data: gallery_data } = await axios.get(
    `${process.env.NEXT_PUBLIC_KITE_BACKEND}/gallery`
  )

if(data===null){

  return {
    redirect: {
      permanent: false,
      destination: "/trips",
    },
    props: {},
  };

}
  return {
    props: { packages_data: data as Trip, gallery_data }
  }
}

export default Page
