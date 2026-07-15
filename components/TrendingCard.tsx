import { Link } from "expo-router";
import MaskedView from "@react-native-masked-view/masked-view";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { images } from "@/constants/images";

const TrendingCard = ({
  movie: { movie_id, title, poster_url },
  index,
}: TrendingCardProps) => {
  return (
    <Link href={`/movie/${movie_id}`} asChild>
      <TouchableOpacity className="w-36 relative pl-5" activeOpacity={0.7}>
        <View
          className="rounded-2xl overflow-hidden border border-dark-100"
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 6 },
            shadowOpacity: 0.4,
            shadowRadius: 10,
            elevation: 8,
          }}
        >
          <Image
            source={{
              uri:
                poster_url && poster_url !== "N/A"
                  ? poster_url
                  : "https://placehold.co/300x450/1a1a1a/FFFFFF.png",
            }}
            className="w-36 h-52 rounded-2xl"
            resizeMode="cover"
          />

          {/* Gradient overlay at bottom for readability */}
          <View
            className="absolute bottom-0 left-0 right-0 h-20 rounded-b-2xl"
            style={{ backgroundColor: "rgba(3, 0, 20, 0.55)" }}
          />
        </View>

        {/* Ranking Number */}
        <View className="absolute bottom-12 -left-3.5 px-2 py-1 rounded-full">
          <MaskedView
            maskElement={
              <Text
                className="font-bold text-white text-6xl"
                style={{ letterSpacing: -2 }}
              >
                {index + 1}
              </Text>
            }
          >
            <Image
              source={images.rankingGradient}
              className="size-14"
              resizeMode="cover"
            />
          </MaskedView>
        </View>

        {/* Title */}
        <Text
          className="text-sm font-bold mt-2.5 text-light-100 tracking-wide"
          numberOfLines={2}
          style={{ lineHeight: 18 }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

export default TrendingCard;
