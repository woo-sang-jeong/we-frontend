import {
  Box,
  ChakraProvider,
  Grid,
  GridItem,
  useMediaQuery,
} from "@chakra-ui/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Category from "./Category";
import Advertise from "./Advertise";
import Post from "./Post";

export default function Root() {
  return (
    <ChakraProvider>
      <Grid>
        <Header />
        <Outlet />
        <Footer />
      </Grid>
    </ChakraProvider>
  );
}

/*
export default function Root() {
  const [Desktop] = useMediaQuery("(max-width: 1280px)");
  const [Tablet] = useMediaQuery("(max-width: 700px )");
  const [Phone] = useMediaQuery("(max-width: 680px )");
  return (
    <ChakraProvider>
      <Grid
        templateAreas={`"header header header"
                      "Category main ad"
                      "footer footer footer"`}
        gridTemplateColumns={"200px 1fr 200px"}
        gridTemplateRows={"100px "}
        h={"100vh"}
        gap="5"
        color="blackAlpha.700"
        ml={20}
        mr={20}
      >
        <GridItem bg="orange.300" area={"header"}>
          <Header />
        </GridItem>
        <GridItem
          //colSpan={{ base: 0, lg: 1, xl: 1 }}
          //p={{ base: "20px", lg: "30px" }}
          bg="pink.300"
          area={"Category"}
        >
          <Category />
        </GridItem>
        <GridItem
          bg="green.300"
          area={"main"}
          justifyItems="center"
          alignItems="center"
        >
          <Outlet />
        </GridItem>
        <GridItem area={"footer"}>
          <Footer />
        </GridItem>
        <GridItem bg="gray" area={"ad"}>
          <Advertise />
        </GridItem>
        <ReactQueryDevtools />
      </Grid>
    </ChakraProvider>
  );
}
*/
