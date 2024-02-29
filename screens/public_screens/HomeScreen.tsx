import { View, Text, Image } from "react-native"
import { StatusBar } from "expo-status-bar"
import { MainButton } from "../../UI/MainButton"
import { MenuIcon, ShoopingBagIcon } from "../../assets/icons/buttonIcons"
export const HomeScreen = () => {
  return (
    <>
      <StatusBar style='dark'/>

      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={{marginTop: 24, padding: 20}}>
          <View style={{marginTop: 24, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
              <MainButton 
                buttonIconName={MenuIcon}
                iconWidth={20}
                iconHeight={20}
                buttonSize={36}
              />

              <View>
                <Image 
                  source={require('../../assets/LOGO.png')}
                />
              </View>
            </View>

            <MainButton 
              buttonIconName={ShoopingBagIcon}
              iconWidth={20}
              iconHeight={20}
              buttonSize={36}
            />
          </View>
        </View>
      </View>
    </>
  )
} 