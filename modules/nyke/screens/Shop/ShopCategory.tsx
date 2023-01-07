import { colors } from "common/theme/color";
import { randomImage } from "common/utils/image";
import { FlatList, View, Text, StyleSheet, ImageBackground, Image } from "react-native";

const category = [
    {
        name: "New & Featured",
        imageUrl: randomImage("nike,face"),
    },
    {
        name: "App Exclusive",
        imageUrl: randomImage("nike jordan 1"),
    },
    {
        name: "Shoes",
        imageUrl: randomImage("nike shoes"),
    },
    {
        name: "Clothing",
        imageUrl: randomImage("nike,shirts"),
    },
    {
        name: "Accessories",
        imageUrl: randomImage("nike,bag,accessories"),
    },
    {
        name: "Sale",
        imageUrl: randomImage("sale,nike,shoes"),
    },
];

export const ShopCategory = () => {
    return (
        <View style={styles.shopContainer}>
            <FlatList
                data={category}
                renderItem={({ item, index }) => {
                    if (index === 0) {
                        return (
                            <ImageBackground source={{
                                uri: item.imageUrl
                            }}
                                resizeMode="cover"
                                style={styles.listImgContainer}
                            >
                                <View style={[styles.listContainer, styles.listBg]}>
                                    <Text style={styles.listTitle}>{item.name}</Text>
                                </View>
                            </ImageBackground>
                        )
                    }
                    return (
                        <View style={[styles.listContainer, styles.listColumn]}>
                            <Text style={styles.listTitle}>{item.name}</Text>
                            <Image source={{ uri: item.imageUrl }} style={styles.listImage} />
                        </View>
                    );
                }}
                listKey={"shopCategory"}
                keyExtractor={(_, index) => `${index}-shop`}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    shopContainer: {
        marginBottom: 24
    },
    listContainer: {
        width: "100%",
        height: 100,
        backgroundColor: colors.blackSecondary,
        marginBottom: 4,
        justifyContent: "center",
        paddingHorizontal: 24
    },
    listImgContainer: {
        marginBottom: 4,
    },
    listBg: {
        backgroundColor: "transparent"
    },
    listTitle: {
        color: colors.white,
        fontWeight: "600",
        fontSize: 16,
    },
    listColumn: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 24
    },
    listImage: {
        height: 80,
        width: 80
    }
})