import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
const avatarSrc= "https://avatars.githubusercontent.com/u/96882189?v=4"
const Footer = () => {
  return (
    <Box 
    bgColor={"blackAlpha.900"}
    color={"whiteAlpha.900"}
    minH={"48"}
    py={["16", "8"]}
    >
        <Stack direction={["column", "row"]} h={"full"} alignItems={"center"} >
            <VStack w={"full"} alignItems={["center", "flex-start"]}
            >
                <Text fontWeight={"bold"}>About us </Text>
                <Text fontSize={"sm"} textAlign={["center", "left"] } >We are a crypto information providing app and we ease out your crypto trading by giving you the exact guidance you are seeking, because we got your back. </Text>
            </VStack>

            <VStack>
                <Avatar src={avatarSrc} boxSize={"28"} mt={["4", "0"]} />
                <Text>Our Founder</Text>
            </VStack>
        </Stack>
    </Box>
    )
}

export default Footer