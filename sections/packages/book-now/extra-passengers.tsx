import React, { useState } from 'react'
import { Box, Button, Flex, Input, Select, Text } from '@chakra-ui/react'
import { ExtraPassengerProps, ExtraPassengersType } from '@utils/types'

const ExtraPassenger: React.FC<ExtraPassengerProps> = ({
  onToggle,
  num,
  handleExtraPassengers
}) => {
  const [passengerDetails, setPassengerDetails] = useState<ExtraPassengersType>(
    {}
  )

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>
  ) => {
    setPassengerDetails(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
    handleExtraPassengers(num - 1, passengerDetails)
    e.preventDefault()
  }

  return (
    <Box mt={8}>
      <Flex mb={3} alignItems="center" justifyContent="space-between">
        <Text fontSize="18px" fontWeight="semibold" color="#6E7491">
          Passenger {num}
        </Text>
        <Button
          onClick={onToggle}
          display={num !== 2 && 'none'}
          bg="#E34100"
          _hover={{ bg: 'red.600', color: 'white' }}
          color="white"
          px={6}
          py={1}
        >
          Cancel
        </Button>
      </Flex>
      <Flex gap={{ base: 4, md: 8 }} mb={6} direction="column">
        <Flex gap={{ base: 2, md: 6 }} w="100%">
          <Select
            w="30%"
            name="suffix"
            onChange={handleChange}
            placeholder="Suffix"
          >
            <option value="mr">Mr</option>
            <option value="mrs">Mrs</option>
          </Select>
          <Input
            type="text"
            name="fname"
            placeholder="First Name"
            onChange={handleChange}
            required
          />
          <Input type="text" name="mname" placeholder="Middle" />
        </Flex>
        <Flex gap={{ base: 2, md: 6 }} w="100%">
          <Input
            type="text"
            name="lname"
            placeholder="Last Name"
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            w="70%"
            placeholder="Email Address"
            onChange={handleChange}
          />
          <Input
            type="text"
            name="phone"
            w="20%"
            onChange={handleChange}
            placeholder="Phone Number"
          />
        </Flex>
      </Flex>
      <hr
        style={{
          backgroundColor: '#3E7C17',
          height: '4px',
          borderRadius: '3px'
        }}
      />
    </Box>
  )
}

export default ExtraPassenger
