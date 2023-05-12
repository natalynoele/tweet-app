import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TweetCard } from "./TweetCard";
import { fetchAllUsers, fetchUsersPerPage } from "../redux/users/operations";
import { Button, List, ListItem } from "@mui/material";
import {
  selectFollowUsers,
  selectTotal,
  selectUsers,
  selectPage,
} from "../redux/users/selectors";

import { getUsers } from "../utilities/getUsers";

let counter = 0
export const TweetsList = () => {
  const users = useSelector(selectUsers);
  const total = useSelector(selectTotal);   
  const following = useSelector(selectFollowUsers);
  const renderUsers = getUsers(users, following);
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
    dispatch(fetchUsersPerPage({ page:nextPage, limit, unsubscribe }));
  };

  return (
    <>
      <List sx={{ display: { sm: "flex", xs: "block" }, flexWrap: "wrap" }}>
        {renderUsers.map((user) => (
          <ListItem key={user.id} sx={{ maxWidth: 380, height: 460 }}>
            <TweetCard user={user} />
          </ListItem>
        ))}
      </List>
      {users.length !== total && (
        <Button
          onClick={handleLoadMore}
          variant="contained"
          sx={{ borderRadius: "20px" }}
        >
          Load more
        </Button>
      )}
    </>
  );
};
