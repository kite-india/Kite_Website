import Image from 'next/image'
import { Box, Center, Heading, Text, Stack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import CustomImageComponent from './CustomImageComponent'

interface BlogProps {
  blog: any
}

const BlogCard: React.FC<BlogProps> = ({ blog }) => {
  const { _id, name, image, description } = blog
  return (
    <Center as={motion.div} whileHover={{ scale: 1.1 }} cursor="pointer">
      <Box
        w={'100%'}
        h={'435px'}
        // overflow={'hidden'}
        rounded="md"
      >
        <Box borderRadius="lg" overflow={'hidden'}>
          <CustomImageComponent
            src={image}
            alt={_id}
            layout="responsive"
            width={368.67}
            height={317.05}
            objectFit="cover"
          />
        </Box>
        <Center>
          <Box pt="8px">
            <Heading
              as="h2"
              size="md"
              fontSize="24px"
              fontFamily="'Changa One'"
              color="#434343"
              fontWeight="semibold"
            >
              {name}
            </Heading>
          </Box>
        </Center>
        <Center py={2}>
          <Box
            maxW={'368.67px'}
            h={'78px'}
            w={'full'}
            rounded={'md'}
            pt={0}
            pb={2}
            pr={2}
            pl={2}
            // overflow={'hidden'}
          >
            <Stack>
              <Text fontSize="16px" fontFamily="'Roboto'">
                {description}
                <Text
                  fontSize="16px"
                  cursor="pointer"
                  color="#8fb339"
                  fontFamily="'Poppins'"
                  as="span"
                >
                  {' '}
                  Read more...
                </Text>
              </Text>
            </Stack>
          </Box>
        </Center>
      </Box>
    </Center>
  )
}

export default BlogCard
