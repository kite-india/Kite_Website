import {
  Box,
  Stack,
  Heading,
  Text,
  Image,
  Flex,
  Button,
  ButtonGroup,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  AspectRatio,
  useDisclosure,
  Link,
  Icon
} from '@chakra-ui/react'
import Section from './Section'
import NextLink from 'next/link'

import { BsPlayCircleFill } from 'react-icons/bs'
import { FeaturedDestination } from '@utils/types'
import CustomImage from './CustomImage'

import { TbPlane } from "react-icons/tb";
import { MdLocalDining } from "react-icons/md";
import { BsBinoculars } from "react-icons/bs";
import { Package } from 'src/API'
interface FeaturedDataProps {
  data: Package
}

import { MdFastfood } from "react-icons/md";

const FeaturedCard: React.FC<FeaturedDataProps> = ({ data }) => {
  const { name, description, image, id, video_link, duration, cost, actual_cost, cities } = data
  const { isOpen, onOpen, onClose } = useDisclosure()

  const WatchNow = () => (

    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="80%">
        <ModalCloseButton size="lg" zIndex="2" />
        <ModalBody>
          <Box
            as="video"
            controls
            src={`${process.env.NEXT_PUBLIC_S3_ENDPOINT}${video_link}`}
            objectFit="contain"
            autoPlay={true}
            sx={{
              aspectRatio: '16/9'
            }}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  )

  return (
    <Box
      w="100%"
      py={{ base: 0, md: 3 }}
      px={4}
      display="flex"
      justifyContent="center"
      alignItems="center"
      my={8}
    >
      <Section delay={0.3}>
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          spacing="2.18rem"
          borderRadius="xl"
          borderColor="blackAlpha.300"
          p={{ base: 2, md: 8 }}
          borderWidth={{ base: '0', md: '2px' }}
        >
          <CustomImage
            src={image}
            alt={name}
            width="600px"
            height="400px"
            style={{ borderRadius: '10px' }}
          />
          <Box pt={{ base: 0, md: 6 }} w={{ base: '95vw', md: '38rem' }}>
            <Flex direction="column" gap="1.2rem" align="left">
              <Heading
                as="h4"
                fontWeight="normal"
                size="md"
                textTransform="uppercase"
                fontFamily="'Roboto'"
                color="#125C13"

              >
                Featured Destination
              </Heading>
              <Heading fontSize="35px">{name}</Heading>
              <Flex flexDirection={"column"}>
                <Flex>
                  <Text fontWeight={"bold"} pr={3}>
                    Cities:

                  </Text>
                  <Text>
                    {cities}
                  </Text>

                </Flex>
                <Flex pt={5} textAlign={"center"}>
                  <Box pr={8}>
                    <Icon as={TbPlane} w={8} h={8} />
                    <Text>Flight</Text>
                  </Box>

                  <Box pr={8}>
                    <Icon as={MdLocalDining} w={8} h={8} />
                    <Text>Hotels</Text>
                  </Box>
                  <Box pr={8} >
                    <Icon as={BsBinoculars} w={10} h={8} />
                    <Text>Sightseeing</Text>
                  </Box>

                  <Box pr={8} >
                    <Icon as={MdFastfood} w={10} h={8} />
                    <Text>Meals</Text>
                  </Box>

                  <Box pr={8} >
                    <Icon as={BsBinoculars} w={10} h={8} />
                    <Text>Transfers</Text>
                  </Box>
                </Flex>
                <Text pt={5}>Duration: {duration}</Text>
                <Flex>
                  <Text color={"green"} pt={5} fontSize={30} fontWeight={"bold"}>Rs. {cost}</Text>
                  <Text pl={4} fontSize={20} pt={8} as={'s'}>Rs. {actual_cost}</Text>

                </Flex>
              </Flex>
              {/* <Box>
                <Button
                  color="#3E7C17"
                  bg="white"
                  fontFamily="'Roboto'"
                  fontSize="18px"
                  p={0}
                  mt={3}
                  _hover={{ bg: 'white', color: '#B7CE63' }}
                  leftIcon={<BsPlayCircleFill fontSize="2.5rem" />}
                  onClick={onOpen}
                >
                  Watch Now
                </Button>
                <WatchNow />
              </Box> */}
              <ButtonGroup spacing={6} mt={6} fontFamily="'Roboto'">
                <Link
                  //  as={NextLink}
                  href={`/packages/${id}/book-now`}
                  p={3}
                  textAlign="center"
                  color="white"
                  bg="#B7CE63"
                  size="lg"
                  borderRadius="xl"
                  w={{ base: '10.5rem', md: '12rem' }}
                  _hover={{ bg: '#3E7C17' }}
                >
                  Book now
                </Link>
                <Link
                  href={`/packages/${id}`}
                  p={3}
                  textAlign="center"
                  color="white"
                  bg="#B7CE63"
                  size="lg"
                  borderRadius="xl"
                  w={{ base: '10.5rem', md: '12rem' }}
                  _hover={{ bg: '#3E7C17' }}
                >
                  Know More
                </Link>
              </ButtonGroup>
            </Flex>
          </Box>
        </Stack>
      </Section>
    </Box>
  )
}

export default FeaturedCard
