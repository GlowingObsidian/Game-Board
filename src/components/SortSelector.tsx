import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

function SortSelector() {
  return (
    <Menu>
      <MenuButton letterSpacing={1.5} as={Button} rightIcon={<BsChevronDown />}>
        Sort By
      </MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Average Rating</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Date added</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Release Date</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
