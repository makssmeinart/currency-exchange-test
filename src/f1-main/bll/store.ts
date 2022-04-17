import { configureStore } from "@reduxjs/toolkit";
import { currencyExchangeReducer } from "./reducer/currencyExchangeReducer";
import { currencyCompareReducer } from "./reducer/currencyCompareReducer";

export const store = configureStore({
  reducer: {
    currencyExchange: currencyExchangeReducer,
    currencyCompare: currencyCompareReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

//@ts-ignore
window.store = store;
