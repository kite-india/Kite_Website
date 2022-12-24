import {
  Box,
  Stack,
  Heading,
  Text,
  Image,
  Flex,
  Button,
  ButtonGroup
} from '@chakra-ui/react'
import Section from './Section'

import { BsPlayCircleFill } from 'react-icons/bs'
<<<<<<< HEAD
import CustomImageComponent from './CustomImageComponent'

interface FeaturedDataProps {
  data: any
=======
import { FeaturedDestination } from '@utils/types'
import CustomImage from './CustomImage'

interface FeaturedDataProps {
  data: FeaturedDestination
>>>>>>> 1adfaf9c068548ea5bb4181892b5868d47136290
}

const FeaturedCard: React.FC<FeaturedDataProps> = ({ data }) => {
  const { name, description, image } = data
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
<<<<<<< HEAD
        <Stack direction={{ base: 'column', lg: 'row' }} spacing="2.18rem">
          <CustomImageComponent
=======
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          spacing="2.18rem"
          borderRadius="xl"
          borderColor="blackAlpha.300"
          p={{ base: 2, md: 8 }}
          borderWidth={{ base: '0', md: '2px' }}
        >
          <CustomImage
>>>>>>> 1adfaf9c068548ea5bb4181892b5868d47136290
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
                >
                  Watch Now
                </Button>
              </Box>
              <ButtonGroup spacing={6} mt={6} fontFamily="'Roboto'">
                <Button
                  color="white"
                  bg="#B7CE63"
                  size="lg"
                  borderRadius="xl"
                  w={{ base: '10.5rem', md: '12rem' }}
                  _hover={{ bg: '#3E7C17' }}
                >
                  Book now
                </Button>
                <Button
                  color="white"
                  bg="#B7CE63"
                  size="lg"
                  borderRadius="xl"
                  w={{ base: '10.5rem', md: '12rem' }}
                  _hover={{ bg: '#3E7C17' }}
                >
                  Know More
                </Button>
              </ButtonGroup>
            </Flex>
          </Box>
        </Stack>
      </Section>
    </Box>
  )
}

export default FeaturedCard
