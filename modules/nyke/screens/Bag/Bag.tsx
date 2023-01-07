import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native"
import { xStyle } from "common/styles/styles";
import { colors } from "common/theme/color";
import { HeaderLabel } from "../Home";
import { Picker } from '@react-native-picker/picker';
import { useState } from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Bag = () => {
    const [selectedLanguage, setSelectedLanguage] = useState("java");

    return (
        <>
            <FlatList
                data={[1, 2, 3, 4]}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.productContainer} key={index}>
                            <View style={styles.productContent}>
                                <Image source={{ uri: "https://source.unsplash.com/random/?nike,shirt" }} style={styles.productImage} />
                                <View style={styles.productDescContainer}>
                                    <Text style={[xStyle.textbold, xStyle.text16]}>Jordan 23 Engineered</Text>
                                    <Text style={[xStyle.text16]}>Men's Shirt</Text>
                                    <Text style={[xStyle.text16]}>Black/Black</Text>
                                    <Text style={[xStyle.text16]}>Size M</Text>
                                </View>
                            </View>
                            <View style={styles.productInfoContainer}>
                                <View>
                                    <TouchableOpacity style={styles.productQtyContainer}>
                                        <Text style={[xStyle.text16, xStyle.text500, styles.quantity]}>Qty 1</Text>
                                        <MaterialCommunityIcons name="chevron-down" size={32} />
                                    </TouchableOpacity>

                                </View>
                                <Text style={[xStyle.text500, xStyle.text16]}>$225.00</Text>
                            </View>
                        </View>
                    )
                }}
                ListHeaderComponent={() => <HeaderLabel title={"Bag"} withPadding />}
                contentContainerStyle={styles.container}
                ItemSeparatorComponent={() => <ItemSeparator />}
            />
            <View style={[xStyle.posAbsolute, styles.checkoutContainer]}>
                <TouchableOpacity style={styles.checkoutBtn}>
                    <Text style={[styles.checkoutBtnLabel, xStyle.text16, xStyle.text500]}>Checkout</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const ItemSeparator = () => (
    <View style={styles.itemSeparator} />
)

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        paddingBottom: 100
    },
    productContainer: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        paddingVertical: 8,
        paddingTop: 20
    },
    productContent: {
        flexDirection: "row"
    },
    productImage: {
        height: 150,
        flex: 1,
        marginRight: 12
    },
    productDescContainer: {
        flex: 1
    },
    checkoutContainer: {
        bottom: 0,
        height: 100,
        backgroundColor: colors.white,
        width: "100%",
        padding: 20,
        borderTopColor: colors.blackSecondary,
        borderTopWidth: 1
    },
    checkoutBtn: {
        backgroundColor: colors.black,
        height: "100%",
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    checkoutBtnLabel: {
        color: colors.white,
    },
    productInfoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 12
    },
    productQtyContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    itemSeparator: {
        height: 1,
        width: "90%",
        backgroundColor: colors.blackSecondary,
        marginVertical: 4,
        opacity: .4,
        alignSelf: "center",
    },
    quantity: {
        paddingRight: 16
    }
});
