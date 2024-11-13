import { configureStore, combineReducers } from "@reduxjs/toolkit";

const reducers = {};

const rootReducer = combineReducers(reducers);

export const store = () =>
  configureStore({
    reducer: rootReducer,
  });
