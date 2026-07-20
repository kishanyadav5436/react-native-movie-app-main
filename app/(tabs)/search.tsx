import { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, FlatList, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";

import { images } from "@/constants/images";
import { icons } from "@/constants/icons";

import useFetch from "@/services/usefetch";
import { fetchMovies } from "@/services/api";
import { updateSearchCount } from "@/services/appwrite";

import MovieDisplayCard from "@/components/MovieCard";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

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

  const genres = ["Action", "Sci-Fi", "Horror", "Documentary", "Anime"];

  return (
    <View style={{ flex: 1, backgroundColor: "#030014" }}>
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
            <View className="w-full flex-row justify-between items-center mt-[50px] mb-2">
              <Text className="text-[32px] font-extrabold text-[#CBC2E3]">
                Search Movies
              </Text>
              <Image source={icons.person} className="w-8 h-8 rounded-full" />
            </View>

            <View className="my-5">
              <View
                style={{
                  backgroundColor: "rgba(15,13,35,0.7)",
                  borderWidth: 1,
                  borderColor: isFocused ? "#CBC2E3" : "rgba(34,31,61,0.5)",
                  borderRadius: 12,
                  shadowColor: isFocused ? "#CBC2E3" : "transparent",
                  shadowOffset: { width: 0, height: 0 },
                  shadowOpacity: isFocused ? 0.3 : 0,
                  shadowRadius: 10,
                  elevation: isFocused ? 5 : 0,
                }}
                className="flex-row items-center px-4 py-3"
              >
                <Image
                  source={icons.search}
                  className="w-5 h-5 mr-3"
                  tintColor="#CAC5CD"
                  resizeMode="contain"
                />
                <TextInput
                  className="flex-1 text-[#E6E1E4]"
                  placeholder="Search movies, actors, or genres..."
                  placeholderTextColor="#CAC5CD"
                  value={searchQuery}
                  onChangeText={handleSearch}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                />
              </View>
            </View>

            {loading && (
              <View className="flex-row items-center justify-center my-5 bg-dark-200/60 rounded-full px-5 py-3 border border-dark-100/50 self-center">
                <ActivityIndicator size="small" color="#AB8BFF" />
                <Text className="text-light-100 ml-3 text-sm font-medium">
                  Searching...
                </Text>
              </View>
            )}

            {error && (
              <View
                className="bg-dark-200 rounded-2xl px-5 py-4 my-3 border border-rating-red/30"
                style={{
                  shadowColor: "#F44336",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.15,
                  shadowRadius: 6,
                  elevation: 4,
                }}
              >
                <View className="flex-row items-center">
                  <Text className="text-lg mr-2">⚠️</Text>
                  <Text className="text-rating-red text-sm font-semibold flex-1">
                    {error.message}
                  </Text>
                </View>
              </View>
            )}

            {!loading &&
              !error &&
              searchQuery.trim() &&
              movies?.length! > 0 && (
                <View className="flex-row items-center justify-between mb-3 mt-1">
                  <View className="flex-row items-center flex-1">
                    <Text className="text-xl font-bold text-[#E6E1E4]">
                      Results for{" "}
                      <Text className="text-[#AB8BFF]">"{searchQuery}"</Text>
                    </Text>
                  </View>
                  <View
                    className="rounded-full px-3.5 py-1.5 ml-3"
                    style={{
                      backgroundColor: "#AB8BFF",
                      shadowColor: "#AB8BFF",
                      shadowOffset: { width: 0, height: 0 },
                      shadowOpacity: 0.3,
                      shadowRadius: 8,
                      elevation: 4,
                    }}
                  >
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
            !searchQuery.trim() ? (
              <View className="mt-4">
                <Text className="text-24px font-bold text-[#CBC2E3] mb-4 text-[24px]">
                  Discover something new
                </Text>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  className="mb-8"
                >
                  {genres.map((genre, index) => {
                    const isActive = index === 0;
                    return (
                      <TouchableOpacity
                        key={genre}
                        className={`rounded-full px-4 py-2 mr-3 ${
                          isActive ? "bg-[#4c4847]" : "bg-[#201f21]"
                        }`}
                      >
                        <Text
                          className={`text-[13px] ${
                            isActive ? "text-[#CBC2E3]" : "text-[#CAC5CD]"
                          }`}
                        >
                          {genre}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>

                <View className="gap-4">
                  <View className="w-full h-48 rounded-xl overflow-hidden bg-[#1A1730]">
                    <View className="absolute top-4 left-4 bg-[rgba(203,194,227,0.2)] px-2 py-1 rounded-md">
                      <Text className="text-[#CBC2E3] text-xs font-semibold">
                        Trending Now
                      </Text>
                    </View>
                    <View className="absolute bottom-4 left-4">
                      <Text className="text-[#E6E1E4] text-xl font-bold">
                        Top Picks For You
                      </Text>
                    </View>
                  </View>

                  <View className="flex-row gap-4">
                    <View className="flex-1 h-40 rounded-xl overflow-hidden bg-[#1A1730]">
                      <View className="absolute bottom-4 left-4">
                        <Text className="text-[#E6E1E4] text-lg font-bold">
                          Classics
                        </Text>
                      </View>
                    </View>
                    <View className="flex-1 h-40 rounded-xl overflow-hidden bg-[#1A1730]">
                      <View className="absolute bottom-4 left-4">
                        <Text className="text-[#E6E1E4] text-lg font-bold">
                          Space Sci-Fi
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            ) : (
              <View className="mt-16 px-5 items-center">
                <View
                  className="w-20 h-20 rounded-full items-center justify-center mb-5"
                  style={{
                    backgroundColor: "rgba(15,13,35,0.7)",
                    borderColor: "rgba(34,31,61,0.5)",
                    borderWidth: 1,
                    shadowColor: "#CBC2E3",
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 0.2,
                    shadowRadius: 10,
                    elevation: 4,
                  }}
                >
                  <Text className="text-4xl">🔍</Text>
                </View>
                <Text className="text-center text-[#E6E1E4] text-xl font-bold">
                  No movies found
                </Text>
                <Text className="text-center text-[#CAC5CD] text-sm mt-2.5 leading-5">
                  Try a different search term
                </Text>
              </View>
            )
          ) : null
        }
      />
    </View>
  );
};

export default Search;
