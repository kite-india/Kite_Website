import React from 'react'
import { Flex, Box, Heading, Center, Stack } from '@chakra-ui/react'
import { BlogCard, Section } from '../components'
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
      <Section delay={0.3}>
        <Flex p={4} align={'center'} justify="center">
          <Stack spacing="36px" direction={{ base: 'column', lg: 'row' }}>
            <Box>
              <BlogCard />
            </Box>
            <Box>
              <BlogCard />
            </Box>
            <Box>
              <BlogCard />
            </Box>
          </Stack>
        </Flex>
      </Section>
    </Box>
  )
}

export default DiscoverTheWorld
