import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { colors } from "common/theme/color";
import { HeaderLabel } from "../Home";
import { ShopCategory } from "./ShopCategory";
import { Collection } from "./Collection";
import { HorizontalCard } from "./HorizontalCard";
import { data } from "./mock_data";
import { useState } from "react";

export const Shop = () => {
    return (
        <FlatList
            contentContainerStyle={styles.container}
            data={[1]}
            renderItem={() => {
                return <ShopContent key={"1"} />;
            }}
            ListHeaderComponent={
                <View>
                    <HeaderLabel title="Shop" withPadding />
                </View>
            }
            keyExtractor={(_, index) => `${index}`}
            listKey="shop"
        />
    );
};

const shopCategory: Array<string> = ["Men", "Women", "Kids", "Jordan"];
type TabSectionProps = {
    tabs: Array<string>;
    withItemPadding?: boolean;
};
export const TabSection = ({ tabs, withItemPadding }: TabSectionProps) => {
    const [active, setActive] = useState<string>(tabs[0]);

    const handlePress = (item: string) => setActive(item);

    return (
        <ScrollView
            contentContainerStyle={styles.tabSectionContainer}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {tabs.map((item: string, index) => (
                <TouchableOpacity
                    key={item}
                    style={[
                        styles.tabSectionItem,
                        withItemPadding ? styles.tabWidthPadding : {},
                        active === item ? styles.isTabActive : {},
                    ]}
                    onPress={() => handlePress(item)}
                >
                    <Text style={styles.tabTitle}>{item}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

const ShopContent = () => {
    return (
        <View style={styles.shopContainer}>
            <TabSection tabs={shopCategory} />
            <View>
                <ContentsSection />
                <ShopCategory />
                <Collection />
                <HorizontalCard
                    data={data.running}
                    header={{ title: "Find The Right Running Shoes" }}
                />
            </View>
        </View>
    );
};

export const ContentsSection = () => {
    return (
        <HorizontalCard
            data={data.highlights}
            header={{
                title: "This Weeks's Highlights",
                subTitle: "Free shipping on all order",
            }}
        />
    );
};

type CardShopHeaderProps = {
    title: string;
    subTitle?: string;
};

export const CardShopHeader = ({ title, subTitle }: CardShopHeaderProps) => {
    return (
        <View style={styles.cardHeaderContainer}>
            <Text style={styles.cardHeaderTitle}>{title}</Text>
            {subTitle && <Text style={styles.cardHeaderSubTitle}>{subTitle}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        minHeight: "100%",
    },
    shopContainer: {},
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
        flex: 1,
    },
    contentContainer: {
        marginBottom: 24,
        paddingHorizontal: 24,
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
    cardHeaderContainer: {
        padding: 24,
    },
    cardHeaderTitle: {
        fontWeight: "400",
        fontSize: 20,
        marginBottom: 4,
    },
    cardHeaderSubTitle: {
        opacity: 0.4,
        fontSize: 20,
        fontWeight: "400",
    },
    tabSectionContainer: {
        flexDirection: "row",
        minWidth: "100%",
        borderBottomWidth: 0.2,
        borderBottomColor: colors.blackSecondary,
        paddingHorizontal: 20,
        minHeight: 40,
        backgroundColor: colors.white,
    },
    tabSectionItem: {
        paddingVertical: 4,
        paddingBottom: 12,
        marginRight: 24,
    },
    tabWidthPadding: {
        paddingHorizontal: 12,
    },
    isTabActive: {
        borderBottomWidth: 2,
        borderBottomColor: colors.black,
    },
    tabTitle: {
        fontSize: 16,
    },
});
