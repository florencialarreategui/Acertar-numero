import React, {useState} from "react";
import {View, Text, StyleSheet, Button, Dimensions, Alert} from "react-native";
import { colors } from "../constants/colors";
import Card from "../components/card";
import NumberContainer from "../components/numberContainer"
const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})

const generateRandomNumberBetween = (min,max, exclude) =>{ 
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() + (max - min) + min);
    if (randomNumber === exclude){
        return generateRandomNumberBetween(min, max, exclude);
    }
}
const GameScreen = ({selectedNumber}) =>{
    const [currentGuess, setCurrentGuess] = useState(generateRandomNumberBetween(1, 100, selectedNumber));
    return(
        <View style={styles.container}>
            <Card style={styles.card}>
            <Text style={styles.title}>La suposición del oponente</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View style={styles.buttonContainer}>
                <Button tittle= "Menor" onPress={()=> null}/>
                <Button tittle= "Menor" onPress={()=> null}/>
            </View>
            </Card>
        </View>
    )
}
export default GameScreen