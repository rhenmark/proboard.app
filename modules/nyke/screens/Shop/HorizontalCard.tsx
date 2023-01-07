import { FlatList, View, StyleSheet, Image, Text } from "react-native";
import { CardShopHeader } from "./Shop";
import React from 'react'


type CardData = {
    title: string;
    image: {
        url: string
    }
}

type CardProps = {
    data: CardData[],
    header: {
        title: string;
        subTitle?: string
    }
}

export const HorizontalCard = ({ data, header }: CardProps) => {
    return (
        <>
            <CardShopHeader
                title={header.title}
                subTitle={header.subTitle}
            />
            <FlatList
                horizontal
                data={data}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.contentItemContainer}>
                            <Image
                                source={{ uri: item.image.url }}
                                style={styles.sectionImageContent}
                            />
                            <Text style={styles.sectionContentTitle}>{item.title}</Text>
                        </View>
                    );
                }}
                keyExtractor={(item) => item.title}
                contentContainerStyle={styles.contentContainer}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={styles.contentSeparator} />}
            />
        </>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        marginBottom: 48,
        paddingHorizontal: 24
    },
    contentItemContainer: {
        width: 160,
    },
    sectionImageContent: {
        width: 160,
        height: 150,
        marginBottom: 20,
    },
    sectionContentTitle: {
        fontWeight: "500",
        fontSize: 14,
        width: "70%",
    },
    contentSeparator: {
        height: "100%",
        width: 4,
    },
})