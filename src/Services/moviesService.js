/* eslint-disable no-useless-catch */
import baseUrl from "./config";

export const fetchTrendingMovies = async (timeWindow) => {
  try {
    const { data } = await baseUrl.get(`trending/all/${timeWindow}`);
    return data;
  } catch (error) {
    throw error;
  }
};
export const fetchPopuarMovies = async (type = "movie") => {
  try {
    const { data } = await baseUrl.get(`/${type}/popular`);
    return data;
  } catch (error) {
    throw error;
  }
};
export const fetchTopRatedmovies = async (type = "movie") => {
  try {
    const { data } = await baseUrl.get(`/${type}/top_rated`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchMovieDetail = async (type, id) => {
  try {
    const { data } = await baseUrl.get(`${type}/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchMovieCast = async (type, id) => {
  try {
    const { data } = await baseUrl.get(`${type}/${id}/credits`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchMovieVideos = async (type, id) => {
  try {
    const { data } = await baseUrl.get(`${type}/${id}/videos`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchDiscoverMovies = async (page, sortby) => {
  try {
    const { data } = await baseUrl.get(
      `discover/movie?page=${page}&sort_by='${sortby}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};
export const fetchDiscoverTvShows = async (page, sortby) => {
  try {
    const { data } = await baseUrl.get(
      `discover/tv?page=${page}&sort_by='${sortby}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchSimilarMovies = async (type, id) => {
  try {
    const { data } = await baseUrl.get(`${type}/${id}/similar`);
    return data;
  } catch (error) {
    throw error;
  }
};
export const fetchRecomendationMovies = async (type, id) => {
  try {
    const { data } = await baseUrl.get(`${type}/${id}/recommendations`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const searchData = async (query, page) => {
  try {
    const res = await baseUrl.get(`/search/multi?&query=${query}&page=${page}`);
    return res?.data;
  } catch (error) {
    throw error;
  }
};
