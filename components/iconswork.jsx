import { VStack, HStack, Image, Heading } from "@chakra-ui/react";
import React from "react";
import NextImage from "next/image";
import js from "@/public/work/javascript.svg";
import py from "@/public/work/python.svg";
import css from "@/public/work/css.svg";
import html from "@/public/work/html.svg";
import django from "@/public/work/django.svg";
import php from "@/public/work/php.svg";
import react from "@/public/work/react.svg";
import wordpress from "@/public/work/wordpress.svg";
import chakra_ui from "@/public/work/chakra-ui.svg";
import tailwind from "@/public/work/tailwindcss.svg";
import bootstrap from "@/public/work/bootstrap.svg";

const WorkIcons = () => {
  return (
    <VStack w="full" mt="32">
      <Heading my="5">I Work with Programe and Framework</Heading>
      <HStack justifyContent="space-between" w="full">
        <Image as={NextImage} alt="javascript" src={js} w="150px" />
        <Image as={NextImage} alt="php" src={php} w="150px" />
        <Image as={NextImage} alt="python" src={py} w="150px" />
      </HStack>

      <HStack justifyContent="space-between" w="full">
        <Image as={NextImage} alt="react" src={react} w="150px" />
        <Image as={NextImage} alt="wordpress" src={wordpress} w="150px" />
        <Image as={NextImage} alt="django" src={django} w="150px" />
      </HStack>

      <HStack justifyContent="space-evenly" w="full">
        <Image as={NextImage} alt="html" src={html} w="150px" />
        <Image as={NextImage} alt="css" src={css} w="150px" />
      </HStack>

      <HStack justifyContent="space-between" w="full">
        <Image as={NextImage} alt="chakra-ui" src={chakra_ui} w="150px" />
        <Image as={NextImage} alt="bootstrap" src={bootstrap} w="150px" />
        <Image as={NextImage} alt="tailwind" src={tailwind} w="150px" />
      </HStack>
    </VStack>
  );
};
export default WorkIcons;
