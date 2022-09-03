import { Box } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'

const SingleProduct = () => {
    const {id} = useParams()
    console.log(id)
    const get = () => {
        axios.get(`http://localhost:8080/data/${id}`)
        .then((r) => console.log(r.data))
    }
    useEffect(() => {
        get()
    },[])

  return (
    <Box>
        
    </Box>
  )
}

export default SingleProduct