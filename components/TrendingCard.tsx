import { Link } from "expo-router";
import MaskedView from "@react-native-masked-view/masked-view";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { images } from "@/constants/images";

const TrendingCard = ({ movie: { movie_id, title, poster_url }, index }: TrendingCardProps) => {
  return (
    <Link href={`/movie/${movie_id}`} asChild>
      <TouchableOpacity className="w-44 relative pl-5" activeOpacity={0.7}>
        <View
          className="rounded-xl overflow-hidden"
          style={{
            backgroundColor: 'rgba(15, 13, 35, 0.7)',
            borderWidth: 1,
            borderColor: 'rgba(34, 31, 61, 0.5)',
            aspectRatio: 2/3,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 6 },
            shadowOpacity: 0.4,
            shadowRadius: 10,
            elevation: 8 
          }}
        >
          <Image
            source={{ uri: poster_url && poster_url !== 'N/A' ? poster_url : 'https://placehold.co/300x450/1a1a1a/FFFFFF.png' }}
            className="w-full h-full rounded-xl"
            resizeMode="cover"
          />
          <View
            className="absolute bottom-0 left-0 right-0 h-20"
            style={{ backgroundColor: 'rgba(3, 0, 20, 0.6)' }}
          />
        </View>

        <View className="absolute" style={{ bottom: -5, left: -10 }}>
          <Text
            className="absolute font-black text-[96px]"
            style={{ color: 'rgba(171, 139, 255, 0.15)', letterSpacing: -2 }}
          >
            {index + 1}
          </Text>
          <MaskedView
            maskElement={
              <Text className="font-black text-[96px] text-white" style={{ letterSpacing: -2 }}>
                {index + 1}
              </Text>
            }
          >
            <Image source={images.rankingGradient} className="size-24" resizeMode="cover" />
          </MaskedView>
        </View>

        <Text
          className="text-[14px] font-bold mt-2 text-white"
          numberOfLines={1}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};
export default TrendingCard;
