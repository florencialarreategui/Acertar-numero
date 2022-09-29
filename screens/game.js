import React, {useState, useRef, useEffect} from "react";
import {View, Text, StyleSheet, Button, Dimensions, Alert} from "react-native";
import { colors } from "../constants/colors";
import Card from "../components/card";
import NumberContainer from "../components/numberContainer"
const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    card: {
        marginTop: 20,
        marginHorizontal: 20,
        width: width * 0.8,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        width: '75%',
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    }
});
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
    const [rounds, setRounds] = useState(0);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const onHandleNextGuess = (direction) => {
        if(
            (direction === 'lower' && currentGuess < selectedNumber) ||
            (direction === 'greater' && currentGuess > selectedNumber)
         ) {
                Alert.alert('No mientas', 'tu sabes que esta mal...', [{text: 'Sorry!', style: 'cancel'}]);
                return
        }
        if(direction === 'lower'){
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }

        const nextNumber = generateRandomNumberBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRounds(currentRounds => currentRounds + 1);
    }; 
    
    return(
        <View style={styles.container}>
            <Card style={styles.card}>
            <Text style={styles.title}>La suposición del oponente</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View style={styles.buttonContainer}>
                <Button
                 tittle= "Menor" 
                 onPress={()=>  onHandleNextGuess('lower')}
                 color= {colors.violeta}
                 />
                <Button
                 tittle= "Mayor" 
                 onPress={()=> onHandleNextGuess('greater')}
                 color= {colors.violeta}
                 />
            </View>
            </Card>
        </View>
    )
}
export default GameScreen