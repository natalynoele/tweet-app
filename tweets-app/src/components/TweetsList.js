import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TweetCard } from "./TweetCard"
import { fetchUsers } from "../redux/users/operations";
import { selectUsers } from "../redux/users/selectors";
import { List, ListItem } from "@mui/material";


export const TweetsList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
                  const users = useSelector(selectUsers);
                  // console.log('users :>> ', users);
                  return (
                    <List>
                      {users.map((user) => (
                        <ListItem
                          key={user.id}
                  //         sx={{
                  //           flexDirection: { xs: "column", md: "row" },
                  //           justifyContent: "space-between",
                  //         }}
                        >
                          <TweetCard user={user} />
                        </ListItem>
                      ))}
                    </List>
                  );
};
