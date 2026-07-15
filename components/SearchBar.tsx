import { useState } from "react";
import { View, TextInput, Image, TouchableOpacity } from "react-native";

import { icons } from "@/constants/icons";

interface Props {
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onPress?: () => void;
}

const SearchBar = ({ placeholder, value, onChangeText, onPress }: Props) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View
      className={`flex-row items-center bg-dark-200 rounded-full px-5 py-4 border ${
        isFocused ? "border-accent/50" : "border-dark-100"
      }`}
      style={{
        shadowColor: isFocused ? "#AB8BFF" : "#000",
        shadowOffset: { width: 0, height: isFocused ? 0 : 2 },
        shadowOpacity: isFocused ? 0.25 : 0.2,
        shadowRadius: isFocused ? 12 : 4,
        elevation: isFocused ? 6 : 3,
      }}
    >
      <Image
        source={icons.search}
        className="w-5 h-5"
        resizeMode="contain"
        tintColor={isFocused ? "#C4ABFF" : "#AB8BFF"}
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="flex-1 ml-3 text-white text-base"
        placeholderTextColor="#6B7280"
        autoCapitalize="none"
        autoCorrect={false}
      />

      {/* Clear button */}
      {value && value.length > 0 && onChangeText && (
        <TouchableOpacity
          onPress={() => onChangeText("")}
          className="ml-2 w-7 h-7 rounded-full bg-dark-100 items-center justify-center"
          activeOpacity={0.6}
        >
          <Image
            source={icons.search}
            className="w-3 h-3 rotate-45"
            resizeMode="contain"
            tintColor="#9CA4AB"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchBar;
