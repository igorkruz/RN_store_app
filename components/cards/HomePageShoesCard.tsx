import { View, Text, Image } from "react-native"
import { MainButton } from "../../UI/MainButton"
import { GoForwardIcon } from "../../assets/icons/buttonIcons"

export const HomePageShoesCard = () => {
  return (
    <View style={{backgroundColor: '#ccc', flex: 1, minWidth: 160, maxWidth: 180, padding: 16, borderRadius: 16}}>
      <View style={{height: 180, justifyContent: 'center', alignItems: 'center'}}>
        <Image 
          source={require('../../assets/carouselImages/carouselImage2.png')}
          style={{width: '100%', height: '100%'}}
          resizeMode="contain"
        />
      </View>

      <View>
        <Text style={{fontWeight: '700', fontSize: 16}}>
          Air Max 97
        </Text>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <Text style={{fontWeight: '400', fontSize: 14}}>
          $20.99
        </Text>

        <MainButton 
          buttonIconName={GoForwardIcon} 
          buttonSize={24}
          iconWidth={24}
          iconHeight={24}
          onPress={() => console.log('+')}
        />
      </View>
    </View>
  )
}