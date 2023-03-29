import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api";
import Post from "../components/Post";
import { IPostList } from "../types";
import { ICategory } from "../types";
import { IPostDetail } from "../types";
import { Box } from "@chakra-ui/react";

export default function Home({ title, pk, name, category }: IPostList) {
  const { isLoading, data } = useQuery<IPostList[]>(["Posts"], getPosts);
  return (
    <Box>
      <p>{}</p>
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
