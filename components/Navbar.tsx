import { useEffect, useRef, useState } from 'react'
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
  DrawerFooter,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Text
} from '@chakra-ui/react'
import { AiOutlineMenu } from 'react-icons/ai'
import {
  BiHomeHeart,
  BiTrip,
  BiShieldQuarter,
  BiCreditCard,
  BiLogOut
} from 'react-icons/bi'
import { GrGallery, GrContact } from 'react-icons/gr'
import { FaRegUserCircle } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { getAuthUserName, ionViewCanEnter } from '@libs/userAuth'
import { Auth } from 'aws-amplify'
import { useRouter } from 'next/router'

const links = [
  { name: 'Home', href: '/', icon: <BiHomeHeart /> },
  { name: 'Trips', href: '/trips', icon: <BiTrip /> },
  { name: 'Gallery', href: '/gallery', icon: <GrGallery /> },
  { name: 'Contact Us', href: '/contact', icon: <GrContact /> }
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
    onClick={() => { }}
    variant="outline"
  >
    Book now
  </Button>
)

const LinkItem = ({ href, children }) => (

  <Link
    href={href}
    fontSize="16px"
    fontFamily="'Roboto'"
    color="black"
    _hover={{ color: 'color5' }}
    _active={{ color: 'color5' }}
    fontWeight="normal"
  >
    {children}
  </Link>

)

const DrawerLink = ({ href, children, icon }) => (

  <Link
    href={href}
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

)

interface NavProps {
  path?: string
}

const Navbar: React.FC<NavProps> = () => {
  const router = useRouter()
  const [username, setUsername] = useState('Sign In')
  const [status, setStatus] = useState('unauthenticated')
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    getAuthUserName()
      .then(e => {
        setUsername(e.attributes.name)
        setStatus('authenticated')
      })
      .catch(e => {
        console.log(e.message)
        setStatus(e.message)
      })
  }, [])

  // const [isOpen, setOpen] = useState(false)

  const btnRef = useRef()

  const [isSmallerThanMd] = useMediaQuery('(max-width:768px)')
  return (
    <Box
      as={motion.div}
      py={{ base: 3, md: 4 }}
      px={{ base: 4, md: 8, lg: 32 }}
      alignItems="center"
      position="fixed"
      zIndex={100}
      display="block"
      w="100vw"
      bg="rgba(255,255,255,1)"
      opacity="0.8"
      backdropFilter="saturate(180%) blur(5px)"
      boxShadow="xl"
      whileHover={{
        opacity: [0.8, 1],
        transition: { duration: 1 }
      }}
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        as={motion.div}
        animate={{ y: [-200, 0], opacity: [0, 1] }}
        transition={{ duration: 3, delay: 3, ease: 'linear' }}
      >
        <Box>
          <Link
            href="/"
            _focus={{ textDecoration: 'none' }}
            _hover={{ textDecoration: 'none' }}
          >
            <Heading as="h4" fontSize="24px" color="navbarLogo">
              Kite India
            </Heading>
          </Link>
        </Box>

        <Spacer />
        <HStack gap={{ base: 4, lg: 8 }} display={{ base: 'none', md: 'flex' }}>
          {links.map(
            ({ name, href }) =>
              name !== 'Home' && (
                <Box key={name}>
                  <LinkItem href={href}>
                    {name}
                  </LinkItem>
                </Box>
              )
          )}
        </HStack>

        {status != 'unauthenticated' ? (
          <Menu>
            <MenuButton
              backgroundColor={'transparent'}
              as={IconButton}
              borderRadius="full"
              ml={8}
              mr={4}
              p={'0px'}
              aria-label="settings"
              _hover={{ backgroundColor: 'transparent', outline: 'none' }}
            >
              <Avatar
                icon={<FaRegUserCircle />}
                color="color5"
                bg="white"
                w="30px"
                h="30px"
                size="lg"
                _hover={{ color: 'green.400' }}
                cursor="pointer"
              />
            </MenuButton>
            <MenuList
              p="2"
              border={'2px solid rgba(199, 213, 159, 1)'}
              borderRadius="2xl"
            >
              <Box>
                <Link
                  href="/info"
                  _focus={{ textDecoration: 'none' }}
                  _hover={{ textDecoration: 'none' }}
                >
                  <MenuItem
                    minH={'48px'}
                    _hover={{
                      borderRadius: '15px',
                      backgroundColor: 'rgba(199, 213, 159, 1)'
                    }}
                    _focus={{
                      borderRadius: '15px',
                      backgroundColor: 'rgba(199, 213, 159, 1)'
                    }}
                  >
                    <Avatar
                      icon={<FaRegUserCircle color="black" />}
                      color="color5"
                      bg="white"
                      w="30px"
                      h="30px"
                      mr="23px"
                      size="lg"
                      _hover={{ color: 'green.400' }}
                      cursor="pointer"
                    />
                    <Text
                      fontFamily={'Poppins'}
                      fontWeight="500"
                      fontSize={{ sm: '14px', md: '16px', lg: '18px' }}
                    >
                      Personal Info
                    </Text>
                  </MenuItem>
                </Link>
              </Box>
              <Link
                href="/passwordReset"
                _focus={{ textDecoration: 'none' }}
                _hover={{ textDecoration: 'none' }}
              >
                <MenuItem
                  minH={'48px'}
                  _hover={{
                    borderRadius: '15px',
                    backgroundColor: 'rgba(199, 213, 159, 1)'
                  }}
                  _focus={{
                    borderRadius: '15px',
                    backgroundColor: 'rgba(199, 213, 159, 1)'
                  }}
                >
                  <Avatar
                    icon={<BiShieldQuarter color="black" />}
                    color="color5"
                    bg="white"
                    w="30px"
                    h="30px"
                    mr="23px"
                    size="lg"
                    _hover={{ color: 'green.400' }}
                    cursor="pointer"
                  />
                  <Text
                    fontFamily={'Poppins'}
                    fontWeight="500"
                    fontSize={{ sm: '14px', md: '16px', lg: '18px' }}
                  >
                    Security
                  </Text>
                </MenuItem>
              </Link>
              <Link
                href="/transaction"
                _focus={{ textDecoration: 'none' }}
                _hover={{ textDecoration: 'none' }}
              >
                <MenuItem
                  minH={'48px'}
                  _hover={{
                    borderRadius: '15px',
                    backgroundColor: 'rgba(199, 213, 159, 1)'
                  }}
                  _focus={{
                    borderRadius: '15px',
                    backgroundColor: 'rgba(199, 213, 159, 1)'
                  }}
                >
                  <Avatar
                    icon={<BiCreditCard color="black" />}
                    color="color5"
                    bg="white"
                    w="30px"
                    h="30px"
                    mr="23px"
                    size="lg"
                    _hover={{ color: 'green.400' }}
                    cursor="pointer"
                  />
                  <Text
                    fontFamily={'Poppins'}
                    fontWeight="500"
                    fontSize={{ sm: '14px', md: '16px', lg: '18px' }}
                  >
                    Transaction Info
                  </Text>
                </MenuItem>
              </Link>
              <Link
                _focus={{ textDecoration: 'none' }}
                _hover={{ textDecoration: 'none' }}
                onClick={e => {
                  e.preventDefault()
                  Auth.signOut()
                    .then(e => {
                      router.push('/login')
                    })
                    .catch(e => {
                      console.log('Failed to logout')
                    })
                }}
              >
                <MenuItem
                  minH={'48px'}
                  _hover={{
                    borderRadius: '15px',
                    backgroundColor: 'rgba(199, 213, 159, 1)'
                  }}
                  _focus={{
                    borderRadius: '15px',
                    backgroundColor: 'rgba(199, 213, 159, 1)'
                  }}
                >
                  <Avatar
                    icon={<BiLogOut color="black" />}
                    color="color5"
                    bg="white"
                    w="30px"
                    h="30px"
                    mr="23px"
                    size="lg"
                    _hover={{ color: 'green.400' }}
                    cursor="pointer"
                  />
                  <Text
                    fontFamily={'Poppins'}
                    fontWeight="500"
                    fontSize={{ sm: '14px', md: '16px', lg: '18px' }}
                  >
                    Sign out
                  </Text>
                </MenuItem>
              </Link>
            </MenuList>
          </Menu>
        ) : (

          <Link
            href='/login'
            ml={8}
            mr={4}
            fontSize="16px"
            fontFamily="'Roboto'"
            color="black"
            _hover={{ color: 'color5' }}
            _active={{ color: 'color5' }}
            fontWeight="normal"
          >
            <Flex direction="row" gap={2} mx={4}>
              <FaRegUserCircle size={20} />
              <Text>Sign In</Text>
            </Flex>
          </Link>

        )}

        {/* <BookBtn /> */}
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
                  <DrawerLink icon={icon} href={href} key={name}>
                    {name}
                  </DrawerLink>
                ))}
                <Link href="/trips">
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
                </Link>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  )
}

export default Navbar





