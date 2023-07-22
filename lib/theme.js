import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: {
    "&::-webkit-scrollbar": {
      width: "7px",
    },
    "&::-webkit-scrollbar-track": {
      bg: "info",
      width: "7px",
    },
    "&::-webkit-scrollbar-thumb": {
      bg: "rgba(0,0,0,.5)",
      borderRadius: "sm",
    },
    "html , body ": {
      bg: " linear-gradient(180deg, #121212, #1a1a1a)",
      color: "#fff",
      scrollBehavior: "smooth",
      transition: ".2s",
      minH: "100vh",
      fontFamily: "'Anonymous Pro', monospace",
      letterSpacing: ".3px",
    },
  },
};

const fonts = {
  heading: "'Anonymous Pro', monospace",
};
const colors = {
  red: "#AE2012",
};

export const theme = extendTheme({ styles, colors, fonts });
