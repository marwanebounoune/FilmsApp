import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Search from '../Components/Search'

const Stack = createStackNavigator();

const AppNavigation = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator>
                  <Stack.Screen
                    name="Rechercher"
                    component={Search}
                    // Si tu veux cacher le header, tu peux enlever le commentaire de la ligne suivante
                    // options={{ headerShown: false, headerMode: 'screen' }}
                  />
                </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
          
    );
  };



export default AppNavigation;