import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Sliders from './component/Sliders'
import Navigation from './Navigation'
import "react-native-gesture-handler"

export default function App() {
  return (
    <View style={styles.container}>
      <Navigation></Navigation>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the View takes up the full screen
  },
});
