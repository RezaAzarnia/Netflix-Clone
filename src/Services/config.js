import axios from "axios";

const apiURL = "https://api.themoviedb.org/3/";
const baseUrl = axios.create({
  baseURL: apiURL,
  headers: {
    accept: "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTBhMTRhMGIzNzNhNmY5OTk3YTg4Yzg0ODMyNDdmZCIsInN1YiI6IjY0NjQ2YzlhZjQ4YjM0MDBmZWE1ZjE5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fpfYXRY_QoGAz5lXv_kITveGaEyWCuOfmvEpt49coMc`,
  },
});

baseUrl.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.code == "ECONNABORTED") {
      return Promise.reject("The request timed out. Please try again.");
    } else if (error.code == "ERR_NETWORK") {
      return Promise.reject("Network Error! Please try again later");
    } else if (error.message == "Request failed with status code 404") {
      return Promise.reject("404 error");
    } else {
      return Promise.reject(
        "An error occurred while processing your request. Please try again."
      );
    }
  }
);
export const imageUrl = "https://image.tmdb.org/t/p/w500/";
export const imageOriginalUrl = "https://image.tmdb.org/t/p/original/";
export default baseUrl;
