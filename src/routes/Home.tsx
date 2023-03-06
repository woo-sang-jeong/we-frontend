import { Box, Grid } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api";
import Post from "../components/Post";
import PostSkeleton from "../components/PostSkeleton";
import { IPostList } from "../types";

export default function Home() {
  const { isLoading, data } = useQuery<IPostList[]>(["Posts"], getPosts);
  return (
    <Grid
      mt={10}
      columnGap={4}
      rowGap={8}
      templateColumns={{
        sm: "1fr",
        md: "1fr 1fr",
      }}
      //justifyContent={"space-between"}
      textAlign={"center"}
    >
      {isLoading ? (
        <>
          <Box w={500} h={500}>
            <PostSkeleton />
          </Box>
          <Box w={500} h={500}>
            <PostSkeleton />
          </Box>
          <Box w={500} h={500}>
            <PostSkeleton />
          </Box>
          <Box w={500} h={500}>
            <PostSkeleton />
          </Box>
        </>
      ) : null}
      {data?.map((post) => (
        <Post
          key={post.pk}
          pk={post.pk}
          isOwner={post.is_owner}
          imageUrl={post.photos[0]?.file}
          username={post.name}
          p_like={post.p_like}
          p_dislike={post.p_dislike}
        />
      ))}
    </Grid>
  );
}
