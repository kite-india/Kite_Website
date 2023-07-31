import Image from 'next/image'
import { Box, Center, Heading, Text, Stack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import CustomImage from './CustomImage'
import Link from 'next/link'
import { Activity } from 'src/API'

interface BlogProps {
  blog: Activity
}

const BlogCard: React.FC<BlogProps> = ({ blog }) => {
  const { id, name, image, description, packageID } = blog
  return (
    <Box>

      <Link href={`/packages/${packageID}`}>

        <Center

          mx={{ base: '20px', md: '0px' }}
          as={motion.div}

          cursor="pointer"
        >
          <Box
            w={'100%'}

            // overflow={'hidden'}
            rounded="md"
          >
            <Box borderRadius="lg" >
              <CustomImage
                src={image}
                alt={name}
                layout="responsive"
                width={400}
                height={400}

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
        </Center >
      </Link>
    </Box>
  )
}

export default BlogCard
