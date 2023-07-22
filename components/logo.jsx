import { HStack, Heading } from "@chakra-ui/react";
import React from "react";

const Logo = () => {
  return (
    <HStack gap="1" w="30%">
      <Heading as="h1" fontWeight="bold" color="red" fontSize="4xl">
        Ali
      </Heading>
      <Heading as="h1" fontSize="2xl">
        .rg1999
      </Heading>
    </HStack>
  );
};

export default Logo;
