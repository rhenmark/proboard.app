import { Tab, TabView } from "@rneui/base";
import { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    FlatList,
    ImageBackground,
    Image
} from "react-native";
import { colors } from "../../../../common/theme/color";
import { HeaderLabel } from "../Home";

export const Shop = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.headerContainer}>
                <HeaderLabel title="Shop" withPadding />
            </View>
            <ShopContent />
        </ScrollView>
    );
};

const ShopContent = () => {
    const shopCategory: Array<string> = ["Men", "Women", "Kids", "Jordan"];
    const [index, setIndex] = useState(0);

    return (
        <>
            <Tab
                value={index}
                onChange={(e) => setIndex(e)}
                dense
                containerStyle={styles.tabContainer}
                indicatorStyle={styles.tabIndicator}
                scrollable={false}
            >
                {shopCategory.map((item: string) => (
                    <Tab.Item key={item} titleStyle={styles.tabItemTitle}>
                        {item}
                    </Tab.Item>
                ))}
            </Tab>
            <TabView value={index} animationType="timing" disableSwipe>
                {shopCategory.map((item: string) => (
                    <TabView.Item key={item}>
                        <ContentsSection contentCategoryName={item} />
                    </TabView.Item>
                ))}
            </TabView>
        </>
    );
};

type ContentSectionProps = {
    contentCategoryName: string;
};

const ContentsSection = ({ contentCategoryName }: ContentSectionProps) => {
    const image =
        "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1824,c_limit/c8400ef8-76bd-4c9b-9f66-b1af3ae7ba78/nike-just-do-it.png";
    const mockShopSection = [
        {
            title: "Extra 30% off sale items",
            image: {
                url: "",
            },
        },
        {
            title: "Sneakers of the Week",
            image: {
                url: "",
            },
        },
        {
            title: "Coming Soon: Dunk Jumbo",
            image: {
                url: "",
            },
        },
        {
            title: "New Arrivals",
            image: {
                url: "",
            },
        },
        {
            title: "GT Cut - Level Up",
            image: {
                url: "",
            },
        },
    ];

    return (
        <View style={styles.content}>
            <CardShopHeader title={"This Weeks's Highlights"} subTitle="Free shipping on all order" />
            <FlatList
                horizontal
                data={mockShopSection}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.contentItemContainer}>
                            <Image
                                source={{ uri: item.image.url || image }}
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

        </View>
    );
};


type CardShopHeaderProps = {
    title: string;
    subTitle?: string
}

const CardShopHeader = ({ title, subTitle }: CardShopHeaderProps) => {
    return (
        <View style={styles.cardHeaderContainer}>
            <Text style={styles.cardHeaderTitle}>{title}</Text>
            {subTitle && <Text style={styles.cardHeaderSubTitle}>{subTitle}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        backgroundColor: colors.white,
        height: "100%",
    },
    tabContainer: {
        width: "auto",
    },
    tabIndicator: {
        backgroundColor: colors.black,
        width: 100,
    },
    tabItemTitle: {
        color: colors.black,
        width: "auto",
        fontSize: 14,
    },
    content: {
        width: "100%",
        paddingVertical: 24,
        paddingHorizontal: 20,
        flex: 1
    },
    contentContainer: {
        marginBottom: 24
    },
    contentItemContainer: {
        width: 160
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
        width: 4
    },
    cardHeaderContainer: {
        paddingTop: 4,
        paddingBottom: 24
    },
    cardHeaderTitle: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 4
    },
    cardHeaderSubTitle: {
        opacity: .4,
        fontSize: 20,
        fontWeight: "bold",
    }
});
