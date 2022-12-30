import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native"
import { HeaderLabel } from "../Home";

export const Bag = () => {
    return (
        <View style={styles.container}>
            <HeaderLabel title={"Bag"} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
