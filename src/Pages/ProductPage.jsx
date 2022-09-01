import { Box, Button, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductData } from '../Redux/ProductReducer/action'

const ProductPage = () => {
    const {product , query , isLoading} = useSelector((state) => state.productReducer)
    const [page, setPage] = useState(2);
    const dispatch = useDispatch();
    const getData = (id) => {
        dispatch(getProductData( query ,id)) 
        setPage(p => p+1)
    }
    useEffect(() => {
        setPage(2)
    },[query])
    console.log(page)
  return (
    <Box bg="white" w="100%" h="800px" pt="100px">
        {
           product.length!==0 && product.map((e) => <Heading color="red" key={e.id}> akhil , {e.title}</Heading>)
        }
         <Button m="auto" colorScheme="orange" onClick={() => getData(page)}>
          Loading more...
        </Button>
    </Box>
    )
}

export default ProductPage