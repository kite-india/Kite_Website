import {
  Flex,
  Box,
  Heading,
  Spacer,
  HStack,
  Link,
  Button,
  Avatar
} from '@chakra-ui/react'

const links = [
  { name: 'Home', href: '#home' },
  { name: 'Trips', href: '#trips' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact Us', href: '#contact' }
]

const Navbar = () => {
  return (
    <Box py={2} px={32} align="center">
      <Flex justifyContent="center" alignItems="center">
        <Heading as="h3" color="color8">
          Kite India
        </Heading>
        <Spacer />
        <HStack gap={8}>
          {links.map(({ name, href }, idx) => (
            <Link
              href={href}
              key={idx}
              fontFamily="'Roboto'"
              _hover={{ color: 'color3' }}
              _active={{ color: 'color3' }}
            >
              {name}
            </Link>
          ))}
        </HStack>
        <Avatar w="30px" h="30px" ml={8} mr={4} />
        <Button
          rounded="full"
          px={4}
          py={1}
          bg="color5"
          color="white"
          fontFamily="'Roboto'"
          _hover={{
            bg: 'color2'
          }}
        >
          Book now
        </Button>
      </Flex>
    </Box>
  )
}

export default Navbar
