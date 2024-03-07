import { View } from "react-native"
import { HomePageShoesCard } from "../cards/HomePageShoesCard"

const list = ['1', '2', '3', '4', '5']

export const HomePageProductList = () => {
  return (
    <View style={{flexDirection: 'row', flexWrap: 'wrap',  gap: 16}}>
      {
        list.map(item => (
          <HomePageShoesCard  key={item}/>
        ))
      }            
    </View> 
  )
}