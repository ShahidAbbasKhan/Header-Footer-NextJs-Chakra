import { Box, Container, Flex, SimpleGrid } from "@chakra-ui/layout";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box boxShadow={"lg"}>
      <Container maxW={1400}>
        <SimpleGrid templateColumns="repeat(3,1fr)">
          <Box ml={"15px"} mt="10px" mb={"5px"}>
            <Image
              src={"/PanaLogo.png"}
              alt={"Panaverse Logo"}
              width={"100"}
              height={"100"}
            ></Image>
          </Box>
          <Flex
            alignItems={"center"}
            gap={"15px"}
            color="black"
            fontSize={"18px"}
            fontWeight={"semibold"}
          >
            <Link href="/">Home</Link>
            <Link href="/syllabus">Syllabus</Link>
            <Link href="/courses">Courses</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contant</Link>
          </Flex>
          <Box>
            <Button
              bg={"#B9122D"}
              float="right"
              size={"md"}
              mt="15px"
              mr="15px"
            >
              Apply
            </Button>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
