import { FC } from "react";
import { View, Image, Text, Pressable, StyleSheet } from "react-native";

interface Carousels {
  item: any;
  index: number;
}

export const CarouselItem:FC<Carousels> = ({ item, index }) => {
  return (
    <View key={index} style={styles.cardContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>
         20% Discount
        </Text>

        <Text style={styles.textSubTitle}>
          on your first purchase
        </Text>

        <Pressable style={styles.buttonContainer}>
          <Text style={styles.buttonText}>
            Shop now
          </Text>
        </Pressable>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/carouselImages/carouselImage2.png') }
          style={{width: '100%', height: '100%'}}
          resizeMode="cover"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {borderRadius: 16,position: 'relative', height: 180, backgroundColor: '#ccc' },
  textContainer: {position: 'absolute', top: 50, left: 20, justifyContent: 'center', alignItems: 'center'},
  textTitle: {color: '#202727', fontSize: 24, fontWeight: '700', textAlign:'center'},
  textSubTitle: {textAlign:'center', marginBottom: 20},
  buttonContainer: {backgroundColor: '#000', paddingHorizontal: 24, paddingVertical: 8, borderRadius: 16},
  buttonText: {color: '#fff'},
  imageContainer: {height: 150, width: 220, position: 'absolute', right: -35, top: 0, justifyContent: 'center', alignItems: 'center'},
})