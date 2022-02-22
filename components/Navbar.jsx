import { useState } from 'react'
import NextLink from 'next/link'
import {
  Flex,
  Box,
  Heading,
  Spacer,
  HStack,
  Link,
  Button,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  MenuDivider,
  MenuButton,
  MenuList
} from '@chakra-ui/react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { BiHomeHeart, BiTrip } from 'react-icons/bi'
import { GrGallery, GrContact } from 'react-icons/gr'
import { FaRegUserCircle } from 'react-icons/fa'

const links = [
  { name: 'Home', href: '#home', icon: <BiHomeHeart /> },
  { name: 'Trips', href: '#trips', icon: <BiTrip /> },
  { name: 'Gallery', href: '#gallery', icon: <GrGallery /> },
  { name: 'Contact Us', href: '#contact', icon: <GrContact /> }
]

const BookBtn = () => (
  <Button
    size="sm"
    rounded="full"
    px={3}
    fontSize="16px"
    bg="color5"
    color="white"
    fontFamily="'Roboto'"
    _hover={{
      bg: 'color6'
    }}
    fontWeight="normal"
    display={{ base: 'none', md: 'flex' }}
    onClick={() => {}}
  >
    Book now
  </Button>
)

const LinkItem = ({ href, children }) => (
  <NextLink href={href}>
    <Link
      fontSize="16px"
      fontFamily="'Roboto'"
      _hover={{ color: 'color5' }}
      _active={{ color: 'color5' }}
    >
      {children}
    </Link>
  </NextLink>
)

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <Box
      py={2}
      px={{ base: 4, md: 8, lg: 32 }}
      align="center"
      position="fixed"
      w="100%"
      bg="rgba(255,255,255,1)"
      backdropFilter="saturate(180%) blur(5px)"
      mb={4}
      zIndex={100}
    >
      <Flex justifyContent="center" alignItems="center">
        <Heading as="h4" fontSize="24px" color="navbarLogo">
          Kite India
        </Heading>
        <Spacer />
        <HStack gap={{ base: 4, lg: 8 }} display={{ base: 'none', md: 'flex' }}>
          {links.map(({ name, href }, idx) => (
            <LinkItem key={idx} href={href}>
              {name}
            </LinkItem>
          ))}
        </HStack>
        <Avatar
          icon={<FaRegUserCircle />}
          color="color5"
          bg="white"
          w="25px"
          h="25px"
          ml={8}
          mr={4}
          _hover={{ color: 'color6' }}
        />
        <BookBtn />
        <Menu>
          <MenuButton
            display={{ base: 'flex', md: 'none' }}
            as={IconButton}
            aria-label="Options"
            icon={isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            variant="outline"
            onClick={() => setOpen(!isOpen)}
          />
          <MenuList display={{ base: '', md: 'none' }}>
            {links.map(({ name, href, icon }, idx) => (
              <NextLink href={href} key={idx}>
                <MenuItem
                  as={Link}
                  icon={icon}
                  fontFamily="'Roboto'"
                  fontSize="16px"
                  _hover={{ color: 'color5' }}
                  _active={{ color: 'color5' }}
                  onClick={() => setOpen(!isOpen)}
                >
                  {name}
                </MenuItem>
              </NextLink>
            ))}
            <MenuDivider />
            <MenuItem
              bg="color2"
              fontFamily="'Roboto'"
              _hover={{ color: 'color3' }}
              _active={{ color: 'color3' }}
              color="white"
              rounded="md"
              px={4}
              fontSize="16px"
            >
              Book Now
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  )
}

export default Navbar
