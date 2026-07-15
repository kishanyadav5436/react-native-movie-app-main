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
        {/* Avatar Circle with Glow */}
        <View
          className="w-28 h-28 rounded-full bg-dark-200 border-2 border-accent items-center justify-center mb-7"
          style={{
            shadowColor: "#AB8BFF",
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.45,
            shadowRadius: 20,
            elevation: 10,
          }}
        >
          <Image
            source={icons.person}
            className="size-11"
            tintColor="#AB8BFF"
          />
        </View>

        <Text
          className="text-white text-2xl font-bold tracking-wide"
          style={{ letterSpacing: 0.5 }}
        >
          Your Profile
        </Text>
        <Text className="text-light-300 text-sm mt-2 text-center">
          Profile features coming soon!
        </Text>

        {/* Info Cards */}
        <View className="w-full mt-9 gap-4">
          <View
            className="bg-dark-200 rounded-2xl px-5 py-5 border border-dark-100 flex-row items-center"
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 3 },
              shadowOpacity: 0.3,
              shadowRadius: 6,
              elevation: 4,
            }}
          >
            <View className="w-11 h-11 rounded-full bg-accent/15 items-center justify-center mr-4">
              <Text className="text-xl">🎬</Text>
            </View>
            <View className="flex-1">
              <Text className="text-white font-bold text-sm">
                Watched Movies
              </Text>
              <Text className="text-light-300 text-xs mt-1">
                Track your viewing history
              </Text>
            </View>
            <Image
              source={icons.arrow}
              className="size-4"
              tintColor="#9CA4AB"
            />
          </View>

          {/* Subtle separator */}
          <View className="w-4/5 h-px bg-dark-100/30 self-center" />

          <View
            className="bg-dark-200 rounded-2xl px-5 py-5 border border-dark-100 flex-row items-center"
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 3 },
              shadowOpacity: 0.3,
              shadowRadius: 6,
              elevation: 4,
            }}
          >
            <View className="w-11 h-11 rounded-full bg-gold/15 items-center justify-center mr-4">
              <Text className="text-xl">⭐</Text>
            </View>
            <View className="flex-1">
              <Text className="text-white font-bold text-sm">My Ratings</Text>
              <Text className="text-light-300 text-xs mt-1">
                Rate and review movies
              </Text>
            </View>
            <Image
              source={icons.arrow}
              className="size-4"
              tintColor="#9CA4AB"
            />
          </View>

          {/* Subtle separator */}
          <View className="w-4/5 h-px bg-dark-100/30 self-center" />

          <View
            className="bg-dark-200 rounded-2xl px-5 py-5 border border-dark-100 flex-row items-center"
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 3 },
              shadowOpacity: 0.3,
              shadowRadius: 6,
              elevation: 4,
            }}
          >
            <View className="w-11 h-11 rounded-full bg-light-300/15 items-center justify-center mr-4">
              <Text className="text-xl">⚙️</Text>
            </View>
            <View className="flex-1">
              <Text className="text-white font-bold text-sm">Settings</Text>
              <Text className="text-light-300 text-xs mt-1">
                Customize your experience
              </Text>
            </View>
            <Image
              source={icons.arrow}
              className="size-4"
              tintColor="#9CA4AB"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
