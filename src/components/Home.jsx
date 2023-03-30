import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import {motion} from 'framer-motion'

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"}
    w={"full"} h={"90vh"}
    >
      <motion.div 
      style={{
        height:"80vh",
    }}
    animate={{
    translateY:"20px",
    }}
    transition={{
      duration:1.5,
      repeat: "Infinite",
      repeatType:"reverse"
    }}
    >

      <Image w={"full"} h={"full"} objectFit={"contain"} src='https://www.freepnglogos.com/uploads/bitcoin-png/bitcoinpaygate-bitcoin-payment-gateway-payment-processor-7.png' borderRadius={"full"} filter={"grayscale(1)"} />
      <Text fontSize={"5xl"} textAlign={"center"} fontWeight={"normal"} color={"whiteAlpha.800"} mt={"-19"}>CRYPTOwala</Text>
      </motion.div>
    </Box>
  )
}

export default Home