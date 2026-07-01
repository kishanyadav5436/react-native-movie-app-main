// Appwrite has been removed - using local trending logic instead.
// This module provides mock trending movies using OMDB API.

import { OMDB_CONFIG } from "./api";

// Popular movie IMDb IDs for the trending section
const TRENDING_IMDB_IDS = [
  "tt0111161", // The Shawshank Redemption
  "tt0068646", // The Godfather
  "tt0468569", // The Dark Knight
  "tt0071562", // The Godfather Part II
  "tt0050083", // 12 Angry Men
  "tt0108052", // Schindler's List
  "tt0167260", // The Lord of the Rings: The Return of the King
  "tt0110912", // Pulp Fiction
  "tt0120737", // The Lord of the Rings: The Fellowship of the Ring
  "tt0137523", // Fight Club
];

export const updateSearchCount = async (
  query: string,
  movie: Movie
): Promise<void> => {
  // No-op without Appwrite - search counting disabled
  return;
};

export const getTrendingMovies = async (): Promise<
  TrendingMovie[] | undefined
> => {
  try {
    const trendingPromises = TRENDING_IMDB_IDS.slice(0, 5).map(
      async (imdbId, index) => {
        const response = await fetch(
          `${OMDB_CONFIG.BASE_URL}/?apikey=${OMDB_CONFIG.API_KEY}&i=${imdbId}`
        );
        const data = await response.json();

        return {
          searchTerm: data.Title || "Unknown",
          movie_id: data.imdbID || imdbId,
          title: data.Title || "Unknown",
          count: 100 - index * 10,
          poster_url:
            data.Poster !== "N/A"
              ? data.Poster
              : "https://placehold.co/300x450/1a1a1a/FFFFFF.png",
        } as TrendingMovie;
      }
    );

    const results = await Promise.all(trendingPromises);
    return results;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    return undefined;
  }
};
