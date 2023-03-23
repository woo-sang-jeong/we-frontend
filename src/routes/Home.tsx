import { Box, Grid } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api";
import Post from "../components/Post";
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
        //md: "1fr 1fr",
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
        />
      ))}
    </Grid>
  );
}
