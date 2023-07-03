import { configureStore } from "@reduxjs/toolkit";
import { countReducer } from "./slice/countSlice";
import { modalReducer } from "./slice/modalSlice";
import { currentMenuReducer } from "./slice/currentMenuSlice";

const store = configureStore({
  reducer: {
    count: countReducer,
    modal: modalReducer,
    currentMenu: currentMenuReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
