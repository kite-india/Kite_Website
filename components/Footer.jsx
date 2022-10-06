import { Box, Flex, Heading, Text, Link } from '@chakra-ui/react'
import React from 'react'
import { FiLinkedin, FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'

// Social Links are all social media links
const SocialLinks = () => {
  return (
    <Flex gap={{ base: 2, md: 3, lg: 4 }} my={4} align="center">
      <Link>
        <FiLinkedin />
      </Link>
      <Link>
        <FiFacebook />
      </Link>
      <Link>
        <FiTwitter />
      </Link>
      <Link>
        <FiInstagram />
      </Link>
    </Flex>
  )
}

// Website Links are all internal links to different pages for footer
const WebsiteLinks = () => {
  return (
    <Flex
      gap={{ base: 2, md: 3, lg: 4 }}
      fontFamily="'Poppins'"
      fontSize="14px"
      fontWeight="regular"
      my={4}
    >
      <Link href="/">Home</Link>
      <Link href="/trips">Trips</Link>
      <Link href="/gallery">Gallery</Link>
      <Link href="/contact">Contact Us</Link>
    </Flex>
  )
}

const Footer = () => {
  return (
    <Box w="100%" py={6} bgColor="#F9F9F9" bottom={0}>
      <Flex
        w="100%"
        direction={{ base: 'column', md: 'row' }}
        gap={{ base: 12, md: 6 }}
        align="center"
        justify="space-evenly"
      >
        <Box w="100%" px={12}>
          <Heading fontSize="24px" fontWeight="bold">
            Kite India
          </Heading>
        </Box>
        <Box w="100%" px={12} borderX={{ base: 0, md: '2px' }}>
          <Heading fontSize="24px" fontWeight="bold">
            Pages
          </Heading>
          <WebsiteLinks />
        </Box>
        <Box w="100%" px={12}>
          <Heading fontSize="24px" fontWeight="bold">
            Social Media
          </Heading>
          <SocialLinks />
          <Text fontSize="14px"> @2022 Kite India. All Rights Reserved.</Text>
        </Box>
      </Flex>
    </Box>
  )
}

export default Footer
