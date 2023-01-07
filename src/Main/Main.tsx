import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native"
import { Card } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

export const Main = () => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'NykeApp' }],
        });
    }

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={handlePress}>
                <Card containerStyle={styles.cardContainer}>
                    <Text style={styles.textWhite}>Nyke</Text>
                </Card>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10
    },
    cardContainer: {
        minHeight: 120,
        backgroundColor: "#000",
        borderWidth: 0,
        borderRadius: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10
    },
    textWhite: {
        color: "#fff",
        fontSize: 32
    }
});
