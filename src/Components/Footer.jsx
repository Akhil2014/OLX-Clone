import React from "react";
import { Box, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import { BsFacebook, BsInstagram, BsPlayFill, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <Flex bg="#f1f1f1" w="100%" h="180px">
      <Flex w="80%" m="auto" justifyContent="space-between">
        <Flex w="33%" justifyContent="space-between">
          <Box color="gray">
            <Heading as="h5" size="sm" color="black">
              POPULAR LOCATIONS
            </Heading>
            <Text>Kolkata</Text>
            <Text>Mumbai</Text>
            <Text>Chennai</Text>
            <Text>Pune</Text>
          </Box>
          <Box color="gray">
            <Heading as="h5" size="sm" color="black">
              TRENDING LOCATIONS
            </Heading>
            <Text>About OLX Group</Text>
            <Text>Careers</Text>
            <Text>Contact Us</Text>
            <Text>OLXPeople</Text>
          </Box>
        </Flex>
        <Flex w="33%" justifyContent="space-between">
          <Box color="gray">
            <Heading as="h5" size="sm" color="black">
              ABOUT US
            </Heading>
            <Text>Help</Text>
            <Text>Sitemap</Text>
            <Text>Legal & Privacy information</Text>
            <Text>Blog</Text>
          </Box>
          <Box color="gray">
            <Heading as="h5" size="sm" color="black">
              OLX
            </Heading>
            <Text>Kolkata</Text>
            <Text>Mumbai</Text>
            <Text>Chennai</Text>
            <Text>Pune</Text>
          </Box>
        </Flex>
        <Box>
          <Heading as="h5" size="sm" color="black">
            FOLLOW US
          </Heading>
          <HStack py="10px" color="black">
            <BsFacebook /> <BsInstagram /> <BsTwitter /> <BsPlayFill />
          </HStack>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Footer;
