import React from 'react'
import { Box, Heading } from '@chakra-ui/react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Grid } from 'swiper'

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
    <Box w="100%">
      <Heading
        w="100%"
        as="h1"
        my={8}
        fontSize={{ base: '56px', md: '72px' }}
        color="#B7CE63"
        textAlign={{ base: 'center', lg: 'left' }}
      >
        Packages
      </Heading>
      <Box>
        {/* TODO: Add a vertical slide for each state by multiple carousel */}
        <Swiper
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
        </Swiper>
      </Box>
    </Box>
  )
}

export default Packages
