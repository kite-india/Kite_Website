import React from 'react'
import { Flex, Box, Heading, Stack } from '@chakra-ui/react'
import { BlogCard, Section } from '../components'
const DiscoverTheWorld = ({ data }) => {
  return (
    <Box position={'relative'} py={'8'}>
      <Box
        display="flex"
        textAlign="center"
        direction={{ base: 'column', lg: ' row' }}
        alignItems="center"
        flexWrap="wrap"
        justifyContent="center"
        px={6}
        py={{ base: 2, lg: 6 }}
        gap={{ base: 2, lg: 4 }}
      >
        <Heading
          color={'color13'}
          fontFamily="'Poppins'"
          size={'sm'}
          align={'center'}
        >
          JOIN OUR ADVENTURES
        </Heading>
        <Heading
          color={'color5'}
          fontFamily="'Poppins'"
          fontSize={{ base: 'xl', sm: '3xl' }}
        >
          Discover India with us
        </Heading>
      </Box>
      <Section delay={0.3}>
        <Flex p={4} align={'center'} justify="center">
          <Stack spacing="36px" direction={{ base: 'column', lg: 'row' }}>
            {data.map(blog => (
              <BlogCard blog={blog} key={blog.name} />
            ))}
          </Stack>
        </Flex>
      </Section>
    </Box>
  )
}

export default DiscoverTheWorld
