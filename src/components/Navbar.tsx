import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/icon.png";
import ColorModeSwitch from "./ColorModeSwitch";

function Navbar() {
  return (
    <HStack justifyContent={"space-between"} p={5}>
      <Image
        src={logo}
        boxSize="60px"
        p={1}
        backgroundColor="white"
        rounded="lg"
        boxShadow="base"
      ></Image>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
}

export default Navbar;
