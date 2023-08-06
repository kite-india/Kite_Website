import { Box } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

import FeaturedCard from '@components/FeaturedCard'
import { FeaturedDestination } from '@utils/types'
import { Package } from 'src/API'

interface Props {
  data: Package[]
}

const FeaturedSection: React.FC<Props> = ({ data }) => {
  return (
    <Box bg="white" w="100%" px={2}>
      <Swiper
        modules={[Pagination,Autoplay]}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        loop={true}
        pagination={{ clickable: true }}
        spaceBetween={20}
      >
        {data.map(data => (
          <SwiperSlide key={data.id}>
            <FeaturedCard data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}

export default FeaturedSection
