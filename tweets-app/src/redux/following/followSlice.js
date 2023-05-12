// import { createSlice } from "@reduxjs/toolkit";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const followSlice = createSlice({
//   name: "follow",
//   initialState: {
//     followUsers: [],
//   },
//   reducers: {
//     setFollow: {
//       reducer(state, { payload }) {        
//         state.followUsers.find((id) => payload === id)
//           ? (state.followUsers = state.followUsers.filter((id) => {
//               return id !== payload;
//             }))
//           : state.followUsers.push(payload);       
//       },
//       // prepare({ userId, isFollowing }) {
//       //   return {
//       //     payload: {
//       //       userId,
//       //       isFollowing,
//       //     },
//       //   };
//       // },
//     },
//   },
// });

// const persistConfig = {
//   key: "following",
//   storage,
// };

// export const persistFollowingReducer = persistReducer(
//   persistConfig,
//   followSlice.reducer
// );
// export const { setFollow } = followSlice.actions;
