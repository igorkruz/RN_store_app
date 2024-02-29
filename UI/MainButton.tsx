import { View } from "react-native-animatable"
import { CustomIcon } from "./CustomIcon"
import { MenuIcon } from "../assets/icons/buttonIcons"
import { FC } from "react";
import { Pressable, StyleSheet } from "react-native";

interface Props {
  buttonIconName: string;
  buttonSize: number;
  iconWidth: number;
  iconHeight: number;
  onPress?: () => void
}

export const MainButton:FC<Props> = ({ buttonIconName, buttonSize, iconWidth, iconHeight, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.buttonContainer, {width: buttonSize, height: buttonSize}]}>
        <CustomIcon 
          iconName={buttonIconName} 
          color="#000" 
          width={iconWidth} 
          height={iconHeight}
        />
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center', 
    alignItems: 'center',
    borderColor: 'rgba(55, 73, 87, 0.2)', 
    borderWidth: 1, 
    borderRadius: 8
  }
}) 