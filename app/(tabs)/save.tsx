import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Save = () => {
  return (
    <SafeAreaView className="bg-primary flex-1">
      <Image
        source={images.bg}
        className="absolute w-full z-0"
        resizeMode="cover"
      />

      <View className="flex justify-center items-center flex-1 flex-col px-8">
        {/* Bookmark Icon Circle */}
        <View className="w-24 h-24 rounded-full bg-dark-200 border-2 border-accent items-center justify-center mb-6">
          <Image source={icons.save} className="size-10" tintColor="#AB8BFF" />
        </View>

        <Text className="text-white text-2xl font-bold">Saved Movies</Text>
        <Text className="text-light-300 text-sm mt-2 text-center leading-5">
          Your bookmarked movies will appear here.{"\n"}Start saving movies you
          want to watch later!
        </Text>

        {/* Empty State Illustration */}
        <View className="mt-10 bg-dark-200 rounded-2xl px-8 py-8 border border-dark-100 items-center">
          <Text className="text-5xl mb-4">🍿</Text>
          <Text className="text-white font-bold text-base">No saved movies yet</Text>
          <Text className="text-light-300 text-xs mt-2 text-center">
            Browse movies and tap the bookmark icon to save them for later
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Save;
