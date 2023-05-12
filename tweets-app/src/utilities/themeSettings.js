import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    background: {
      paper: "#fff",
    },
    primary: {
      main: "#471CA9",
      light: "#5736A3",
      dark: "4B2A99",
      color: "#373737",
    },
    secondary: {
      main: "#EBD8FF",
    },
    action: {
      active: "#001E3C",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      "Montserrat",
    ].join(","),
    fontSize: 20,
    fontWeight: 500,
  },
});


