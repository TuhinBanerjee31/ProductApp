import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductHome from './screens/ProductHome';
import ProductDetails from './screens/ProductDetails';

export type RootStackParamList = {
  ProductHome: undefined;
  ProductDetails: {product: Product};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductHome">
        <Stack.Screen
          name="ProductHome"
          component={ProductHome}
          options={{
            title: '',
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{
            title: '',
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
