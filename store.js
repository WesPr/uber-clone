import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSlice";
import placesReducer from "./slices/placesSlice";

export const store = configureStore({
  reducer: {
    nav: navReducer,
    places: placesReducer,
  },
});
