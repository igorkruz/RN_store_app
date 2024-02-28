import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavContainer } from './navigation/NavContainer';
import { ThemeContextPropvider } from './store/theme-context';


export default function App() {
  return (
    <ThemeContextPropvider>
      <NavContainer />
    </ThemeContextPropvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
