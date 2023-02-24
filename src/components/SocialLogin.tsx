import { FaComment, FaFacebook, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import {
  Box,
  Button,
  Center,
  Divider,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function SocialLogin() {
  let kakaoParams = {
    client_id: "71afa06ee795615d357bef9f00f07b31",
    redirect_uri: "http://127.0.0.1:3000/social/kakao",
    response_type: "code",
  };
  const githubParams = {
    client_id: "68af966b8c528f4fc020",
    scope: "read:user,user:email",
  };
  const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?${new URLSearchParams(
    kakaoParams
  ).toString()}`;
  const githubUrl = `https://github.com/login/oauth/authorize?${new URLSearchParams(
    githubParams
  ).toString()}`;
  return (
    <Box mb={4}>
      <HStack my={8}>
        <Divider />
        <Divider />
      </HStack>
      <VStack>
        <Button as="a" href={githubUrl} w="100%" leftIcon={<FaGithub />}>
          <Text m={7}>Continue with Github</Text>
        </Button>
        <Button
          as="a"
          href={kakaoUrl}
          w="100%"
          leftIcon={<FaComment />}
          colorScheme={"yellow"}
        >
          <Text m={8}>Continue with Kakao</Text>
        </Button>
        <Button
          w={"full"}
          maxW={"md"}
          colorScheme={"facebook"}
          leftIcon={<FaFacebook />}
        >
          <Center>
            <Text m={5}>Continue with Facebook</Text>
          </Center>
        </Button>
        <Button
          w={"full"}
          maxW={"md"}
          variant={"outline"}
          leftIcon={<FcGoogle />}
        >
          <Center>
            <Text m={7}>Continue with Google</Text>
          </Center>
        </Button>
      </VStack>
    </Box>
  );
}
