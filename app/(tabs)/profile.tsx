import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <SafeAreaView className="bg-primary flex-1">
      <Image
        source={images.bg}
        className="absolute w-full z-0"
        resizeMode="cover"
      />

      <View className="flex justify-center items-center flex-1 flex-col px-8">
        {/* Avatar Circle */}
        <View className="w-24 h-24 rounded-full bg-dark-200 border-2 border-accent items-center justify-center mb-6">
          <Image source={icons.person} className="size-10" tintColor="#AB8BFF" />
        </View>

        <Text className="text-white text-2xl font-bold">Your Profile</Text>
        <Text className="text-light-300 text-sm mt-2 text-center">
          Profile features coming soon!
        </Text>

        {/* Info Cards */}
        <View className="w-full mt-8 gap-4">
          <View className="bg-dark-200 rounded-xl px-5 py-4 border border-dark-100 flex-row items-center">
            <Text className="text-2xl mr-3">🎬</Text>
            <View>
              <Text className="text-white font-bold text-sm">Watched Movies</Text>
              <Text className="text-light-300 text-xs mt-0.5">Track your viewing history</Text>
            </View>
          </View>

          <View className="bg-dark-200 rounded-xl px-5 py-4 border border-dark-100 flex-row items-center">
            <Text className="text-2xl mr-3">⭐</Text>
            <View>
              <Text className="text-white font-bold text-sm">My Ratings</Text>
              <Text className="text-light-300 text-xs mt-0.5">Rate and review movies</Text>
            </View>
          </View>

          <View className="bg-dark-200 rounded-xl px-5 py-4 border border-dark-100 flex-row items-center">
            <Text className="text-2xl mr-3">⚙️</Text>
            <View>
              <Text className="text-white font-bold text-sm">Settings</Text>
              <Text className="text-light-300 text-xs mt-0.5">Customize your experience</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
