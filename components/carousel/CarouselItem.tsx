import { FC } from "react";
import { View, Image } from "react-native";

interface Carousels {
  item: any;
  index: number;
}

export const CarouselItem:FC<Carousels> = ({ item, index }) => {
  return (
    <View key={index} style={{borderColor: 'red', borderWidth :1}}>
      <Image
        source={{ uri: item.imgUrl }}
        style={{width: '100%', height: 150}}
      />
    </View>
  )
}