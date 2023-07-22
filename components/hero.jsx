import React from "react";
import { Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import NextImage from "next/image";
import heroIcon from "@/public/user.svg";
import UseScroll from "@/lib/use-scroll";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollNum = UseScroll();
  return (
    <VStack
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={scrollNum > 550 ? { opacity: 0 } : { opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      minH="80vh"
      justifyContent="space-between"
      id="hero"
      mt="10"
    >
      <VStack gap="6">
        <Image as={NextImage} src={heroIcon} alt="hero user icons" w="56" />
        <Heading as="h2" fontSize={{ base: "3xl", md: "5xl" }}>
          Hi.My name is{" "}
          <Text as="span" color="red">
            Ali
          </Text>
        </Heading>
        <Text
          as="p"
          textAlign="center"
          fontSize={{ base: "sm", md: "lg" }}
          fontWeight="light"
        >
          I am Fullstack junior developer (JavaScript , Python , PHP)
        </Text>
      </VStack>
      <Link
        href="#me"
        fontSize="sm"
        _hover={{ color: "red" }}
        fontWeight="bold"
      >
        About Me
      </Link>
    </VStack>
  );
};

export default Hero;
