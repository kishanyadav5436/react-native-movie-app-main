import { Link } from "expo-router";
import { Text, Image, TouchableOpacity, View } from "react-native";

import { icons } from "@/constants/icons";

const MovieCard = ({ imdbID, Poster, Title, Year }: Movie) => {
  return (
    <Link href={`/movie/${imdbID}`} asChild>
      <TouchableOpacity className="w-[30%]" activeOpacity={0.7}>
        <View
          className="rounded-2xl overflow-hidden bg-dark-200 border border-dark-100"
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.35,
            shadowRadius: 8,
            elevation: 6,
          }}
        >
          {/* Poster Image */}
          <View className="relative">
            <Image
              source={{
                uri:
                  Poster && Poster !== "N/A"
                    ? Poster
                    : "https://placehold.co/600x400/1a1a1a/FFFFFF.png",
              }}
              className="w-full h-52"
              resizeMode="cover"
            />

            {/* Gradient overlay at bottom */}
            <View
              className="absolute bottom-0 left-0 right-0 h-16"
              style={{ backgroundColor: "rgba(15, 13, 35, 0.65)" }}
            />

            {/* Rating badge overlay */}
            <View
              className="absolute top-2 right-2 bg-dark-200/90 px-2 py-0.5 rounded-full flex-row items-center gap-x-0.5"
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.4,
                shadowRadius: 3,
                elevation: 3,
              }}
            >
              <Image
                source={icons.star}
                className="size-2.5"
                tintColor="#FFD700"
              />
              <Text className="text-gold text-[9px] font-bold">IMDb</Text>
            </View>
          </View>

          {/* Info Section */}
          <View className="px-2.5 py-3">
            <Text
              className="text-sm font-bold text-white tracking-wide"
              numberOfLines={1}
            >
              {Title}
            </Text>

            <View className="flex-row items-center justify-between mt-2">
              <View className="flex-row items-center gap-x-1">
                <Image
                  source={icons.star}
                  className="size-3"
                  tintColor="#FFD700"
                />
                <Text className="text-xs text-gold font-semibold">IMDb</Text>
              </View>
              <View className="bg-accent/15 px-2 py-0.5 rounded-full">
                <Text className="text-[10px] text-accent font-bold">
                  {Year}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
