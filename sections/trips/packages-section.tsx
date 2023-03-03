import React from 'react'
import {
  Box,
  Flex,
  Heading,
  Input,
  Grid,
  Center,
  InputGroup,
  InputRightElement,
  Spacer,
  Icon
} from '@chakra-ui/react'
import { BiSearch } from 'react-icons/bi'
import { HiArrowsUpDown } from 'react-icons/hi2'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'

import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/pagination'
import 'swiper/css/grid'

import { PackageCard } from '@components/index'
import type { Trip } from '@utils/types'

interface PackageProps {
  data: Trip[]
}

const Packages: React.FC<PackageProps> = ({ data }) => {
  return (
    <Box w="100%" mt={12}>
      <Flex direction="row" alignItems="center">
        <Heading
          w="100%"
          as="h1"
          my={8}
          fontSize={{ base: '42px', md: '60px' }}
          color="#125C13"
          textAlign={{ base: 'left', lg: 'left' }}
        >
          Packages
        </Heading>
        <Spacer />
        <Box as="button" mx={6}>
          <HiArrowsUpDown size={35} />
        </Box>

        <InputGroup w="30%">
          <Input placeholder="Search" variant="flushed" />
          <InputRightElement>
            <BiSearch />
          </InputRightElement>
        </InputGroup>
      </Flex>

      <Box>
        {/* TODO: Add a vertical slide for each state by multiple carousel */}
        {/* <Swiper
          modules={[Pagination, Autoplay, Grid]}
          breakpoints={{
            768: {
              slidesPerView: 2
            },
            1024: {
              slidesPerView: 3
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
          {data.map(data => (
            <SwiperSlide
              key={data.id}
              style={{ paddingBottom: '55px', height: '800px' }}
            >
              <PackageCard data={data} />
            </SwiperSlide>
          ))}
        </Swiper> */}
        <Flex
          direction="column"
          mt={5}
          justifyContent="center"
          maxW={{ xl: '1200px' }}
        >
          <Grid
            w="full"
            gridTemplateColumns={{
              sm: 'repeat( auto-fit, minmax(350px, 1fr) )',
              md: 'repeat( auto-fit, minmax(400px, 1fr) )',
              lg: 'repeat( auto-fit, minmax(450px, 1fr) )'
            }}
            gap={8}
            px={3}
          >
            {data.map(data => (
              <PackageCard key={data.id} data={data} />
            ))}
          </Grid>
        </Flex>
      </Box>
    </Box>
  )
}

export default Packages
