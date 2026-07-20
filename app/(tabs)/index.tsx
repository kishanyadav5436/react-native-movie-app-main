import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

import useFetch from "@/services/usefetch";
import { fetchMovies } from "@/services/api";
import { getTrendingMovies } from "@/services/appwrite";

import { icons } from "@/constants/icons";
import { images } from "@/constants/images";

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
    <View className="flex-1 bg-primary" style={{ paddingTop: 60 }}>
      {/* Fixed Header */}
      <View className="flex-row items-center justify-between px-5 pb-4">
        <View className="flex-row items-center">
          <Image source={icons.logo} className="w-8 h-8" resizeMode="contain" />
          <Text className="text-[32px] font-extrabold text-[#CBC2E3] tracking-tight ml-2">
            Discovery
          </Text>
        </View>
        <TouchableOpacity>
          <Image source={icons.person} className="w-6 h-6" tintColor="#CAC5CD" />
        </TouchableOpacity>
      </View>

      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 100 }}
      >
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
              <Text className="text-white text-xl font-bold text-center mt-5">
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
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => router.push("/search")}
              className="flex-row items-center bg-[rgba(15,13,35,0.7)] border border-[rgba(34,31,61,0.5)] rounded-xl px-4 py-3"
            >
              <Image source={icons.search} className="w-5 h-5" tintColor="#CAC5CD" />
              <Text className="text-[#CAC5CD] text-base ml-3">
                Search movies, actors, directors...
              </Text>
            </TouchableOpacity>

            {/* Trending Section */}
            {trendingMovies && (
              <View className="mt-10">
                <View className="flex-row items-center justify-between mb-3">
                  <Text className="text-[24px] text-white font-bold">
                    Trending Now
                  </Text>
                  <TouchableOpacity>
                    <Text className="text-[#CBC2E3] text-[12px] uppercase tracking-wide">
                      SEE ALL
                    </Text>
                  </TouchableOpacity>
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
                <Text className="text-[24px] text-white font-bold">
                  Latest Releases
                </Text>
                <TouchableOpacity>
                  <Text className="text-[#CBC2E3] text-[12px] uppercase tracking-wide">
                    VIEW ALL
                  </Text>
                </TouchableOpacity>
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
