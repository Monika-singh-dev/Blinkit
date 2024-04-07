import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import React from "react";
import Img1 from "../images/logo.png";
import { IoSearch } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Footer.css";
const Header = () => {
  return (
    <nav className="main-navbar">
      <Flex bg={""} borderBottom={"1px solid #e6e6e6"}>
        <img
          src={Img1}
          alt="blinkit"
          width={"140vw"}
          height={"auto"}
          style={{ marginLeft: "20px", borderRight: "1px solid #e6e6e6" }}
        />
        <p
          style={{
            marginLeft: "20px",
            marginTop: "10px",
          }}
        >
          <b>Deliver in 11 minutes</b>
        </p>
        <InputGroup p={4}>
          <InputLeftElement m={4}>
            <IoSearch />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search anything"
            // marginTop={"10px"}
          ></Input>
        </InputGroup>

        <Button mt={4}>Login</Button>
        <Button
          leftIcon={<AiOutlineShoppingCart />}
          size={"lg"}
          m={4}
          bg={"green"}
          color={"white"}
        >
          My Cart
        </Button>
      </Flex>
    </nav>
  );
};

export default Header;
