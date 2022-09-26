import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { colors } from "../constants/colors"
const styles = StyleSheet.create({
    header:{
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.amarillo,
        padingTop: 20,
    },
    title: {
        fontSize: 20,
        color: "#FF8811",
        fontWeight: "bold"
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