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
  const [userNumber, setUserNumber] = useState(0);
  const title = !userNumber ? "adivina un numero" : "Comienza el juego"
  const  onStartGame = (selectedNumber) =>{
    setUserNumber(selectedNumber)
  }
  let content = <StartGameScreen onStartGame={onStartGame} />
  if(userNumber) {
    content = <GameScreen selectedNumber= {userNumber}/>
  }
  return (
    <View style={styles.container}>
      <Header title="Adivina el numero"></Header>
      {content}
    </View>
  );
}

