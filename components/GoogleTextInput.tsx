import { GoogleInputProps } from "@/types/type";
import { View, Text } from "react-native";

const GoogleTextInput = ({
  icon,
  initialLocation,
  containerStyle,
  textInputBgColor,
  handlePress,
}: GoogleInputProps) => {
  return (
    <View
      className={`relative z-50 mb-5 flex-row items-center justify-center rounded-xl ${containerStyle}`}
    >
      <Text>Search</Text>
    </View>
  );
};

export default GoogleTextInput;
