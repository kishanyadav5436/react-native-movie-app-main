import { Link } from "expo-router";
import { Text, Image, TouchableOpacity, View } from "react-native";
import { icons } from "@/constants/icons";

const MovieCard = ({ imdbID, Poster, Title, Year }: Movie) => {
  return (
    <Link href={`/movie/${imdbID}`} asChild>
      <TouchableOpacity className="w-[30%]" activeOpacity={0.7}>
        <View
          className="rounded-lg overflow-hidden"
          style={{
            backgroundColor: 'rgba(15, 13, 35, 0.7)',
            borderWidth: 1,
            borderColor: 'rgba(34, 31, 61, 0.5)',
            aspectRatio: 2/3,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.35,
            shadowRadius: 8,
            elevation: 6,
          }}
        >
          <Image
            source={{
              uri:
                Poster && Poster !== "N/A"
                  ? Poster
                  : "https://placehold.co/600x400/1a1a1a/FFFFFF.png",
            }}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>

        <Text
          className="text-[14px] font-bold text-white mt-2"
          numberOfLines={1}
        >
          {Title}
        </Text>
        
        <View className="self-start mt-1 px-1.5 py-0.5 rounded" style={{ backgroundColor: 'rgba(76, 72, 71, 0.4)' }}>
          <Text className="text-[10px] uppercase tracking-widest" style={{ color: '#CAC5CD' }}>
            {Year}
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
