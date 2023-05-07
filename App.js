import {View, Text} from 'react-native';
import { Provider } from 'react-redux';
import React from 'react';
import Welcome from './src/Welcome';
import Modal from './src/Modal';
import Product from './src/Product';
import AxiosAPI from './src/AxiosAPI';
import TodoList from './src/TodoList';
import TodoRedux from './src/TodoRedux';
import ToolkitRedux from './src/ToolkitRedux';
import Listing from './src/Listing';
import AddProduct from './src/AddProduct';

import ProductList from './src/ProductList';
import LocalDataBase from './src/LocalDataBase';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import { mystore } from './src/Redux/store';

const Stack = createStackNavigator();
const App = () => {
  return (
    <Provider store={mystore}>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="ProductList" component={ProductList} options={{ headerShown: false }} />
        <Stack.Screen name="ToolkitRedux" component={ToolkitRedux} />
        <Stack.Screen name="Listing" component={Listing} options={{ headerShown: false }}/>
          <Stack.Screen name="LocalDataBase" component={LocalDataBase} />
          <Stack.Screen name="AddProduct" component={AddProduct} options={{ headerShown: false }} />

          <Stack.Screen name="TodoList" component={TodoList} />
          {/*<Stack.Screen name="Settings" component={Settings} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
