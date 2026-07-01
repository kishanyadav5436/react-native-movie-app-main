import {
  View,
  Text,
  Image,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { icons } from "@/constants/icons";
import useFetch from "@/services/usefetch";
import { fetchMovieDetails } from "@/services/api";

interface MovieInfoProps {
  label: string;
  value?: string | number | null;
  icon?: string;
}

const MovieInfo = ({ label, value, icon }: MovieInfoProps) => (
  <View className="flex-col items-start justify-center mt-5">
    <Text className="text-accent font-semibold text-xs uppercase tracking-wider">
      {icon ? `${icon} ` : ""}{label}
    </Text>
    <Text className="text-light-100 font-normal text-sm mt-1.5 leading-5">
      {value || "N/A"}
    </Text>
  </View>
);

const getRatingColor = (rating: string | undefined): string => {
  const num = parseFloat(rating || "0");
  if (num >= 7) return "#4CAF50";
  if (num >= 5) return "#FFC107";
  return "#F44336";
};

const Details = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const { data: movie, loading } = useFetch(() =>
    fetchMovieDetails(id as string)
  );

  if (loading)
    return (
      <SafeAreaView className="bg-primary flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#AB8BFF" />
        <Text className="text-light-200 mt-4 text-sm">Loading details...</Text>
      </SafeAreaView>
    );

  const ratingColor = getRatingColor(movie?.imdbRating);

  return (
    <View className="bg-primary flex-1">
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        {/* Poster */}
        <View>
          <Image
            source={{
              uri:
                movie?.Poster && movie?.Poster !== "N/A"
                  ? movie.Poster
                  : "https://placehold.co/600x900/1a1a1a/FFFFFF.png",
            }}
            className="w-full h-[550px]"
            resizeMode="stretch"
          />

          {/* Gradient overlay at bottom of poster */}
          <View
            className="absolute bottom-0 left-0 right-0 h-32"
            style={{
              backgroundColor: "transparent",
              // Simulated gradient overlay
            }}
          />

          <TouchableOpacity className="absolute bottom-5 right-5 rounded-full size-14 bg-accent flex items-center justify-center">
            <Image
              source={icons.play}
              className="w-6 h-7 ml-1"
              resizeMode="stretch"
              tintColor="#fff"
            />
          </TouchableOpacity>
        </View>

        {/* Movie Info */}
        <View className="flex-col items-start justify-center mt-5 px-5">
          {/* Title */}
          <Text className="text-white font-bold text-2xl">{movie?.Title}</Text>

          {/* Year & Runtime */}
          <View className="flex-row items-center gap-x-2 mt-2">
            <View className="bg-dark-100 px-3 py-1 rounded-full">
              <Text className="text-light-100 text-xs font-medium">
                {movie?.Year}
              </Text>
            </View>
            <View className="bg-dark-100 px-3 py-1 rounded-full">
              <Text className="text-light-100 text-xs font-medium">
                {movie?.Runtime}
              </Text>
            </View>
            <View className="bg-dark-100 px-3 py-1 rounded-full">
              <Text className="text-light-100 text-xs font-medium">
                {movie?.Rated}
              </Text>
            </View>
          </View>

          {/* Rating */}
          <View className="flex-row items-center bg-dark-200 px-4 py-2.5 rounded-xl gap-x-2 mt-4 border border-dark-100">
            <Image source={icons.star} className="size-5" tintColor="#FFD700" />
            <Text
              className="font-bold text-lg"
              style={{ color: ratingColor }}
            >
              {movie?.imdbRating || "N/A"}
            </Text>
            <Text className="text-light-300 text-sm">/10</Text>
            <View className="w-px h-4 bg-dark-100 mx-1" />
            <Text className="text-light-300 text-xs">
              {movie?.imdbVotes || "0"} votes
            </Text>
          </View>

          {/* Genres as pills */}
          {movie?.Genre && (
            <View className="flex-row flex-wrap gap-2 mt-4">
              {movie.Genre.split(", ").map((genre, i) => (
                <View
                  key={i}
                  className="bg-accent/20 px-3 py-1.5 rounded-full border border-accent/30"
                >
                  <Text className="text-accent text-xs font-semibold">
                    {genre}
                  </Text>
                </View>
              ))}
            </View>
          )}

          {/* Divider */}
          <View className="w-full h-px bg-dark-100 mt-6" />

          {/* Plot */}
          <MovieInfo label="Plot" value={movie?.Plot} icon="📝" />

          {/* Divider */}
          <View className="w-full h-px bg-dark-100 mt-5" />

          {/* Cast & Crew */}
          <MovieInfo label="Director" value={movie?.Director} icon="🎬" />
          <MovieInfo label="Actors" value={movie?.Actors} icon="🎭" />
          <MovieInfo label="Writer" value={movie?.Writer} icon="✍️" />

          {/* Divider */}
          <View className="w-full h-px bg-dark-100 mt-5" />

          {/* Additional Info Row */}
          <View className="flex-row justify-between w-full">
            <View className="flex-1">
              <MovieInfo label="Box Office" value={movie?.BoxOffice || "N/A"} icon="💰" />
            </View>
            <View className="flex-1">
              <MovieInfo label="Awards" value={movie?.Awards} icon="🏆" />
            </View>
          </View>

          <View className="flex-row justify-between w-full">
            <View className="flex-1">
              <MovieInfo label="Country" value={movie?.Country} icon="🌍" />
            </View>
            <View className="flex-1">
              <MovieInfo label="Language" value={movie?.Language} icon="🗣️" />
            </View>
          </View>

          {/* Other Ratings */}
          {movie?.Ratings && movie.Ratings.length > 0 && (
            <>
              <View className="w-full h-px bg-dark-100 mt-5" />
              <Text className="text-accent font-semibold text-xs uppercase tracking-wider mt-5">
                ⭐ Other Ratings
              </Text>
              <View className="flex-row flex-wrap gap-3 mt-3">
                {movie.Ratings.map((rating, i) => (
                  <View
                    key={i}
                    className="bg-dark-200 px-4 py-3 rounded-xl border border-dark-100 items-center"
                  >
                    <Text className="text-white font-bold text-sm">
                      {rating.Value}
                    </Text>
                    <Text className="text-light-300 text-xs mt-1">
                      {rating.Source.replace("Internet Movie Database", "IMDb")}
                    </Text>
                  </View>
                ))}
              </View>
            </>
          )}
        </View>
      </ScrollView>

      {/* Go Back Button */}
      <TouchableOpacity
        className="absolute bottom-5 left-0 right-0 mx-5 bg-accent rounded-2xl py-4 flex flex-row items-center justify-center z-50"
        onPress={router.back}
        activeOpacity={0.8}
      >
        <Image
          source={icons.arrow}
          className="size-5 mr-2 mt-0.5 rotate-180"
          tintColor="#fff"
        />
        <Text className="text-white font-bold text-base">Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Details;
