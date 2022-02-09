import { useState } from 'react'
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
  MenuList,
  MenuGroup
} from '@chakra-ui/react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { BiHomeHeart, BiTrip } from 'react-icons/bi'
import { GrGallery, GrContact } from 'react-icons/gr'

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
    fontSize="12px"
    bg="color5"
    color="white"
    fontFamily="'Roboto'"
    _hover={{
      bg: 'color2'
    }}
    fontWeight="normal"
    display={{ base: 'none', md: 'flex' }}
    onClick={() => {}}
  >
    Book now
  </Button>
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
      bg="rgba(255,255,255,0.8)"
      backdropFilter="saturate(180%) blur(5px)"
      mb={4}
    >
      <Flex justifyContent="center" alignItems="center">
        <Heading as="h3" color="color8">
          Kite India
        </Heading>
        <Spacer />
        <HStack gap={{ base: 4, lg: 8 }} display={{ base: 'none', md: 'flex' }}>
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
        <Avatar w="25px" h="25px" ml={8} mr={4} />
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
              <MenuItem
                icon={icon}
                key={idx}
                fontFamily="'Roboto'"
                _hover={{ color: 'color3' }}
                _active={{ color: 'color3' }}
              >
                <Link href={href}>{name}</Link>
              </MenuItem>
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
              fontSize="18px"
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
