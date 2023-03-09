import { Image, Box } from '@chakra-ui/react'

const GalleryCard = ({ src }) => {
  return (
    <Image
      objectFit="cover"
      maxW="100%"
      height="100%"
      verticalAlign="middle"
      p={{ base: 1, sm: 2 }}
      src={src}
    />
  )
}
export default GalleryCard
