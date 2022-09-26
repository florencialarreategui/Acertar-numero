import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../constants7colors";

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: colors.celeste,
        padding: 10,
        borderradius: 10,
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    number:{
        fontSize:25,
        fontWeight:"bold",
    }
})

const NumberContainer = ({ children }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{children}</Text>
        </View>
    )
}

export default NumberContainer;