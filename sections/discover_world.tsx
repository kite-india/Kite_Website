import React from 'react'
import { Flex, Box, Heading, Stack } from '@chakra-ui/react'
import { BlogCard, Section } from '@components/index'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Activity } from 'src/API'

interface Props {
  data: Activity[]
}

const DiscoverTheWorld: React.FC<Props> = ({ data }) => {
  return (
    <Box position={'relative'} py={'8'} scrollSnapAlign="center" px={100}>
      <Section delay={0.3}>
        <Box
          textAlign="center"
          px={6}
          py={{ base: 2, lg: 20 }}
          gap={{ base: 2, lg: 4 }}
        >
          <Heading
            color={'color13'}
            fontFamily="'Poppins'"
            size={'sm'}
            textAlign={'center'}
          >
            JOIN OUR ADVENTURES
          </Heading>
          <Heading
            color={'color5'}
            fontFamily="'Poppins'"
            fontSize={{ base: 'xl', sm: '3xl' }}
          >
            Discover India with us
          </Heading>
        </Box>

        <Flex align={'center'} justify="center" mx={6}>
          <Swiper
            modules={[Autoplay]}
            breakpoints={{
              1200: {
                slidesPerView: 3
              },

              768: {
                slidesPerView: 2
              },
              640: {
                slidesPerView: 1
              }
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            loop={true}
            spaceBetween={40}
          >
            {data.map(blog => {
              return (
                <SwiperSlide key={blog.id}>
                  <BlogCard blog={blog} key={blog.name} />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </Flex>
      </Section>
    </Box>
  )
}

export default DiscoverTheWorld
