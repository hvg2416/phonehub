import { Box, Container, Icon, Image } from "@chakra-ui/react";
import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import Logo from "../../../assets/logo.png";
import { ToolBar } from "../../../routes/home/components/ToolBar/ToolBar";

export const Navbar = () => {
  let location = useLocation();
  const nCart = useAppSelector((state) => state.cart.items.length);

  return (
    <Container
      zIndex="1"
      position="fixed"
      left="0"
      right="0"
      top="0"
      backgroundColor="#041E42"
      maxWidth="100%"
      paddingTop="6px"
      paddingX="0"
      boxShadow="rgba(0, 0, 0, 0.5) 0 0 11px"
    >
      <Container
        marginBottom="8px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        maxWidth="100%"
      >
        <Link to="/">
          <Image src={Logo} height="40px" width="40px" cursor="pointer" />
        </Link>
        <Box position="relative">
          <Link to="/cart">
            <Box
              position="absolute"
              right="-4px"
              top="-4px"
              backgroundColor="#FFE500"
              borderRadius="50%"
              height="18px"
              width="18px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              padding="10px"
            >
              {nCart}
            </Box>
            <Icon
              as={IoCartOutline}
              fontSize="xx-large"
              cursor="pointer"
              color="white"
            />
          </Link>
        </Box>
      </Container>
      {location.pathname === "/" ? <ToolBar /> : null}
    </Container>
  );
};
