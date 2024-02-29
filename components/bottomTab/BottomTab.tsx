import { FC, useRef, useEffect, useContext } from "react";
import * as Animatable from 'react-native-animatable';
import { StyleSheet ,TouchableOpacity, View } from "react-native";
import { colors } from "../../config/theme_config";
import { ThemeContext } from "../../store/theme-context";
import { CustomIcon } from "../../UI/CustomIcon";

export const TabButton: FC<any> = (props) => {
  const {itemIcon, tabTitle, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;

  const {theme} = useContext(ThemeContext);
  const activeColors = colors[theme.mode]

  const viewRef = useRef<any>(null)

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
        style={[ styles.buttonContainer ]} 
        ref={viewRef}
        duration={1000}
      >
        <CustomIcon iconName={itemIcon} color={ focused ? '#000' : '#838383'}  width={24} height={24}/>

        <Animatable.View ref={viewRef} style={[focused && styles.buttonContainerAfter, !focused && styles.buttonContainerAfterNotFocused]}>
        </Animatable.View>
      </Animatable.View>

      <View style={[focused && styles.buttonContainerAfterCircle, !focused && styles.buttonContainerAfterCircleNotFocused]}>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  bottomMenuContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  buttonContainer: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15
  },
  buttonContainerAfter: {
    position: 'absolute',
    top: -32,
    width: '100%',
    height: 50,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 30,
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
    
    backgroundColor: '#000'
  },
  buttonContainerAfterNotFocused: {
    opacity: 0
  },
  buttonContainerAfterCircle: {
    position: 'absolute',
    top: 8,
    width: 5,
    height: 5,
    backgroundColor: '#fff',
    borderRadius: 50
  },
  buttonContainerAfterCircleNotFocused: {
    opacity: 0
  },
  buttonText: {
    fontSize: 12,
    fontWeight: '500'
  }
});
