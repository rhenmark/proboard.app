import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Main } from '../src/Main';

// Stack Navigations

const Stack = createNativeStackNavigator();

export const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Proboard" component={Main} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

