import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { PropsWithChildren, useMemo } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ImageBackground,
    Button,
    TouchableOpacity,
} from "react-native";

type HeaderLabelProps = PropsWithChildren & {
    title: string;
    withPadding?: boolean;
};

export const HeaderLabel = ({
    children,
    title,
    withPadding,
}: HeaderLabelProps): JSX.Element => {
    return (
        <View style={[withPadding ? styles.headerContainer : {}]}>
            <Text style={[styles.headerTitle]}>{title}</Text>
            {children}
        </View>
    );
};

const DiscoverList = ({ header: Header }: { header: JSX.Element }) => {
    const imgSrc =
        "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_532,c_limit/e149f474-93de-4fee-9b84-ca4c5a4861f5/nike-just-do-it.png";
    const mockData = [
        {
            title: "Chicago Trousers",
            keyword: "Men's Apparel",
            action: {
                label: "Shop",
                url: "/",
            },
            image: {
                src: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1272,c_limit/5d2eed70-3892-4a25-8a82-127ab934b89b/nike-just-do-it.jpg",
            },
        },
        {
            title: "Newest styles of the season",
            keyword: "Just in",
            action: {
                label: "Check it out",
                url: "/",
            },
            image: {
                src: imgSrc,
            },
        },
        {
            title: "End of Season Sale",
            keyword: "26 Dec - 02 Jan",
            action: {
                label: "Shop Now",
                url: "/",
            },
            image: {
                src: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1824,c_limit/64e147eb-aa17-4b22-9466-c622cb538b47/nike-just-do-it.png",
            },
        },
        {
            title: "Make the Cut!",
            keyword: "The Air Zoom GT Cut 2",
            action: {
                label: "Shop Now",
                url: "/",
            },
            image: {
                src: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1824,c_limit/c8400ef8-76bd-4c9b-9f66-b1af3ae7ba78/nike-just-do-it.png",
            },
        },
    ];

    const navigation = useNavigation()

    const today = useMemo(() => {
        const dateOptions: Intl.DateTimeFormatOptions = {
            weekday: "long",
            month: "long",
            day: "numeric",
        };

        const dateNow = new Date();
        return dateNow.toLocaleDateString("en-US", dateOptions);
    }, []);

    const handlePress = () => {
        navigation.navigate("Shop", {
            screen: "NykeProduct",
            initial: false
        })
    }

    return (
        <FlatList
            data={mockData}
            initialNumToRender={2}
            ListHeaderComponent={
                <Header title="Discover" withPadding>
                    <Text style={styles.textDateNow}>{today}</Text>
                </Header>
            }
            renderItem={({ item }) => {
                return (
                    <View style={styles.discoverCardContainer}>
                        <ImageBackground
                            source={{ uri: item.image.src }}
                            resizeMode="cover"
                            style={styles.imageContainer}
                        >
                            <Text style={styles.textWhite}>{item.keyword}</Text>
                            <Text style={[styles.textTitle, styles.textLg, styles.textWhite]}>
                                {item.title}
                            </Text>
                            <View style={styles.btnContainer}>
                                <TouchableOpacity style={styles.actionBtn} onPress={handlePress}>
                                    <Text style={styles.textBold}>{item.action.label}</Text>
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>
                    </View>
                );
            }}
            keyExtractor={({ keyword }) => keyword}
        />
    );
};

export const Home = () => {
    return (
        <View style={styles.container}>
            <DiscoverList header={HeaderLabel} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    headerContainer: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    textTitle: {
        textTransform: "uppercase",
        paddingVertical: 4,
    },
    textLg: {
        fontSize: 32,
        fontWeight: "800",
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: "500",
    },
    headerLabelContainer: {
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    discoverCardContainer: {
        height: 400,
        minHeight: 400,
        width: "100%",
        flex: 1,
        marginVertical: 4,
    },
    imageContainer: {
        flex: 1,
        padding: 24,
        justifyContent: "flex-end",
    },
    textWhite: {
        color: "#fff",
    },
    textBold: {
        fontWeight: "bold",
    },
    textDateNow: {
        marginTop: 8,
        fontSize: 16,
        color: "#000",
    },
    actionBtn: {
        backgroundColor: "#fff",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    btnContainer: {
        alignItems: "flex-start",
        marginTop: 8,
    },
});
