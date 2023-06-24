import { Box, Button, Flex, Input, Text, border } from '@chakra-ui/react'
import { Auth } from 'aws-amplify'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router'

const Verification = ({ username }: { username: string }) => {
  const router = useRouter()

  const [otpResend, setOtpResend] = useState(false)
  const [code, setCode] = useState<string>('')

  async function resendVerficationCode() {
    try {
      await Auth.resendSignUp(username)
      setOtpResend(true)
    } catch (e) {
      toast.error(e.message)
    }
  }

  async function verificationHandler() {
    try {
      await Auth.confirmSignUp(username, code)
      router.push('/login')
    } catch (e) {

   
      toast.error(e.message)
    }
  }

  return (
    <Box w="100%" margin="auto" borderRadius="3xl" py={8} color="white">
      <ToastContainer></ToastContainer>
      {otpResend && (
        <Text textAlign="center" color="red">
          OTP has been sent to your email
        </Text>
      )}
      <Flex
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        pt="20px"
      >
        <Input
          width="50%"
          boxShadow="md"
          borderRadius="6px"
          backgroundColor="white"
          color="black"
          placeholder="Verification Code"
          onChange={e => {
            setCode(e.currentTarget.value)
          }}
        />
        <Button
          width="30%"
          px="3"
          mt="10"
          borderRadius="10px"
          color="white"
          backgroundColor="#4aba68"
          boxShadow="lg"
          fontFamily="'Poppins'"
          onClick={verificationHandler}
        >
          Verify
        </Button>

        <Text
          onClick={resendVerficationCode}
          color="blackAlpha.600"
          mt="20px "
          cursor="pointer"
        >
          Resend Code
        </Text>

        <Text
          color="blackAlpha.600"
          fontSize="13px"
          pt="10px"
          cursor="pointer"
          onClick={e => {
            router.push('/')
          }}
        >
          {' '}
          &#129104; Go back
        </Text>
      </Flex>
    </Box>
  )
}

export default Verification
