import React from 'react'
import { Box, Heading, Text, useMediaQuery } from '@chakra-ui/react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Grid } from 'swiper'

import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/pagination'
import 'swiper/css/grid'

import { PackageCard } from '../../components'

const Packages = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const tags = ['Food', 'Places', 'Travel']
  return (
    <Box w="100%">
      <Heading
        w="100%"
        as="h1"
        my={8}
        fontSize={{ base: '56px', md: '72px' }}
        color="#B7CE63"
      >
        Packages
      </Heading>
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
          delay: 3000,
          disableOnInteraction: false
        }}
        pagination={{ clickable: true }}
        slidesPerView={1}
      >
        {arr.map(i => (
          <SwiperSlide key={i}>
            <PackageCard tags={tags} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}

export default Packages
