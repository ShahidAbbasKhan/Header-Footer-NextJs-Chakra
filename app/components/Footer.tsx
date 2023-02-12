import {
  Box,
  Container,
  Grid,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <Box bg={"black"}>
      <Container maxW={1050}>
        <SimpleGrid templateColumns={"repeat(4,1fr)"} py="50px">
          <Box color={"white"}>
            <Heading pb="10px" size="md">
              ABOUT US
            </Heading>
            <Image
              src="/panaLogo.png"
              alt="Panaverse Logo"
              width={100}
              height={100}
            ></Image>
            <Text color={"grey"} pr="30px" pt="10px">
              The Future of the Web is Web 3.0, Metaverse and Edge Computing.It
              is community of Web3 and metaverse developers.
            </Text>
          </Box>
          <Box color={"white"}>
            <Heading pb="10px" size="md">
              USEFUL LINKS
            </Heading>
            <Grid color={"grey"}>
              <Link href="/">Home</Link>
              <Link href="/syllabus">Syllabus</Link>
              <Link href="/courses">Courses</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contant</Link>
            </Grid>
          </Box>
          <Box color={"white"}>
            <Heading pb="10px" size="md">
              FOLLOW US
            </Heading>
            <Grid color={"grey"}>
              <Link href="">Facebook</Link>
              <Link href="">Linkedin</Link>
              <Link href="">Twitter</Link>
              <Link href="">Youtube</Link>
              <Link href="">Github</Link>
            </Grid>
          </Box>
          <Box color={"white"}>
            <Heading pb="10px" size="md">
              CONTACT US
            </Heading>
            <Grid color="grey">
              <Link href="">0301-0998766</Link>
              <Link href="">shahidniazi@gmail.com</Link>
              <Link href="">Islamabad,Pakistan</Link>
            </Grid>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
