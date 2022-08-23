import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import messageDataSlice from "./messagesSlice";
import { getStateFromLocalStorage, setStateToLocalStorage } from './helpers/localStorageHelpers'

const persistedState = getStateFromLocalStorage()

const reducers = combineReducers({
  messageData: messageDataSlice,
});

const store = configureStore({
  devTools: true,
  reducer: reducers,
  preloadedState: persistedState
});

store.subscribe(
  () => {
    setStateToLocalStorage({messageData: store.getState().messageData})
  }
);

export default store;
