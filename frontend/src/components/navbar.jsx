import React from "react";
import { Container, Box, IconButton, Text, Flex } from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "./ui/color-mode";
import { LuMoon, LuSun } from "react-icons/lu";
import blackLogo from "../public/img/byg_blacklogo.png";
import whiteLogo from "../public/img/byg_whitelogo.png";

function Navbar() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Container fluid bg={useColorModeValue("gray.200", "gray.700")}>
      <Box bg={useColorModeValue("gray.200", "gray.700")} w="100%" py="4">
        <Flex
          h={14}
          alignItems={"center"}
          justifyContent={"space-between"}
          px={8}
        >
          <img
            src={useColorModeValue(blackLogo, whiteLogo)}
            alt="Logo de BygMarketing"
            width={65}
            height={65}
            style={{ objectFit: "contain", display: "block" }}
          />
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            gap={{ base: 5, md: 8, lg: 14 }}
            display={{ base: "none", sm: "flex" }}
          >
            <Text
              fontSize={{ sm: "17px", md: "20px" }}
              _hover={{ color: "gray.400" }}
              cursor={"pointer"}
            >
              Inicio
            </Text>
            <Text fontSize={{ sm: "17px", md: "20px" }}>Servicio</Text>
            <Text fontSize={{ sm: "17px", md: "20px" }}>Contacto</Text>
            <Text fontSize={{ sm: "17px", md: "20px" }}>Inicio Sesión</Text>
            <IconButton
              onClick={toggleColorMode}
              variant="outline"
              size="sm"
              borderColor="none"
              px={4}
              minH="38.4px"
            >
              {colorMode === "light" ? <LuSun /> : <LuMoon />}
            </IconButton>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
}

export default Navbar;
