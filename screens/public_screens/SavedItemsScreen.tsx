import { StatusBar } from "expo-status-bar"
import { Text } from "react-native"
import { View } from "react-native-animatable"

export const SavedItemsScreen = () => {
  return (
    <>
      <StatusBar style='dark'/>

      <View>
        <Text>
          Saved Item
        </Text>
      </View> 
    </>
  )
}