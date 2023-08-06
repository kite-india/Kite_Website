import { Box, Flex, Heading } from "@chakra-ui/react";
import Section from "@components/Section";
import { BiBold } from "react-icons/bi";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "./TestimonialCard";


export default function Testimonial() {

    const data = ["Manali.webp", "Nim_malaysia.webp", "Bali.webp", "Bali.webp"]

    return (
        <Box position={'relative'} py={'8'} scrollSnapAlign="center" px={{ sm: '5px', md: '10px', xl: '50px' }}>
            <Section delay={0.3}>
                <Box
                    textAlign="center"
                    px={6}
                    py={{ base: 2, lg: 20 }}
                    gap={{ base: 2, lg: 4 }}
                >
                    <Heading
                        color={'color5'}
                        fontFamily="'Poppins'"
                        fontSize={{ base: 'xl', sm: '3xl' }}
                    >
                        TESTIMONIALS
                    </Heading>
                </Box>

                <Flex align={'center'} justify="center" mx={6}>
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
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
                        <Box>
                            {data.map((blog, id) => {
                                return (
                                    <SwiperSlide key={id} >
                                        <TestimonialCard image={blog}></TestimonialCard>
                                    </SwiperSlide>
                                )
                            })}
                        </Box>
                    </Swiper>
                </Flex>
            </Section>
        </Box>


    )


}

