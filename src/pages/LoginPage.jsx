import { useState } from 'react';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Text,
    Divider,
    HStack,
    Icon,
    Spacer,
} from "@chakra-ui/react";
import { GrFormClose } from "react-icons/gr";

const LoginPage = () => {
    const [firstName, setFirstname] = useState("");
    const [secondName, setSecondname] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");

    const validate = () => {
        return firstName.length && email.length && mobileNumber;
    };

    return (
        <>
            <Flex minH="100vh" flexWrap="wrap" alignContent="center" justifyContent="center">
                <Flex minW="90%" alignContent="flex-start" direction="column" justifyContent="center" mt="3vh">
                    <Stack mx="auto" spacing="1.3em">
                        <Stack align={"left"} spacing="0.8em">
                            <HStack>
                                <Text fontSize={"4xl"} color="#500061" fontWeight="medium">
                                    Profile
                                </Text>
                                <Spacer />
                                <Icon as={GrFormClose} w={10} h={10} />
                            </HStack>
                            <Text fontSize={"lg"} color="#646464" fontWeight="semibold" m="0" p="0">
                                Enter your details so we can{<br />} get to know you better.
                            </Text>
                            <Divider type="solid" />
                        </Stack>
                        <Box py="2vh">
                            <Stack spacing="1.3em">
                                <FormControl id="firstName">
                                    <FormLabel fontWeight="semibold" fontSize="lg" color="#41536D" >First Name</FormLabel>
                                    <Input
                                        focusBorderColor='#500061'
                                        type="text"
                                        placeholder="Enter First Name"
                                        width="85vw"
                                        maxW="350px"
                                        size="lg"
                                        value={firstName}
                                        onChange={(e) => setFirstname(e.target.value)}
                                        borderRadius="0.3em"
                                    />
                                </FormControl>
                                <FormControl id="secondName">
                                    <FormLabel fontWeight="semibold" fontSize="lg" color="#41536D">Second Name</FormLabel>
                                    <Input
                                        focusBorderColor='#500061'
                                        type="password"
                                        placeholder="Enter Second Name"
                                        width="85vw"
                                        maxW="350px"
                                        size="lg"
                                        value={secondName}
                                        onChange={(e) => setSecondname(e.target.value)}
                                        borderRadius="0.3em"
                                    />
                                </FormControl>
                                <FormControl id="email">
                                    <FormLabel fontWeight="semibold" fontSize="lg" color="#41536D">Email</FormLabel>
                                    <Input
                                        focusBorderColor='#500061'
                                        type="email"
                                        placeholder="Enter Email"
                                        width="85vw"
                                        maxW="350px"
                                        size="lg"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        borderRadius="0.3em"
                                    />
                                </FormControl>
                                <FormControl id="mobile">
                                    <FormLabel fontWeight="semibold" fontSize="lg" color="#41536D">Mobile Number</FormLabel>
                                    <Input
                                        focusBorderColor='#500061'
                                        type="number"
                                        placeholder="Enter mobile number"
                                        width="85vw"
                                        maxW="350px"
                                        size="lg"
                                        value={mobileNumber}
                                        onChange={(e) => setMobileNumber(e.target.value)}
                                        borderRadius="0.3em"
                                    />
                                </FormControl>
                                <Stack align="center">
                                    <Text color="#8A8A8A" fontSize="xl" fontWeight="semibold">
                                        OTP verification in next step
                                    </Text>
                                </Stack>
                                <Stack pt="7vh" align="center">
                                    <Button
                                        type="button"
                                        size="lg"
                                        disabled={!validate()}
                                        colorScheme="purple"
                                        fontSize="xl"
                                        w="85vw"
                                        maxW="350px"
                                        fontWeight="semibold"
                                        borderRadius="0.4em"
                                    >Create Profile
                                    </Button>
                                </Stack>
                            </Stack>
                        </Box>
                    </Stack>
                </Flex>
            </Flex>
        </>
    )
}

export default LoginPage;