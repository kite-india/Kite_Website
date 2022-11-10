import React from 'react'
import {
  Text,
  Container,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab
} from '@chakra-ui/react'
import TransactionCardGroup from '../components/transaction/TransactionCardGroup'
import Layout from '../components/layouts/main'
import type { NextPage } from 'next'

const Transaction: NextPage = () => {
  return (
    <Layout title="Transactions">
      <Container
        maxW={'1000px'}
        paddingX={{ base: '35px', md: '70px', lg: '100px' }}
      >
        <Container alignItems={'center'} mt={'80px'}>
          <Text
            fontFamily={'Poppins'}
            fontSize={{ sm: '20px', md: '28px', lg: '35px' }}
            fontWeight="500"
            lineHeight={'53px'}
            textAlign="center"
          >
            Transaction Info
          </Text>
        </Container>
        <Container
          mt={'40px'}
          border={'3px solid #D9D9D9'}
          borderRadius={'38px'}
          maxW={'1000px'}
          alignItems="center"
          mb="100px"
        >
          <Tabs
            fontFamily={'Poppins'}
            fontSize={'20px'}
            fontWeight={'500'}
            my={'15px'}
            lineHeight={'38px'}
            letterSpacing={'-0.005em'}
            variant="soft-rounded"
            colorScheme="green"
          >
            <TabList
              ml={{ sm: '12px', md: '25px', lg: '40px' }}
              mb={'15px'}
              gap={{ sm: '12px', md: '25px', lg: '40px' }}
            >
              <Tab px="25px" borderRadius={'30px'}>
                All
              </Tab>
              <Tab borderRadius={'30px'}>Upcoming</Tab>
              <Tab px="20px" borderRadius={'30px'}>
                Past
              </Tab>
            </TabList>
            <hr />
            <TabPanels pb={'30px'}>
              <TabPanel>
                <TransactionCardGroup
                  data={[
                    {
                      nid: 1234567890,
                      img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
                      place: 'Bombay Adda, Bombay',
                      date: 'Sun, 10 Sep At 9:30PM',
                      guest: 6,
                      cost: '30,000',
                      status: true
                    },
                    {
                      nid: 1234567891,
                      img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
                      place: 'Bombay Adda, Austria',
                      date: 'Sun, 11 Sep At 9:30PM',
                      guest: 4,
                      cost: '50,000',
                      status: false
                    },
                    {
                      nid: 1234567892,
                      img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
                      place: 'Bombay Adda, America',
                      date: 'Sun, 12 Sep At 9:30PM',
                      guest: 5,
                      cost: '70,000',
                      status: true
                    }
                  ]}
                />
              </TabPanel>
              <TabPanel>
                <p>No upcoming!</p>
              </TabPanel>
              <TabPanel>
                <p>No past!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
      </Container>
    </Layout>
  )
}

export default Transaction
