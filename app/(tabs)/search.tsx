import { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, FlatList, Image } from "react-native";

import { images } from "@/constants/images";
import { icons } from "@/constants/icons";

import useFetch from "@/services/usefetch";
import { fetchMovies } from "@/services/api";
import { updateSearchCount } from "@/services/appwrite";

import SearchBar from "@/components/SearchBar";
import MovieDisplayCard from "@/components/MovieCard";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data: movies = [],
    loading,
    error,
    refetch: loadMovies,
    reset,
  } = useFetch(() => fetchMovies({ query: searchQuery }), false);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
  };

  // Debounced search effect
  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (searchQuery.trim()) {
        await loadMovies();

        // Call updateSearchCount only if there are results
        if (movies?.length! > 0 && movies?.[0]) {
          await updateSearchCount(searchQuery, movies[0]);
        }
      } else {
        reset();
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="flex-1 absolute w-full z-0"
        resizeMode="cover"
      />

      <FlatList
        className="px-5"
        data={movies as Movie[]}
        keyExtractor={(item) => item.imdbID}
        renderItem={({ item }) => <MovieDisplayCard {...item} />}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "flex-start",
          gap: 16,
          marginVertical: 14,
        }}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListHeaderComponent={
          <>
            <View className="w-full flex-row justify-center mt-20 items-center">
              <Image source={icons.logo} className="w-12 h-10" />
            </View>

            <View className="my-5">
              <SearchBar
                placeholder="Search movies, shows, actors..."
                value={searchQuery}
                onChangeText={handleSearch}
              />
            </View>

            {loading && (
              <View className="flex-row items-center justify-center my-4">
                <ActivityIndicator size="small" color="#AB8BFF" />
                <Text className="text-light-200 ml-3 text-sm">
                  Searching...
                </Text>
              </View>
            )}

            {error && (
              <View className="bg-dark-200 rounded-xl px-4 py-3 my-3 border border-dark-100">
                <Text className="text-red-400 text-sm">
                  ⚠️ {error.message}
                </Text>
              </View>
            )}

            {!loading &&
              !error &&
              searchQuery.trim() &&
              movies?.length! > 0 && (
                <View className="flex-row items-center justify-between mb-2">
                  <Text className="text-xl text-white font-bold">
                    Results for{" "}
                    <Text className="text-accent">"{searchQuery}"</Text>
                  </Text>
                  <View className="bg-accent rounded-full px-3 py-1">
                    <Text className="text-white text-xs font-bold">
                      {movies?.length}
                    </Text>
                  </View>
                </View>
              )}
          </>
        }
        ListEmptyComponent={
          !loading && !error ? (
            <View className="mt-16 px-5 items-center">
              <Text className="text-5xl mb-4">🔍</Text>
              <Text className="text-center text-white text-lg font-bold">
                {searchQuery.trim()
                  ? "No movies found"
                  : "Discover Movies"}
              </Text>
              <Text className="text-center text-light-300 text-sm mt-2">
                {searchQuery.trim()
                  ? "Try a different search term"
                  : "Start typing to search thousands of movies"}
              </Text>
            </View>
          ) : null
        }
      />
    </View>
  );
};

export default Search;
