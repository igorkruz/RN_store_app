import { StatusBar } from "expo-status-bar"
import { Text } from "react-native"
import { View } from "react-native-animatable"

export const ProfileScreen = () => {
  return (
    <>
      <StatusBar style='dark'/>

      <View>
        <Text>
          PROFILE
        </Text>
      </View> 
    </>
  )
}