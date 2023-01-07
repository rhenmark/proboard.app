import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Bag, Favourites, Home, Profile, Shop } from "./screens";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "common/theme/color";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NykeProduct } from "./screens/Product/Product";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

interface TabOptionProps {
    label: string;
    iconName: string;
    showSearch?: boolean;
    hideHeader?: boolean;
}
interface TabBarIconProps {
    color: string;
    size: number;
}

const CustomHeader = () => {
    return <View style={styles.customHeader} />;
};

const SearchBtn = () => {
    return (
        <TouchableOpacity style={styles.search}>
            <MaterialCommunityIcons name="magnify" size={24} />
        </TouchableOpacity>
    );
};

const tabOptions = ({
    label,
    iconName,
    showSearch,
    hideHeader,
}: TabOptionProps) => {
    return {
        tabBarLabel: label,
        tabBarIcon: ({ color, size }: TabBarIconProps) => (
            <MaterialCommunityIcons name={iconName} color={color} size={size} />
        ),
        headerShadowVisible: false,
        headerShown: !hideHeader,
        headerTitle: () => <CustomHeader />,
        headerRight: () => (showSearch ? <SearchBtn /> : null),
    };
};

export const NykeApp = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: colors.black,
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={tabOptions({ label: "Home", iconName: "home-variant" })}
            />
            <Tab.Screen
                name="Shop"
                component={NykeAppShop}
                options={tabOptions({
                    label: "Store",
                    iconName: "store-search-outline",
                    hideHeader: true,
                })}
            />
            <Tab.Screen
                name="Favourites"
                component={Favourites}
                options={tabOptions({
                    label: "Favourites",
                    iconName: "cards-heart-outline",
                })}
            />
            <Tab.Screen
                name="Bag"
                component={Bag}
                options={tabOptions({ label: "Bag", iconName: "basket-fill" })}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={tabOptions({ label: "Profile", iconName: "account" })}
            />
        </Tab.Navigator>
    );
};

export const NykeAppShop = () => {
    return (
        <Stack.Navigator
            screenOptions={({ route }) => {
                return {
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: () =>
                        route.name === "NykeProduct" ? null : <CustomHeader />,
                    headerRight: () => <SearchBtn />,
                    headerTintColor: colors.black,
                    headerBackTitleVisible: false,
                };
            }}
            initialRouteName="ShopMain"
        >
            <Stack.Screen name="ShopMain" component={Shop} />
            <Stack.Screen name="NykeProduct" component={NykeProduct} />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    customHeader: {
        height: 0,
    },
    search: {
        paddingHorizontal: 4,
    },
});
