import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Bag, Favourites, Home, Profile, Shop } from "./screens"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet } from 'react-native'

const Tab = createBottomTabNavigator();

interface TabOptionProps {
    label: string,
    iconName: string
}
interface TabBarIconProps {
    color: string;
    size: number;
}
const tabOptions = ({ label, iconName }: TabOptionProps) => {
    return {
        tabBarLabel: label,
        tabBarIcon: ({ color, size }: TabBarIconProps) => (
            <MaterialCommunityIcons name={iconName} color={color} size={size} />
        ),
        headerShown: false,
    }
}

export const NykeApp = () => {
    return (
        <Tab.Navigator initialRouteName="Home" screenOptions={{
            tabBarActiveTintColor: "#000"
        }}>
            <Tab.Screen name="Home" component={Home} options={tabOptions({ label: "Home", iconName: "home-variant" })} />
            <Tab.Screen name="Shop" component={Shop} options={tabOptions({ label: "Store", iconName: "store-search-outline" })} />
            <Tab.Screen name="Favourites" component={Favourites} options={tabOptions({ label: "Favourites", iconName: "cards-heart-outline" })} />
            <Tab.Screen name="Bag" component={Bag} options={tabOptions({ label: "Bag", iconName: "basket-fill" })} />
            <Tab.Screen name="Profile" component={Profile} options={tabOptions({ label: "Profile", iconName: "account" })} />
        </Tab.Navigator>
    )
}
