import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: [['"Montserrat"', "Open Sans"].join(",")],
  },
});

export default theme;