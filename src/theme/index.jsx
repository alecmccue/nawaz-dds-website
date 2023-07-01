import { createTheme } from "@mui/material/styles";
import { open_sans } from "@/utility/fonts";

const theme = createTheme({
  typography: {
    fontFamily: open_sans,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  palette: {
    turquoise: {
      main: "#015D67",
    },
    cyan: {
      main: "#00ACB1",
    },
    aqua: {
      main: "#87E4DB",
    },
    tea: {
      main: "#CAF0C1",
    },
    greyser: {
      main: "#D5E4E6",
    },
    grey: {
      main: "#EBF2F3",
    },
    azure: {
      main: "#FAFCFC",
    },
    white: {
      main: "#FEFEFE",
    },
  },
});

export default theme