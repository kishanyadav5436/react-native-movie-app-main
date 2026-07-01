export const OMDB_CONFIG = {
  BASE_URL: "https://www.omdbapi.com",
  API_KEY: "c8c3b4f7",
};

export const fetchMovies = async ({
  query,
}: {
  query: string;
}): Promise<Movie[]> => {
  // OMDB requires a search term; if empty, search for popular terms
  const searchTerm = query.trim() || "movie";

  const endpoint = `${OMDB_CONFIG.BASE_URL}/?apikey=${OMDB_CONFIG.API_KEY}&s=${encodeURIComponent(searchTerm)}&type=movie`;

  const response = await fetch(endpoint, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch movies: ${response.statusText}`);
  }

  const data = await response.json();

  if (data.Response === "False") {
    throw new Error(data.Error || "No movies found");
  }

  return data.Search || [];
};

export const fetchMovieDetails = async (
  movieId: string
): Promise<MovieDetails> => {
  try {
    const response = await fetch(
      `${OMDB_CONFIG.BASE_URL}/?apikey=${OMDB_CONFIG.API_KEY}&i=${movieId}&plot=full`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch movie details: ${response.statusText}`);
    }

    const data = await response.json();

    if (data.Response === "False") {
      throw new Error(data.Error || "Movie not found");
    }

    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};
