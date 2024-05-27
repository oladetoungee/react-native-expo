import { TouchableOpacity, Text } from "react-native";
import React from "react";
import { View } from "react-native";
import exp from "constants";

interface CustomButtonProps {
    title: string;
    onPress: () => void;
    containerStyles?: any;
    textStyles?: any;
    isLoading?: boolean;
    }

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, containerStyles, textStyles, isLoading }) => {
  return (
    <TouchableOpacity 
    activeOpacity={0.8}
disabled={isLoading}
    className={`my-2 bg-rose-300 rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`} onPress={onPress}>
     
        <Text className="text-black font-psemibold text-lg">{title}</Text>
 
    </TouchableOpacity>
  );
};
export default CustomButton;