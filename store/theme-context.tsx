import { FC, PropsWithChildren, createContext, useEffect, useState } from "react";
import { Appearance } from "react-native";
import { storeData, getData } from "../config/asyncStorage";
import * as SplashScreen from 'expo-splash-screen'

interface Theme {
  mode: string;
  system: boolean; 
}

// Use the defined type in ThemeContextType
interface ThemeContextType {
  theme: Theme;
  updateTheme: (newTheme: Theme) => void;
}


export const ThemeContext = createContext<ThemeContextType>({
  theme: {mode: 'light', system: false},
  updateTheme: (newTheme) => { },
})

//keep splash skreen open 
SplashScreen.preventAutoHideAsync()

export const ThemeContextPropvider:FC<PropsWithChildren> = ({ children }: any) => {
  const [theme, setTheme] = useState({mode: 'light' ,system: false})

  const updateTheme = (newTheme: any) => {
    let mode;

    if (!newTheme) {
      mode = theme.mode === 'dark' ? 'light' : 'dark'
      newTheme = {mode};
    }

    if (newTheme.system) {
      const colorScheme = Appearance.getColorScheme()
      console.log(colorScheme)

      mode = colorScheme === 'dark' ? 'dark' : 'light'
      newTheme = {...newTheme, mode}
    }

    setTheme(newTheme)
    storeData('appTheme', newTheme)
  }

  //monitoring system for theme change
  if (theme.system) {
    Appearance.addChangeListener(({colorScheme}) => {
      updateTheme({system: true, mode: colorScheme})
    })
  }

  const fetchedStoredTheme = async () => {
    try {
      const themeData = await getData('appTheme')

      if (themeData) {
        updateTheme(themeData)
      }
    } catch (error) {
      
    } finally {
      await setTimeout(() => SplashScreen.hideAsync(), 100)
    }
  }

  useEffect(() => {
    fetchedStoredTheme()
  }, [])


  const contextValue = {
    theme,
    updateTheme,
  }
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}