import { useLocation } from "react-router-dom";
import { TweetsList } from "../components/TweetList/TweetsList";
import { GoBack } from "../components/GoBack/GoBack";
import { Filter } from "../components/Filter/Filter";
import "./Style_Tweets_page.scss";

export const TweetsPage = () => {
  return (
    <>
      <div className="Wr-Block">
        <Filter />
        <GoBack />
      </div>
      <TweetsList />;
    </>
  );
};
