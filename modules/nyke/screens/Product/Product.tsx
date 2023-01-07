import { colors } from "common/theme/color";
import { randomImage } from "common/utils/image";
import { View, Text, StyleSheet, FlatList, ImageBackground, TouchableOpacity, SectionList } from "react-native";
import { products, category } from "./mock_product.json";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TabSection } from "../Shop";


export const NykeProduct = () => {
    return (
        <>
            <View style={styles.header}>
                <TabSection tabs={category} withItemPadding />
            </View>
            <FlatList
                numColumns={2}
                data={products}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.item}>
                            <ImageBackground style={styles.itemImg} source={{ uri: randomImage(item.imageKeywords) }}>
                                <FavouritesBtn />
                            </ImageBackground>
                            <View style={styles.itemInfo}>
                                <Text style={styles.title}>{item.name}</Text>
                                <Text style={styles.description} numberOfLines={2}>{item.description}</Text>
                                <Text style={styles.price}>${item.price}</Text>
                            </View>
                        </View>

                    );
                }}
                contentContainerStyle={styles.container}
                columnWrapperStyle={styles.column}
            />
        </>
    );
};

const FavouritesBtn = () => {
    return (
        <TouchableOpacity style={styles.favourite}>
            <MaterialCommunityIcons name="heart-outline" size={16} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        minHeight: "100%"
    },
    header: {
        paddingTop: 20,
        backgroundColor: colors.white
    },
    column: {
        justifyContent: "space-between"
    },
    item: {
        width: "49.4%",
        marginBottom: 12,
        minHeight: 120
    },
    itemImg: {
        backgroundColor: colors.grey,
        height: 200,
        marginBottom: 10,
        padding: 10,
        alignItems: "flex-end"
    },
    itemInfo: {
        padding: 12
    },
    title: {
        fontSize: 14,
        fontWeight: "500",
        marginBottom: 4
    },
    description: {
        color: colors.blackSecondary
    },
    price: {
        fontSize: 16,
        fontWeight: "500",
        marginTop: 8,
    },
    favourite: {
        backgroundColor: colors.white,
        height: 32,
        width: 32,
        borderRadius: 32,
        alignItems: "center",
        justifyContent: "center"
    }

});
