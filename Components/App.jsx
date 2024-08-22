import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MenuScreen from './MenuScreen';
import CartScreen from './CartScreen';
import ProfileScreen from './ProfileScreen';
import FormScreen1 from './FormScreen1';
import FormScreen2 from './FormScreen2';
import FormScreen3 from './FormScreen3';
import { ContextProvider } from './contexts';
import { FoodItemsContextProvider } from './FoodItemsContext';

const Stack = createStackNavigator();

const App = () => {
  return (
    <ContextProvider>
      <FoodItemsContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Menu" component={MenuScreen} />
            <Stack.Screen name="Cart" component={CartScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="FormScreen1" component={FormScreen1} />
            <Stack.Screen name="FormScreen2" component={FormScreen2} />
            <Stack.Screen name="FormScreen3" component={FormScreen3} />
          </Stack.Navigator>
        </NavigationContainer>
      </FoodItemsContextProvider>
    </ContextProvider>
  );
};

export default App;
