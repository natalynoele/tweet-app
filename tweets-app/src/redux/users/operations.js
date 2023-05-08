import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://64414784792fe886a8a33619.mockapi.io/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.patch["Content-Type"] = "application/json";

export const fetchUsers = createAsyncThunk(
  "users/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/users");
      if (response.status > 400) {
        return response.statusText;
      }
      return response.data;
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const patchUser = createAsyncThunk(
  "users/patchUser",
  async (user, thunkAPI) => {
    try {
      const response = await axios.put(`/users/${user.id}`, user)    
       if (response.status > 400) {
         return response.statusText;
      }
      const updateUser = await axios.get(`/users/${user.id}`);
     return updateUser.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

