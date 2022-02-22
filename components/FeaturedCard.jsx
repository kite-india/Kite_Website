import Image from 'next/image'
import { Box, HStack, Heading, Text, chakra } from '@chakra-ui/react'

const ChakraImage = chakra(Image)

const FeaturedCard = ({ data }) => {
  const { id, title, description, imgUrl, watchLink, knowMoreLink } = data
  return (
    <Box>
      <Heading>{title}</Heading>
      <Text>{description}</Text>
    </Box>
  )
}

export default FeaturedCard
