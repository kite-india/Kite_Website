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
import { FeaturedDestination } from '@utils/types'

interface FeaturedDataProps {
  data: FeaturedDestination
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
        <Stack direction={{ base: 'column', lg: 'row' }} spacing="2.18rem">
          <Image
            src={image}
            alt={name}
            borderRadius="xl"
            objectFit="cover"
            w="600px"
            h="400px"
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
