import {
  Box,
  Container,
  Grid,
  Heading,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/layout";
import {
  PhoneIcon,
  EmailIcon,
  Search2Icon,
  DownloadIcon,
} from "@chakra-ui/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <Box bg={"black"}>
      <Container maxW={1050}>
        <SimpleGrid
          templateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(4,1fr)",
          }}
          py="50px"
          gap={"20px"}
        >
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
              It is community of Web3 and metaverse developers.
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
              <Link href="/contact">Contant Us</Link>
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
              <HStack>
                <PhoneIcon />
                <Link href="">0301-0998766</Link>
              </HStack>
              <HStack>
                <EmailIcon />
                <Link href="">shahidniazi@gmail.com</Link>
              </HStack>
              <HStack>
                <Search2Icon />
                <Link href="">Islamabad,Pakistan</Link>
              </HStack>
              <HStack>
                <DownloadIcon />
                <Link href="">Download Syllabus</Link>
              </HStack>
            </Grid>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
