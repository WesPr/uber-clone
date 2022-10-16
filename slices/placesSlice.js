import { createSlice } from "@reduxjs/toolkit";
import placesService from "../services/places";

const initialState = {
  addresses: null,
};

export const placesSlice = createSlice({
  name: "places",
  initialState,
  reducers: {
    setAddresses: (state, action) => {
      state.addresses = action.payload;
    },
  },
});

export const getPlaces = (address) => {
  return async (dispatch) => {
    const placeList = await placesService.getAllPlaces(address);
    dispatch(setAddresses(placeList));
  };
};

export const { setAddresses } = placesSlice.actions;

//Selectors
export const selectAddresses = (state) => state.places.addresses;

export default placesSlice.reducer;
