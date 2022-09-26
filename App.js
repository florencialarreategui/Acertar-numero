import { StyleSheet, Text, View } from 'react-native';
import Header from "./components/header";
import StartGameScreen from "./screens/startGame";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4D06F',
  
  },
});
export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Adivina el numero"></Header>
      <StartGameScreen/>
    </View>
  );
}

