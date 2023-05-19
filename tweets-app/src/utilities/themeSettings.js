import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    background: {
      paper: "#fff",
    },
    primary: {
      main: "#471CA9",
   },
    secondary: {
      main: "#EBD8FF",
    },
    success: {
      main: '#5CD3A8'
    },
    action: {
      active: "#001E3C",
    },
  },
  typography: {
    fontFamily: ["Montserrat"].join(","),
    fontSize: 20,
    fontWeight: 500,
  },
  spacing: (factor) => `${0.25 * factor}rem`,
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        size: "large",
        sx: {
          padding: "14px 39px",
          mb: "36px",
          borderRadius: "10px",
          boxShadow: "0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)",
          fontSize: 18,
          fontWeight: 600,
          textTransform: "uppercase",
          lineHeight: "unset",
          color: "#000",
        },
      },
    },
  },
});
