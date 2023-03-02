import { FaCamera, FaRegHeart, FaStar } from "react-icons/fa";
import {
  Box,
  Grid,
  HStack,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import React from "react";

interface IPostProps {
  imageUrl: string;
  username: string;
  p_like: number;
  p_dislike: number;
  pk: number;
  isOwner: boolean;
}

export default function Post({
  pk,
  imageUrl,
  username,
  isOwner,
  p_like,
  p_dislike,
}: IPostProps) {
  const gray = useColorModeValue("gray.600", "gray.300");
  const navigate = useNavigate();
  const onCameraClick = (event: React.SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate(`/posts/${pk}/photos`);
  };
  return <Box></Box>;
}

/*
  return (
    <Link to={`/posts/${pk}`}>
      <VStack alignItems={"flex-start"}>
        <Box position="relative" overflow={"hidden"} mb={3} rounded="2xl">
          <Image minH="280" src={imageUrl} />
        </Box>
        <Box>
          <Grid gap={2} templateColumns={"2fr 1fr"}>
            <Text display={"block"} as="b" noOfLines={1} fontSize="md">
              {username}
            </Text>

            <HStack spacing={1} alignItems="center">
              <FaStar size={12} />
              <Text fontSize={"sm"}>{p_like}</Text>
            </HStack>
            <HStack spacing={1} alignItems="center">
              <FaStar size={12} />
              <Text fontSize={"sm"}>{p_dislike}</Text>
            </HStack>
          </Grid>
        </Box>
      </VStack>
    </Link>
  );
}
*/
