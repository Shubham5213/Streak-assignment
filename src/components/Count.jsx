import React from 'react'


import {
    Flex,
    Heading,
    Text,
    HStack,
    VStack,
    Icon,
    Box
} from "@chakra-ui/react";

import { IoMdArrowDropright } from "react-icons/io";
const Savings = () => {
    return (
        <>
            <Box mx="auto" py="2vh">
                <VStack w="95vw" maxW="400px" borderRadius="0.5em" borderColor="#00000014" borderWidth="0.1em" bg="#FBF7F5">
                    <Heading py="2vh" color="#631E00" fontSize="2xl" w="full" pl="25px">Game of the day</Heading>
                    
                    <HStack borderRadius="1em" borderColor="#CCAACF" borderWidth="0.1em" px="30px" boxShadow='md'>
                        <Box
                            w={'3px'}
                            h="3.8em"
                            borderRadius={'md'}
                            bg="#58698C"
                            opacity="0.8"
                        />
                        <VStack py="2vh" pl="5px">
                            <Text w="full" color="#31446B" fontSize="xl" fontWeight="semibold">Playstation 5</Text>
                            <Flex w="full">
                                <Text color="#000000" fontSize="xl" fontWeight="bold">₹36,480 saved</Text><>{"\u00a0"}</>
                                <Text color="#668EB3" fontSize="xl" fontWeight="semibold"> of ₹40,000 goal</Text>
                            </Flex>
                        </VStack>
                    </HStack>

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