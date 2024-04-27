import { TouchableOpacity, Text } from "react-native";

interface CustomButtonProps {
    children: React.ReactNode;
    onPress: () => void;
    buttonStyle: string;
    isLoading?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ 
    children, onPress, buttonStyle, isLoading
}) => {
  return (
    <TouchableOpacity 
        className={
            `bg-secondary rounded-xl min-h-[62px] justify-center items-center ${buttonStyle}
            ${isLoading ? 'opacity-50' : ''}`
        }
        disabled={isLoading}
        onPress={onPress}
        activeOpacity={0.7}
    >
        <Text className="text-primary font-psemibold text-lg">
            {children}
        </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;