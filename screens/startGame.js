import React, { useState} from "react";
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard } from "react-native";
import Input from "../components/input";
import  Card  from "../components/card"
import { colors } from "../constants/colors";
const styles = StyleSheet.create({
    container:{
        flex:1,
        aligmItems: "center",
        marginVertical: 15,
    },
    title:{
       fontSize:20,
        color: "#FFF8F0",
        textAling:"center",
        paddingVertical: 20,
    },
    label: {
        fontSize:14,
        color: "#392F5A",
        textAling:"center",
        paddingVertical: 5,
    },
    inputContainer: {
        justifyContent:"center",
        alignItems:"center",
        marginHorizontal: 5,
        padding:5,
    },
    input:{
        width:"100%",
        borderBottomColor: "#392F5A",
        borderBottomWidth:1,
        minWidth: 90,
        fontSize: 25,
        paddingVertical: 10,
        textAlign: "center",
    },
    buttonContainer:{
        with:"75%",
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent:"space-around",
        // marginTop: 20,
        // marginBottom:20,
        margin:30,
        padding:10
    },
    summaryContainer: {
        width: '80%',
        height: 180,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        marginTop: 20,
    },
    summaryText: {
        fontSize: 18,
        fontFamily: 'Rubik-Regular',
    }


})

const StartGameScreen = () =>{
    const [number, setNumber] = useState("");
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState(0)
    const onHandleChange = (text) => {
        setNumber(text.replace(/[^0-9]/g,""));
    }
    const onReset = () =>{
       setNumber("");
       setSelectedNumber(0);
       setConfirmed(false);
       Keyboard.dismiss(); 
    }
    const onConfirm = () =>{
        const chosenNumber = parseInt (number, 10);
        if(isNaN(chosenNumber)|| chosenNumber <=  0 || chosenNumber > 99)return;
        setConfirmed(true);
        setSelectedNumber(chosenNumber)
        setNumber("");
    }
    const confirmedOutput = () => confirmed && (
        <Card style= {styles.summaryContainer}>
            <Text style={styles.summaryText}> Tu elección</Text>
            <Text style={styles.summaryText}> {selectedNumber}</Text>
            <Button
            title="Iniciar Juego"
            onPress={() => null}
            color= {colors.violeta} 
            />
        </Card>
    )
    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={StyleSheet.container}>
            <Text style={styles.title}>Comenzar juego</Text>
            <View style={styles.inputContainer}>
               <Card style={styles.inputContainer}>
                <Text style={styles.label}>Elija un número</Text>
                <Input style={styles.input}
                 keyboardType="numeric" 
                 maxLength={2}
                 blurOnSubmit
                 autoCapitalize="none"
                 autoCorrect={false}
                 onChangeText={(text) => onHandleChange(text)} 
                 value={number}
                 />
                <View style={styles.buttonContainer}>
                    <Button
                    title="Limpiar"
                    onPress={(onReset)}
                    color= {colors.violeta}
                    />
                     <Button
                    title="Confirmar"
                    onPress={( (onConfirm) )}
                    color= {colors.violeta}
                    />
                </View>
                </Card>
               {confirmedOutput()}
         
            </View>
        </View>
       </TouchableWithoutFeedback>
    )
}
export default StartGameScreen;