import { View, Text } from "react-native"
import { StatusBar } from "expo-status-bar"
export const HomeScreen = () => {
  return (
    <>
      <StatusBar style='dark'/>

      <View style={{flex: 1}}>
        <Text>
          Home Screen
        </Text>
      </View>
    </>
  )
} 