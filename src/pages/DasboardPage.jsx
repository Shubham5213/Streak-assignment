import React from 'react'
import {
    Flex
} from "@chakra-ui/react";
import TransactionCard from '../components/TransactionCard';
import Savings from '../components/Savings';
import Count from '../components/Count';
const DasboardPage = () => {
    return (
        <>
            <Flex w="100%" alignContent="flex-start" direction="column" justifyContent="center">
                <TransactionCard />
                <Savings />
                <Count />
            </Flex>
        </>
    )
}

export default DasboardPage