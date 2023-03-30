import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api";
import Post from "../components/Post";
import { IPostList } from "../types";
import { ICategory } from "../types";
import { IPostDetail } from "../types";
import { getcategorypost } from "../api";
import {
  Box,
  Grid,
  Heading,
  HStack,
  Icon,
  Stack,
  chakra,
  Image,
} from "@chakra-ui/react";
import { FaThumbsUp } from "react-icons/fa";
import { Key } from "react";

interface IPostProps {
  
}

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
        >
          {data?.posts.slice(0, 6).map((post) => (
            <HStack
              key={post.id}
              p={{ base: "4", md: "8" }}
              bg="white"
              borderRadius="md"
              alignItems="center"
            >
              <Box flex={1}>
                <chakra.text
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="bold"
                  isTruncated
                >
                  {post.title}
                </chakra.text>
                <chakra.text>{post.owner.username}</chakra.text>
                <chakra.text>
                  {new Date(post.created_at).toLocaleDateString()}{" "}
                  {new Date(post.created_at).toLocaleTimeString()}
                </chakra.text>
              </Box>
              <HStack>
                <Icon as={FaThumbsUp} color="green.500" />
                <chakra.text>{post.p_like}</chakra.text>
              </HStack>
            </HStack>
          ))}
        </Grid>
      </Box>
      <Image src="https://picsum.photos/1000/300" alt="category" w="full" />
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
