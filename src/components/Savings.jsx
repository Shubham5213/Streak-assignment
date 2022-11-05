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
                <VStack w="95vw" maxW="400px" borderRadius="0.5em" borderColor="#00000014" borderWidth="0.1em" bg="#F5F7FB">
                    <Heading py="2vh" color="#112854" fontSize="2xl" w="full" pl="25px">Andy's Savings</Heading>
                    <VStack py="2vh" spacing={0} pr="25px">
                        <Flex w="full">
                            <Text color="#668EB3" fontSize="xl" fontWeight="semibold">
                                Saved a total of
                            </Text>
                            <>{"\u00a0"}</>
                            <Text color="#000A33" fontSize="xl" fontWeight="bold" >
                                ₹6,480
                            </Text>
                            <>{"\u00a0"}</>
                            <Text color="#668EB3" fontSize="xl" fontWeight="semibold" >
                                this month
                            </Text>
                        </Flex>
                        <Text color="#668EB3" fontSize="xl" fontWeight="semibold" w="full">
                            and is close to achieving one goal
                        </Text>
                    </VStack>
                    <Box py="1vh">
                        <HStack borderRadius="1em" borderColor="#00000014" borderWidth="0.1em" px="30px" boxShadow='md'>
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
                    </Box>

                    <HStack py="2vh" pt="20px" bg="#EEF1F3" w="full" pl="25px" borderTop="1px" borderTopColor="#00000014">
                        <Text color="#5770A4" fontSize="xl" fontWeight="bold">
                            Add and view goals
                        </Text>
                        <Icon as={IoMdArrowDropright} w={8} h={8} pt="7px" color="#667DAC"></Icon>
                    </HStack>
                </VStack>
            </Box>
        </>
    )
}

export default Savings