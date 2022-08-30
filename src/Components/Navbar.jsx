import React from "react";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Text,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { BiMessageRounded } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
const Navbar = () => {
  return (
    <Box bg="#f1f1f1" w="100%" h="70px">
      <Flex
        height="100%"
        width="80%"
        margin="auto"
        gap={5}
        justifyContent="center"
        alignItems="center"
      >
        <Image
          _hover={{ bg: "blue.500", color: " white" }}
          _focus={{ boxShadow: "outline" }}
          height={9}
          width={10}
          rounded="50%"
          src="data:image/png;base64,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"
        />
        <Select
          w="200px"
          _focus={{ borderColor: "aqua" }}
          borderColor="#002f34"
          _hover={{ borderColor: "#002f34" }}
          placeholder="location"
          size="lg"
          color="black"
          bg="white"
        >
          <option value="india">India</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
          <option value="banglore">Banglore 1</option>
          <option value="punjab">Punjab</option>
          <option value="bihar">Bihar</option>
        </Select>

        <Flex>
          <Input
            bg="white"
            borderTopRightRadius={0}
            borderBottomRightRadius={0}
            _focus={{ borderColor: "aqua" }}
            _active={{ borderColor: "aqua" }}
            _hover={{ borderColor: "#002f34" }}
            borderColor="#002f34"
            size="lg"
            color="black"
            w="450px"
            placeholder="Find Cars, Mobile Phones and more..."
            _placeholder={{ opacity: 1, color: "black" }}
          />
          <Button
            bg="#002f34"
            _hover={{ bg: "#002f34" }}
            size="lg"
            w="60px"
            borderTopLeftRadius={0}
            borderBottomLeftRadius={0}
            _focus={{ bg: "#002f34" }}
            variant="solid"
          >
            <FaSearch />
          </Button>
        </Flex>
        <Box>
          <Text color="black" fontWeight="bold">
            English
          </Text>
        </Box>
        <Box
          p="6px"
          rounded={50}
          _hover={{ bg: "aliceblue", cursor: "pointer" }}
        >
          <BiMessageRounded color="black" size="27px" />
        </Box>
        <Box
          p="6px"
          rounded={50}
          _hover={{ bg: "aliceblue", cursor: "pointer" }}
        >
          <BsBell color="black" size="27px" />
        </Box>
        <Box>
          <Menu>
            <MenuButton>
              <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Button
          leftIcon={<GoPlus />}
          colorScheme="white"
          rounded={20}
          border="5px solid black"
          variant="solid"
        >
          Sell
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
