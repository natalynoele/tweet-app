import * as React from "react";
import {
  Card,
  Avatar,
  Box,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import logo from "../assets/images/logo.svg";
import tweetLogo from "../assets/images/tweets.svg";

export const TweetCard = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        maxWidth: "380px",
        position: "relative",
        background:
          "linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%)",
        boxShadow: " -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23)",
        borderRadius: "20px",
      }}
    >
      <Box
        sx={{
          height: "42%",
          p: "20px",
          borderBottom: "solid 8px #EBD8FF",
          boxShadow: '0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF',
        }}
      >
        <CardMedia
          component="img"
          image={logo}
          alt="logo"
          sx={{ width: "unset" }}
        />
        <CardMedia
          component="img"
          image={tweetLogo}
          alt="tweets"
          sx={{ width: "unset" }}
        />
      </Box>
      <Avatar
        alt="user avatar"
        src="/static/images/avatar/1.jpg"
        sx={{
          width: 80,
          height: 80,
          position: "absolute",
          top: "50%",
          left: "50%",
          marginTop: "-40px",
          marginLeft: "-60px",
          border: "solid 8px #EBD8FF",
        }}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          pt: "62px",
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="p"
          sx={{
            mb: "16px",
            lineHeight: 1.2,
            textAlign: "center",
            fontFamily: "Montserrat",
            fontWeight: 500,
            fontSize: "20px",
            textTransform: "uppercase",
            color: "#EBD8FF",
          }}
        >
          Tweets
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="p"
          sx={{
            mb: '26px',
            textAlign: "center",
            fontFamily: "Montserrat",
            fontWeight: 500,
            fontSize: "20px",
            lineHeight: 1.2,
            textTransform: "uppercase",
            color: "#EBD8FF",
          }}
        >
          Followers
        </Typography>
        <Button
          variant="contained"
          sx={{
            pr: "28px",
            pl: '28px',
            pt: '14px',
            pb: '14px',
            borderRadius: '10px',
            backgroundColor: "#EBD8FF",
            boxShadow: "0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)",
            fontSize: '18px',
            fontWeight: 600,
          }}
        >
          Follow
        </Button>
      </CardContent>
    </Card>
  );
};
