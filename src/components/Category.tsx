import { CalendarIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem, Stack, Text } from "@chakra-ui/react";
import { FaMapMarkedAlt, FaStarOfLife } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Category() {
  return (
    <>
      <List color="white" fontSize="1.2em" spacing={4}>
        <ListItem>
          <NavLink to="/">
            <ListIcon as={CalendarIcon} color="white" />
            Freeboard
          </NavLink>
        </ListItem>
      </List>
      <List color="white" fontSize="1.2em">
        <ListItem>
          <NavLink to="Living in Korea">
            <ListIcon as={FaStarOfLife} color="white" />
            Living in Korea
          </NavLink>
        </ListItem>
      </List>
      <List color="white" fontSize="1.2em">
        <ListItem>
          <NavLink to="Sell & Buy">
            <ListIcon as={FaMapMarkedAlt} color="white" />
            Sell & Buy
          </NavLink>
        </ListItem>
      </List>
    </>
  );
}

/*
export default function Category() {
  return (
    <Stack justify="flex-start" align="center" spacing="30px">
      <Text
        fontFamily="Inter"
        lineHeight="1.56"
        fontWeight="regular"
        fontSize="18px"
        color="#000000"
        mt={"25px"}
      >
        Free board
      </Text>
      <Text
        fontFamily="Inter"
        lineHeight="1.56"
        fontWeight="regular"
        fontSize="18px"
        color="#000000"
      >
        Living in Korea
      </Text>
      <Text
        fontFamily="Inter"
        lineHeight="1.56"
        fontWeight="regular"
        fontSize="18px"
        color="#000000"
      >
        K-POP
      </Text>
      <Text
        fontFamily="Inter"
        lineHeight="1.56"
        fontWeight="regular"
        fontSize="18px"
        color="#000000"
      >
        Buy & Sell
      </Text>
      <Text
        fontFamily="Inter"
        lineHeight="1.56"
        fontWeight="regular"
        fontSize="18px"
        color="#000000"
      >
        Question Board
      </Text>
    </Stack>
  );
}
*/
