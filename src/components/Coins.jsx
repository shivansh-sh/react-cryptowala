import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../index';
import { Button, Container,  HStack, Radio, RadioGroup } from '@chakra-ui/react';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';
import CoinCard from './CoinCard';
const Coins = () => {

    const [coins, setCoins]= useState();
    const [loading, setLoading]= useState(true);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1);
    const [currency, setCurrency] =useState("inr");

    const currencySymbol = 
    currency === "inr" ? "₹" : currency === "eur"? "€" : "$"

    const changePage = (page) => {
      setPage(page)
      setLoading(true)

    }

      const btns = new Array(132).fill(1)

    useEffect(() => {
     const fetchCoins  = async () =>{
      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`)
        setCoins(data)
        setLoading(false)
      } catch (error) {
          setError(true)
        setLoading(false)
      }
     }

     fetchCoins()
    }, [currency, page])
    
    if(error) return <ErrorComponent message={"error while fetching coins"}/>

  return <Container maxW={"container.xl"}>
    {loading? ( <Loader /> ) : (

        <>

      <RadioGroup value={currency}  onChange={setCurrency} >
        <HStack spacing={"4"} p={'4'} justifyContent={"center"}>

        <Radio value={"inr"}>INR</Radio>
        <Radio value={"eur"}>EUR</Radio>
        <Radio value={"usd"}>USD</Radio>

        </HStack>
        
      </RadioGroup>

        <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {
                coins.map((i) => (
                    
                        <CoinCard
                        id={i.id}
                        key={i.id} 
                        name={i.name}
                        price={i.current_price}
                        symbol={i.symbol}
                        currencySymbol={currencySymbol}
                        img={i.image}
                        rank={i.trust_score_rank}
                        />
                        
                )
                )
            }
        </HStack>
        <HStack w={"full"} overflowX={"auto"} m={"4"} p={"8"} justifyContent={"center"}>

            {
              btns.map((item ,index)=> (
                <Button bgColor={"lightcoral"} onClick={()=> changePage(index+1)} >{index+1}</Button>
              ))
            }

        </HStack>
        </>
    )}
  </Container>
}



export default Coins