import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

import useFetch from "@/services/usefetch";
import { fetchMovies } from "@/services/api";
import { getTrendingMovies } from "@/services/appwrite";

import { icons } from "@/constants/icons";
import { images } from "@/constants/images";

import SearchBar from "@/components/SearchBar";
import MovieCard from "@/components/MovieCard";
import TrendingCard from "@/components/TrendingCard";

const Index = () => {
  const router = useRouter();

  const {
    data: trendingMovies,
    loading: trendingLoading,
    error: trendingError,
  } = useFetch(getTrendingMovies);

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: "" }));

  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="absolute w-full z-0"
        resizeMode="cover"
      />

      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        {/* Logo */}
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />

        {moviesLoading || trendingLoading ? (
          <View className="flex-1 justify-center items-center mt-20">
            <View
              className="w-20 h-20 rounded-full bg-dark-200 border border-dark-100 items-center justify-center mb-5"
              style={{
                shadowColor: "#AB8BFF",
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.3,
                shadowRadius: 12,
                elevation: 6,
              }}
            >
              <ActivityIndicator size="large" color="#AB8BFF" />
            </View>
            <Text className="text-light-100 text-base font-semibold">
              Loading movies...
            </Text>
            <Text className="text-light-300 mt-1.5 text-xs">
              Fetching the latest for you
            </Text>
          </View>
        ) : moviesError || trendingError ? (
          <View className="flex-1 justify-center items-center mt-20 px-5">
            <View
              className="bg-dark-200 rounded-3xl px-8 py-10 border border-dark-100 items-center w-full"
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 6 },
                shadowOpacity: 0.4,
                shadowRadius: 12,
                elevation: 8,
              }}
            >
              <Text className="text-6xl mb-5">🎬</Text>
              <Text className="text-white text-xl font-bold text-center">
                Oops! Something went wrong
              </Text>
              <Text className="text-light-300 text-sm text-center mt-3 leading-5">
                {moviesError?.message || trendingError?.message}
              </Text>
              <View className="mt-5 bg-accent/15 px-5 py-2 rounded-full border border-accent/25">
                <Text className="text-accent text-xs font-semibold">
                  Pull down to retry
                </Text>
              </View>
            </View>
          </View>
        ) : (
          <View className="flex-1 mt-5">
            <SearchBar
              onPress={() => {
                router.push("/search");
              }}
              placeholder="Search for a movie"
            />

            {/* Trending Section */}
            {trendingMovies && (
              <View className="mt-10">
                <View className="flex-row items-center mb-3">
                  <Text className="text-xl text-white font-bold tracking-wide">
                    🔥 Trending Movies
                  </Text>
                  <View className="flex-1 h-px bg-dark-100/40 ml-4" />
                </View>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  className="mb-4 mt-3"
                  data={trendingMovies}
                  contentContainerStyle={{
                    gap: 26,
                  }}
                  renderItem={({ item, index }) => (
                    <TrendingCard movie={item} index={index} />
                  )}
                  keyExtractor={(item) => item.movie_id.toString()}
                  ItemSeparatorComponent={() => <View className="w-4" />}
                />
              </View>
            )}

            {/* Latest Movies Section */}
            <>
              <View className="flex-row items-center justify-between mt-5 mb-3">
                <View className="flex-row items-center flex-1">
                  <Text className="text-xl text-white font-bold tracking-wide">
                    🎬 Latest Movies
                  </Text>
                  <View className="flex-1 h-px bg-dark-100/40 ml-4" />
                </View>
                <View className="bg-accent/15 rounded-full px-3 py-1 ml-3 border border-accent/25">
                  <Text className="text-accent text-xs font-bold">
                    {movies?.length || 0}
                  </Text>
                </View>
              </View>

              <FlatList
                data={movies}
                renderItem={({ item }) => <MovieCard {...item} />}
                keyExtractor={(item) => item.imdbID}
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent: "flex-start",
                  gap: 16,
                  paddingRight: 5,
                  marginBottom: 14,
                }}
                className="mt-2 pb-32"
                scrollEnabled={false}
              />
            </>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Index;
