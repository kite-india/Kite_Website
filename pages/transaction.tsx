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
import type { NextPage, GetServerSidePropsContext } from 'next'
import { FaLessThanEqual } from 'react-icons/fa'
import axios from 'axios'
import { Transaction, TransactionPageProps } from '@utils/types'
import { APIClass, withSSRContext } from 'aws-amplify'
import {
  GetPackageQuery,
  GetRegistrationQuery,
  RegistrationsByUserinfoIDQuery
} from 'src/API'
import { GraphQLQuery, GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import { registrationsByUserinfoID } from '../src/graphql/queries'

const Transactions: NextPage = (props: any) => {
  const [allData, setAllData] = useState<Transaction[]>(props.transaction)

  const [bookedData, setBookedData] = useState<Transaction[]>([])
  const [cancelData, setCancelData] = useState<Transaction[]>([])
  const [processingData, setProcessingData] = useState<Transaction[]>([])

  const [update, setUpdate] = useState(false)

  useEffect(() => {
    const cancel = props.transaction.filter(
      pkg => pkg.bookingStatus === 'canceled'
    )
    
    const booked = props.transaction.filter(
      pkg => pkg.bookingStatus === 'Booked'
    )

    const processing = props.transaction.filter(
      pkg => pkg.bookingStatus === 'Processing'
    )
    setCancelData(cancel)
    setBookedData(booked)
    setProcessingData(processing);
    
  }, [update])

  return (
    <>
      {allData && (
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
                <TabList mb="2">
                  <Tab px="25px" borderRadius={'30px'}>
                    All
                  </Tab>
                  <Tab px="20px" borderRadius={'30px'}>
                    Processing
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
                    <TransactionCardGroup data={processingData} />
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
        </Layout>
      )}
    </>
  )
}

export default Transactions

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { Auth, API } = withSSRContext(context)

  let cAPI: APIClass = API

  try {
    const user = await Auth.currentAuthenticatedUser()
    console.log(user)
    const data = await cAPI.graphql<
      GraphQLQuery<RegistrationsByUserinfoIDQuery>
    >({
      query: `
      query MyQuery {
        registrationsByUserinfoID(userinfoID: "${user.username}") {
          items {
            mainPassenger {
              birthdate
              email
              ends
              firstName
              lastName
              phoneNumber
              starts
            }
            bookingStatus
            id
            activitiesId
            packageName
            registrationPackageId
            total_cost
            userinfoID
            passengers {
              birthdate
              firstName
              id
              lastName
            }
          }
        }
      }
      
      `,
      variables: {
        userinfoID: user.username
      },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
    })

    console.log(data.data.registrationsByUserinfoID.items)

    return {
      props: {
        transaction: data.data.registrationsByUserinfoID.items
      }
    }
  } catch (err) {
    console.log(err)
    console.log('User is not authenticated')
    //Redirect to login page
    return {
      redirect: {
        permanent: false,
        destination: '/login'
      },
      props: {}
    }
  }
}
