import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Text,
  Textarea,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { FaBed, FaMoneyBill, FaToilet, FaUsb } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getCategories, IUploadPostVariables, uploadRoom } from "../api";
import HostOnlyPage from "../components/HostOnlyPage";
import ProtectedPage from "../components/ProtectedPage";
import { ICategory, IPostDetail } from "../types";

export default function UploadRoom() {
  const { register, handleSubmit } = useForm<IUploadPostVariables>();
  const toast = useToast();
  const navigate = useNavigate();
  const mutation = useMutation(uploadRoom, {
    onSuccess: (data: IPostDetail) => {
      toast({
        status: "success",
        title: "Room created",
        position: "bottom-right",
      });
      navigate(`/rooms/${data.id}`);
    },
  });

  const { data: categories, isLoading: isCategoriesLoading } = useQuery<
    ICategory[]
  >(["categories"], getCategories);
  const onSubmit = (data: IUploadPostVariables) => {
    mutation.mutate(data);
  };
  return (
    <ProtectedPage>
      <HostOnlyPage>
        <Box
          pb={40}
          mt={10}
          px={{
            base: 10,
            lg: 40,
          }}
        >
          <Container>
            <Heading textAlign={"center"}>Upload Post</Heading>
            <VStack
              spacing={10}
              as="form"
              onSubmit={handleSubmit(onSubmit)}
              mt={5}
            >
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  {...register("name", { required: true })}
                  required
                  type="text"
                />
                <FormHelperText>Write the name of your room.</FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Textarea {...register("description", { required: true })} />
              </FormControl>
              <FormControl>
                <FormLabel>Category</FormLabel>
                <Select
                  {...register("category", { required: true })}
                  placeholder="Choose a category"
                >
                  {categories?.map((category) => (
                    <option key={category.pk} value={category.pk}>
                      {category.name}
                    </option>
                  ))}
                </Select>
                <FormHelperText>
                  What category describes your room?
                </FormHelperText>
              </FormControl>
              {mutation.isError ? (
                <Text color="red.500">Someting went wrong</Text>
              ) : null}
              <Button
                type="submit"
                isLoading={mutation.isLoading}
                colorScheme={"red"}
                size="lg"
                w="100%"
              >
                Upload Post
              </Button>
            </VStack>
          </Container>
        </Box>
      </HostOnlyPage>
    </ProtectedPage>
  );
}
