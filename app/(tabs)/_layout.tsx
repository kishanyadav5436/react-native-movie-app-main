import { Tabs } from "expo-router";
import { Image, Text, View, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";

import { icons } from "@/constants/icons";
import { images } from "@/constants/images";

function TabIcon({ focused, icon, title }: any) {
  if (focused) {
    return (
      <View className="flex-row items-center bg-[rgba(76,72,71,0.3)] rounded-full px-4 py-1 mt-2">
        <Image source={icon} tintColor="#CBC2E3" className="w-5 h-5" />
        <Text className="text-[#CBC2E3] text-xs font-bold uppercase ml-2">
          {title}
        </Text>
      </View>
    );
  }

  return (
    <View className="items-center justify-center mt-2">
      <Image source={icon} tintColor="#CAC5CD" className="w-5 h-5" />
      <Text className="text-[#CAC5CD] text-[10px] mt-1">{title}</Text>
    </View>
  );
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false, // Set to false since TabIcon renders labels
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarBackground: () => (
          <BlurView
            intensity={40}
            tint="dark"
            style={[
              StyleSheet.absoluteFill,
              {
                backgroundColor: "rgba(3, 0, 20, 0.8)",
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                borderTopWidth: 1,
                borderTopColor: "rgba(72, 69, 77, 0.2)",
              },
            ]}
          />
        ),
        tabBarStyle: {
          backgroundColor: "transparent",
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          height: 70,
          position: "absolute",
          marginBottom: 0,
          borderTopWidth: 0,
          elevation: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} title="Search" />
          ),
        }}
      />
      <Tabs.Screen
        name="save"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.save} title="Saved" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.person} title="Profile" />
          ),
        }}
      />
    </Tabs>
  );
}
