import React from 'react'
import {
    Box,
    Flex,
    Image,
    HStack,
    Icon,
    Text,
    Button
} from "@chakra-ui/react";
import { CiSettings } from "react-icons/ci";
import footer from "../images/footer.svg"

const Footer = () => {
    return (
        <>
            <Flex mx="auto" w="100vw" maxW="420px" bgImage={footer} bgRepeat="no-repeat" h="76.5px" justifyContent="flex-end">
                <Button
                mr="2.5vw"
                rightIcon={<Icon as={CiSettings} w={8} h={8}></Icon>} 
                bg="#E5E5E5" 
                variant='solid' 
                alignSelf="flex-start" 
                borderRadius="2em" 
                color="#979797" 
                fontWeight="semibold" 
                fontSize="lg"
                    boxShadow="0px 3px 2px #00000040 inset"
                >
                    Parental controls
                </Button>
            </Flex>
        </>
    )
}

export default Footer