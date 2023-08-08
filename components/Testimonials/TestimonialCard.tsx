import { Box, Flex, Icon } from "@chakra-ui/react";
import CustomImage from "@components/CustomImage";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { HalfStarContainer } from '../StarRating/styles';

interface TestimonialProps {
    image: string,
    description: string,
    name: string,
    rating: number
}

export default function TestimonialCard({ image, description, name, rating }: TestimonialProps) {


    return (
        <Box p={4} >

            <Flex direction={"column"} padding={"10"} boxShadow="1px 3px 10px #9E9E9E" height={{sm:620,lg:690}} >

                <Box marginX={'auto'}>
                    <Image
                        width={200}
                        height={200}
                        src={`/images/${image}`} alt={"testimonialImage"} />
                </Box>

                <Flex direction={"column"} alignItems={'center'} fontWeight={"bold"} justifyContent={'center'} py={{ sm: '10px', lg: '10px' }}>
                    <Box fontSize={20}>
                        {name}
                    </Box>
                    <Flex direction={"row"} pl={3} >

                        <Icon
                            as={FaStar}
                            width={30}
                            height={30}
                            cursor={"pointer"}
                            size={20}
                            color={"gold"}
                        />
                        <Icon
                            as={FaStar}
                            width={30}
                            height={30}
                            cursor={"pointer"}
                            size={20}
                            color={"gold"}
                        />
                        <Icon
                            as={FaStar}
                            width={30}
                            height={30}
                            cursor={"pointer"}
                            size={20}
                            color={"gold"}
                        />
                        <Icon
                            as={FaStar}
                            width={30}
                            height={30}
                            cursor={"pointer"}
                            size={20}
                            color={"gold"}
                        />
                        <HalfStarContainer>
                            <Icon
                                as={FaStar}
                                width={30}
                                height={30}
                                cursor={"pointer"}
                                size={20}
                                color={"gold"}
                            />
                        </HalfStarContainer>
                    </Flex>
                </Flex>

                <Box color={"#777"} textAlign={'left'} fontWeight={'light'} fontSize={{ sm: '13px', "2sm": '15px' }}>
                    {description}
                </Box>


            </Flex>

        </Box>
    )
}