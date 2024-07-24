import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `'SF Pro Display Medium', sans-serif`,
    body: `'SF Pro Display Regular', sans-serif`,
  },
});

export default theme;
