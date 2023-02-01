import { useRef, useState } from 'react'
import NextLink from 'next/link'
import Section from '../Section'
import {
  Flex,
  Box,
  Heading,
  Spacer,
  Link,
  Button,
  VStack,
  Center,
  Text,
  Table,
  Thead,
  Tbody,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Input,
  Tr,
  Th,
  Td,
  TableContainer,
  Checkbox
} from '@chakra-ui/react'
import {
  BiSortDown,
  BiSearch,
  BiUser,
  BiCreditCard,
  BiTrip,
  BiRun
} from 'react-icons/bi'
import {
  Package,
  Activity,
  PackageRegistration,
  Transactions,
  Passenger,
  User
} from '@utils/dashboardtypes'
import { SearchData } from './SearchData'

const links = [
  { name: 'Activity', href: '/dashboard', icons: <BiRun /> },
  { name: 'Users', href: '/dashboard/users', icons: <BiUser /> },
  {
    name: 'Transactions',
    href: '/dashboard/transactions',
    icons: <BiCreditCard />
  },
  { name: 'Packages', href: '/dashboard/packages', icons: <BiTrip /> }
]

interface SectionProps {
  data?:
    | Package
    | Activity
    | PackageRegistration
    | Transactions
    | Passenger
    | User
}

const LinkItem = ({ href, children }) => (
  <NextLink href={href}>
    <Link
      fontSize="20px"
      fontFamily="'Roboto'"
      color="black"
      p="10px"
      _hover={{ color: 'color5', bg: 'navbarLogo' }}
      _active={{ color: 'color5' }}
      fontWeight="normal"
      w="100%"
    >
      {children}
    </Link>
  </NextLink>
)

const TableComponent = ({ data, checkBox, setCheckBox }) => {
  const [expandedRows, setExpandedRows] = useState([])
  const [expandState, setExpandState] = useState({})

  const handleChange = e => {
    // Destructuring
    const { value, checked } = e.target
    const { id } = checkBox

    // Case 1 : The user checks the box
    if (checked) {
      setCheckBox({
        id: [...id, value]
      })
    }

    // Case 2  : The user unchecks the box
    else {
      setCheckBox({
        id: id.filter(e => e !== value)
      })
    }
  }
  const handleEpandRow = (event, userId) => {
    const currentExpandedRows = expandedRows
    const isRowExpanded = currentExpandedRows.includes(userId)

    let obj = {}
    isRowExpanded ? (obj[userId] = false) : (obj[userId] = true)
    setExpandState(obj)
    const newExpandedRows = isRowExpanded
      ? currentExpandedRows.filter(id => id !== userId)
      : currentExpandedRows.concat(userId)

    setExpandedRows(newExpandedRows)
  }
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th borderColor="black"></Th>
            {typeof data[0] === 'object' ? (
              Object.keys(data[0])?.map((oneKey, i) => {
                return Array.isArray(data[0][oneKey]) ? ( // checks if the key of the data is a Array
                  typeof data[0][oneKey][0] === 'object' ? ( // if the key of the data is a array of objects
                    <Th borderColor="black" fontSize={15}>
                      {oneKey}
                      {'{ }'}
                    </Th> //to show the differece b/w Array[..],array[{},{},{},..],simple data
                  ) : (
                    <Th borderColor="black" fontSize={15}>
                      {oneKey}
                      {'[ ]'}
                    </Th>
                  )
                ) : (
                  <Th key={i} borderColor="black" fontSize={15}>
                    {oneKey}
                  </Th>
                )
              })
            ) : (
              <>loading</> // loading function
            )}
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((key, i) => (
            <Tr bg={i % 2 == 0 ? '#f2f2f2' : 'white'} data-expanded="false">
              <Td borderColor="black">
                <Checkbox
                  value={key.id}
                  onChange={handleChange}
                  borderColor="black"
                ></Checkbox>
              </Td>

              {Object.keys(key)?.map((oneKey, i) => {
                return Array.isArray(key[oneKey]) ? ( // checks if the key of the data is a Array
                  typeof key[oneKey][0] === 'object' ? ( // if the key of the data is a array of objects
                    <Td borderColor="black">
                      <Button
                        p="4"
                        onClick={event =>
                          handleEpandRow(event, key[oneKey][0].id)
                        }
                      >
                        {`${oneKey}[${key[oneKey].length}]`}
                      </Button>
                      {expandedRows.includes(key[oneKey][0].id) ? (
                        <TableComponent
                          data={key[oneKey]}
                          checkBox={checkBox}
                          setCheckBox={setCheckBox}
                        /> //display the sub array of objects when the show button is clicked
                      ) : (
                        <></> //empty div when its hide
                      )}
                    </Td>
                  ) : (
                    //if the key of the data is simple array
                    <Td borderColor="black">
                      <Button p="4" onClick={event => handleEpandRow(event, i)}>
                        {` ${oneKey}[${key[oneKey].length}]`}
                      </Button>
                      {expandedRows.includes(i) ? (
                        <Flex gap={1} direction="row" mt="4">
                          {'['}
                          {key[oneKey]?.map(ele => (
                            <Text>{`"${ele}",`}</Text>
                          ))}
                          {']'}
                        </Flex>
                      ) : (
                        <></> //empty div when its hide
                      )}
                    </Td>
                  )
                ) : (
                  //else
                  <Td key={i} borderColor="black">
                    {key[oneKey]}
                  </Td>
                )
              })}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

const SideBar: React.FC<SectionProps> = ({ data }) => {
  const [searchVal, setSearchVal] = useState(null)
  const { filteredData, loading } = SearchData({
    searchVal,
    retrieve: data
  })
  const [checkBox, setCheckBox] = useState({
    id: []
  })
  const [edit, setEdit] = useState('gray')
  const onEdit = () => {
    if (checkBox.id.length == 1) {
      console.log('you are ok')
      setEdit('green')
    } else {
      console.log('oops bro !!')
      setEdit('red')
    }
  }
  console.log(filteredData)

  return (
    <Box w="100%">
      <Flex marginTop="3rem" direction={{ base: 'column', lg: 'row' }} w="100%">
        <Box w={{ base: '100%', lg: '20%' }}>
          <Section>
            <Box
              w={{ base: '90%', lg: '100%' }}
              m="0"
              mx={{ base: '2rem', lg: '0px' }}
            >
              <Flex
                direction={{ base: 'row', lg: 'column' }}
                gap={{ base: 0, md: 5, lg: 10 }}
                alignItems="center"
                w="100%"
              >
                <Heading as="h4" fontSize="28px" color="navbarLogo">
                  Kite India
                </Heading>
                <Spacer />
                <VStack w="100%">
                  {links.map(({ name, href, icons }) => (
                    <LinkItem key={name} href={href}>
                      <Flex direction="row" gap={4} ml="4">
                        {icons}
                        <Box></Box>
                        <Center>{name}</Center>
                      </Flex>
                    </LinkItem>
                  ))}
                </VStack>
                <Spacer />
                <Center>
                  <Button
                    ml={{ base: '1rem', lg: '0px' }}
                    px="3"
                    w="100%"
                    my="20px"
                    borderRadius="10px"
                    color="white"
                    backgroundColor="#A4C15E"
                    boxShadow="lg"
                    fontFamily="'Poppins'"
                  >
                    Log out
                  </Button>
                </Center>
              </Flex>
            </Box>
          </Section>
        </Box>
        <Box w="100%" minH="92vh">
          <Flex direction="row" gap={4}>
            <Input
              placeholder="Search"
              w="40%"
              onChange={e => {
                setSearchVal(e.target.value)
              }}
            ></Input>
            <Menu>
              <MenuButton as={Button} rightIcon={<BiSortDown />}>
                Sort
              </MenuButton>
              <MenuList>
                {Object.keys(data[0]).map((oneKey, i) => {
                  return <MenuItem key={i}>{oneKey}</MenuItem>
                })}
              </MenuList>
            </Menu>
            <Button>Filter</Button>
          </Flex>
          <Flex direction="row" gap={4} py="8">
            <Button onClick={() => console.log(checkBox)}>Delete</Button>
            <Button onClick={onEdit} colorScheme={edit}>
              Edit
            </Button>
            <Button>Add</Button>
          </Flex>
          {loading ? (
            <>loading</> // loading function
          ) : (
            <TableComponent
              data={filteredData}
              checkBox={checkBox}
              setCheckBox={setCheckBox}
            />
          )}
        </Box>
      </Flex>
    </Box>
  )
}
export default SideBar
