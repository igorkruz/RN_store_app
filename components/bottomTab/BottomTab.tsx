import { FC, useRef, useEffect, useContext } from "react";
import * as Animatable from 'react-native-animatable';
import { StyleSheet ,TouchableOpacity, Text } from "react-native";

// import { ThemeContext } from "../../store/theme-context";
// import { CustomIcon } from "../Icon/CustomIcon";
// import { colors } from "../../config/theme";

export const TabButton: FC<any> = (props) => {
  const {itemIcon, tabTitle, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;

  const viewRef = useRef<any>(null)

  // const {theme} = useContext(ThemeContext);
  // const activeColors = colors[theme.mode];

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({0: {scale: 0.8}, 1: {scale: 1}})
    }else {
      viewRef.current.animate({0: {scale: 1}, 1: {scale: 0.8}})
    }
  }, [focused])

  return (
    <TouchableOpacity 
      onPress={onPress}
      activeOpacity={1}
      style={styles.bottomMenuContainer}
    > 
      <Animatable.View 
        style={[
          styles.buttonContainer, 
          {backgroundColor: focused ? '#ccc' : 'transparent'}
        ]} 
        ref={viewRef}
        duration={1000}
      >
        {/* <CustomIcon iconName={itemIcon} color={activeColors.PrimaryText}/> */}
        <Text style={[styles.buttonText, {color: '#000'}]}>
          {tabTitle}
        </Text>
      </Animatable.View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  bottomMenuContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8, 
    paddingHorizontal: 12,
    borderRadius: 8
  },
  buttonText: {
    fontSize: 12,
    fontWeight: '500'
  }
});
