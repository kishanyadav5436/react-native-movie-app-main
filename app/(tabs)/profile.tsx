import { icons } from "@/constants/icons";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const glassStyle = {
  backgroundColor: "rgba(15,13,35,0.7)",
  borderWidth: 1,
  borderColor: "rgba(34,31,61,0.5)",
};

const Profile = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#030014", flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        {/* Header */}
        <View className="flex-row items-center justify-between px-6 pt-12 pb-6">
          <View className="flex-row items-center gap-3 flex-1 pr-4">
            <Image source={icons.logo} className="w-8 h-8" />
            <Text
              style={{ color: "#CBC2E3", fontSize: 32, fontWeight: "800" }}
              numberOfLines={1}
              adjustsFontSizeToFit
            >
              Cinematic Discovery
            </Text>
          </View>
          <Image source={icons.person} className="w-8 h-8" tintColor="#CBC2E3" />
        </View>

        {/* Profile Section */}
        <View className="items-center px-6 mt-4">
          <View className="w-32 h-32 rounded-full border-2 border-[#CBC2E3] p-1 mb-4 relative">
            <View className="flex-1 bg-[#0F0D23] rounded-full items-center justify-center">
              <Image source={icons.person} className="w-12 h-12" tintColor="#AB8BFF" />
            </View>
            <TouchableOpacity className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-[#CBC2E3] items-center justify-center">
              <Text className="text-xs">✏️</Text>
            </TouchableOpacity>
          </View>
          <Text className="text-2xl font-bold text-white mb-1">Julian Vesper</Text>
          <Text style={{ color: "#CAC5CD", fontSize: 14 }}>Film Aficionado & Collector</Text>
        </View>

        {/* Stats Grid */}
        <View className="flex-row justify-between px-6 mt-8">
          <View style={glassStyle} className="rounded-xl p-4 items-center flex-1 mx-1">
            <Text style={{ color: "#CBC2E3", fontSize: 24, fontWeight: "bold" }}>142</Text>
            <Text style={{ color: "#CAC5CD", fontSize: 13, textTransform: "uppercase", letterSpacing: 1.5, marginTop: 4 }}>SAVED</Text>
          </View>
          <View style={glassStyle} className="rounded-xl p-4 items-center flex-1 mx-1">
            <Text style={{ color: "#CBC2E3", fontSize: 24, fontWeight: "bold" }}>48</Text>
            <Text style={{ color: "#CAC5CD", fontSize: 13, textTransform: "uppercase", letterSpacing: 1.5, marginTop: 4 }}>REVIEWS</Text>
          </View>
          <View style={glassStyle} className="rounded-xl p-4 items-center flex-1 mx-1">
            <Text style={{ color: "#CBC2E3", fontSize: 24, fontWeight: "bold" }}>1.2k</Text>
            <Text style={{ color: "#CAC5CD", fontSize: 13, textTransform: "uppercase", letterSpacing: 1.5, marginTop: 4 }}>FOLLOWING</Text>
          </View>
        </View>

        {/* Preferences */}
        <View className="px-6 mt-10">
          <Text style={{ color: "#CAC5CD", fontSize: 12, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Preferences</Text>
          <View style={glassStyle} className="rounded-xl overflow-hidden">
            <TouchableOpacity className="flex-row items-center justify-between p-4" style={{ borderBottomWidth: 1, borderBottomColor: "rgba(72,69,77,0.1)" }}>
              <View className="flex-row items-center gap-3">
                <Text>🔔</Text>
                <Text style={{ color: "#CBC2E3", fontSize: 16 }}>Notifications</Text>
              </View>
              <Text style={{ color: "#CBC2E3" }}>{">"}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity className="flex-row items-center justify-between p-4" style={{ borderBottomWidth: 1, borderBottomColor: "rgba(72,69,77,0.1)" }}>
              <View className="flex-row items-center gap-3">
                <Text>🔒</Text>
                <Text style={{ color: "#CBC2E3", fontSize: 16 }}>Privacy & Security</Text>
              </View>
              <Text style={{ color: "#CBC2E3" }}>{">"}</Text>
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center justify-between p-4" style={{ borderBottomWidth: 1, borderBottomColor: "rgba(72,69,77,0.1)" }}>
              <View className="flex-row items-center gap-3">
                <Text>🎨</Text>
                <Text style={{ color: "#CBC2E3", fontSize: 16 }}>App Theme</Text>
              </View>
              <View className="flex-row items-center gap-2">
                <Text style={{ color: "#CAC5CD", fontSize: 14 }}>Deep Obsidian</Text>
                <Text style={{ color: "#CBC2E3" }}>{">"}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center justify-between p-4">
              <View className="flex-row items-center gap-3">
                <Text>ℹ️</Text>
                <Text style={{ color: "#CBC2E3", fontSize: 16 }}>About</Text>
              </View>
              <Text style={{ color: "#CBC2E3" }}>{">"}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Log Out */}
        <View className="px-6 mt-8">
          <TouchableOpacity style={glassStyle} className="rounded-xl p-4 items-center justify-center flex-row gap-2">
            <Text>🚪</Text>
            <Text style={{ color: "#FFB4AB", fontSize: 16, fontWeight: "bold" }}>Log Out</Text>
          </TouchableOpacity>
        </View>

        <Text style={{ color: "#938f97", fontSize: 13, textAlign: "center", marginTop: 24, opacity: 0.4 }}>
          Version 2.4.0-discovery
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
