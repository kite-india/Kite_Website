import React from 'react'
import { Flex, Box, Heading, Center, Stack } from '@chakra-ui/react'
import BlogPostWithImage from '../components/blogCard'
const DiscoverTheWorld = () => {
  return (
    <Box position={'relative'} pb={'8'}>
      <Center>
        <Heading
          color={'color5'}
          fontFamily="'Poppins'"
          pt={'1'}
          mt={'10'}
          fontSize={{ base: 'xl', sm: '3xl' }}
        >
          <Heading
            color={'color13'}
            fontFamily="'Poppins'"
            size={'sm'}
            align={'center'}
            p={'4'}
          >
            JOIN OUR ADVENTURES
          </Heading>
          Discover India with us
        </Heading>
      </Center>
      <Flex p={4} align={'center'} justify="center">
        <Stack spacing="36px" direction={{ base: 'column', lg: 'row' }}>
          <Box>
            <BlogPostWithImage />
          </Box>
          <Box>
            <BlogPostWithImage />
          </Box>
          <Box>
            <BlogPostWithImage />
          </Box>
        </Stack>
      </Flex>
    </Box>
  )
}

export default DiscoverTheWorld
