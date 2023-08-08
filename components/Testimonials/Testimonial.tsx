import { Box, Flex, Heading } from "@chakra-ui/react";
import Section from "@components/Section";
import { BiBold } from "react-icons/bi";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "./TestimonialCard";


export default function Testimonial() {


    const data = [
        {
            image: "Manali.webp",
            name: "Prakriti Das - Manali",
            description: "   Our romantic getaway to Manali, organized by Kitefy, was pure bliss! The breathtaking landscapes, cozy accommodations,and seamless arrangements made our trip truly special. Their customer service team was attentive and prompt, ensuring we  had everything we needed for a delightful experience. Kitefy is our go-to travel company for all future adventures!"
            ,
            rating: 5
        },
        {
            image: "Nim_malaysia.webp",
            name: "Nim - Malaysia",
            description: "I had an incredible solo trip to Malaysia with Kitefy! Their well-planned itinerary and helpful customer service made my journey hassle-free. From exploring the vibrant streets of Kuala Lumpur to relaxing on the stunning beaches of Langkawi, every moment was unforgettable. I highly recommend Kitefy for solo travelers seeking a memorable adventure!",
            rating: 4
        },
        {
            image: "Bali.webp",
            name: "Vishaka soman and Arpit - Bali",
            description: "Our trip to Bali with Kitefy was beyond our expectations! The warm welcome we received in Bali was heartwarming, thanks to Kitefy's thoughtful arrangements. The romantic ambiance, luxurious resorts, and exciting activities made it an extraordinary journey. Kitefy's customer service was top-notch, attending to our requests promptly throughout the trip. We're already planning our next vacation with them!",
            rating: 5
        },
        {
            image: "Bali.webp",
            name: "Vishaka soman and Arpit - Bali",
            description: "Our romantic getaway to Manali, organized by Kitefy, was pure bliss! The breathtaking landscapes, cozy accommodations,and seamless arrangements made our trip truly special. Their customer service team was attentive and prompt, ensuring we  had everything we needed for a delightful experience. Kitefy is our go-to travel company for all future adventures!",
            rating: 5
        },
    ]

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
                            delay: 3000000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        loop={true}
                        spaceBetween={40}


                    >
                        <Box>
                            {data.map((testimonial, id) => {
                                return (
                                    <SwiperSlide key={id} >
                                        <TestimonialCard image={testimonial.image} description={testimonial.description} name={testimonial.name} rating={testimonial.rating} />
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

