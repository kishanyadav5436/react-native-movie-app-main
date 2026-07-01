import { Link } from "expo-router";
import { Text, Image, TouchableOpacity, View } from "react-native";

import { icons } from "@/constants/icons";

const MovieCard = ({ imdbID, Poster, Title, Year }: Movie) => {
  return (
    <Link href={`/movie/${imdbID}`} asChild>
      <TouchableOpacity className="w-[30%]" activeOpacity={0.7}>
        <View className="rounded-xl overflow-hidden bg-dark-200 border border-dark-100">
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

          <View className="px-2 py-2.5">
            <Text
              className="text-sm font-bold text-white"
              numberOfLines={1}
            >
              {Title}
            </Text>

            <View className="flex-row items-center justify-between mt-1.5">
              <View className="flex-row items-center gap-x-1">
                <Image
                  source={icons.star}
                  className="size-3"
                  tintColor="#FFD700"
                />
                <Text className="text-xs text-gold font-semibold">
                  IMDb
                </Text>
              </View>
              <Text className="text-xs text-accent font-medium">
                {Year}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
