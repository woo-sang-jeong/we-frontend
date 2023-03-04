import { CalendarIcon } from "@chakra-ui/icons";
import {
  Flex,
  List,
  ListIcon,
  ListItem,
  useDisclosure,
} from "@chakra-ui/react";
import { FaMapMarkedAlt, FaStarOfLife } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Category() {
  return (
    <Flex display={{ sm: "flex", xl: "none" }} alignItems="center">
      <List color="white" fontSize="1.2em" spacing={4}>
        <ListItem fontFamily="Inter">
          <NavLink to="/">
            <ListIcon as={CalendarIcon} color="white" />
            Freeboard
          </NavLink>
        </ListItem>
      </List>
      <List color="white" fontSize="1.2em">
        <ListItem fontFamily="Inter">
          <NavLink to="Living in Korea">
            <ListIcon as={FaStarOfLife} color="white" />
            Living in Korea
          </NavLink>
        </ListItem>
      </List>
      <List color="white" fontSize="1.2em">
        <ListItem fontFamily="Inter">
          <NavLink to="Sell & Buy">
            <ListIcon as={FaMapMarkedAlt} color="white" />
            Sell & Buy
          </NavLink>
        </ListItem>
      </List>
    </Flex>
  );
}
