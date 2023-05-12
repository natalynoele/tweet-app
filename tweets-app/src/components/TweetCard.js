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
import { useDispatch } from "react-redux";
import { patchUser } from "../redux/users/operations";

export const TweetCard = ({ user }) => {
  const { tweets, followers, avatar, isFollowing } = user;
  const text = isFollowing ? "following" : "follow";
  const bgColor = isFollowing ? "#5CD3A8" : "#EBD8FF";

  const dispatch = useDispatch();

  const addFollower = (us) => {
    return {
      ...us,
      followers: us.followers - 1,
    };
  };

  const subtractFollower = (us) => {
    return {
      ...us,
      followers: us.followers + 1,
    };
  };

  const handleToggle = () => {
    const updateUser = isFollowing ? addFollower(user) : subtractFollower(user);
    dispatch(patchUser(updateUser));
  };

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <Card
      sx={{
        width: '100%',
       
        position: "relative",
        background: `linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%)`,
        boxShadow: " -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23)",
        borderRadius: "20px",
      }}
    >
      <Box
        sx={{
          height: "32%",
          p: "20px",
          borderBottom: "solid 8px #EBD8FF",
          boxShadow:
            "0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF",
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
        src={avatar}
        sx={{
          width: 80,
          height: 80,
          position: "absolute",
          top: "50%",
          left: "50%",
          marginTop: "-72px",
          marginLeft: "-60px",
          border: "solid 8px #EBD8FF",
          backgroundColor: "#EBD8FF",
        }}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          pt: "62px",
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="p"
          sx={{
            mb: "16px",
            fontWeight: 500,
            fontSize: 20,
            textTransform: "uppercase",
            color: "#EBD8FF",
          }}
        >
          {`${tweets} Tweets`}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="p"
          sx={{
            mb: "26px",
            // fontFamily: "Montserrat",
            fontWeight: 500,
            fontSize: "20px",
            textTransform: "uppercase",
            color: "#EBD8FF",
          }}
        >
          {`${numberWithCommas(followers)} Followers`}
        </Typography>

        <Button
          variant="contained"
          size="large"
          onClick={() => handleToggle()}
          sx={{
            padding: "14px 39px",
            mb: "36px",
            borderRadius: "10px",
            backgroundColor: bgColor,
            boxShadow: "0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)",
            fontSize: 18,
            fontWeight: 600,
            textTransform: "uppercase",
            lineHeight: "unset",
            color: "#000",
          }}
        >
          {text}
        </Button>
      </CardContent>
    </Card>
  );
};
