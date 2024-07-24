import { Global } from "@emotion/react";

function Fonts() {
  return (
    <Global
      styles={`
        @font-face {
            font-family: 'SF Pro Display Medium;
            font-style: normal;
            src: url('./assets/headerfont.otf') format('otf');
        }
        `}
    ></Global>
  );
}

export default Fonts;
