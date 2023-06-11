
import React, { useState } from 'react'
import Layout from '@components/layouts/main'
import {
    Text,
    Button,
    Flex,
    Container,
    Input,
} from '@chakra-ui/react'
import Section from '@components/Section'
import { Auth } from 'aws-amplify'

import NewPassword from '@components/NewPassword'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ForgotPassword() {

    const [email, setEmail] = useState<string>("");
    const [newPass, setNewPass] = useState(false);

    async function resetPasswordHandler() {

        try {
            await Auth.forgotPassword(email);
            setNewPass(true);

        }
        catch (e) {

            if (e.name == "InvalidParameterException") {
                toast.error("Please Verify your email first");
                return;
            }

            toast.error(e.message)

        }


    }

    return (
        <Layout title="Login">
            <ToastContainer></ToastContainer>
            <Container
                maxW={{ base: 'container.sm', lg: 'container.md' }}
                my={12}
                w="100%"
                borderWidth={3}
                borderRadius={16}
                backgroundColor="#f3f3f3"
                boxShadow="lg"
            >
                <Section delay={0.2}>
                    {!newPass ? <Flex flexDirection="column" p="30px">
                        <Text pb="30px" fontFamily="'Poppins'" fontWeight="500" fontSize="18px"> Enter your Email to reset the password</Text>

                        <Input
                            name='email'
                            width="100%"
                            boxShadow="md"
                            borderRadius="6px"
                            backgroundColor="white"
                            placeholder='Email'
                            onChange={(e) => {
                                setEmail(e.currentTarget.value)
                            }}
                        />


                        <Button
                            width="100%"
                            px="3"
                            my="20px"
                            borderRadius="10px"
                            color="white"
                            backgroundColor="#A4C15E"
                            boxShadow="lg"
                            fontFamily="'Poppins'"
                            onClick={resetPasswordHandler}
                        >
                            RESET
                        </Button>
                    </Flex> : <NewPassword username={email}></NewPassword>}
                </Section>

            </Container>
        </Layout>
    )
}


export default ForgotPassword