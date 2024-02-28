import { StatusBar } from "expo-status-bar"
import { Text } from "react-native"
import { View } from "react-native-animatable"

export const NotificationsScreen = () => {
  return (
    <>
      <StatusBar style='dark'/>

      <View>
        <Text>
          Notifications
        </Text>
      </View> 
    </>
  )
}