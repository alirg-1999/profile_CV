import { Heading, Grid, VStack } from "@chakra-ui/react";
import React from "react";
import UseScroll from "@/lib/use-scroll";
import { motion } from "framer-motion";
import WorkIcons from "./iconswork";
import web_blog_project from "@/public/project/web-blog.png";
import store_project from "@/public/project/book_store.png";
import WorkCart from "./workCart";
const Wroks = () => {
  const scrollNum = UseScroll();
  return (
    <VStack
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={scrollNum > 950 ? { opacity: 1 } : { opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      minH="90vh"
      id="works"
    >
      <Heading as="h1" mb="5">
        Works
      </Heading>
      <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2 ,1fr)" }}>
        <WorkCart
          link="https://github.com/alirg-1999/PenProse_Django_React_Blog"
          src={web_blog_project}
          title="PenProse Blog"
        />

        <WorkCart
          link="https://github.com/alirg-1999/BookLand_online.shop"
          src={store_project}
          title="bookland Blog"
        />
      </Grid>
      <WorkIcons />
    </VStack>
  );
};

export default Wroks;
