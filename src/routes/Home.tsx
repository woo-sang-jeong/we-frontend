import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api";
import Post from "../components/Post";
import { IPostList } from "../types";
import { ICategory } from "../types";
import { IPostDetail } from "../types";
import {
  Box,
  Grid,
  HStack,
  Image,
  Text,
  useColorModeValue,
  VStack,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Stack,
} from "@chakra-ui/react";

export default function Home() {
  const { isLoading, data } = useQuery<IPostList[]>(["Posts"], getPosts);
  return (
    <Stack>
      <Box>Category name</Box>
      <Table>
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Author</Th>
            <Th>Content</Th>
            <Th>Date</Th>
          </Tr>
          q
        </Thead>
        <Tbody>
          {data?.map((post) => (
            <Tr key={1}>
              <Td>4</Td>
              <Td>3</Td>
              <Td>2</Td>
              <Td>1</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Stack>
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
