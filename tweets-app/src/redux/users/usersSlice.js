import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { fetchAllUsers, fetchUsersPerPage, patchUser } from "./operations";
import { updateUsers } from "../../utilities/updateUsers";

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
const handlePatchFulfilled = (state, { payload }) => {
  const { user} = payload;
  state.users = state.users.map((oldUser) => {
       return oldUser.user.id === user.id ? payload : oldUser;   
  });
  state.isLoading = false;
};
const handleFetchFulfilled = (state, { payload }) => {
  const { data, page, unsubscribe } = payload;
  const newUsers = updateUsers(data, state.followUsers);
  state.users = unsubscribe ? [...state.users, ...newUsers] : newUsers;
  state.isLoading = false;
  state.error = null;
  state.page = page;
};
const initialState = {
  total: 0,
  users: [],
  followUsers: [],
  isLoading: false,
  error: null,
  page: 1,
  filter: "",
};
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setFollow: (state, { payload }) => {
          state.followUsers.find((id) => payload === id)
        ? (state.followUsers = state.followUsers.filter((id) => {
            return id !== payload;
          }))
        : state.followUsers.push(payload);
    },
    setPage: (state, { payload }) => {
      state.page = payload;
    },
    filterUsers: (state, { payload }) => {
      state.filter = payload;      
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.fulfilled, (state, { payload }) => {
        state.total = payload;
      })
      .addCase(fetchUsersPerPage.pending, (state) => {})
      .addCase(fetchUsersPerPage.fulfilled, handleFetchFulfilled)
      .addCase(fetchUsersPerPage.rejected, handleRejected)
      .addCase(patchUser.fulfilled, handlePatchFulfilled)
      .addCase(patchUser.rejected, handleRejected);
  },
});

const persistConfig = {
  key: "users",
  storage,
  whitelist: ["followUsers"],
};

export const persistFollowingReducer = persistReducer(
  persistConfig,
  usersSlice.reducer
);
export const { setFollow, setPage, filterUsers } = usersSlice.actions;
