import { Box, Button, Grid, GridItem, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Catagories from "../Components/Catagories";
import Footer from "../Components/Footer";
import Footersec from "../Components/Footersec";
import Navbar from "../Components/Navbar";
import { getHomeData } from "../Redux/HomeReducer/action";

const HomePage = () => {
  const { homeData, isLoading } = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const getData = (id) => {
    dispatch(getHomeData(id));
    setPage((p) => p + 1);
  };
  useEffect(() => {
    if (homeData.length === 0) {
      getData(1);
    }
  }, []);
  return (
    <Box>
      <Navbar />
      <Catagories />
      <Image
        alt="banner"
        src="https://statics.olx.in/olxin/banners/hero_bg_in_v2@1x.png"
        h="120px"
        w="100%"
      />
      <Box bg="white" h="auto" w="100%">
        <Button m="auto" colorScheme="orange" onClick={() => getData(page)}>
          Loading more...
        </Button>
        <Grid
          templateColumns="repeat(4, 1fr)"
          gap={6}
          bg="blue"
          w="80%"
          m="auto"
          h="auto"
          p="20px"
        >
          {isLoading && <Heading>Loading....</Heading>}
          {homeData.length !== 0 &&
            homeData.map((e) => {
              return <GridItem key={e.id} w="100%" h="300" bg="gold" />;
            })}
        </Grid>
      </Box>
      <Footer />
      <Footersec />
    </Box>
  );
};

export default HomePage;
