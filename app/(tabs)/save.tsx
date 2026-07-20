import { icons } from "@/constants/icons";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const glassStyle = {
  backgroundColor: "rgba(15,13,35,0.7)",
  borderWidth: 1,
  borderColor: "rgba(34,31,61,0.5)",
};

const Save = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#030014", flex: 1 }}>
      <View className="flex justify-center items-center flex-1 flex-col px-8">
        <View
          className="w-28 h-28 rounded-full border-2 items-center justify-center mb-7"
          style={{
            backgroundColor: "#0F0D23",
            borderColor: "#AB8BFF",
            shadowColor: "#AB8BFF",
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.4,
            shadowRadius: 18,
            elevation: 10,
          }}
        >
          <Image source={icons.save} className="w-11 h-11" tintColor="#AB8BFF" />
        </View>

        <Text
          style={{ color: "#CBC2E3", fontSize: 32, fontWeight: "800", letterSpacing: 0.5 }}
        >
          Saved Movies
        </Text>
        <Text style={{ color: "#CAC5CD", fontSize: 14, marginTop: 10, textAlign: "center", lineHeight: 20 }}>
          Your bookmarked movies will appear here.{"\n"}Start saving movies you
          want to watch later!
        </Text>

        <View className="flex-row items-center gap-1.5 mt-6 mb-4">
          <View className="w-1 h-1 rounded-full bg-[#AB8BFF]/40" />
          <View className="w-1.5 h-1.5 rounded-full bg-[#AB8BFF]/60" />
          <View className="w-2 h-2 rounded-full bg-[#AB8BFF]" />
          <View className="w-1.5 h-1.5 rounded-full bg-[#AB8BFF]/60" />
          <View className="w-1 h-1 rounded-full bg-[#AB8BFF]/40" />
        </View>

        <View
          className="mt-4 rounded-3xl px-8 py-9 items-center w-full"
          style={glassStyle}
        >
          <Text className="text-5xl mb-4">🍿</Text>
          <Text style={{ color: "#E6E1E4", fontWeight: "bold", fontSize: 16, letterSpacing: 0.5 }}>
            No saved movies yet
          </Text>
          <Text style={{ color: "#CAC5CD", fontSize: 12, marginTop: 10, textAlign: "center", lineHeight: 16 }}>
            Browse movies and tap the bookmark icon to save them for later
          </Text>

          <View className="mt-5 px-5 py-2 rounded-full" style={{ backgroundColor: "rgba(171,139,255,0.15)", borderWidth: 1, borderColor: "rgba(171,139,255,0.25)" }}>
            <Text style={{ color: "#AB8BFF", fontSize: 12, fontWeight: "600" }}>
              Explore trending movies →
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Save;
