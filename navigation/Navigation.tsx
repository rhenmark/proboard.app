import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NykeApp } from 'nyke/NykeApp';
import { SplashScreen } from 'nyke/screens/SplashScreen/SplashScreen';
import { useEffect } from 'react';
import { LogBox } from 'react-native';
import { Main } from 'src/Main';

// Stack Navigations

const Stack = createNativeStackNavigator();

export const AppNavigation = () => {

    useEffect(() => {
        LogBox.ignoreAllLogs(true);
    }, [])

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='NykeSplashScreen'>
                <Stack.Screen name="Proboard" component={Main} />
                <Stack.Screen name="NykeSplashScreen" component={SplashScreen} options={() => {
                    return {
                        headerShown: false
                    }
                }} />
                <Stack.Screen name="NykeApp" component={NykeApp} options={({ route }) => {
                    return {
                        headerShown: false
                    }
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

