import { FC } from 'react';
import { SvgXml } from 'react-native-svg';

interface Props {
  iconName: string;
  color: string;
  width?: number;
  height?: number;
}

export const CustomIcon:FC<Props> = ({iconName, color, width, height}) => {
  return (
    <SvgXml xml={iconName} color={color} width={width} height={height}/>
  )
}