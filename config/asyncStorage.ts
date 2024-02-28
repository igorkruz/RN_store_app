import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value)

    await AsyncStorage.setItem(key, jsonValue)
  } catch (error: any) {
    console.log(error.message)
  }
}

export const getData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key)

    return jsonValue !== null ? JSON.parse(jsonValue) : null
  } catch (error: any) {
    console.log(error.message)
  }
}