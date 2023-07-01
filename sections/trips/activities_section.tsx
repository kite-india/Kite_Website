import React from 'react'
import { Box, Heading, Text, Flex, Center } from '@chakra-ui/react'
import { ActivityCard } from '@components/index'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Grid } from 'swiper'

import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/grid'
import type { Activity } from '@utils/types'

interface ActivityProps {
  data: Activity[]
  addToCartHandler: Function
  updateTotalCost: Function
}

const Activities: React.FC<ActivityProps> = ({
  data,
  addToCartHandler,
  updateTotalCost
}) => {
  console.log(data)
  return (
    <Box w="100%" bg="#F7F8F9" borderRadius="lg" p={{ base: 3, lg: 6 }}>
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        alignItems={{ base: 'center', lg: 'flex-end' }}
        gap={{ base: 1, lg: 4 }}
        mb={4}
        justifyContent={{ base: 'center', lg: 'flex-start' }}
        px={6}
      >
        <Heading fontSize="40px" fontWeight="semibold" color="#8FB339">
          Activities
        </Heading>
        <Text
          fontFamily="'Poppins'"
          fontSize="17px"
          fontWeight="normal"
          color="#3E7C17"
          pb={2}
        >
          Add Them to your Trip
        </Text>
      </Flex>
      <Box mb={4} mx={{ base: 2, lg: 6 }}>
        <Swiper
          modules={[Autoplay, Grid]}
          breakpoints={{
            768: {
              slidesPerView: 1
            },
            1024: {
              slidesPerView: 2
            }
          }}
          spaceBetween={20}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          slidesPerView={1}
        >
          {data.map((activity, idx) => {
            return (
              <SwiperSlide key={activity.name}>
                <Flex direction="column" gap={4} mb={4}>
                  <ActivityCard
                    updateTotalCost={updateTotalCost}
                    addToCartHandler={addToCartHandler}
                    data={activity}
                  />
                </Flex>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </Box>
    </Box>
  )
}

export default Activities
