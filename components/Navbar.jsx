import { useRef } from 'react'
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
  useDisclosure,
  useMediaQuery,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  DrawerFooter
} from '@chakra-ui/react'
import { AiOutlineMenu } from 'react-icons/ai'
import { BiHomeHeart, BiTrip } from 'react-icons/bi'
import { GrGallery, GrContact } from 'react-icons/gr'
import { FaRegUserCircle } from 'react-icons/fa'
import { motion } from 'framer-motion'

const links = [
  { name: 'Home', href: '/', icon: <BiHomeHeart /> },
  { name: 'Trips', href: '/trips', icon: <BiTrip /> },
  { name: 'Gallery', href: '/gallery', icon: <GrGallery /> },
  { name: 'Contact Us', href: '/contact-us', icon: <GrContact /> }
]

const BookBtn = () => (
  <Button
    as={motion.button}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    size="sm"
    rounded="full"
    px={3}
    fontSize="16px"
    bg="color5"
    color="white"
    fontFamily="'Roboto'"
    _hover={{
      bg: 'green.400'
    }}
    fontWeight="normal"
    display={{ base: 'none', md: 'flex' }}
    onClick={() => {}}
    variant="outline"
  >
    Book now
  </Button>
)

const LinkItem = ({ href, children }) => (
  <NextLink href={href}>
    <Link
      fontSize="16px"
      fontFamily="'Roboto'"
      color="black"
      _hover={{ color: 'color5' }}
      _active={{ color: 'color5' }}
      fontWeight="normal"
    >
      {children}
    </Link>
  </NextLink>
)

const DrawerLink = ({ href, children, icon }) => (
  <NextLink href={href}>
    <Link
      fontFamily="'Roboto'"
      fontSize="16px"
      _hover={{ color: 'color5' }}
      _active={{ color: 'color5' }}
      display="flex"
      alignItems="center"
      gap={1}
    >
      {icon}
      {children}
    </Link>
  </NextLink>
)

const Navbar = () => {
  // const [isOpen, setOpen] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  const [isSmallerThanMd] = useMediaQuery('(max-width:768px)')
  return (
    <Box
      py={4}
      px={{ base: 4, md: 8, lg: 32 }}
      align="center"
      position="fixed"
      zIndex={100}
      display="block"
      w="100vw"
      bg="rgba(255,255,255,0.7)"
      backdropFilter="saturate(180%) blur(5px)"
      boxShadow="xl"
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        as={motion.div}
        animate={{ y: [-200, 0], opacity: [0, 1] }}
        transition={{ duration: 3, delay: 3, ease: 'linear' }}
      >
        <Heading as="h4" fontSize="24px" color="navbarLogo">
          Kite India
        </Heading>
        <Spacer />
        <HStack gap={{ base: 4, lg: 8 }} display={{ base: 'none', md: 'flex' }}>
          {links.map(({ name, href }) => (
            <LinkItem key={name} href={href}>
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
        {isSmallerThanMd && (
          <Button
            aria-label="drawer-open"
            ref={btnRef}
            onClick={onOpen}
            fontSize="16px"
            bg="color5"
            color="white"
            rounded="lg"
            _hover={{ bg: 'green.400' }}
          >
            <AiOutlineMenu />
          </Button>
        )}
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
          size="xs"
        >
          <DrawerOverlay />
          <DrawerContent
            zIndex={100}
            backdropFilter="saturate(180%) blur(3px)"
            bg="rgba(255,255,255,0.9)"
          >
            <DrawerCloseButton />
            <DrawerHeader
              borderBottomWidth="1px"
              color="#B7CE6A"
              borderColor="#B7CE6A"
              bg="rgba(255,255,255,1)"
              boxShadow="xl"
              alignItems="center"
              justifyContent="center"
              fontFamily="'Poppins'"
            >
              Kite India
            </DrawerHeader>
            <DrawerBody px={2} py={2}>
              <VStack
                gap={{ base: 4, lg: 8 }}
                bg="rgba(255,255,255,1)"
                boxShadow="xl"
                rounded="lg"
                p={6}
                as={motion.div}
                animate={{ y: [-600, 0], opacity: 1 }}
                transition={{ duration: 3, delay: 2, ease: 'linear' }}
              >
                {links.map(({ name, href, icon }) => (
                  <DrawerLink icon={icon} name={name} href={href} key={name}>
                    {name}
                  </DrawerLink>
                ))}
                <Button
                  bg="color2"
                  fontFamily="'Roboto'"
                  _hover={{ color: 'color3' }}
                  _active={{ color: 'color3' }}
                  color="white"
                  rounded="md"
                  px={4}
                  m={1}
                  fontSize="16px"
                  w="200px"
                  as={motion.button}
                  whileTap={{ scale: 1.2 }}
                >
                  Book Now
                </Button>
              </VStack>
            </DrawerBody>
            <DrawerFooter
              bg="rgba(255,255,255,1)"
              boxShadow="lg"
              fontFamily="'Roboto'"
              color="#B7CE6A"
              fontSize="20px"
              fontStyle="italic"
            >
              Kite India @2022
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  )
}

export default Navbar
