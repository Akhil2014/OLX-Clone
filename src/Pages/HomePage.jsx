import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import Catagories from '../Components/Catagories'
import Navbar from '../Components/Navbar'

const HomePage = () => {
  return (
    <Box>
        <Navbar />
        <Catagories />
        <Image alt="banner" src="https://statics.olx.in/olxin/banners/hero_bg_in_v2@1x.png" h="120px" w="100%"/>
    </Box>
  )
}

export default HomePage