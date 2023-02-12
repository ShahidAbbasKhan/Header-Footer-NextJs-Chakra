"use client";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
export default function Home() {
  return (
    <ChakraProvider>
      <Header />
      <Footer />
    </ChakraProvider>
  );
}
