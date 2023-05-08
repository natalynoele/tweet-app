import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, patchUser } from "./operations";

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};
const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
         state.isLoading = false;
        state.users = payload;
      })
      .addCase(fetchUsers.rejected, (state, { payload }) => {
         state.isLoading = false;
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(patchUser.fulfilled, (state, { payload }) => {
        return {
          ...state,
          users: state.users.map((user) =>
            user.id === payload.user.id ? payload  : user
          ),
        };
      }
      )
      .addCase(patchUser.rejected, (state, { payload }) => {
         state.isLoading = false;
        state.error = payload;
    })
  },
});

export const usersReducer = usersSlice.reducer;