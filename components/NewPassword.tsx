

import React, { useEffect, useState } from 'react'
import Layout from '@components/layouts/main'
import {
    Box,
    Heading,
    Text,
    Button,
    Flex,
    Container,
    Image,
    Input,
    Checkbox
} from '@chakra-ui/react'
import Section from '@components/Section'
import { Auth } from 'aws-amplify'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function NewPassword({ username }: { username: string }) {

    const [code, setCode] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPass, setConfirmPass] = useState<string>("")


    async function changePasswordHandler() {

        //Validate the password
        if (!code || !password || !confirmPass || !username) {
            toast.error("Fill all details");
            return;
        } else {

            if (confirmPass != password) {
                toast.error("Password doesn't match")
                return;
            }
        }

        try {

          const data =  await Auth.forgotPasswordSubmit(username, code, password);
          console.log(data)

        } catch (error) {

            toast.error(error.message)
        }


    }


    return (

        <Flex flexDirection="column" p="30px">
            <ToastContainer></ToastContainer>
            <Box p="10px">
                <Input
                    name='code'
                    width="100%"
                    boxShadow="md"
                    borderRadius="6px"
                    backgroundColor="white"
                    placeholder='Verification Code'
                    onChange={(e) => {
                        setCode(e.currentTarget.value)
                    }}
                />
            </Box>

            <Box p="10px">
                <Input
                    name='newPass'
                    width="100%"
                    boxShadow="md"
                    borderRadius="6px"
                    backgroundColor="white"
                    placeholder='New Password'
                    onChange={(e) => {
                        setPassword(e.currentTarget.value)
                    }}
                />
            </Box>

            <Box p="10px">
                <Input
                    name='confirmPass'
                    width="100%"
                    boxShadow="md"
                    borderRadius="6px"
                    backgroundColor="white"
                    placeholder='Confirm Password'
                    onChange={(e) => {
                        setConfirmPass(e.currentTarget.value)
                    }}
                />

            </Box>

            <Button
                width="100%"
                px="3"
                my="20px"
                borderRadius="10px"
                color="white"
                backgroundColor="#A4C15E"
                boxShadow="lg"
                fontFamily="'Poppins'"
                onClick={changePasswordHandler}
            >
                Submit
            </Button>
        </Flex>

    )
}


export default NewPassword