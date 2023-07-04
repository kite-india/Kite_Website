import { useRouter } from 'next/router'
import {
  Box,
  Text,
  Flex,
  SimpleGrid,
  Icon,
  ButtonGroup,
  Button,
  Spacer,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/react'
import { FiMap } from 'react-icons/fi'
import CustomImage from './CustomImage'
import Link from 'next/link'
import { Package } from 'src/API'
import { MdCheckCircle } from 'react-icons/md'

interface PackageProps {
  data: Package
  activities_data: any
}

const PackageCard: React.FC<PackageProps> = ({ data, activities_data }) => {
  const router = useRouter()
  const { id, location, cost, description, image, duration } = data

  const bookNow = () => {
    router.push(`/packages/${id}/book-now`)
  }

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      as="div"
      boxShadow="lg"
      borderRadius="lg"
      maxW="600px"
      p={{ sm: 6, md: 6 }}
    >
      <Box
        // w={{ base: '100%', lg: '380px' }}
        // h={{ base: '100%', lg: '240px' }}
        mb={3}
        borderRadius="xl"
        overflow="hidden"
      >
        <CustomImage
          src={image}
          alt="card"
          objectFit="cover"
          layout="responsive"
          sizes="100vw"
          width={380}
          height={240}
        />
      </Box>
      <Flex
        flexDirection="column"
        justify={{ sm: "flex-start", md: "center" }}

        alignContent={{ sm: "flex-start", md: "center" }}
        w="100%"
        mb={6}
      >
        <Text fontFamily="'Poppins'" fontWeight="semibold" fontSize={{ sm: "1.3rem", md: "2rem" }}>
          {location}
        </Text>
        <Spacer />
        <Text fontFamily="'Poppins'" fontWeight={500} p={3} fontSize="16px">
          Duration:{duration}
        </Text>
      </Flex>
      <Text
        fontFamily="'Poppins'"
        fontWeight={700}
        fontSize="18px"
        lineHeight="10px"
      >
        Plan Includes:
      </Text>

      <Box
        // height="56px"
        fontFamily="'Poppins'"
        fontWeight="normal"
        fontSize="16px"
        // marginBottom="22px"
        pt={'3'}
      >
        <List>
          {description.split('\n').map((value, index) => {
            return (
              <ListItem paddingBottom={3} display={'flex'} key={index}>
                <ListIcon as={MdCheckCircle} color="green.500" />
                <Text fontWeight={'medium'} marginTop={-1}>
                  {' '}
                  {value}
                </Text>
              </ListItem>
            )
          })}
        </List>
      </Box>
      <Flex
        justifyContent={'flex-end'}
        alignContent={"flex-end"}
        flexDirection={'column'}
        flexGrow={1}
      >
        <SimpleGrid
          mt={2}
          fontFamily="'Poppins'"
          columns={2}
          alignItems={{ base: 'center', lg: 'left' }}
          w="full"
          pt={3}
        >
          {activities_data.map(tag => {
            if (tag.packageID === id) {
              return (
                <Box w="100%" key={tag.id}>
                  <Text>
                    <Icon as={FiMap} mr={2} />

                    {tag.name}
                  </Text>
                </Box>
              )
            }
          })}
        </SimpleGrid>

        <Flex direction={{sm:"column",lg:"row"}} justifyContent={"space-between"}>

          <Flex>

            <Text fontFamily="'Poppins'" fontSize="18px" fontWeight={'bold'}>
              Rs {cost}/{' '}
              <Text
                as="span"
                fontWeight={'normal'}
                fontFamily="'Poppins'"
                fontSize="12px"
              >
                person
              </Text>
            </Text>
          </Flex>
          <Flex
            direction={{ sm: "row" }}
            alignContent="center"
            justifyContent="flex-start"
            pt={"1rem"}
          >

            <Link href={`/packages/${id}`}>
              <Button
                color="white"
                textAlign="center"
                pl={4}
                py={2}
                bg="#125C13"
                _hover={{ bg: '#8FB339' }}
              >
                More Info
              </Button>
            </Link>
            <Button
              textAlign="center"
              color="white"
              bg="#8FB339"
              px={4}
              py={2}
              ml={4}
              width={{ sm: 95 }}
              _hover={{ bg: '#125C13' }}
              onClick={bookNow}
            >
              Book Now
            </Button>

          </Flex>

        </Flex>
      </Flex>
    </Box>
  )
}

export default PackageCard
