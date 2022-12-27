import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native"

export const Shop = () => {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text>Shop Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});