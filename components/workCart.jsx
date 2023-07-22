import { VStack, Image, Heading } from "@chakra-ui/react";
import React from "react";
import NextImage from "next/image";
import NextLink from "next/link";

const WorkCart = ({ src, title, link }) => {
  return (
    <VStack
      as={NextLink}
      _hover={{ borderColor: "gray.700" }}
      border="2px"
      borderColor="transparent"
      href={link}
      w="full"
      p="2"
      borderRadius="lg"
      transition="all .2s"
    >
      <Image
        as={NextImage}
        src={src}
        w="full"
        h="190px"
        borderRadius="xl"
        alt="project image"
      />
      <Heading fontSize="sm">{title}</Heading>
    </VStack>
  );
};

export default WorkCart;
