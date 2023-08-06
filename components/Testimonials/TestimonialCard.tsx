import { Box, Flex } from "@chakra-ui/react";
import CustomImage from "@components/CustomImage";
import Image from "next/image";


export default function TestimonialCard({ image }: { image: string }) {


    return (
        <Box p={4}>

            <Flex direction={"column"} padding={"10"} boxShadow="1px 3px 10px #9E9E9E">

                <Box margin={'auto'}>
                    <Image
                        width={200}
                        height={200}
                        src={`/images/${image}`} alt={"testimonialImage"} />
                </Box>

                <Box textAlign={'center'} py={{ sm: '10px', lg: '15px' }}> Prakriti Das - Manali</Box>
                <Box textAlign={'left'} fontSize={{ sm: '13px', "2sm": '15px' }}>
                    Our romantic getaway to Manali, organized by Kitefy, was pure bliss! The breathtaking landscapes, cozy accommodations,
                    and seamless arrangements made our trip truly special. Their customer service team was attentive and prompt, ensuring we
                    had everything we needed for a delightful experience. Kitefy is our go-to travel company for all future adventures!
                </Box>


            </Flex>

        </Box>
    )
}