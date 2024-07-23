import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      {colorMode === "light" && <MdOutlineLightMode />}
      {colorMode === "dark" && <MdOutlineDarkMode />}
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorScheme="green"
      ></Switch>
    </HStack>
  );
}

export default ColorModeSwitch;
