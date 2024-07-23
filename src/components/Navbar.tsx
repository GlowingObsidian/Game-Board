import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/icon.png";

function Navbar() {
  return (
    <HStack>
      <Image
        src={logo}
        boxSize="60px"
        m={2}
        p={1}
        backgroundColor="white"
        rounded="lg"
        boxShadow="base"
      ></Image>
      <Text>Navbar</Text>
    </HStack>
  );
}

export default Navbar;
