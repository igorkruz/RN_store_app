import { View } from "react-native-animatable"
import { CustomIcon } from "./CustomIcon"
import { MenuIcon } from "../assets/icons/buttonIcons"
import { FC } from "react";

interface Props {
  buttonIconName: string;
}

export const MainButton:FC<Props> = ({ buttonIconName }) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center',width: 36, height: 36, borderColor: 'rgba(55, 73, 87, 0.2)', borderWidth: 1, borderRadius: 8}}>
      <CustomIcon iconName={buttonIconName} color="#000" width={20} height={20}/>
    </View>
  )
}