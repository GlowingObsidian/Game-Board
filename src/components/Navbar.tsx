import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/icon.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (search: string) => void;
}

function Navbar({ onSearch }: Props) {
  return (
    <HStack>
      <Image
        src={logo}
        boxSize="60px"
        p={1}
        backgroundColor="white"
        rounded="lg"
        boxShadow="base"
      ></Image>
      <SearchInput onSearch={onSearch}></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
}

export default Navbar;
