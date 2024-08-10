import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/icon.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

function Navbar() {
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
      <SearchInput></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
}

export default Navbar;
