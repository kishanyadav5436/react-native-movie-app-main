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

const glassStyle = {
  backgroundColor: "rgba(15,13,35,0.7)",
  borderWidth: 1,
  borderColor: "rgba(34,31,61,0.5)",
};

const Details = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const { data: movie, loading } = useFetch(() =>
    fetchMovieDetails(id as string)
  );

  if (loading)
    return (
      <SafeAreaView style={{ backgroundColor: "#030014", flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#AB8BFF" />
        <Text style={{ color: "#CBC2E3", marginTop: 16, fontSize: 14 }}>Loading details...</Text>
      </SafeAreaView>
    );

  const getRating = (source: string) => {
    const r = movie?.Ratings?.find((r: any) => r.Source === source);
    return r ? r.Value : "N/A";
  };
  const rtRating = getRating("Rotten Tomatoes");

  return (
    <View style={{ backgroundColor: "#030014", flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }} bounces={false}>
        {/* Hero Section */}
        <View className="relative">
          <Image
            source={{
              uri:
                movie?.Poster && movie?.Poster !== "N/A"
                  ? movie.Poster
                  : "https://placehold.co/600x900/1a1a1a/FFFFFF.png",
            }}
            style={{ width: "100%", height: 400 }}
            resizeMode="cover"
          />
          {/* Simulated gradient overlay */}
          <View
            className="absolute bottom-0 left-0 right-0 h-40"
            style={{ backgroundColor: "rgba(20,19,21,0.8)" }}
          />

          {/* Overlay Navigation */}
          <SafeAreaView className="absolute top-0 left-0 right-0 flex-row justify-between px-6 pt-4">
            <TouchableOpacity 
              onPress={router.back}
              className="w-10 h-10 rounded-full items-center justify-center"
              style={glassStyle}
            >
              <Image source={icons.arrow} className="w-4 h-4 rotate-180" tintColor="#CBC2E3" />
            </TouchableOpacity>
            <TouchableOpacity 
              className="w-10 h-10 rounded-full items-center justify-center"
              style={glassStyle}
            >
              <Image source={icons.save} className="w-5 h-5" tintColor="#CBC2E3" />
            </TouchableOpacity>
          </SafeAreaView>

          {/* Title Area */}
          <View className="absolute bottom-6 left-6 right-6">
            <Text style={{ color: "white", fontSize: 32, fontWeight: "800" }}>{movie?.Title}</Text>
            <View className="flex-row items-center mt-2 flex-wrap">
              <Text style={{ color: "#CAC5CD", fontSize: 12, textTransform: "uppercase", letterSpacing: 1 }}>{movie?.Year}</Text>
              <Text style={{ color: "#CAC5CD", fontSize: 12, marginHorizontal: 6 }}>•</Text>
              <Text style={{ color: "#CAC5CD", fontSize: 12, textTransform: "uppercase", letterSpacing: 1 }}>{movie?.Runtime}</Text>
              <Text style={{ color: "#CAC5CD", fontSize: 12, marginHorizontal: 6 }}>•</Text>
              <Text style={{ color: "#CAC5CD", fontSize: 12, textTransform: "uppercase", letterSpacing: 1 }}>{movie?.Rated}</Text>
            </View>
          </View>
        </View>

        <View className="px-6 mt-6">
          {/* Ratings Bar */}
          <View className="flex-row justify-between gap-3">
            <View style={glassStyle} className="rounded-xl p-3 flex-1 items-center">
              <Text style={{ color: "#4CAF50", fontSize: 18, fontWeight: "bold" }}>{movie?.imdbRating || "N/A"}</Text>
              <Text style={{ color: "#CAC5CD", fontSize: 13, marginTop: 4 }}>IMDb</Text>
            </View>
            <View style={glassStyle} className="rounded-xl p-3 flex-1 items-center">
              <Text style={{ color: "#4CAF50", fontSize: 18, fontWeight: "bold" }}>{rtRating}</Text>
              <Text style={{ color: "#CAC5CD", fontSize: 13, marginTop: 4, textAlign: "center" }} numberOfLines={1}>Rotten Tomatoes</Text>
            </View>
            <View style={glassStyle} className="rounded-xl p-3 flex-1 items-center">
              <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>{movie?.Metascore || "N/A"}</Text>
              <Text style={{ color: "#CAC5CD", fontSize: 13, marginTop: 4 }}>Metacritic</Text>
            </View>
          </View>

          {/* Metadata Chips */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-6 flex-row" contentContainerStyle={{ gap: 12 }}>
            <View style={glassStyle} className="rounded-full px-4 py-2 flex-row items-center">
              <Text className="mr-2">💰</Text>
              <Text style={{ color: "#E6E1E4", fontSize: 13 }}>{movie?.BoxOffice || "N/A"}</Text>
            </View>
            <View style={glassStyle} className="rounded-full px-4 py-2 flex-row items-center">
              <Text className="mr-2">🏆</Text>
              <Text style={{ color: "#E6E1E4", fontSize: 13 }}>{movie?.Awards || "N/A"}</Text>
            </View>
          </ScrollView>

          {/* Plot Summary */}
          <View className="mt-8">
            <Text style={{ color: "#CBC2E3", fontSize: 18, fontWeight: "600", marginBottom: 8 }}>Plot Summary</Text>
            <Text style={{ color: "#CAC5CD", fontSize: 14, lineHeight: 22 }}>
              {movie?.Plot || "No plot summary available."}
            </Text>
          </View>

          {/* Cast & Crew */}
          <View className="mt-8">
            <Text style={{ color: "#CBC2E3", fontSize: 18, fontWeight: "600", marginBottom: 12 }}>Cast & Crew</Text>
            <View className="mb-4">
              <Text style={{ color: "#AB8BFF", fontSize: 12, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>Director</Text>
              <Text style={{ color: "#E6E1E4", fontSize: 14 }}>{movie?.Director || "N/A"}</Text>
            </View>
            <View className="mb-4">
              <Text style={{ color: "#AB8BFF", fontSize: 12, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>Actors</Text>
              <Text style={{ color: "#E6E1E4", fontSize: 14 }}>{movie?.Actors || "N/A"}</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom CTA */}
      <View className="absolute bottom-0 left-0 right-0 px-6 pb-8 pt-4 flex-row gap-4" style={{ backgroundColor: "#141315" }}>
        <TouchableOpacity className="flex-1 h-14 rounded-xl flex-row items-center justify-center" style={{ backgroundColor: "#CBC2E3" }}>
          <Image source={icons.play} className="w-5 h-5 mr-2" tintColor="#141315" />
          <Text style={{ color: "#141315", fontWeight: "bold", fontSize: 16 }}>Watch Now</Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-14 h-14 rounded-xl items-center justify-center" style={glassStyle}>
          <Text style={{ color: "#CBC2E3", fontSize: 24 }}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Details;
