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
      className="flex-row items-center rounded-xl px-4 py-3.5"
      style={{
        backgroundColor: 'rgba(15, 13, 35, 0.7)',
        borderWidth: 1,
        borderColor: isFocused ? '#CBC2E3' : 'rgba(34, 31, 61, 0.5)',
        shadowColor: isFocused ? "#CBC2E3" : "#000",
        shadowOffset: { width: 0, height: isFocused ? 0 : 2 },
        shadowOpacity: isFocused ? 0.2 : 0.1,
        shadowRadius: isFocused ? 8 : 4,
        elevation: isFocused ? 6 : 3,
      }}
    >
      <Image
        source={icons.search}
        className="w-5 h-5"
        resizeMode="contain"
        tintColor={isFocused ? "#CBC2E3" : "#938f97"}
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="flex-1 ml-3 text-base"
        style={{ color: '#E6E1E4' }}
        placeholderTextColor="rgba(202, 197, 205, 0.5)"
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
