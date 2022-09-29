import React, { useState} from "react";
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Header from "./components/header";
import StartGameScreen from "./screens/startGame";
import { useFonts } from "expo-font";
import { colors } from "./constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4D06F',
  },

});
export default function App() {
  const [userNumber, setUserNumber] = useState(0);
  const [rounds, setRounds] = useState(0);
    const [loaded] = useFonts({
      'Rubik-Regular': require('./assets/fonts/Rubik-Regular.ttf'),
      'Rubik-Bold': require('./assets/fonts/Rubik-Bold.ttf'),
      'Rubik-Light': require('./assets/fonts/Rubik-Light.ttf'),
      'Rubik-Italic': require('./assets/fonts/Rubik-Italic.ttf'),
      'Rubik-Black': require('./assets/fonts/Rubik-Black.ttf'),
    });
    
 
  const title = !userNumber ? "adivina un numero" : "Comienza el juego";
  const  onStartGame = (selectedNumber) =>{
    setUserNumber(selectedNumber)
  }
  if(!loaded) {
    return(
      <View style ={styles.conatinerLoader}>
        <ActivityIndicator size="large" color={colors.primary}/>
      </View>
    )
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

