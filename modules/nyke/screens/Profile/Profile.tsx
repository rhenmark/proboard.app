import { Button } from "@rneui/base";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native"
import { useNavigation } from '@react-navigation/native';


export const Profile = () => {
    const navigation = useNavigation();

    const handleLogout = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Proboard' }],
        });
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text>Profile Home</Text>
            <Button onPress={handleLogout}>
                <Text>Logout</Text>
            </Button>
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
