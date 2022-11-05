import React from 'react'


import {
    Flex,
    Heading,
    Text,
    HStack,
    VStack,
    Icon,
    Box,
    Image,
    Stack
} from "@chakra-ui/react";

import Count from "../images/count.svg"
import { IoMdArrowDropright } from "react-icons/io";
const Savings = () => {
    return (
        <>
            <Box mx="auto" py="2vh">
                <VStack w="95vw" maxW="400px" borderRadius="0.5em" borderColor="#00000014" borderWidth="0.1em" bg="#FBF7F5">
                    <Heading py="2.5vh" color="#631E00" fontSize="2xl" w="full" pl="25px">Game of the day</Heading>

                    <Image src={Count} alt="" w="full" px="15px"></Image>

                    <Heading py="1vh" color="#AB604F" fontSize="2xl" fontWeight="semibold">Win prizes worth ₹4000 or more</Heading>
                    <Stack py="2vh">
                        <Box
                            as='button'
                            height='45px'
                            lineHeight='1.2'
                            maxW="200px"
                            px='30px'
                            borderRadius='2em'
                            fontSize='xl'
                            fontWeight='semibold'
                            bg='#AB604F'
                            color='#FFFFFF'
                        >
                            Try your luck
                        </Box>
                    </Stack>
                    <HStack py="2vh" bg="#F2E9E1" w="full" pl="25px" borderTop="1px" borderTopColor="#00000014">
                        <Text color="#A3503E" fontSize="xl" fontWeight="bold">
                            View all games
                        </Text>
                        <Icon as={IoMdArrowDropright} w={8} h={8} pt="5px" pr="5px" color="#AB614F"></Icon>
                    </HStack>
                </VStack>
            </Box>
        </>
    )
}

export default Savings