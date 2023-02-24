import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Category from "./Category";
import Advertise from "./Advertise";
import Post from "./Post";

export default function Root() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      <GridItem
        as="aside"
        colSpan={{ base: 6, lg: 2, xl: 1 }}
        bg="purple.400"
        minHeight={{ lg: "100vh" }}
        p={{ base: "20px", lg: "30px" }}
      >
        <Category />
      </GridItem>
      <GridItem as="main" colSpan={{ base: 6, lg: 4, xl: 5 }}>
        <Header />
        <Outlet />
      </GridItem>
    </Grid>
  );
}

/*
export default function Root() {
  return (
    <Grid
      templateAreas={`"header header header"
                    "Category main ad"
                    "footer footer footer"`}
      h="100vh"
      gap="2"
      color="blackAlpha.700"
      ml={40}
      mr={40}
    >
      <GridItem pl="2" bg="orange.300" area={"header"}>
        <Header />
      </GridItem>
      <GridItem pl="2" bg="pink.300" area={"Category"} as="aside">
        <Category />
      </GridItem>
      <GridItem pl="2" bg="green.300" area={"main"}>
        <Outlet />
      </GridItem>
      <GridItem pl="2" area={"footer"}>
        <Footer />
      </GridItem>
      <GridItem pl="2" bg="gray" area={"ad"}>
        <Advertise />
      </GridItem>
      <ReactQueryDevtools />
    </Grid>
  );
}
*/
