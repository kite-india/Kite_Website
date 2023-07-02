import React, { Suspense, useEffect, useState } from 'react'
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  Icon,
  Link,
  Badge,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/react'
import { FiMap } from 'react-icons/fi'
import { MdCheckCircle, MdLocalDining } from "react-icons/md";
import { Section } from '@components/index'
import Layout from '@components/layouts/main'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import type { Trip } from '@utils/types'
import { GrDocumentPdf } from 'react-icons/gr'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import { Activities } from '@sections/index'
import { API } from 'aws-amplify'
import { GraphQLQuery } from '@aws-amplify/api'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import CustomImage from '@components/CustomImage'
import {
  activitiesByPackageID,
  galleriesByPackageID,
  getPackage
} from 'src/graphql/queries'
import { ActivitiesByPackageIDQuery, GalleriesByPackageIDQuery, Package, Gallery, Activity, GetPackageQuery } from 'src/API'
import { TbPlane } from 'react-icons/tb';
import { BsBinoculars } from 'react-icons/bs';
import { MdFastfood } from "react-icons/md";

import ThreeDotsWaveLoadingScreen from "@components/LoadingScreen";
import { toast } from 'react-toastify';

interface PackagesPageProps {
  packages_data: Package
  gallery_data: Gallery[]
  activities: Activity
}

const Page: NextPage<PackagesPageProps> = () => {
  const router = useRouter()


  const [packages_data, setPackage] = useState<Trip>(null);
  const [activities, setActivity] = useState<Activity[]>(null);
  const [gallery_data, setGallery] = useState<Gallery[]>(null);


  useEffect(() => {

    if(!router.isReady) return;

    const fetchData = async () => {

      const { id } = router.query;
      try {
        const packages = await API.graphql<GraphQLQuery<GetPackageQuery>>({
          query: getPackage,
          variables: {
            id: `${id}`
          }
        })
        console.log(id)
        const activities = await API.graphql<
          GraphQLQuery<ActivitiesByPackageIDQuery>
        >({
          query: activitiesByPackageID,
          variables: {
            packageID: id
          }
        })


        let data = packages.data.getPackage

        let gallery = await API.graphql<GraphQLQuery<GalleriesByPackageIDQuery>>({
          query: galleriesByPackageID,
          variables: {
            packageID: id
          }
        })

        const gallery_data = gallery.data.galleriesByPackageID.items

        setActivity(activities.data.activitiesByPackageID.items)
        setPackage(data)
        setGallery(gallery_data);
      }
      catch (e) {
        console.log(e)
        toast.error(e.errors[0].message)
      }

    }

    fetchData();

  }, [router.isReady])


  const bookNow = () => {
    router.push(`/packages/${packages_data.id}/book-now`)
  }

  return (
    <>
      {(!packages_data || !activities || !gallery_data) && <ThreeDotsWaveLoadingScreen></ThreeDotsWaveLoadingScreen>}
      {packages_data && activities && gallery_data &&
        <Layout title={packages_data.name}>
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
                    src={packages_data.image}
                    alt={packages_data.id}
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
                    {packages_data.name}
                  </Heading>
                  <Flex
                    direction="row"
                    gap={4}
                    fontSize={{ base: '15', sm: '20', md: '25' }}
                  >
                    {packages_data.is_premium_flag ? (
                      <Badge colorScheme="purple" fontSize="0.6em">
                        Premium
                      </Badge>
                    ) : (
                      <Badge colorScheme="green">New</Badge>
                    )}
                  </Flex>

                  <Flex flexDirection={"column"}>
                    <Flex>
                      <Text fontWeight={"bold"} pr={3}>
                        Cities:

                      </Text>
                      <Text>
                        Manali
                      </Text>

                    </Flex>
                    <Flex pt={5} textAlign={"center"} >
                      <Box pr={8}>
                        <Icon as={TbPlane} w={8} h={8} />
                        <Text fontSize={18}>Flight</Text>
                      </Box>

                      <Box pr={8}>
                        <Icon as={MdLocalDining} w={8} h={8} />
                        <Text fontSize={18}>Hotels</Text>
                      </Box>
                      <Box pr={8} >
                        <Icon as={BsBinoculars} w={10} h={8} />
                        <Text fontSize={18}>SiteSeeing</Text>
                      </Box>

                      <Box pr={8} >
                        <Icon as={MdFastfood} w={10} h={8} />
                        <Text fontSize={18}>Meals</Text>
                      </Box>

                      <Box pr={8} >
                        <Icon as={BsBinoculars} w={10} h={8} />
                        <Text fontSize={18}>Transfers</Text>
                      </Box>
                    </Flex>
                    <Text pt={5}>Duration: {packages_data.duration}</Text>
                    <Flex>
                      <Text color={"green"} pt={5} fontSize={30} fontWeight={"bold"}>Rs. {packages_data.cost}</Text>
                      <Text pl={4} fontSize={20} pt={8} as={'s'}>Rs. 30000</Text>

                    </Flex>
                  </Flex>
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
                    <Heading fontSize={{ base: '20', md: '35' }} pb={4}>
                      Plan Includes:

                    </Heading>
                    <List>
                      {packages_data.description.split("\n").map((value, index) => {
                        return (
                          <ListItem paddingBottom={3} display={'flex'} key={index}>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            <Text fontWeight={"medium"} marginTop={-1} >  {value}</Text>
                          </ListItem>
                        )
                      })}
                    </List>

                    <Heading fontSize={{ base: '10', md: '20' }} pt={4} pb={4}>
                      Major Activities:

                    </Heading>
                    <Flex flexDirection={'column'}>

                      {activities.map(tag => (
                        <Box key={tag.id} w="100%">
                          <Text key={tag.id}>
                            <Icon as={FiMap} mr={2} />
                            {tag.name}
                          </Text>
                        </Box>
                      ))}
                    </Flex>

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
                              process.env.NEXT_PUBLIC_S3_ENDPOINT + packages_data.details_file
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
                  {gallery_data.map((item, index) => {

                    return (
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
                    )
                  })}
                </Swiper>
              </Box>
            </Section>
          </Container>
        </Layout>}
    </>
  )
}

// export async function getServerSideProps(context: { params: { id: string } }) {
//   const { id } = context.params

//   const packages = await API.graphql<GraphQLQuery<any>>({
//     query: getPackage,
//     variables: {
//       id: `${id}`
//     }
//   })

//   const activities = await API.graphql<
//     GraphQLQuery<ActivitiesByPackageIDQuery>
//   >({
//     query: activitiesByPackageID,
//     variables: {
//       packageID: id
//     }
//   })

//   let data = packages.data.getPackage

//   let gallery = await API.graphql<GraphQLQuery<GalleriesByPackageIDQuery>>({
//     query: galleriesByPackageID,
//     variables: {
//       packageID: id
//     }
//   })

//   console.log(gallery.data.galleriesByPackageID.items)

//   const gallery_data = gallery.data.galleriesByPackageID.items
//   if (data === null) {
//     return {
//       redirect: {
//         permanent: false,
//         destination: '/trips'
//       },
//       props: {}
//     }
//   }
//   return {
//     props: {
//       packages_data: data as Trip,
//       gallery_data,
//       activities: activities.data.activitiesByPackageID.items
//     }
//   }
// }

export default Page
