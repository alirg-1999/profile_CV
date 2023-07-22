import {
  HStack,
  Image,
  Stack,
  Text,
  VStack,
  Button,
  Heading,
} from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import UseScroll from "@/lib/use-scroll";
import { motion } from "framer-motion";
import NextImage from "next/image";
import imageMe from "@/public/image_me.jpg";

const AboutItem = ({ title, content }) => {
  return (
    <HStack fontSize="lg" w="full" px="4" fontWeight="bold">
      <Text fontWeight="bold" w="100px" color="red">
        {title}
      </Text>
      <Text>{content}</Text>
    </HStack>
  );
};
const AboutMe = () => {
  const scrollNum = UseScroll();

  return (
    <Stack
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={
        scrollNum > 650 && scrollNum < 1500 ? { opacity: 1 } : { opacity: 0 }
      }
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      minH="90vh"
      py="20"
      id="me"
      direction="column"
      alignItems="center"
      justifyContent="center"
      maxW="500px"
      mx="auto"
    >
      <Heading as="h1" mb="4">
        Bio
      </Heading>
      <Image
        as={NextImage}
        src={imageMe}
        w="500px"
        alt="image me"
        borderRadius="xl"
      />
      <VStack w="full">
        <VStack bg="blackAlpha.200" p="3" borderRadius="xl" mt="2">
          <Text fontSize="4xl" fontWeight="bold">
            Ali Rezapour Gatabi
          </Text>
          <Text as="p" textAlign="center">
            Welcome to my cv website.I'm an accounting student, but because of
            my great interest in computers and programming, I changed my field
            of activity to programming (web developer).
          </Text>
        </VStack>

        <AboutItem title="I From " content="Iran - Mazandran - Babol" />
        <AboutItem title="I Born " content="1999 - 06" />
        <AboutItem title="I Love " content="Code - Vollyball - Bike - Movies" />
        <AboutItem title="My Email " content="ali.programer.1999@gmail.com" />
        <AboutItem title="My Phone " content="0937953440" />
      </VStack>
      <Stack my="8" direction={{ base: "column", md: "row" }}>
        <Button
          bg="gray.200"
          _hover={{ bg: "red", color: "white" }}
          as="a"
          href="../public/cv_fa.pdf"
        >
          Download CV-fa
        </Button>
        <Button
          bg="gray.200"
          _hover={{ bg: "red", color: "white" }}
          as="a"
          href="../public/cv_en.pdf"
        >
          Download CV-en
        </Button>
      </Stack>
    </Stack>
  );
};

export default AboutMe;
