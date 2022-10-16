import axios from "axios";
import { GOOGLE_MAPS_APIKEY } from "@env";

const baseUrl =
  "https://maps.googleapis.com/maps/api/place/textsearch/json?query=";

const getAllPlaces = async (address) => {
  const request = axios.get(baseUrl + address + "&key=" + GOOGLE_MAPS_APIKEY);
  const response = await request;
  return response.data;
};

export default { getAllPlaces };
