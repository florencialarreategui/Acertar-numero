import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { colors } from "../constants/colors";

const styles = StyleSheet.create({
    input: {
        borderBottonColor: colors.violeta,
        borderBotomWidth: 1,
        marginVertical: 20,
    }
})

const Input = ({ style, ...props }) => {
    return (
        <TextInput {...props} style={{ ...style.input, ...style }}></TextInput>
    )
}
export default Input;