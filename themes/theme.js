import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles } from "./ButtonStyles";
import { textStyle } from "./textStyle";
const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  textStyles: textStyle,
  components: {
    Button: ButtonStyles,
  },
});

export default theme;
