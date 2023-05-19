import { useDispatch } from "react-redux";
import { patchUser } from "../../redux/users/operations";
import { numberWithCommas } from "../../utilities/numberWithCommas";
import logo from "../../assets/images/logo.svg"
import tweetLogo from "../../assets/images/tweets.svg";
import '../Card/Styles_Card.scss';

export const Card = (data) => {
  const { user, isFollowing } = data;
  const { tweets, followers, avatar } = user;
  const text = isFollowing ? "following" : "follow";
//   const bgColor = isFollowing ? "success" : "secondary";

  const dispatch = useDispatch();
  const addFollower = (user) => {
    return {
      ...user,
      followers: user.followers - 1,
    };
  };

  const subtractFollower = (user) => {
    return {
      ...user,
      followers: user.followers + 1,
    };
  };

  const handleToggle = () => {
    const updatedUser = isFollowing
      ? addFollower(user)
      : subtractFollower(user);
    const following = !isFollowing;
    dispatch(patchUser({ updatedUser, following }));
  };

  return (
    <>
      <div className="Card-container">
        <div className="Card-media">
          <img src={logo} alt="GoIT logo" width="76" height="22" />
          <img src={tweetLogo} alt="tweets frames" width="308" height="168" className="Img-P"/>
        </div>
        <div className="Card-avatar-container">
          <img
            src={avatar}
            alt="user avatar"
            width="62"
            height="62"
            className="Card-avatar"
          />
        </div>
        <div className="Card-content">
          <p className="Card-content-text">{`${tweets} Tweets`}</p>
          <p className="Card-content-text">{`${numberWithCommas(
            followers
          )} Followers`}</p>
          <button
            onClick={() => handleToggle()}
            className={`Button ${isFollowing ? 'Active_Bt':''}`}
          >
            {text}
          </button>
        </div>
      </div>
    </>
  );
};
