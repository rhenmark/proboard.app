import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NykeApp } from '../modules/nyke/NykeApp';
import { Main } from '../src/Main';

// Stack Navigations

const Stack = createNativeStackNavigator();

export const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='NykeApp'>
                <Stack.Screen name="Proboard" component={Main} />
                <Stack.Screen name="NykeApp" component={NykeApp} options={{
                    headerShown: false
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

