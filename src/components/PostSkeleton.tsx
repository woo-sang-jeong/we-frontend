import { Box, Grid, Skeleton } from "@chakra-ui/react";

export default function PostSkeleton() {
  return (
    <Grid gap={1} templateColumns={"2fr 1fr"}>
      <Box>
        <Skeleton rounded="2xl" height={"400px"} mb={7} />
      </Box>
    </Grid>
  );
}
