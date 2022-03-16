// import Image from 'next/image'
import styled from '@emotion/styled'
import { Box, Center, Heading, Text, Stack } from '@chakra-ui/react'

const Image = styled.img`
  border-radius: 10px;
  height: 317.05px;
  width: 368.67px;
  object-fit: cover;
`

export default function BlogPostWithImage() {
  return (
    <Center>
      <Box
        W={'100%'}
        h={'435px'}
        // overflow={'hidden'}
        rounded="md"
      >
        <Image
          src={
            'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          }
          alt="world"
        />
        <Center>
          <Box pt="8px">
            <Heading
              as="h4"
              size="md"
              fontSize="24px"
              fontFamily="'Changa One'"
              color="#434343"
              fontWeight="semibold"
            >
              Budget
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
                Featuring razor-sharp peaks housing the arctic landscape. This
                astonishing island is perfect for your next postcard.
                <Text
                  fontSize="16px"
                  cursor="pointer"
                  color="#8fb339"
                  fontFamily="'Poppins'"
                >
                  view full blog...
                </Text>
              </Text>
            </Stack>
          </Box>
        </Center>
      </Box>
    </Center>
  )
}
