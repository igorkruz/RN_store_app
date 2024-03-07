import { useState } from "react"
import { FlatList, Pressable, ScrollView, Text } from "react-native"
import { View } from "react-native-animatable"
import { FilterListItem } from "./FilterListItem"

const FilterListItems = ['All', 'Running', 'Sneakers', 'Formal', 'Casual']

export const FilterList = () => {
  const [selectedListItem, setSelectedListItem] = useState('Al')

  return (
     <FlatList
      data={FilterListItems}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{gap: 8}}
      renderItem={({item}) =>  (
        <FilterListItem 
          listItem={item}
          selectedListItem={selectedListItem}
          onPress={() => setSelectedListItem(item)}
        />
      )}
      keyExtractor={(item)=> item}
    />
  )
}