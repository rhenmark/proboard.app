import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native"

export const Main = () => {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text>Home Test</Text>
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
