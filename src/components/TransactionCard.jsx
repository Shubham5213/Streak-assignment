import React from 'react'

import {
    Flex,
    Heading,
    Text,
    HStack,
    VStack,
    Image,
    Icon,
} from "@chakra-ui/react";

import { IoMdArrowDropright } from "react-icons/io";

import BurgerIcon from '../images/burger.svg';
import SheetIcon from '../images/sheet.svg';
import WheelIcon from '../images/wheel.svg';
const TransactionCard = () => {
    return (
        <>
            <Flex alignContent="flex-start" mx="auto" pt="2vh">
                <VStack w="95vw" maxW="400px" borderRadius="0.5em" borderColor="#ccaacf33" borderWidth="0.1em" bg="#F8F5FB">
                    <Text color="#600063" fontSize="2xl" fontWeight="bold" py="2vh" w="full" pl="25px">
                        Recent transactions
                    </Text>
                    <HStack justify="space-between" py="0.5vh" w="full" >
                        <Image src={BurgerIcon} alt="" w="18vw" maxW="70px" ml="25px"></Image>
                        <VStack align="left" spacing="0em" pr="70px">
                            <Heading fontSize="xl">Food & Drinks</Heading>
                            <Text fontSize="lg">02:30 pm</Text>0
                        </VStack>
                        <Text fontSize="xl" fontWeight="bold" pr="25px" pb="3vh">
                            -₹50
                        </Text>
                    </HStack>

                    <HStack justify="space-between" py="2vh" w="full" borderTop="2px" borderTopColor="#ccaacf33">
                        <Image src={SheetIcon} alt="" w="18vw" maxW="70px" ml="25px"></Image>
                        <VStack align="left" spacing="0em" pr="85px">
                            <Heading fontSize="xl" >Store sale</Heading>
                            <Text fontSize="lg">Jun - 4:30 PM</Text>
                        </VStack>
                        <Text fontSize="xl" fontWeight="bold" pr="25px" pb="3vh">
                            -₹140
                        </Text>
                    </HStack>
                    <HStack justify="space-between" py="2vh" w="full" borderTop="2px" borderTopColor="#ccaacf33">
                        <Image src={WheelIcon} alt="" w="18vw" maxW="70px" ml="25px"></Image>
                        <VStack align="left" spacing="0em" pr="30px">
                            <Heading fontSize="xl">Money credited</Heading>
                            <Text fontSize="lg">Jun - 12:30 PM</Text>
                        </VStack>
                        <Text fontSize="xl" fontWeight="bold" pr="25px" pb="3vh" color="#00600A">
                            +₹4500
                        </Text>
                    </HStack>
                    <HStack justify="flex-start" pt="1.5vh" pb="2vh" bg="#EAE1F2" w="full" borderTop="2px" borderTopColor="#ccaacf33">
                        <Text fontSize="2xl" fontWeight="bold" color="#A655A8" py="1vh" pl="25px">
                            All transactions
                        </Text>
                        <Icon as={IoMdArrowDropright} w={8} h={8} pt="7px" color="#AE65B0"pr="5px"></Icon>
                    </HStack>
                </VStack>
            </Flex>
        </>
    )
}

export default TransactionCard