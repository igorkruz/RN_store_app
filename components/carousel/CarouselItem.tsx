import { FC } from "react";
import { View, Image, Text, Pressable } from "react-native";

interface Carousels {
  item: any;
  index: number;
}

export const CarouselItem:FC<Carousels> = ({ item, index }) => {
  return (
    <View key={index} style={{borderRadius: 16,position: 'relative', height: 180, backgroundColor: '#ccc' }}>
      <View style={{position: 'absolute', top: 50, left: 20, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: '#202727', fontSize: 24, fontWeight: '700', textAlign:'center'}}>
         20% Discount
        </Text>

        <Text style={{textAlign:'center', marginBottom: 20}}>
          on your first purchase
        </Text>

        <Pressable style={{backgroundColor: '#000', paddingHorizontal: 24, paddingVertical: 8, borderRadius: 16}}>
          <Text style={{color: '#fff'}}>
            Shop now
          </Text>
        </Pressable>
      </View>
      <View style={{height: 150, width: 220, position: 'absolute', right: -20, top: 0, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../../assets/carouselImages/carouselImage2.png') }
          style={{width: '100%', height: '100%'}}
          resizeMode="cover"
        />
      </View>
    </View>
  )
}