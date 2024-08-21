import { icons } from "@/constants";
import { InputFieldProps } from "@/types/type";
import { useState } from "react";
import {
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Text,
  Image,
  TextInput,
  Platform,
  Keyboard,
  TouchableOpacity,
} from "react-native";

const InputField = ({
  label,
  labelStyle,
  icon,
  secureTextEntry = false,
  containerStyle,
  inputStyle,
  iconStyle,
  className,
  ...props
}: InputFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="my-2 w-full">
          <Text className={`mb-3 font-JakartaSemiBold text-lg ${labelStyle}`}>
            {label}
          </Text>
          <View
            className={`relative flex flex-row items-center justify-start rounded-full border border-neutral-100 bg-neutral-100 focus:border-primary-500 ${containerStyle}`}
          >
            {icon && (
              <Image source={icon} className={`ml-4 h-6 w-6 ${iconStyle}`} />
            )}
            <TextInput
              className={`rounden-full flex-1 p-4 text-left font-JakartaSemiBold text-[15px] ${inputStyle}`}
              secureTextEntry={label === "Password" && !showPassword}
              {...props}
            />
            {label === "Password" && (
              <TouchableOpacity
                className="pr-4"
                onPress={() => setShowPassword(!showPassword)}
              >
                <Image
                  source={!showPassword ? icons.eye : icons.eyeHide}
                  className="h-6 w-6"
                  resizeMode="contain"
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default InputField;
