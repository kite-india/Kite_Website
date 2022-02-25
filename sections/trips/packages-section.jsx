import React from 'react'
import {
  Box,
  Heading,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
  Text
} from '@chakra-ui/react'

const tabs = ['Kashmir', 'Nepal', 'Rajasthan']

const Packages = () => {
  return (
    <Box w="100%" borderRadius="lg">
      <Tabs size={{ base: 'sm', md: 'md', lg: 'lg' }} align="center">
        <TabList
          bg="#F7F8F9"
          boxShadow="sm"
          fontFamily="'Poppins'"
          fontWeight="normal"
          gap={12}
          py={6}
        >
          {tabs.map((tab, idx) => (
            <Tab key={idx}>{tab}</Tab>
          ))}
        </TabList>
      </Tabs>
    </Box>
  )
}

export default Packages
