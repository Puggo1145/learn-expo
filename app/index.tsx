import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View className="w-full h-full flex items-center justify-center">
      <StatusBar style="auto" />
      <Text className='text-3xl font-pblack'>Aora</Text>
      <Link href="/home" style={{ color: "blue" }}>
        Go to Home
      </Link>
    </View>
  );
}