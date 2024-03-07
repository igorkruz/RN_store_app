import { FC } from "react";
import { Pressable, Text } from "react-native"

interface Props {
  onPress: () => void;
  selectedListItem: string;
  listItem: string;
}
export const FilterListItem:FC<Props> = ({ onPress, selectedListItem, listItem }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        {paddingHorizontal: 25, paddingVertical: 10, borderRadius: 16, justifyContent: 'center', alignItems: 'center'},
        selectedListItem === listItem && {backgroundColor: '#000'},
      ]}
    >
      <Text style={[
          {color: '#9C9C9C'},
          selectedListItem === listItem && {color: '#fff'},
        ]}
      >
        {listItem}
      </Text>
    </Pressable>
  )
}