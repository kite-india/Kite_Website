import React, { useEffect, useState } from 'react'
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
import { FaLessThanEqual } from 'react-icons/fa'
import axios from 'axios'
import { Transaction, TransactionPageProps } from '@utils/types'



const Transactions: NextPage = () => {

  const [allData, setAllData] = useState<Transaction[]>([])
  const [bookedData, setBookedData] = useState<Transaction[]>([])
  const [cancelData, setCancelData] = useState<Transaction[]>([])

  useEffect(() => {
    (async () => {

      try {
        const res = await axios.get("http://localhost:3000/api/getRegisteredPackage")
        const data = res.data.message;
        const regPackage = data.map(pkg => {
          return {
            extraPassenger: pkg.extraPassenger.L,
            id: pkg.id.S,
            mainPassenger: pkg.mainPassenger.M,
            packageName: pkg.packageName.S,
            userinfoID: pkg.userinfoID.S,
            bookingStatus: pkg.bookingStatus.S,
            totalCost: pkg.total_cost.N
          }
        })
        console.log(regPackage)
        const cancel = regPackage.filter(pkg => pkg.bookingStatus === "Canceled")
        const booked = regPackage.filter(pkg => pkg.bookingStatus === "Booked")
        setAllData(regPackage)
        setCancelData(cancel);
        setBookedData(booked)
      }
      catch (e) {
        console.log(e)
      }
    })()

  }, [])





  return (
    <>

      {allData && <Layout title="Transactions">
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
              <TabList mb="2">
                <Tab px="25px" borderRadius={'30px'}>
                  All
                </Tab>
                <Tab borderRadius={'30px'}>Booked</Tab>
                <Tab px="20px" borderRadius={'30px'}>
                  Cancelled
                </Tab>
              </TabList>
              <hr />
              <TabPanels pb={'30px'}>
                <TabPanel>
                  <TransactionCardGroup data={allData} />
                </TabPanel>
                <TabPanel>

                  <TransactionCardGroup data={bookedData} />

                </TabPanel>
                <TabPanel>

                  <TransactionCardGroup data={cancelData} />

                </TabPanel>
              </TabPanels>
            </Tabs>
          </Container>
        </Container>
      </Layout >}



    </>
  )
}



export default Transactions
