import { useQuery } from "@tanstack/react-query";
import { IPostList } from "../types";
import { getcategorypost } from "../api";
import { Box, Grid, Heading } from "@chakra-ui/react";
import { FaThumbsUp } from "react-icons/fa";
import { Key } from "react";

interface IPostProps {}

export default function Home({}: IPostList) {
  const { data } = useQuery(["category", 1], getcategorypost);

  return (
    <Box>
      <Box bg="gray.50" px={{ base: "4", md: "8" }} py={{ base: "4", md: "8" }}>
        <Heading
          as="h2"
          size="lg"
          fontWeight="bold"
          textAlign={{ base: "center", md: "left" }}
          mb={{ base: "4", md: "8" }}
        >
          {data?.name}
        </Heading>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(6, 1fr)" }}
          gap={{ base: "4", md: "8" }}
        ></Grid>
      </Box>
    </Box>
  );
}

/*
    <Grid
      mt={10}
      columnGap={4}
      rowGap={8}
      templateColumns={{
        sm: "1fr",
        md: "1fr 1fr",
      }}
    >
      {data?.map((post) => (
        <Post
          key={post.pk}
          title={post.title}
          name={post.name}
          pk={post.pk}
          isOwner={post.is_owner}
          imageUrl={post.photos[0]?.file}
          username={post.name}
          p_like={post.p_like}
          p_dislike={post.p_dislike}
          categorypk={post.cpk}
          categoryname={post.cname}
        />
      ))}
    </Grid>
    */
