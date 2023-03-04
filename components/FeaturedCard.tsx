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
  Link
} from '@chakra-ui/react'
import Section from './Section'
import NextLink from 'next/link'

import { BsPlayCircleFill } from 'react-icons/bs'
import { FeaturedDestination } from '@utils/types'
import CustomImage from './CustomImage'

interface FeaturedDataProps {
  data: FeaturedDestination
}

const FeaturedCard: React.FC<FeaturedDataProps> = ({ data }) => {
  const { name, description, image, id } = data
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
            src={`${process.env.NEXT_PUBLIC_S3_ENDPOINT}videos/default.MOV`}
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
      px={2}
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
                mb={3}
              >
                Featured Destination
              </Heading>
              <Heading fontSize="35px">{name}</Heading>
              <Text fontFamily="'Roboto'" fontWeight="normal" fontSize="18px">
                {description}
              </Text>
              <Box>
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
              </Box>
              <ButtonGroup spacing={6} mt={6} fontFamily="'Roboto'">
                <Link
                  //  as={NextLink}
                  href={`/package/${id}/book-now`}
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
                  href={`/package/${id}`}
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
