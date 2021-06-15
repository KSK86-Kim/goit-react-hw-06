import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import entryReducer from "./entries/entries-reducer";
import { filterReducer } from "./filter/filter-reducer";

const contactsReducer = combineReducers({
  items: entryReducer,
  filter: filterReducer,
});

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
