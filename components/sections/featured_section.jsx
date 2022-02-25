import { Box } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

import FeaturedCard from '../FeaturedCard'

const dummyData = [
  {
    id: 1,
    title: 'Our Himachal adventure blog',
    description:
      'Visiting the Peaks? Want to know the requirements on travelling to Himachal during the pandemic? Our blog might help! ',
    imgUrl: '',
    watchLink: '',
    knowMoreLink: ''
  },
  {
    id: 2,
    title: 'Our Himachal adventure blog',
    description:
      'Visiting the Peaks? Want to know the requirements on travelling to Himachal during the pandemic? Our blog might help! ',
    imgUrl: '',
    watchLink: '',
    knowMoreLink: ''
  },
  {
    id: 3,
    title: 'Our Himachal adventure blog',
    description:
      'Visiting the Peaks? Want to know the requirements on travelling to Himachal during the pandemic? Our blog might help! ',
    imgUrl: '',
    watchLink: '',
    knowMoreLink: ''
  }
]

const FeaturedSection = () => {
  return (
    <Box bg="white" w="100%" px={2}>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false
        }}
        centeredSlides={true}
        pagination={{ clickable: true }}
        spaceBetween={20}
      >
        {dummyData.map(data => (
          <SwiperSlide key={data.id}>
            <FeaturedCard data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}

export default FeaturedSection
