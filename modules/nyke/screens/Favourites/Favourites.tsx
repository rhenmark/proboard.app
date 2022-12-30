import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { HeaderLabel } from "../Home";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../../../../common/theme/color";


export const Favourites = () => {
    return (
        <View style={styles.container}>
            <HeaderLabel title={"Favourites"} withPadding />
            <EmptyFavourite />
        </View>
    )
}

const EmptyFavourite = () => {
    return (
        <View style={styles.favouriteContainer}>
            <View style={styles.favouriteContent}>
                <View style={styles.favouriteHeart}>
                    <MaterialCommunityIcons name="heart-outline" size={24} />
                </View>
                <Text style={styles.favouriteDescription}>
                    Items added to your Favourites will be saved here.
                </Text>
            </View>
            <TouchableOpacity style={styles.btnShop}>
                <Text style={styles.btnShopLabel}>Shop Now</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    btnShop: {
        paddingVertical: 16,
        backgroundColor: colors.black,
        borderRadius: 40,
        width: "80%",
        alignSelf: "center",
    },
    btnShopLabel: {
        color: colors.white,
        textAlign: "center",
        fontSize: 20,
    },
    favouriteContainer: {
        flex: 1,
        alignItems: "center",
        flexGrow: 1,
        paddingBottom: 20
    },
    favouriteContent: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%"
    },
    favouriteHeart: {
        width: 60,
        height: 60,
        borderRadius: 60,
        borderWidth: 1,
        borderColor: colors.black,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 24
    },
    favouriteDescription: {
        width: "60%",
        textAlign: "center",
        fontSize: 16
    }
});
