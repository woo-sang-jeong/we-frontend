import {
  Box,
  ChakraProvider,
  Container,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Category from "./Category";
import Advertise from "./Advertise";

export default function Root() {
  const breakpoints = {
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
  };

  return (
    <ChakraProvider>
      <Grid
        templateAreas={`"header header header"
                      "Category main ad"
                      "footer footer footer"`}
        //gridTemplateRows={"50px auto 50px"}
        gridTemplateColumns={"200px 1fr"}
        h="100vh"
        w="100vw"
        gap="5"
        color="blackAlpha.700"
        ml={40}
        mr={40}
      >
        <GridItem
          //colSpan={{ base: 6, lg: 4, xl: 5 }}
          bg="orange.300"
          area={"header"}
        >
          <Header />
        </GridItem>
        <GridItem
          placeItems={"left"}
          colSpan={{ base: 0, lg: 1, xl: 1 }}
          minHeight={{ lg: "80vh" }}
          p={{ base: "20px", lg: "30px" }}
          bg="pink.300"
          area={"Category"}
        >
          <Category />
        </GridItem>
        <GridItem bg="green.300" area={"main"} minW={"420px"}>
          <Outlet />
        </GridItem>
        <GridItem /*colSpan={{ base: 6, lg: 4, xl: 5 }}*/ area={"footer"}>
          <Footer />
        </GridItem>
        <GridItem
          //colSpan={{ base: 6, lg: 2, xl: 1 }}
          minHeight={{ lg: "80vh" }}
          //p={{ base: "20px", lg: "30px" }}
          bg="gray"
          area={"ad"}
        >
          <Advertise />
        </GridItem>
        <ReactQueryDevtools />
      </Grid>
    </ChakraProvider>
  );
}

/*
export default function Root() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      <GridItem
        as="aside"
        colSpan={{ base: 6, lg: 2, xl: 1 }}
        bg="blue.400"
        minHeight={{ lg: "100vh" }}
        p={{ base: "20px", lg: "30px" }}
      >
        <Category />
      </GridItem>
      <GridItem as="main" colSpan={{ base: 6, lg: 4, xl: 5 }}>
        <Header />
        <Outlet />
      </GridItem>
      <GridItem
      as={}>

      </GridItem>
    </Grid>
  );
}
*/
