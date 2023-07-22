import Head from "next/head";
import { Container } from "@chakra-ui/react";
import Header from "@/components/header";
import Hero from "@/components/hero";
import AboutMe from "@/components/aboutme";
import Wroks from "@/components/works";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alirg1999</title>
        <meta name="description" content="profile cv - alirg1999" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container maxW="800px" mx="auto">
        <Header />
        <Hero />
        <AboutMe />
        <Wroks />
      </Container>
    </>
  );
}
