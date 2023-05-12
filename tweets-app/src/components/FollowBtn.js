import { StayPrimaryLandscape } from "@mui/icons-material";
import { Button } from "@mui/material";
import { theme } from "../utilities/themeSettings";

export const FollowBtn = ({ handleToggle, text, bgColor}) => {
                  // "0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)"
  return (
    <Button
      variant="contained"
      size="large"
      onClick={handleToggle}
      sx={{
        padding: "14px 39px",
        borderRadius: "10px",
        backgroundColor: { bgColor },
        boxShadow: "0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)",
        fontFamily: "Montserrat",
        fontSize: "18px",
        fontWeight: 600,
        textTransform: "uppercase",
        lineHeight: "unset",
      }}
    >
      {text}
    </Button>
  );
};
