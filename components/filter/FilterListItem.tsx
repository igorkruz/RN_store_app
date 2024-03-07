import { FC } from "react";
import { Pressable, StyleSheet, Text } from "react-native"

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
        styles.container,
        selectedListItem === listItem && {backgroundColor: '#000'},
      ]}
    >
      <Text style={[
          styles.title,
          selectedListItem === listItem && {color: '#fff'},
        ]}
      >
        {listItem}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {paddingHorizontal: 25, paddingVertical: 10, borderRadius: 16, justifyContent: 'center', alignItems: 'center'},
  title: {color: '#9C9C9C'}
})