import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setFollow, setPage } from "./usersSlice";

const usersUrl = "https://64414784792fe886a8a33619.mockapi.io/users";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.patch["Content-Type"] = "application/json";

export const fetchAllUsers = createAsyncThunk(
  "users/fetchAllUsers",
  async (__, thunkAPI) => {
    try {
      const response = await axios.get(usersUrl);
      if (response.status >= 400) {
        return thunkAPI.rejectWithValue(
          "Something went wrong. Please try again"
        );
      }
      return response.data.length;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchUsersPerPage = createAsyncThunk(
  "users/fetchPerPage",
  async ({ page, limit, unsubscribe }, thunkAPI) => {
    try {
      const response = await axios.get(
        `${usersUrl}?page=${page}&&limit=${limit}`
      );
      if (response.status >= 400) {
        return thunkAPI.rejectWithValue(
          "Something went wrong. Please try again"
        );
      }
     
      if (unsubscribe) {
        thunkAPI.dispatch(setPage({page}))
        
      
      };
      return { data: response.data, page, unsubscribe };
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const patchUser = createAsyncThunk(
  "users/patchUser",
  async (data, thunkAPI) => {
      try {
      const response = await axios.put(`${usersUrl}/${data.id}`, data);

      if (response.status > 400) {
        return thunkAPI.rejectWithValue("Something went wrong");
      }
      thunkAPI.dispatch(setFollow(response.data.id));
      if (response.status > 400) {
        return thunkAPI.rejectWithValue("Something went wrong");
      }
      return response.data;
    } catch (error) {
     return thunkAPI.rejectWithValue(error.message);
    }
  }
);
