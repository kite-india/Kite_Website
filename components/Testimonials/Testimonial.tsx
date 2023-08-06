import { Box, Flex } from "@chakra-ui/react";
import TestimonialCard from "./TestimonialCard";


export default function Testimonial() {



    return (
        <Flex mt={5} px={[2,2,2,50]}>

            <Flex direction={"column"}>
                <Box textAlign={"center"} p={5} fontSize={30} color={"green"} fontWeight={"bold"}>TESTIMONIALS</Box>
                <Flex direction={["column", "column", "column", "column", "column", "column",'row']}>
                    <TestimonialCard image="Bali.webp"></TestimonialCard>
                    <TestimonialCard image="Manali.webp"></TestimonialCard>
                    <TestimonialCard image="Nim_malaysia.webp"></TestimonialCard>
                </Flex>
            </Flex>


        </Flex>
    )


}