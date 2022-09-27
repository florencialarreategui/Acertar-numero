import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { colors } from "../constants/colors"
const styles = StyleSheet.create({
    header:{
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.violeta,
        padingTop: 20,
    },
    title: {
        fontSize: 20,
        color: colors.amarillo,
        fontFamily: "Rubik-Bold",
    }
})
const Header = ({ title }) => {
    return (
        <View style = {styles.header}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}
export default Header;