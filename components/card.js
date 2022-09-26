import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../constants/colors";
const styles = StyleSheet.create({
    container:{
        shadowColor: "#9DD9D2",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
        elevation: 19,
        backgroundColor:colors.celeste,
        borderRadius: 5,
    }
})
const Card = ({children, style}) =>{
    return (
        <View style= {{...styles.container, ...style}}>
            {children}
        </View>
    )
}
export default Card;