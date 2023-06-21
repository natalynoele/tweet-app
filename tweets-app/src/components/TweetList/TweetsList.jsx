import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../Card/Card";
import { fetchAllUsers, fetchUsersPerPage } from "../../redux/users/operations";

import { filterUsers } from "../../utilities/filterUsers";
import "./Styles_TweetsList.scss";
import {
  selectFilter,
  selectTotal,
  selectUsers,
} from "../../redux/users/selectors";

let counter = 0;
export const TweetsList = () => {
  const filter = useSelector(selectFilter);
  const users = useSelector(selectUsers);
  const renderUsers = filterUsers(users, filter);
  const total = useSelector(selectTotal);
  const [nextPage, setNextPage] = useState(1);
  let unsubscribe = false;
  const limit = 3;
  const dispatch = useDispatch();

  useEffect(() => {
    counter += 1;
    if (nextPage > 1) {
      unsubscribe = true;
      loadMore();
    }
    if (counter > 1) return;
    dispatch(fetchAllUsers());
    dispatch(fetchUsersPerPage({ page: nextPage, limit, unsubscribe }));
  }, [nextPage]);

  const handleLoadMore = () => {
    setNextPage((prevPage) => prevPage + 1);
  };

  const loadMore = () => {
    dispatch(fetchUsersPerPage({ page: nextPage, limit, unsubscribe }));
  };

  return (
    <div className="Tweets-container">
      {renderUsers.length === 0 && <p>Sorry, but there are no posts. Please, try another filter</p>}

      {renderUsers.length > 0 && (
        <ul className="Tweets-list">
          {renderUsers.map(data => (
            <li className="Tweets-item" key={data.user.id}>
              <Card user={data.user} isFollowing={data.isFollowing} />
            </li>
          ))}
        </ul>
      )}

      {renderUsers.length > 0 && users.length !== total && (
        <button onClick={handleLoadMore} className="Button Bt-Load">
          Load more
        </button>
      )}
    </div>
  );
};
