import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  sortBy: string;
  onSelectSortOrder: (sortOrder: string) => void;
}

function SortSelector({ sortBy, onSelectSortOrder }: Props) {
  const sortOrder = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currSortOrder = sortOrder.find((order) => order.value == sortBy);

  return (
    <Menu>
      <MenuButton letterSpacing={1.5} as={Button} rightIcon={<BsChevronDown />}>
        Sort by {currSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrder.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
