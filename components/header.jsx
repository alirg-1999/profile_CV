import { Flex, HStack, Link, Image } from "@chakra-ui/react";
import React from "react";
import Logo from "./logo";
import NextImage from "next/image";
import telegram from "@/public/telegram_icons.svg";
import github from "@/public/github_icons.svg";

const NavBtn = ({ link, title }) => {
  return (
    <Link href={link} fontSize="sm" _hover={{ color: "red" }} fontWeight="bold">
      {title}
    </Link>
  );
};

const Header = () => {
  return (
    <Flex bg="transparent" justifyContent="space-between" h="100px">
      <Logo />
      <HStack w="34%" justifyContent="center" gap="5">
        <NavBtn title="Hero" link="#hero" />
        <NavBtn title="About-Me" link="#me" />
        <NavBtn title="Wroks" link="#works" />
      </HStack>
      <HStack w="30%" justifyContent="end">
        <Link href="https://t.me/ali_rezapour_gatabi">
          <Image as={NextImage} w="7" src={telegram} alt="telegramicons" />
        </Link>

        <Link href="https://github.com/alirg-1999">
          <Image as={NextImage} w="7" src={github} alt="telegramicons" />
        </Link>
      </HStack>
    </Flex>
  );
};

export default Header;
